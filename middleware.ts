import createMiddleware from "next-intl/middleware";
import {
  defaultLocale,
  localeDetection,
  localePrefix,
  locales,
  pathnames,
} from "@/lib/navigation";
import { updateSession } from "@/supabase/middleware";
import { NextRequest } from "next/server";

const i18nMiddleware = createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
  localeDetection,
  pathnames,
});
export async function middleware(request: NextRequest) {
  const response = i18nMiddleware(request);

  // A `response` can now be passed here
  return await updateSession(request, response);
}
// only applies this middleware to files in the app directory
export const config = {
  // matcher: ["/((?!api|_next|.*\\..*).*)"],
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
  // matcher: ["/", "/(ar|en)/:path*"],
};
