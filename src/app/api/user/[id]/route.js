import prisma from "@/db/db";

export async function GET(request, { params }) {
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
