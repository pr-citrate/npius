import prisma from "@/db/db";
import { signJwtAccessToken } from "@/lib/jwt";
import { compare } from "bcrypt";

export async function POST(request) {
  const body = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    return new Response(JSON.stringify(null));
  }

  console.log("signin api", body, user);

  console.log(body.password, user.password);

  if (user && (await compare(body.password, user.password))) {
    const { password, ...userWithoutPassword } = user;
    const accessToken = signJwtAccessToken(userWithoutPassword);
    const result = {
      ...userWithoutPassword,
      accessToken,
    };
    return new Response(JSON.stringify(result));
  } else {
    return new Response(JSON.stringify(null));
  }
}
