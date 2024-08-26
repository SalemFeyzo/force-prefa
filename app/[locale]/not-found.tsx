"use client";
import PublicLayout from "@/components/public-layout";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("default.pages.notFound");
  return (
    <PublicLayout>
      <div>
        <h2>{t("title")}</h2>
      </div>
    </PublicLayout>
  );
}
