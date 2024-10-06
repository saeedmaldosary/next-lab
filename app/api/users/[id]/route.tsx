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
