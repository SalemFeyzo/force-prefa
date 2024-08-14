import { unstable_setRequestLocale } from "next-intl/server";

export default function ContactUs({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <h1>ContactUs</h1>
    </div>
  );
}
