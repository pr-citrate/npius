import jwt from "jsonwebtoken";

if (!process.env.SECRET_KEY) {
  throw new Error("SECRET_KEY is not set");
}

export function signJwtAccessToken(payload, expiresIn = "1h") {
  const secret_key = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secret_key, { expiresIn });
  return token;
}

export function verifyJwt(token) {
  try {
    const secret_key = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, secret_key);
    return decoded;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
