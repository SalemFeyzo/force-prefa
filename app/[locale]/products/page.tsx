import { unstable_setRequestLocale } from "next-intl/server";

export default function Products({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}
