"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateBlog from "@/components/CreateBlog";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/blog/allblogs");
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setBlogs(data);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="lg:w-[80%] mx-auto flex flex-col p-4 md:px-8 py-8 lg:px-0 lg:py-12">
      {/* Header with button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blogs</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Blog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create a new blog</DialogTitle>
            </DialogHeader>
            <CreateBlog onBlogCreated={(blog) => setBlogs([blog, ...blogs])} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {console.log(blogs)}
        {blogs.map((blog) => (
          <Card key={blog._id} className="shadow-md hover:shadow-lg transition">
            <img
              src={blog.image}
              alt={blog.title}
              className="h-40 w-full object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>{blog.title}</CardTitle>
              <p className="text-sm text-gray-500">By {blog.author.email}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{blog.content.slice(0, 100)}...</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
