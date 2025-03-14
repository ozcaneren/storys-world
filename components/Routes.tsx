"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { FaSignature } from "react-icons/fa";

interface RoutesProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  shortcutNumber: number;
}

const Routes = ({ href, label, icon, shortcutNumber }: RoutesProps) => {
  const pathname = usePathname();
  const iconCmp = icon ?? <FaSignature size={16} />;
  
  const isInternal = href.startsWith("/");

  if (!isInternal) {
    return (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-gray-200"
      >
        <span className="inline-flex items-center gap-2 font-medium">
          {iconCmp} {label}
        </span>
        <FaSignature size={16} />
      </a>
    );
  }

  let isActive = false;
  if (pathname?.length > 0) {
    const splittedPathname = pathname.split("/");
    const currentPathname = splittedPathname[1] ?? "";
    isActive = currentPathname === href.split("/")[1];
  }

  return (
    <>
      <div className="w-full">
        <Link
          key={href}
          href={href}
          className={cn(
            "group flex items-center justify-between rounded-lg p-2",
            isActive
              ? "bg-[#3b3b3b] text-white dark:bg-[#6d6f74] dark:text-black"
              : "hover:bg-gray-200 text-[#111827] dark:text-gray-200 dark:hover:bg-[#3d434d]"
          )}
        >
          <span className="flex items-center gap-2">
            {iconCmp}
            <span className={cn("font-medium", isActive && "text-white dark:text-[#ffffff]")}>
              {label}
            </span>
          </span>
          {shortcutNumber && (
            <span
              className={cn(
                "hidden h-5 w-5 place-content-center rounded border border-gray-200 bg-gray-100 dark:bg-gray-400 text-xs font-medium text-gray-500 dark:text-gray-900 dark:border-gray-200 transition-colors duration-200 group-hover:border-gray-300 lg:grid",
                isActive &&
                  "border-gray-600 bg-gray-700 text-gray-200 group-hover:border-gray-600"
              )}
              title={`Shortcut key: ${shortcutNumber}`}
            >
              {shortcutNumber}
            </span>
          )}
        </Link>
      </div>
    </>
  );
};

export default Routes;
