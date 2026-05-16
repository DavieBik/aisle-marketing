import { withAuth } from "next-auth/middleware";
import { isAdminEmail } from "@/lib/admin-emails";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => isAdminEmail(token?.email as string | undefined),
  },
  pages: {
    signIn: "/admin/login",
  },
});

export const config = {
  matcher: ["/admin", "/admin/((?!login|unauthorized).*)"],
};
