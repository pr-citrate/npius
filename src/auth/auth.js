import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import prisma from "@/db/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import login from "@/auth/login";
import CredentialsProvider from "next-auth/providers/credentials";

export async function jwt({ token, user }) {
  // first call of jwt function just user object is provided
  if (user?.email) {
    return { ...token, ...user };
  }

  // on subsequent calls, token is provided and we need to check if it's expired
  if (token?.accessTokenExpires) {
    if (Date.now() / 1000 < token?.accessTokenExpires)
      return { ...token, ...user };
  } else if (token?.refreshToken) return refreshAccessToken(token);

  return { ...token, ...user };
}

export const authOptions = {
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "jwt",
  },

  callbacks: {
    jwt,
  },

  pages: {
    signIn: "/signin",
  },

  providers: [
    CredentialsProvider({
      id: "credentials",

      name: "credentials",

      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      callbacks: {
        async jwt({ token, user }) {
          return { ...token, ...user };
        },

        async session({ session, token }) {
          session.user = token;
          return session;
        },
      },

      async authorize(credentials, request) {
        console.log(credentials, request); // undefined undefined
        // upper this is a error
        const user = await login(credentials?.email, credentials?.password);
        console.log("authjs", user);
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
};
