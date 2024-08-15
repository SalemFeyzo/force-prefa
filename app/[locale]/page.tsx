import FeaturedSection from "@/components/fetured-section";
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
    <div className="flex h-full flex-col gap-2">
      <HeroSection />
      <FeaturedSection />
      <FeaturedSection />
      <FeaturedSection />
      <FeaturedSection />
      <FeaturedSection />
      <FeaturedSection />
    </div>
  );
}
