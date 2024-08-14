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
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-800 text-white h-2/5">
      <div className="h-full ml-2 mr-2">Section</div>
      <div className="h-full ml-2 mr-2">
        <LottieAnimation />
      </div>
    </div>
  );
}
