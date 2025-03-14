"use client";

import { Drawer } from "vaul";
import Link from "next/link";
import { TfiAnchor } from "react-icons/tfi";
import { FaCode } from "react-icons/fa6";
import { RiNeteaseCloudMusicLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className="h-16 flex flex-row justify-between items-center md:hidden bg-[#1f1f1f] border-b border-gray-200 w-full">
      <div className="w-3/4">
        <Drawer.Root shouldScaleBackground>
          <Drawer.Trigger asChild>
            <button className="flex justify-start items-center h-12 mx-4 gap-x-2">
              <div className="flex flex-row justify-center items-center gap-x-1">
                <RiNeteaseCloudMusicLine className="text-[#FF8C42] text-2xl" />
                <span className="text-white">
                  <strong>Storys World </strong>
                </span>
              </div>
            </button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
              <div className="p-4 bg-[#27272a] rounded-t-[10px] flex-1">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                <div className="max-w-md mx-auto">
                  <div className="">
                    <div className="">
                      <div className="flex items-center justify-left my-1 px-5">
                        <img
                          src="/favicon.ico"
                          className="rounded-full h-[60px] w-[60px] object-cover"
                          alt="avatar"
                        />
                        <div className="mx-2">
                          <h1 className="font-medium text-white">Any Name</h1>
                          <p className="text-sm text-gray-200">
                            Any Nick ( like a princess {":) "} )
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center px-3">
                        <ul className="flex flex-col items-start justify-start border-blue-900 gap-y-3 w-full my-4">
                          <li className="w-full">
                            <Drawer.Trigger asChild>
                              <Link
                                href="/"
                                className="flex h-8 justify-between items-center text-sm text-gray-200 hover:bg-gray-200 hover:rounded-md"
                              >
                                <div className="flex justify-center items-center mx-2">
                                  <div>
                                    <TfiAnchor size={16} />
                                  </div>
                                  <div className="font-medium ml-2">
                                    Anasayfa
                                  </div>
                                </div>
                              </Link>
                            </Drawer.Trigger>
                          </li>
                          <li className="w-full">
                            <Drawer.Trigger asChild>
                              <Link
                                href="/masal"
                                className="flex h-8 justify-between items-center text-sm text-gray-200 hover:bg-gray-200 hover:rounded-md"
                              >
                                <div className="flex justify-center items-center mx-2">
                                  <div>
                                    <FaCode size={16} />
                                  </div>
                                  <div className="font-medium ml-2">
                                    Masallar
                                  </div>
                                </div>
                              </Link>
                            </Drawer.Trigger>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </div>
  );
}
