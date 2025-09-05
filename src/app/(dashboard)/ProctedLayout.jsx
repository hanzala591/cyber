"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProctedLayout({ children }) {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("user");
    if (!token) {
      router.replace("/signin");
    }
  }, [router]);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;
  if (!token) return null;

  return <>{children}</>;
}
