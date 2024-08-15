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
    <div className="h-2/5 bg-gray-800 text-white">
      <div className="flex h-full w-full flex-col items-center justify-between md:mx-5 md:flex-row">
        <div className="">Hello World!</div>
        <div>
          <LottieAnimation />
        </div>
      </div>
    </div>
  );
}
