export default async function login(email, password) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  return await res.json();
}
