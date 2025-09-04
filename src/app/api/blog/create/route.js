import connectDb from "@/db/connectionDb";
import cloudinary from "@/lib/cloudinary";
import Blog from "@/models/Blog";
export async function POST(req) {
  await connectDb();
  const formData = await req.formData();
  const title = formData.get("title");
  const content = formData.get("content");
  const author = formData.get("author");
  const image = formData.get("image");
  if (!image) {
    return NextResponse.json(
      { success: false, message: "Image is required" },
      { status: 400 }
    );
  }
  const arrayBuffer = await image.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const uploadRes = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "blogs" }, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      })
      .end(buffer);
  });
  const blog = await Blog.create({
    title,
    content,
    author,
    image: uploadRes.secure_url,
  });
  return Response.json({ success: true, blog });
}
