import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";

const cabin = Cabin({
  subsets: ["latin"],
  variable: '--font-cabin'
});

export const metadata: Metadata = {
  title: "Богдан Романов",
  description: "Это мой сайт портфолио, где представлены множества моих работ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cabin.variable}>
        {children}
      </body>
    </html>
  );
}
