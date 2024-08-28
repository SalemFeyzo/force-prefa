"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import Flag from "react-world-flags";
import { usePathname, useRouter } from "@/lib/navigation";
import { Button } from "@headlessui/react";

const LangMenu = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { id } = useParams();

  const handleChange = (value: "en" | "ar" | "tr") => {
    router.push({ pathname, params: { id: id as string } }, { locale: value });
  };

  return (
    <div className="flex flex-col items-start justify-start gap-2 md:flex-row">
      <Button className="p-1" onClick={() => handleChange("ar")}>
        <div
          className={`flex gap-2 rounded-lg ${locale === "ar" ? "border-2 border-solid border-yellow-500 bg-gray-900" : " "} p-3 hover:bg-gray-700`}
        >
          <Flag code="sa" height={20} width={30} />
          العربية
        </div>
      </Button>
      <Button className="p-1" onClick={() => handleChange("tr")}>
        <div
          className={`${locale === "tr" ? "border-2 border-solid border-yellow-500 bg-gray-900" : " "} flex gap-2 rounded-lg p-3 hover:bg-gray-700`}
        >
          <Flag code="tr" height={20} width={30} />
          Türkçe
        </div>
      </Button>
      <Button
        className={`p-1 ${locale === "en" ? "border-b-2 border-gray-800" : ""}`}
        onClick={() => handleChange("en")}
      >
        <div
          className={`flex gap-2 rounded-lg ${locale === "en" ? "border-2 border-solid border-yellow-500 bg-gray-900" : " "} p-3 hover:bg-gray-700`}
        >
          <Flag code="us" height={20} width={30} />
          English
        </div>
      </Button>
    </div>
  );
};

export default LangMenu;
