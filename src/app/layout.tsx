import type { Metadata } from "next";
import "./globals.css";
import MainNav from "@/components/MainNav";

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <aside className="w-72 bg-gray-100 dark:bg-black p-6">
            <MainNav />
          </aside>
          <div className="flex-1 flex flex-col justify-between">
            <header className="h-14 w-full bg-zinc-900 flex items-center px-4">
              {/* Add your header content here */}
            </header>
            <main className="flex-1 p-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
