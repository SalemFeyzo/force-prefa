"use client";

import { useLocale, useTranslations } from "next-intl";
import LottieAnimation from "./lottie-animation";
import Typewriter from "./typewriter";

const HeroSection = () => {
  const locale = useLocale();
  const t = useTranslations("default.hero");
  return (
    <div className="grid h-3/4 grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
      <div className="h-full">
        {t("text")}{" "}
        <Typewriter
          delay={200}
          loop={false}
          text={t("animated-text")}
          dir={locale === "ar" ? "rtl" : "ltr"}
        />
      </div>
      <div className="h-full">
        <LottieAnimation />
      </div>
    </div>
  );
};

export default HeroSection;
