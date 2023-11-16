import prisma from "@/db/db";
import { verifyJwt } from "@/lib/jwt";
verifyJwt;

export async function GET(request, { params }) {
  const accessToken = request.headers.get("authorization");
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 401,
    });
  }
  const id = params.id;
  console.log("id", id);

  const userPosts = await prisma.post.findMany({
    where: {
      authorId: id,
    },
    include: {
      author: {
        select: {
          email: true,
          username: true,
        },
      },
    },
  });

  return new Response(JSON.stringify(userPosts));
}
