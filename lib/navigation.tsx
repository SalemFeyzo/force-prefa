import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import type { Pathnames } from "next-intl/routing";

export const defaultLocale = "en";

export const localeDetection = true;

export const locales = ["en", "ar", "tr"] as const;

export const localePrefix =
  process.env.NEXT_PUBLIC_LOCALE_PREFIX === "never" ? "never" : "as-needed";

export const pathnames = {
  "/": "/",
  "/about": "/about",
  "/admin": "/admin",
  "/admin/projects": "/admin/projects",
  "/admin/products": "/admin/products",
  "/admin/categories": "/admin/categories",
  "/admin/languages": "/admin/languages",
  "/admin/images": "/admin/images",
  "/admin/settings": "/admin/settings",
  "/login": "/login",
  "/contact-us": "/contact-us",
  "/products": "/products",
  "/products/[id]": "/products/[id]",
  "/projects": "/projects",
  "/projects/[id]": "/projects/[id]",
} satisfies Pathnames<typeof locales>;

export const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname,
  permanentRedirect,
} = createLocalizedPathnamesNavigation({
  locales,
  localePrefix,
  pathnames,
});
