import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const uploaded = await cloudinary.uploader.upload(body.image, {
    folder: "properties",
  });

  return NextResponse.json(uploaded);
}