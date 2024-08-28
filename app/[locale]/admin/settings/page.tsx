import AdminLayout from "@/components/admin/admin-layout";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Settings({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <AdminLayout>
      <div>
        <h1>Settings</h1>
      </div>
    </AdminLayout>
  );
}
