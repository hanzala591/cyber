// app/api/signout/route.js
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  cookies().set("token", "", {
    httpOnly: true,
    secure: true,
    maxAge: 0,
    path: "/",
  });

  return NextResponse.json({ message: "Signed out successfully" });
}
