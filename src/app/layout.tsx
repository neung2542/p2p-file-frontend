import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
// import { ThemeProvider } from "@/components/theme-provider"
import CirclePulse from "@/components/CirclePulse";
import Email from "@/components/email";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "P2P File Transfer",
  description: "Transfer files directly between browsers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
         {/* Header */}
       <header className="w-full fixed flex gap-8 items-center justify-end p-4 mx-auto">
        {/* <ThemeToggle /> */}
        <div className="flex">
          <p className="text-xl text-green-500 font-medium">By</p>
          <p className="text-xl text-green-500 font-bold px-2">Corius Dev</p>
        </div>
       <Email />
      </header>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange> */}
        <CirclePulse />
        <Suspense>{children}</Suspense>
        {/* </ThemeProvider> */}
        <Analytics />
      </body>
    </html>
  );
}
