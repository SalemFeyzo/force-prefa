"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import Flag from "react-world-flags";
import { usePathname, useRouter } from "@/lib/navigation";

const LangMenu = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { id } = useParams();

  const handleChange = (value: "en" | "ar" | "tr") => {
    router.push({ pathname, params: { id: id as string } }, { locale: value });
  };

  return (
    <div className="flex flex-row items-center justify-between">
      <div
        className={`cursor-pointer p-1 ${
          locale === "ar" ? "border-b-2 border-gray-800" : ""
        }`}
        onClick={() => handleChange("ar")}
      >
        <Flag code="sa" height={20} width={30} />
      </div>
      <div
        className={`cursor-pointer p-1 ${
          locale === "tr" ? "border-b-2 border-gray-800" : ""
        }`}
        onClick={() => handleChange("tr")}
      >
        <Flag code="tr" height={20} width={30} />
      </div>
      <div
        className={`cursor-pointer p-1 ${
          locale === "en" ? "border-b-2 border-gray-800" : ""
        }`}
        onClick={() => handleChange("en")}
      >
        <Flag code="us" height={20} width={30} />
      </div>
    </div>
  );
};

export default LangMenu;
