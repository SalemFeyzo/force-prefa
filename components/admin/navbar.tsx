"use client";

import { useAppDispatch, useAppSelector } from "@/lib/redux";
import { setIsSidebarCollapsed } from "@/state";
import { LuSettings, LuMenu, LuUser } from "react-icons/lu";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  return (
    <div className="mb-7 flex w-full items-center justify-between">
      {/* LEFT SIDE */}
      <div className="flex items-center justify-between gap-5">
        <button
          className="rounded-full bg-gray-700 px-3 py-3 hover:bg-gray-900"
          onClick={toggleSidebar}
        >
          <LuMenu className="h-4 w-4" />
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-between gap-5">
        <div className="hidden items-center justify-between gap-5 md:flex">
          <div className="flex cursor-pointer items-center gap-3">
            <LuUser width={50} height={50} />
            <span className="font-semibold">Ed Roh</span>
          </div>
        </div>
        <Link href="/settings">
          <LuSettings className="cursor-pointer text-gray-50" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
