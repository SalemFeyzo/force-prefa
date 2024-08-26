"use client";
import PublicLayout from "@/components/public-layout";

// Error boundaries must be Client Components

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <PublicLayout>
          <h2>Something went wrong!</h2>
          <button onClick={() => reset()}>Try again</button>
        </PublicLayout>
      </body>
    </html>
  );
}
