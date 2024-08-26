import LoginForm from "@/components/login-form";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Login({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <div className="h-screen w-screen bg-gray-800 text-gray-100">
      <div className="mx-auto my-auto md:w-[50%]">
        <LoginForm />
      </div>
    </div>
  );
}
