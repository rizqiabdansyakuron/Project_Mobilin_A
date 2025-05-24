import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaSearch, FaBell, FaLanguage } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import clsx from "clsx";

const menuGroups = [
  {
    label: "Manajemen",
    items: [
      { name: "Dashboard", path: "/" },
      { name: "Mobil", path: "/mobil" },
      { name: "Customers", path: "/customers" },
      { name: "Orders", path: "/orders" },
      { name: "Test Drive", path: "/test-drive" },
      { name: "Pembeli", path: "/pembeli" },
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

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 text-xl p-2 rounded-md focus:outline-none focus:ring"
          ></button>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-6 relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cari sesuatu..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900 dark:text-white"
          />
        </div>

        <nav className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-200 text-sm">
          {menuGroups.map((group, idx) => (
            <div key={idx} className="relative group">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === idx ? null : idx)
                }
                className="transition hover:text-blue-600 font-medium"
              >
                {group.label}
              </button>
              <div
                className={clsx(
                  "absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 z-50",
                  openDropdown === idx ? "block" : "hidden"
                )}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {group.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={clsx(
                      "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",
                      isActive(item.path) && "text-blue-600 font-semibold"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="flex items-center gap-4 pl-4 ml-2 border-l border-gray-300 dark:border-gray-600">
            <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <FaBell className="text-lg" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white rounded-full px-1">
                9+
              </span>
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

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-600 dark:text-gray-300 hover:text-blue-600 text-2xl p-2 rounded-md"
        >
          <FaBars />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 shadow">
          <div className="px-4 py-3 space-y-2">
            {menuGroups.map((group) => (
              <div key={group.label}>
                <p className="font-semibold text-gray-500 dark:text-gray-400 px-2 pt-2">{group.label}</p>
                {group.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      "block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700",
                      isActive(item.path) && "bg-gray-100 dark:bg-gray-700 font-semibold text-blue-600"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
            <div className="flex items-center gap-4 pt-3 border-t border-gray-200 dark:border-gray-600">
              <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <FaBell className="text-lg" />
                <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white rounded-full px-1">
                  9+
                </span>
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
          </div>
        </div>
      )}
    </header>
  );
}
