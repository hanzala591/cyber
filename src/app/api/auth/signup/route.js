import { NextResponse } from "next/server";
import { signupSchema } from "@/lib/validation";
import User from "@/models/User";
import connectDb from "@/db/connectionDb";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    await connectDb();
    const body = await req.json();
    const parsed = signupSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0].message },
        { status: 400 }
      );
    }

    const { username, email, password } = parsed.data;
    const isExistedUser = await User.findOne({ email });
    if (isExistedUser) {
      return NextResponse.json(
        { error: "User is Already Existed" },
        { status: 400 }
      );
    }
    const newUser = await User.create({
      username,
      email,
      password,
    });

    if (!newUser) {
      return NextResponse.json(
        { error: "Not Created in DB." },
        { status: 400 }
      );
    }
    const token = jwt.sign(
      {
        _id: newUser._id,
        email: newUser.email,
        role: newUser.role,
      },
      process.env.PRIVATEKEY
    );
    (await cookies()).set("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 3600,
    });
    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
