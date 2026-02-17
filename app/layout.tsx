import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rajat Thakur | Senior Frontend Engineer",
  description:
    "Portfolio of Rajat Thakur - Senior Frontend Engineer specializing in React, Next.js, and TypeScript",
  keywords: ["Frontend Engineer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Rajat Thakur" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
