"use server";

import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/User";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  pages: {
    signIn: "/",
    newUser: "/dashboard",
  },
  callbacks: {
    async signIn({ profile }) {
      connectDB();

      await User.create({
        username: profile.name,
        givenName: profile.given_name,
        email: profile.email,
        image: profile.picture,
      });

      return true;
    },
    async session({ session }) {
      return session;
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/dashboard`;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
