import CredentialsProviders from "next-auth/providers/credentials";

import User from "@/models/user";

import bcrypt from "bcrypt";

import dbConnect from "@/utils/dbConnect";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProviders({
      async authorize(credentials, req) {
        await dbConnect();

        const { email, password } = credentials;

        const user = await User.findOne({ email: email });

        if (!user) {
          throw new Error("User wasnot found!");
        }

        const isPasswordMath = await bcrypt.compare(password, user.password);

        if (!isPasswordMath) {
          throw new Error("password or email mismatch");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token }) => {
      const userByEmail = await User.findOne({ email: token.email });

      userByEmail.password = undefined;
      token.user = userByEmail;

      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/login",
    },
  },
};
