import connectDb from "@/db/connectionDb";
import cloudinary from "@/lib/cloudinary";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb();
    const products = await Product.find({});
    return NextResponse.json({ success: true, products }, { status: 200 });
  } catch (error) {
    console.error("Error fetching Products:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  console.log("Click");
  try {
    await connectDb();
    const formData = await req.formData();

    const name = formData.get("name");
    const description = formData.get("description");
    const price = formData.get("price");
    const category = formData.get("category");
    const stock = formData.get("stock") || 1;
    const rating = formData.get("rating");
    const discount = formData.get("discount");
    const file = formData.get("image");

    if (!file) {
      return NextResponse.json(
        { success: false, message: "Image is required" },
        { status: 400 }
      );
    }
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadRes = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "products" }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        })
        .end(buffer);
    });

    const product = await Product.create({
      name,
      description,
      price,
      category,
      discount,
      stock,
      rating,
      image: uploadRes.secure_url,
    });

    return NextResponse.json({ success: true, product }, { status: 201 });
  } catch (error) {
    console.error("❌ Error creating product:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create product" },
      { status: 500 }
    );
  }
}
