import connectDb from "@/db/connectionDb";
import Blog from "@/models/Blog";
export async function POST(req) {
  await connectDb();
  const body = await req.json();
  console.log(body);
  const blog = await Blog.create(body);
  return Response.json({ success: true, blog });
}
