// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ResponsiveLayout from "./components/ResponsiveLayout";

export const metadata: Metadata = {
  title: "Tareq Ziedan | Frontend Developer",
  description: "Portfolio website of Tareq Ziedan",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white">
        <ResponsiveLayout>{children}</ResponsiveLayout>
      </body>
    </html>
  );
}
