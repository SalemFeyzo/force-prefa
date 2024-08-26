import LoginForm from "@/components/login-form";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Login({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <div className="max-w-4/5">
      <LoginForm />
    </div>
  );
}
