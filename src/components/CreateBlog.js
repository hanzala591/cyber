"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { set } from "mongoose";

export default function CreateBlog({ onBlogCreated }) {
  const [form, setForm] = useState({
    title: "",
    content: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const author = JSON.parse(localStorage.getItem("user"))._id;
    if (author) {
      const blog = {
        ...form,
        author,
      };
      const res = await fetch("/api/blog/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      });

      const data = await res.json();
      if (data.success) {
        onBlogCreated(data.blog);
        setForm({ title: "", content: "", image: "" });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="title"
        placeholder="Blog Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <Textarea
        name="content"
        placeholder="Blog Content"
        value={form.content}
        onChange={handleChange}
        required
      />
      <Input
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
      />

      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}
