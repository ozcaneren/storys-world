import Link from "next/link";
import { Shortcuts } from "@/lib/constants";
import Routes from "./Routes";

export const Sidebar = () => {
  return (
    <div className="hidden md:fixed md:block h-full lg:w-64 xl:w-80 border-r border-gray-600 bg-[#1f1f1f]">
      <div className="">
        <Link href="/">
          <div className="flex items-center justify-center mt-4 px-5 h-16">
            <img
              src="/favicon.ico"
              width={30}
              height={30}
              className="rounded-full object-cover object-center w-[45px] h-[45px]"
              alt="avatar"
            />
            <div className="mx-2">
              <h1 className="text-lg font-medium text-white">
                Storys World
              </h1>
            </div>
          </div>
        </Link>
        <div className="flex items-center justify-center px-3">
          <div className="flex flex-col items-start justify-start gap-y-2 w-full my-4">
            {Shortcuts.map((link, linkIndex) => (
              <Routes
                key={linkIndex}
                href={link.href}
                label={link.label}
                icon={link.icon}
                shortcutNumber={linkIndex + 1}
              />
            ))}
          </div>
        </div>
        <div className="border mx-6 my-1"></div>
      </div>
    </div>
  );
};
