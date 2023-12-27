import fs from "fs";
import path from "path";

export async function GET(response) {
  const { id } = req.query;

  let imagePath = path.resolve("/server/images/user", `${id}.jpg`);

  if (fs.existsSync(imagePath)) {
  } else {
    imagePath = path.resolve("/server/images/user", `default.jpg`);
  }

  fs.readFile(imagePath, (err, data) => {
    if (err) throw err;
    res.setHeader("Content-Type", "image/png");
    res.send(data);
  });
}
