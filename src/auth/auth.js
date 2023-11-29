import GoogleProvider from "@auth/core/providers/google";
import GithubProvider from "@auth/core/providers/github";
import prisma from "@/db/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import login from "@/auth/login";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { toast } from "react-toastify";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  secret: process.env.SECRET,

  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "jwt",
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

      async authorize(credentials, request) {
        console.log(credentials);

        if (!credentials.email || !credentials.password) {
          toast.error("Both email and password are required.");
          return null;
        }

        try {
          const user = await login(credentials?.email, credentials?.password);
          console.log("authjs", user);
          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return user;
          }
        } catch (error) {
          throw new Error(error.response.data.msg);
        }
        return null;
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
});
