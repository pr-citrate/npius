import prisma from "@/db/db";
import { hash } from "bcrypt";

export async function POST(request) {
  const body = await request.json();

  const user = await prisma.user.create({
    data: {
      name: body.username,
      email: body.email,
      password: await hash(body.password, 10),
    },
  });

  const { password, ...result } = user;

  return new Response(JSON.stringify(result));
}
