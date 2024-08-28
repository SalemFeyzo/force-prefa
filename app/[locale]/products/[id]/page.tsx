import { unstable_setRequestLocale } from "next-intl/server";
import PublicLayout from "@/components/public-layout";
import { products } from "@/data/products";

export const revalidate = 60;

export async function generateStaticParams() {
  return products?.map(({ id }) => ({ id: String(id) })) as
    | any[]
    | Promise<any[]>;
}

export default async function Product({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) {
  unstable_setRequestLocale(locale);
  const product = products.find((p) => String(p.id) === id);
  return (
    <PublicLayout>
      <div>
        <h1>Product</h1>
        <pre dir="ltr">{JSON.stringify(product, null, 2)}</pre>
      </div>
    </PublicLayout>
  );
}
