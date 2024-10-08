import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "../../../../prisma/client";

interface Props {
  params: {
    // We can have multi parm routes currently we only have id
    id: string;
  };
}

// If the request remove the data will be cached
export async function GET(request: NextRequest, { params: { id } }: Props) {
  const userId = parseInt(id, 10);

  const user = await prisma.user.findUnique({
    where: { id: userId }
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const userId = parseInt(id, 10);
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: userId }
  });

  if (!user) {
    return NextResponse.json({ error: "User not exist" }, { status: 400 });
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      name: body.name,
      email: body.email
    }
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const userId = parseInt(id, 10);
  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: userId }
  });

  if (!user) {
    return NextResponse.json({ error: "User not exist" }, { status: 400 });
  }

  const deletedUser = await prisma.user.delete({
    where: { id: userId }
  });

  return NextResponse.json(deletedUser);
}
