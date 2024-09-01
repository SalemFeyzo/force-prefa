import createMiddleware from "next-intl/middleware";
import {
  defaultLocale,
  localeDetection,
  localePrefix,
  locales,
  pathnames,
} from "@/lib/navigation";

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
  localeDetection,
  pathnames,
});

// only applies this middleware to files in the app directory
export const config = {
  // matcher: ["/((?!api|_next|.*\\..*).*)"],
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
  // matcher: ["/", "/(ar|en)/:path*"],
};
