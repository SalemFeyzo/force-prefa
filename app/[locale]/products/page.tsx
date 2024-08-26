import { unstable_setRequestLocale } from "next-intl/server";
import { createClient } from "@/supabase/server";
import ProductCard from "@/components/product-card";

export default async function Products({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return (
    <div className="w-full">
      <h1>Products</h1>
      <pre dir="ltr">{JSON.stringify(notes, null, 2)}</pre>
      <div className="grid grid-cols-1 gap-3 p-4 text-gray-900 md:grid-cols-2">
        {notes?.map((note) => <ProductCard key={note.id} product={note} />)}
      </div>
    </div>
  );
}
