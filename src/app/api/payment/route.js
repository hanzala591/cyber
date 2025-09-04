import connectDb from "@/db/connectionDb";
import { orderSchema } from "@/lib/validation";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDb();
    const body = await req.json();
    const parsed = orderSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.format() },
        { status: 400 }
      );
    }

    const { userId, products, address, shipmentMethod, payment, totalprice } =
      parsed.data;

    let paymentStatus = "failed";
    if (payment.cardnumber.startsWith("4")) {
      paymentStatus = "success";
    }

    const newOrder = await Order.create({
      userId,
      products,
      address,
      shipmentMethod,
      payment: {
        ...payment,
        method: "Credit Card",
        status: paymentStatus,
      },
      totalprice,
    });

    return NextResponse.json(
      {
        success: true,
        orderId: newOrder._id,
        paymentStatus,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
