import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import MainNav from "./components/MainNav";

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
        <div className="flex min-h-screen">
          <aside className="w-72 border-r border-zinc-800 bg-zinc-900 p-6">
            <MainNav />
          </aside>
          <div className="flex min-w-0 flex-1 flex-col">
            <Header />
            <main className="flex-1 overflow-y-auto p-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
