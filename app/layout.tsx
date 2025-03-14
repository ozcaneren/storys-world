import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Vaul";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Storys World",
  description: "Storys World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="bg-[#27272a]">
          <Sidebar />
          <Navbar />
          <Suspense fallback={null}>
            <div className="bg-[#27272a] px-4 md:px-0 mx-auto md:max-w-[1440px] w-full md:mx-auto md:pl-64 xl:pl-80 py-8">
              {children}
            </div>
            <Analytics />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
