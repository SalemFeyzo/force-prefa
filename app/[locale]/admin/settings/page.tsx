import AdminLayout from "@/components/admin/admin-layout";
import Header from "@/components/admin/header";
import LangMenu from "@/components/lang-menu";
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
        <Header name="Language:" />
        <LangMenu />
      </div>
    </AdminLayout>
  );
}
