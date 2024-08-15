import HeroSection from "@/components/hero-section";
import LottieAnimation from "@/components/lottie-animation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <HeroSection />
    </div>
  );
}
