"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Link } from "@/lib/navigation";
import NavbarMenu from "./navbar-menu";
import LangMenu from "./lang-menu";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const locale = useLocale();
  useEffect(() => {
    setScreenWidth(window.screen.width);
    return () => {
      //
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
      <div className="flex flex-row justify-between">
        <div>
          <Image
            src="/images/leftUpCorner.svg"
            width={screenWidth < 765 ? 100 : 130}
            height={screenWidth < 765 ? 100 : 130}
            className={`${locale === "ar" && "rotate-90"}`}
            alt="leftUpCorner"
            // placeholder="blur" // "empty" | "blur" | "data:image/..."
            priority={true} // {false} | {true}
          />
        </div>
        <div className="mt-2 md:mr-5 lg:mr-11">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              width={screenWidth < 765 ? "80" : "150"}
              height={screenWidth < 765 ? "80" : "150"}
              alt="Force Prefabricate"
            />
          </Link>
        </div>
      </div>
      <div className="flex content-center justify-between bg-gradient-to-r from-yellow-400 via-yellow-100 to-yellow-400 px-1 py-1">
        <LangMenu />
      </div>
      <NavbarMenu />
    </div>
  );
};

export default Header;
