"use client";
import StoreProvider from "@/lib/redux";

export default function ReduxStoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StoreProvider>{children}</StoreProvider>;
}
