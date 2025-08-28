import { NextResponse } from "next/server";
import { signinSchema } from "@/lib/validation";
import connectDb from "@/db/connectionDb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
export async function POST(req) {
  try {
    await connectDb();
    const body = await req.json();
    const parsed = signinSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0].message },
        { status: 400 }
      );
    }

    const { email, password } = parsed.data;
    const existedUser = await User.findOne({ email });
    if (!existedUser) {
      return NextResponse.json(
        { error: "Please Singup First." },
        { status: 400 }
      );
    }
    const checkPassword = bcrypt.compareSync(password, existedUser.password);
    if (!checkPassword) {
      return NextResponse.json(
        { error: "Please Enter Correct Passowrd." },
        { status: 400 }
      );
    }

    const token = jwt.sign(
      {
        _id: existedUser._id,
        email: existedUser.email,
        role: existedUser.role,
      },
      process.env.PRIVATEKEY
    );
    (await cookies()).set("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 3600,
    });
    const user = {
      _id: existedUser._id,
      email: existedUser.email,
      role: existedUser.role,
    };

    return NextResponse.json(
      { message: "Login successful", user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
