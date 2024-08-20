import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function About({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("default.pages.about");
  return (
    <div className="prose prose-slate prose-invert mx-auto max-w-7xl bg-gradient-to-b from-gray-800 via-gray-950 to-gray-700 px-4 py-3 sm:px-6 lg:px-8">
      <h2>{t("about-us.title")}</h2>
      <p>{t("about-us.p1")}</p>
      <p>{t("about-us.p2")}</p>
      <h2>{t("vision.title")}</h2>
      <p>{t("vision.p")}</p>
      <h2>{t("message.title")}</h2>
      <p>{t("message.p")}</p>
      <h2>{t("goal.title")}</h2>
      <p>{t("goal.p")}</p>
      <h2>{t("quality-policy.title")}</h2>
      <p>{t("quality-policy.p")}</p>
      <h2>{t("services.title")}</h2>
      <p>{t("services.p1")}</p>
      <p>{t("services.p2")}</p>
      <p>{t("services.p3")}</p>
    </div>
  );
}
