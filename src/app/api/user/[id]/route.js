import { prisma } from "@/lib/db";

export async function GET(request, { params }) {
  const id = params.id;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return new Response(JSON.stringify(user), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
}
