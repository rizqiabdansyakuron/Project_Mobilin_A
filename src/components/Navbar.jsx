import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaSearch, FaBell, FaLanguage } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import clsx from "clsx";
import { useTheme } from "../context/ThemeContext";

const menuGroups = [
  {
    label: "Manajemen",
    items: [
      // { name: "Dashboard", path: "/" },
      { name: "Mobil", path: "/mobil" },
      // { name: "Pesan & Saran", path: "/pesansaran" },
      { name: "Test Drive", path: "/test-drive" },
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
      { name: "Kontak", path: "/admin/kontak" }, // ✅ Tambahan baru
    ],
  },
];

export default function Topbar({ onToggleSidebar }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { isDark } = useTheme();

  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false); // Scroll ke bawah
      } else {
        setShowNavbar(true); // Scroll ke atas
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-transform duration-300",
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900",
        showNavbar ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="hidden md:flex flex-1 max-w-md mx-6 relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cari sesuatu..."
            className={`w-full pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 text-sm ${
              isDark
                ? "bg-gray-800 border-gray-700 focus:ring-blue-500 text-white"
                : "bg-white border-gray-300 focus:ring-blue-500 text-gray-900"
            }`}
          />
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {menuGroups.map((group, idx) => (
            <div key={idx} className="relative group">
              <button
                onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                className="flex items-center gap-1 transition hover:text-blue-600 font-medium"
              >
                {group.label}
                <span className="text-xs mt-0.5">
                  {openDropdown === idx ? "▲" : "▼"}
                </span>
              </button>
              <div
                className={clsx(
                  "absolute left-0 mt-2 w-48 shadow-lg rounded-md py-2 z-50 transition-all duration-200",
                  isDark ? "bg-gray-800" : "bg-white",
                  openDropdown === idx ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                )}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {group.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
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
            <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition">
              <FaBell className="text-lg" />
              <span className="absolute top-0 right-0 text-[10px] bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                9+
              </span>
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition">
              <FaLanguage className="text-lg" />
            </button>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-full transition">
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
          className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
}
