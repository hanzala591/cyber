import connectDb from "@/db/connectionDb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDb();
    const { id } = params;
    const user = await User.findById(id).select("address");
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, address: user.address },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error fetching address",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDb();
    const { id: addressId } = await params;
    if (!addressId) {
      return NextResponse.json(
        { success: false, message: "Address ID is required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ "address._id": addressId });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Address not found" },
        { status: 404 }
      );
    }

    user.address = user.address.filter(
      (addr) => addr._id.toString() !== addressId
    );

    await user.save();

    return NextResponse.json(
      {
        success: true,
        message: "Address deleted successfully",
        address: user.address,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error deleting address",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
