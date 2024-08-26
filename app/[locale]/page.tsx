import FeaturedSection from "@/components/featured-section";
import HeroSection from "@/components/hero-section";
import PublicLayout from "@/components/public-layout";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <PublicLayout>
      <div className="flex h-full flex-col gap-2">
        <HeroSection />
        <FeaturedSection />
        <FeaturedSection />
        <FeaturedSection />
      </div>
    </PublicLayout>
  );
}
