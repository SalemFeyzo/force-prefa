/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

type Props = {
  params: {
    locale: string;
  };
};

export const size = {
  width: 1200,
  height: 630,
};

export default async function Image({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "default.openGraph" });
  const logoData = await readFile(join(process.cwd(), "/public/logo.png"));
  const logoSrc = Uint8Array.from(logoData).buffer;
  return new ImageResponse(
    (
      <div
        style={{
          marginTop: 0,
          background: "black",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "20px",
          }}
        >
          {t("name")}
        </h1>
        {/* @ts-ignore */}
        <img src={logoSrc} height={300} width={300} alt={t("name")} />
      </div>
    ),
    { ...size },
  );
}
