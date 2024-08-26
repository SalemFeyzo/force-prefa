import NextTopLoader from "nextjs-toploader";
import Header from "./header";
import ScrollTop from "./scroll-top";
import WhatsApp from "./whats-app";
import Footer from "./footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
      <div className="h-screen bg-gradient-to-b from-gray-800 via-gray-500 to-gray-700 text-sm">
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
    </>
  );
}
