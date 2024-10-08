"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useAppDispatch, useAppSelector } from "@/lib/redux";
import { useLocale } from "next-intl";
import { useCallback, useEffect } from "react";
import { setIsSidebarCollapsed } from "@/state";
import { useAuth } from "@clerk/nextjs";
import { db } from "@/lib/instantdb";

function Layout({ children }: { children: React.ReactNode }) {
  const { getToken } = useAuth();
  const locale = useLocale();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const dispatch = useAppDispatch();
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)",
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)",
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)",
  );

  const signInToInstantWithClerkToken = useCallback(async () => {
    // getToken gets the jwt from Clerk for your signed in user.
    const idToken = await getToken();

    if (!idToken) {
      // No jwt, can't sign in to instant
      return;
    }

    // Create a long-lived session with Instant for your clerk user
    // It will look up the user by email or create a new user with
    // the email address in the session token.
    db.auth.signInWithIdToken({
      clientName: "force_prefabrik_auth",
      idToken: idToken,
    });
  }, [getToken]);

  useEffect(() => {
    signInToInstantWithClerkToken();
  }, [signInToInstantWithClerkToken]);

  useEffect(() => {
    if (isMediumDevice || isLargeDevice || isExtraLargeDevice) {
      dispatch(setIsSidebarCollapsed(false));
    } else {
      dispatch(setIsSidebarCollapsed(true));
    }
  }, [isMediumDevice, isLargeDevice, isExtraLargeDevice, dispatch]);

  return (
    <div className="flex min-h-screen w-full bg-gray-800 text-gray-50">
      <Sidebar />
      <main
        className={`flex h-full w-full flex-col px-9 py-7 ${
          isSidebarCollapsed
            ? `${locale === "ar" ? "md:pr-24" : "md:pl-24"}`
            : `${locale === "ar" ? "md:pr-72" : "md:pl-72"}`
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
  return <Layout>{children}</Layout>;
}
