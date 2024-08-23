"use client";

import { useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { Transition } from "@headlessui/react";
import { useLocale } from "next-intl";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import Logo from "./logo";

const NavbarMenu = ({ isVisible }: { isVisible: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("default.navbar");
  const locale = useLocale();
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";

  return (
    <nav
      className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex flex-row items-center justify-between gap-9">
                {isVisible && (
                  <div className="flex flex-row items-center justify-center">
                    <Logo width={60} height={60} />
                    <span className="font-extrabold text-white">
                      {t("name")}
                    </span>
                  </div>
                )}
                <div className="ml-0 flex items-baseline space-x-4">
                  <Link href="/">
                    <div
                      className={`${
                        pathname === "/" ? "bg-gray-700 text-white" : ""
                      } ${
                        locale === "ar" && "ml-4"
                      } rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
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
                      } rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
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
                      } rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
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
                      } rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                    >
                      {t("about")}
                    </div>
                  </Link>
                  <Link href="/contact-us">
                    <div
                      className={`${
                        pathname === "/contact-us"
                          ? "bg-gray-700 text-white"
                          : ""
                      } ${
                        locale === "ar" && "ml-4"
                      } rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                    >
                      {t("contact")}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex w-full flex-row items-center justify-between md:hidden">
            {isVisible && (
              <div className="flex flex-row items-center justify-center">
                <Logo width={60} height={60} />
                <span className="font-extrabold text-white">{t("name")}</span>
              </div>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-yellow-500 hover:bg-gray-800 hover:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-yellow-500"
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
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link href="/">
              <div
                className={`${
                  pathname === "/" ? "bg-gray-700 text-white" : ""
                } block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
              >
                {t("home")}
              </div>
            </Link>
            <Link href="/products">
              <div
                className={`${
                  pathname === "/products" ? "bg-gray-700 text-white" : ""
                } block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
              >
                {t("products")}
              </div>
            </Link>
            <Link href="/projects">
              <div
                className={`${
                  pathname === "/projects" ? "bg-gray-700 text-white" : ""
                } block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
              >
                {t("projects")}
              </div>
            </Link>
            <Link href="/about">
              <div
                className={`${
                  pathname === "/about" ? "bg-gray-700 text-white" : ""
                } block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
              >
                {t("about")}
              </div>
            </Link>
            <Link href="/contact-us">
              <div
                className={`${
                  pathname === "/contact-us" ? "bg-gray-700 text-white" : ""
                } block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
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
