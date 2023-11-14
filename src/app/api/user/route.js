import prisma from "@/db/db";

export async function POST(request) {
  const body = await request.json();

  const user = await prisma.user.create({
    data: {
      name: body.username,
      email: body.email,
      password: body.password,
    },
  });

  const { password, ...result } = user;

  return new Response(JSON.stringify(result));
}
