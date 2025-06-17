import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaSearch, FaBell, FaLanguage } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import clsx from "clsx";
import { useTheme } from "../context/ThemeContext"; // path disesuaikan

const menuGroups = [
  {
    label: "Manajemen",
    items: [
      { name: "Dashboard", path: "/" },
      { name: "Mobil", path: "/mobil" },
      { name: "Pesan & Saran", path: "/pesansaran" },
      { name: "Test Drive", path: "/test-drive" },
      { name: "Pembeli", path: "/pembeli" },
      { name: "Lokasi", path: "/lokasi" },
    ],
  },
  {
    label: "Konten",
    items: [
      { name: "Artikel", path: "/admin/artikel" },
      { name: "FAQ", path: "/admin/faq" },
      { name: "Tim", path: "/admin/tim" },
      { name: "Lowongan", path: "/admin/lowongan" },
    ],
  },
];

export default function Topbar({ onToggleSidebar }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { isDark } = useTheme();

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`top-0 z-50 shadow-md border-b ${isDark ? "bg-gray-900 text-white border-gray-700" : "bg-white text-gray-900 border-gray-200"}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <button onClick={onToggleSidebar} className="text-xl p-2 rounded-md focus:outline-none" />

        <div className="hidden md:flex flex-1 max-w-md mx-6 relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cari sesuatu..."
            className={`w-full pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 text-sm ${
              isDark
                ? "bg-gray-800 border-gray-600 focus:ring-blue-500 text-white"
                : "bg-white border-gray-300 focus:ring-blue-500 text-gray-900"
            }`}
          />
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {menuGroups.map((group, idx) => (
            <div key={idx} className="relative group">
              <button
                onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                className="transition hover:text-blue-600 font-medium"
              >
                {group.label}
              </button>
              <div className={clsx(
                "absolute left-0 mt-2 w-48 shadow-lg rounded-md py-2 z-50",
                isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900",
                openDropdown === idx ? "block" : "hidden"
              )} onMouseLeave={() => setOpenDropdown(null)}>
                {group.items.map((item) => (
                  <Link key={item.path} to={item.path}
                    className={clsx(
                      "block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700",
                      isActive(item.path) && "text-blue-600 font-semibold"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="flex items-center gap-4 pl-4 ml-2">
            <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <FaBell className="text-lg" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white rounded-full px-1">9+</span>
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <FaLanguage className="text-lg" />
            </button>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="text-right">
                <p className="text-sm font-semibold">Rizqi Abdan</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <IoPerson />
              </div>
            </div>
          </div>
        </nav>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-2xl p-2 rounded-md">
          <FaBars />
        </button>
      </div>
    </header>
  );
}
