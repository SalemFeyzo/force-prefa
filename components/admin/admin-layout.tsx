"use client";

import React, { useEffect } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import StoreProvider, { useAppSelector } from "@/lib/redux";

function Layout({ children }: { children: React.ReactNode }) {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  });

  return (
    <div className="flex min-h-screen w-full bg-gray-800 text-gray-50">
      <Sidebar />
      <main
        className={`flex h-full w-full flex-col px-9 py-7 ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <Layout>{children}</Layout>
    </StoreProvider>
  );
}
