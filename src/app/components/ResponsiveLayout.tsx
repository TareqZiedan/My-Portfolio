"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import MainNav from "./MainNav";
import Header from "./Header";

export default function ResponsiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Avoid SSR mismatch

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Desktop sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-20 lg:flex lg:w-[18rem] lg:flex-col lg:border-r lg:border-zinc-800 lg:bg-zinc-900 lg:p-6">
        <MainNav />
      </aside>

      {/* Mobile sidebar with animation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 left-0 z-30 w-[18rem] border-r border-zinc-800 bg-zinc-900 p-6 shadow-lg lg:hidden"
            >
              <MainNav onLinkClick={toggleSidebar} />
            </motion.aside>

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-20 bg-black lg:hidden"
              onClick={toggleSidebar}
            />
          </>
        )}
      </AnimatePresence>

      {/* Main content area */}
      <div className="flex min-w-0 flex-1 flex-col lg:ml-[18rem]">
        {/* Header with toggle button (mobile only) */}
        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-3 lg:hidden">
          <button
            onClick={toggleSidebar}
            className="ml-2 cursor-pointer text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
          <Header />
        </div>

        {/* Desktop header (optional if different) */}
        <div className="hidden border-b border-zinc-800 bg-zinc-900 px-4 py-3 lg:block">
          <Header />
        </div>

        <main className="flex flex-1 items-center justify-center overflow-y-auto bg-black p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
