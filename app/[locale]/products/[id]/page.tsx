import { unstable_setRequestLocale } from "next-intl/server";
import { createClient } from "@/supabase/client";
import PublicLayout from "@/components/public-layout";

export const revalidate = 60;

export async function generateStaticParams() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select("id");
  return notes?.map(({ id }) => ({ id: String(id) })) as any[] | Promise<any[]>;
}

export default async function Product({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) {
  unstable_setRequestLocale(locale);
  const supabase = createClient();
  const { data: note } = await supabase.from("notes").select().eq("id", id);
  return (
    <PublicLayout>
      <div>
        <h1>Product</h1>
        <pre dir="ltr">{JSON.stringify(note, null, 2)}</pre>
      </div>
    </PublicLayout>
  );
}
