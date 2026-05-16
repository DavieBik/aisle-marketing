import { getAdminEmails } from "@/lib/admin-emails";
import type { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export const authOptions: NextAuthOptions = {
  providers: [
    EmailProvider({
      from: "The Aisle App <hello@theaisleapp.com>",
      async sendVerificationRequest({ identifier, url }) {
        if (!resend) {
          console.info("[auth] magic link for", identifier, url);
          return;
        }
        await resend.emails.send({
          from: "The Aisle App <hello@theaisleapp.com>",
          to: identifier,
          subject: "Sign in to The Aisle App admin",
          html: `<p>Click the link below to sign in to the marketing admin. This link expires in 24 hours.</p><p><a href="${url}">Sign in</a></p>`,
          text: `Sign in to The Aisle App admin: ${url}`,
        });
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/unauthorized",
  },
  callbacks: {
    async signIn({ user }) {
      const email = user.email?.toLowerCase();
      if (!email) return false;
      return getAdminEmails().includes(email);
    },
    async jwt({ token, user }) {
      if (user?.email) {
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.email) {
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
