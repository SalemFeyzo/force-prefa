"use client";

import { useAppDispatch, useAppSelector } from "@/lib/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  LuCircleDollarSign,
  LuSlidersHorizontal,
  LuUser,
  LuClipboard,
  LuArchive,
  LuHome,
  LuX,
} from "react-icons/lu";
import { IconType } from "react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "../logo";

interface SidebarLinkProps {
  href: string;
  icon: IconType;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`flex cursor-pointer items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
        } gap-3 transition-colors hover:bg-gray-900 hover:text-gray-300 ${
          isActive ? "bg-gray-950 text-white" : ""
        } }`}
      >
        <Icon className="h-6 w-6 !text-gray-50" />

        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-50`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  return (
    <div
      className={`bg fixed flex flex-col ${
        isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
      } z-40 h-full overflow-hidden bg-gray-700 shadow-md transition-all duration-300`}
    >
      {/* TOP LOGO */}
      <div
        className={`mx-2 flex items-center justify-between gap-2 pt-8 md:justify-normal`}
      >
        <Logo width={50} height={50} />
        <h1
          className={`${
            isSidebarCollapsed ? "hidden" : "block"
          } text-sm font-extrabold`}
        >
          FORCE PREFABRIK
        </h1>

        <button
          className="rounded-full bg-gray-900 px-3 py-3 hover:bg-gray-800 md:hidden"
          onClick={toggleSidebar}
        >
          <LuX className="h-4 w-4" />
        </button>
      </div>

      {/* LINKS */}
      <div className="mt-8 flex-grow">
        <SidebarLink
          href="/admin"
          icon={LuHome}
          label="Home"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/admin/projects"
          icon={LuArchive}
          label="Projects"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/admin/products"
          icon={LuClipboard}
          label="Products"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/users"
          icon={LuUser}
          label="Users"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={LuSlidersHorizontal}
          label="Settings"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/expenses"
          icon={LuCircleDollarSign}
          label="Expenses"
          isCollapsed={isSidebarCollapsed}
        />
      </div>

      {/* FOOTER */}
      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs text-gray-500">
          &copy; 2024 FORCE PREFABRIK
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
