import { unstable_setRequestLocale } from "next-intl/server";
import { createClient } from "@/supabase/server";

export default async function Products({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return (
    <div>
      <h1>Products</h1>
      <pre dir="ltr">{JSON.stringify(notes, null, 2)}</pre>
    </div>
  );
}
