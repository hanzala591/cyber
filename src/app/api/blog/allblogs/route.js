import connectDb from "@/db/connectionDb";
import Blog from "@/models/Blog";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectDb();
    const blogs = await Blog.find().populate("author", "email");
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
      }
    );
  }
};
