import AdminLayout from "@/components/admin/admin-layout";
import TodoApp from "@/components/admin/todo-app";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Admin({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <AdminLayout>
      <div>
        <h1>Admin</h1>
        <TodoApp />
      </div>
    </AdminLayout>
  );
}
