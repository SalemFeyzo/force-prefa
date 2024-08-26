import PublicLayout from "@/components/public-layout";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Project({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <PublicLayout>
      <div>
        <h1>Project</h1>
      </div>
    </PublicLayout>
  );
}
