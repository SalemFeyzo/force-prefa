import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

import {
  defaultLocale,
  localeDetection,
  localePrefix,
  locales,
  pathnames,
} from "@/lib/navigation";

const intlMiddleware = createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
  localeDetection,
  pathnames,
});
const isProtectedRoute = createRouteMatcher([
  "/:locale/admin(.*)",
  "/admin(.*)",
]);
// 👉 Create a type to define the metadata
type UserMetadata = {
  role?: "admin" | "customer";
};

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
    // 👉 Use `auth()` to get the sessionClaims, which includes the public metadata
    const { sessionClaims } = auth();
    const { role } = sessionClaims?.metadata as UserMetadata;
    if (role !== "admin") {
      // 👉 If the user is not a beta user, redirect them to the waitlist
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  return intlMiddleware(req);
});

// only applies this middleware to files in the app directory
export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
