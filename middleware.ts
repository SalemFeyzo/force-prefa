import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";
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

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }
  return intlMiddleware(req);
});

// only applies this middleware to files in the app directory
export const config = {
  // matcher: ["/((?!api|_next|.*\\..*).*)"],
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
  // matcher: ["/", "/(ar|en)/:path*"],
};
