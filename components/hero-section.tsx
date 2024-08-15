"use client";

import { useLocale, useTranslations } from "next-intl";
import LottieAnimation from "./lottie-animation";
import Typewriter from "./typewriter";

const HeroSection = () => {
  const locale = useLocale();
  const t = useTranslations("default.hero");
  return (
    <div className="h-full bg-gray-800 text-white">
      <div className="flex h-full w-full flex-col items-center justify-between md:mx-5 md:flex-row">
        <div>
          <div>
            {t("text")}{" "}
            <Typewriter
              delay={200}
              loop={false}
              text={t("animated-text")}
              dir={locale === "ar" ? "rtl" : "ltr"}
            />
          </div>
        </div>
        <div>
          <LottieAnimation />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
