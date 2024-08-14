import { unstable_setRequestLocale } from "next-intl/server";

export default function Product({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <h1>Product</h1>
    </div>
  );
}
