"use client";

import { useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { Transition } from "@headlessui/react";
import { useLocale } from "next-intl";
import { pathnames, Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";

const NavbarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("default.navbar");
  const locale = useLocale();
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";

  return (
    <nav
      className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 "
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-0 flex items-baseline space-x-4">
                <Link href="/">
                  <div
                    className={`${
                      pathname === "/" ? "bg-gray-700 text-white" : ""
                    } ${
                      locale === "ar" && "ml-4"
                    } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    {t("home")}
                  </div>
                </Link>
                <Link href="/products">
                  <div
                    className={`${
                      pathname === "/products" ? "bg-gray-700 text-white" : ""
                    } ${
                      locale === "ar" && "ml-4"
                    } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    {t("products")}
                  </div>
                </Link>
                <Link href="/projects">
                  <div
                    className={`${
                      pathname === "/projects" ? "bg-gray-700 text-white" : ""
                    } ${
                      locale === "ar" && "ml-4"
                    } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    {t("projects")}
                  </div>
                </Link>
                <Link href="/about">
                  <div
                    className={`${
                      pathname === "/about" ? "bg-gray-700 text-white" : ""
                    } ${
                      locale === "ar" && "ml-4"
                    } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    {t("about")}
                  </div>
                </Link>
                <Link href="/contact-us">
                  <div
                    className={`${
                      pathname === "/contact-us" ? "bg-gray-700 text-white" : ""
                    } ${
                      locale === "ar" && "ml-4"
                    } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    {t("contact")}
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-yellow-500 hover:text-yellow-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-500 focus:ring-yellow-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <div
                className={`${
                  pathname === "/" ? "bg-gray-700 text-white" : ""
                } text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
              >
                {t("home")}
              </div>
            </Link>
            <Link href="/products">
              <div
                className={`${
                  pathname === "/products" ? "bg-gray-700 text-white" : ""
                } text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
              >
                {t("products")}
              </div>
            </Link>
            <Link href="/projects">
              <div
                className={`${
                  pathname === "/projects" ? "bg-gray-700 text-white" : ""
                } text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
              >
                {t("projects")}
              </div>
            </Link>
            <Link href="/about">
              <div
                className={`${
                  pathname === "/about" ? "bg-gray-700 text-white" : ""
                } text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
              >
                {t("about")}
              </div>
            </Link>
            <Link href="/contact-us">
              <div
                className={`${
                  pathname === "/contact-us" ? "bg-gray-700 text-white" : ""
                } text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
              >
                {t("contact")}
              </div>
            </Link>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default NavbarMenu;
