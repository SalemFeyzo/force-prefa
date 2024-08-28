import AdminLayout from "@/components/admin/admin-layout";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Projects({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <AdminLayout>
      <div>
        <h1>Projects</h1>
      </div>
    </AdminLayout>
  );
}
