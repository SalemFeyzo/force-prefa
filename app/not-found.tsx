"use client";

import PublicLayout from "@/components/public-layout";
import Error from "next/error";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <PublicLayout>
          <Error statusCode={404} />
        </PublicLayout>
      </body>
    </html>
  );
}
