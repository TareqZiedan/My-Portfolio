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

type MainNavProps = {
  onLinkClick?: () => void;
};

const MainNav = ({ onLinkClick }: MainNavProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleNavClick = (path: string) => {
    router.push(path);
    onLinkClick?.(); // <-- Close sidebar if handler exists
  };

  return (
    <nav className="flex h-full w-full flex-col gap-6 overflow-x-hidden overflow-y-auto bg-zinc-900 p-6 shadow-lg">
      <ul className="flex flex-col justify-between">
        {navItems.map((item) => (
          <li
            key={item.path}
            onClick={() => handleNavClick(item.path)}
            onMouseEnter={() => setHoveredItem(item.path)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`relative flex h-14 cursor-pointer items-center px-4 py-2 text-lg font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none ${
              pathname === item.path
                ? "bg-black text-blue-600"
                : "text-zinc-200 hover:bg-black hover:text-blue-600"
            }`}
          >
            {(pathname === item.path || hoveredItem === item.path) && (
              <div className="absolute z-0 mb-2 h-10 w-80 -rotate-4 bg-white"></div>
            )}
            <span className="z-10 mx-3 text-xl">{item.icon}</span>
            <p className="z-10 ml-4">{item.label}</p>
          </li>
        ))}
        <li
          onMouseEnter={() => setHoveredItem("Resume")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <a
            href="/Tareq Ziedan - Resume - 2025.pdf"
            download
            className="relative flex h-14 cursor-pointer items-center bg-zinc-900 px-4 py-2 text-lg font-medium text-zinc-200 transition-colors hover:bg-black hover:text-blue-600 focus:ring-0 focus:outline-none"
          >
            {hoveredItem === "Resume" && (
              <div className="absolute z-0 mb-2 h-10 w-80 -rotate-4 bg-white"></div>
            )}
            <span className="z-10 mx-3 text-xl">
              <FiDownload />
            </span>
            <p className="z-10 ml-4">Download My Resume</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
