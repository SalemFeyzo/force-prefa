"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
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
        <Image
          src="/images/ar.svg"
          width={25}
          height={13}
          className="object-cover"
          alt="ar"
        />
      </div>
      <div
        className={`cursor-pointer p-1 ${
          locale === "tr" ? "border-b-2 border-gray-800" : ""
        }`}
        onClick={() => handleChange("tr")}
      >
        <Image
          src="/images/tr.svg"
          width={25}
          height={13}
          className="object-cover"
          alt="tr"
        />
      </div>
      <div
        className={`cursor-pointer p-1 ${
          locale === "en" ? "border-b-2 border-gray-800" : ""
        }`}
        onClick={() => handleChange("en")}
      >
        <Image
          src="/images/en.svg"
          width={25}
          height={20}
          className="object-cover"
          alt="en"
        />
      </div>
    </div>
  );
};

export default LangMenu;
