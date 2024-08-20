import FeaturedSection from "@/components/featured-section";
import HeroSection from "@/components/hero-section";
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
    </div>
  );
}
