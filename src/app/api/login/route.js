import prisma from "@/db/db";

export async function POST(request) {
  const body = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  console.log("signin api", user);

  console.log(body.password, user.password);

  if (user && body.password === user.password) {
    const { password, ...userWithoutPassword } = user;
    console.log(userWithoutPassword);
    return new Response(JSON.stringify(userWithoutPassword));
  } else {
    return new Response(JSON.stringify(null));
  }
}
