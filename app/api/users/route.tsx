import { NextRequest, NextResponse } from "next/server";

// If the request remove the data will be cached
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Saeed" },
    { id: 2, name: "Mohammed" }
  ]);
}
