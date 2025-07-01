"use client";

import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiUser, FiFolder, FiMail, FiAward, FiDownload } from "react-icons/fi";

const navItems = [
  { label: "About", path: "/", icon: <FiUser /> },
  { label: "Projects", path: "/projects", icon: <FiFolder /> },
  { label: "Contact", path: "/contact", icon: <FiMail /> },
  { label: "Skills", path: "/skills", icon: <FiAward /> },
];

const MainNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="bg-zinc-900 shadow-lg p-6 w-full h-full flex flex-col gap-6 overflow-hidden">
      <ul className="flex flex-col justify-between">
        {navItems.map((item) => (
          <li
            key={item.path}
            onClick={() => router.push(item.path)}
            onMouseEnter={() => setHoveredItem(item.path)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`text-lg h-14 flex items-center transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer px-4 py-2 relative ${
              pathname === item.path
                ? "bg-black text-blue-600"
                : "text-zinc-200 hover:bg-zinc-800 hover:text-blue-600"
            }`}
          >
            {(pathname === item.path || hoveredItem === item.path) && (
              <div className="bg-white mb-2 w-80 h-10 absolute -rotate-4 z-0"></div>
            )}
            <span className="mx-3 z-10 text-xl">{item.icon}</span>
            <p className="ml-4 z-10">{item.label}</p>
          </li>
        ))}
        <li>
          <a
            href="/Tareq Ziedan - Resume - 2025.pdf"
            download
            className="text-lg h-16 flex items-center transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer px-4 py-2 text-zinc-700 dark:text-zinc-200 hover:bg-blue-100 dark:hover:bg-zinc-800 hover:text-blue-600"
            // className="h-16 w-full flex items-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-4 py-2 shadow-md transition-all duration-300"
          >
            <span className="mx-3 text-xl">
              <FiDownload />
            </span>
            <p className="ml-4">Download My Resume</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
