import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { Providers } from "@/utils/chakraProvider";

const myFont = localFont({
  src: [
    {
      path: "./_fonts/NEXON-Lv1-Gothic-OTF.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_fonts/NEXON-Lv1-Gothic-OTF-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-nexon",
});

export const metadata: Metadata = {
  title: "멋킷리스트",
  description: "먹고 싶은 음식 저장하여 뿌시기",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <head>
        <link rel="apple-touch-icon" href="/assets/ios180.png" />
        <link rel="shortcut icon" href="/assets/android192.png" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
