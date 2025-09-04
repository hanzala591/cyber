import { NextResponse } from "next/server";
import Order from "@/models/Order";
import connectDb from "@/db/connectionDb";

export async function POST(request) {
  try {
    await connectDb();
    const body = await request.json();
    const newOrder = await Order.create(body);

    return NextResponse.json(
      { success: true, order: newOrder },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Order creation failed" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDb();
    
    const orders = await Order.find({})
      .populate("user", "name email")
      .populate("products.product", "name price");

    return NextResponse.json({ success: true, orders }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Fetching orders failed" },
      { status: 500 }
    );
  }
}
