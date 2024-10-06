import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    // We can have multi parm routes currently we only have id
    id: number;
  };
}

// If the request remove the data will be cached
export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: id, name: "Mosh" });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  if (id > 10) {
    return NextResponse.json({ error: "User is not found" }, { status: 404 });
  }
  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  if (id > 10) {
    return NextResponse.json({ error: "User is not found" }, { status: 404 });
  }
  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  return NextResponse.json({});
}
