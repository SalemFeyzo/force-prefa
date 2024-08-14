import { unstable_setRequestLocale } from "next-intl/server";

export default function Projects({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <h1>Projects</h1>
    </div>
  );
}
