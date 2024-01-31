import { prisma } from "@/lib/db";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const searchQuery = "*" + query.replace(/\*+$/, "") + "*";

  const users = await prisma.user.findMany({
    where: {
      name: {
        search: searchQuery,
      },
      koreanName: {
        search: searchQuery,
      },
    },
    take: 5,
  });

  return new Response(JSON.stringify(users), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
