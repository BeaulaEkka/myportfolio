"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio website",
  description: "My website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider enableSystem="true" attribute="class">
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
