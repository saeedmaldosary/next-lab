import { NextRequest, NextResponse } from "next/server";

// If the request removed the data will be cached
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Saeed" },
    { id: 2, name: "Mohammed" }
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
