import { unstable_setRequestLocale } from "next-intl/server";

export default function Admin({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <h1>Admin</h1>
    </div>
  );
}
