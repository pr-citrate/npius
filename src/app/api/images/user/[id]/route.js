import fs from "fs/promises";
import path from "path";

export async function GET(request, { params }) {
  const id = params.id;

  let imagePath = path.resolve("server/images/user", `${id}.webp`);

  try {
    await fs.access(imagePath).catch(async () => {
      imagePath = path.resolve("server/images/user", "default.webp");
    });

    const data = await fs.readFile(imagePath);
    return new Response(data, {
      headers: {
        "Content-Type": "image/webp",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error reading the file" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
