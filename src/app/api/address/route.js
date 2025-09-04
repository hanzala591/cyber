import connectDb from "@/db/connectionDb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDb();
    const { userId, city, street, number } = await req.json();

    if (!userId || !city || !street || !number) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    user.address.push({ city, street, number });
    await user.save();

    return NextResponse.json(
      {
        success: true,
        message: "Address added successfully",
        address: user.address,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error adding address", error: error.message },
      { status: 500 }
    );
  }
}
