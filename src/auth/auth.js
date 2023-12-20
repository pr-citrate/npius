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
  debug: true,
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
    signOut: "/signout",
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
        try {
          console.log("authjs credential");
          const user = await login(credentials?.email, credentials?.password);
          console.log("authjs", user);
          if (user) {
            return user;
          }
        } catch (error) {
          throw new Error(error.response.data.msg);
        }
        return null;
      },
    }),

    // {
    //   id: "sendgrid",
    //   type: "email",
    //   async sendVerificationRequest({ identifier: email, url }) {
    //     const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    //       // The body format will vary depending on provider, please see their documentation
    //       // for further details.
    //       body: JSON.stringify({
    //         personalizations: [{ to: [{ email }] }],
    //         from: { email: "noreply@company.com" },
    //         subject: "Sign in to Your page",
    //         content: [
    //           {
    //             type: "text/plain",
    //             value: `Please click here to authenticate - ${url}`,
    //           },
    //         ],
    //       }),
    //       headers: {
    //         // Authentication will also vary from provider to provider, please see their docs.
    //         Authorization: `Bearer ${process.env.SENDGRID_API}`,
    //         "Content-Type": "application/json",
    //       },
    //       method: "POST",
    //     });

    //     if (!response.ok) {
    //       const { errors } = await response.json();
    //       throw new Error(JSON.stringify(errors));
    //     }
    //   },
    // },

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
