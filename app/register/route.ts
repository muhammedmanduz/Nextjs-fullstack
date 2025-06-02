import bcrypt from "bcryptjs";
import prisma from "@/libs/prismadb";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new Response("Name, email and password are required", {
      status: 400,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return new Response("User created", { status: 201 });
}
