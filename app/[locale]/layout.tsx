import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import {
  getFormatter,
  getNow,
  getTimeZone,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import NextTopLoader from "nextjs-toploader";

import { locales } from "@/lib/navigation";
import Header from "@/components/header";
import ScrollTop from "@/components/scroll-top";
import Footer from "@/components/footer";
import WhatsApp from "@/components/whats-app";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: "default.rootLayoutMetadata",
  });
  const formatter = await getFormatter({ locale });
  const now = await getNow({ locale });
  const timeZone = await getTimeZone({ locale });

  return {
    metadataBase: new URL(
      process.env.SITE_URL ? process.env.SITE_URL : "http://localhost:3000/",
    ),
    title: t("title"),
    description: t("description"),
    twitter: {
      card: "summary_large_image",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: t("name"),
      url: new URL(
        process.env.SITE_URL ? process.env.SITE_URL : "http://localhost:3000/",
      ),
      images: [
        {
          url: new URL(
            process.env.SITE_URL
              ? process.env.SITE_URL + "logo.png"
              : "http://localhost:3000/logo.png",
          ),
          width: 800,
          height: 600,
          alt: t("name"),
        },
      ],
      locale: locale,
      type: "website",
    },
    other: {
      currentYear: formatter.dateTime(now, { year: "numeric" }),
      timeZone: timeZone || "N/A",
    },
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = useMessages();
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={locale === "ar" ? cairo.className : inter.className}>
          <NextTopLoader
            color="#facc15"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
          />
          <div className="bg-gradient-to-b from-gray-800 via-gray-500 to-gray-700 text-sm">
            <div className="bg-main-background-image h-full w-full bg-cover bg-center bg-no-repeat">
              <Header />
              <main className="bg-gray-800 text-gray-50">
                <div className="h-full">{children}</div>
              </main>
              <ScrollTop />
              <WhatsApp />
              <Footer />
            </div>
          </div>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
