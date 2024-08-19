/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "next/og";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

import { locales } from "@/lib/navigation";

type Props = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "default.openGraph" });
  const logoData = await readFile(join(process.cwd(), "/assets/logo.png"));
  const logoSrc = Uint8Array.from(logoData).buffer;

  const text =
    locale === "ar" ? t("name").split(" ").reverse().join(" ") : t("name");

  return new ImageResponse(
    (
      <div
        style={{
          marginTop: 0,
          fontSize: "20px",
          background: "#1a202c",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* @ts-ignore */}
        <img src={logoSrc} height={300} width={300} alt={t("name")} />
        <h1 tw="font-mono font-bold	">{text}</h1>
      </div>
    ),
    {
      ...size,
    },
  );
}
