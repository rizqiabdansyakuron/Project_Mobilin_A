import { useState } from "react";
import {
  FaFileAlt, FaQuestionCircle, FaUsers, FaBriefcase,
  FaMoon, FaSun, FaChevronLeft, FaChevronRight,
  FaComments, FaCogs
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // path disesuaikan

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const sidebarStyle = isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  const hoverStyle = isDark ? "hover:bg-gray-700" : "hover:bg-gray-200";
  const borderStyle = isDark ? "border-gray-700" : "border-gray-200";

  return (
    <aside className={`min-h-screen ${isCollapsed ? "w-20" : "w-56"} ${sidebarStyle} flex flex-col px-4 py-6 font-poppins transition-all duration-300 shadow-md`}>
      <div className="mb-6 flex justify-between items-center">
        <Link to="/">
          <img src="/LOGO.png" alt="Logo" className={isCollapsed ? "w-8" : "w-28"} />
        </Link>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-lg">
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto">
        <Section title="Menu" isCollapsed={isCollapsed}>
          <NavItem to="/admin/artikel" icon={<FaFileAlt className="text-blue-400" />} label="Artikel" isCollapsed={isCollapsed} hoverStyle={hoverStyle} />
          <NavItem to="/admin/faq" icon={<FaQuestionCircle className="text-green-400" />} label="FAQ" isCollapsed={isCollapsed} hoverStyle={hoverStyle} />
          <NavItem to="/admin/tim" icon={<FaUsers className="text-yellow-400" />} label="Team" isCollapsed={isCollapsed} hoverStyle={hoverStyle} />
          <NavItem to="/admin/lowongan" icon={<FaBriefcase className="text-purple-400" />} label="Lowongan" isCollapsed={isCollapsed} hoverStyle={hoverStyle} />
        </Section>

        <Section title="Support" isCollapsed={isCollapsed}>
          <NavItem to="/support/bantuan" icon={<FaComments className="text-cyan-400" />} label="Bantuan" isCollapsed={isCollapsed} hoverStyle={hoverStyle} />
          <NavItem to="/support/pengaturan" icon={<FaCogs className="text-pink-400" />} label="Pengaturan" isCollapsed={isCollapsed} hoverStyle={hoverStyle} />
        </Section>
      </div>

      <div className={`mt-6 pt-4 border-t ${borderStyle} space-y-2`}>
        <button onClick={toggleTheme} className={`flex items-center gap-2 text-sm ${hoverStyle} px-2 py-1.5 rounded transition`}>
          {isDark ? <FaSun /> : <FaMoon />}
          {!isCollapsed && <span>{isDark ? "Tema Terang" : "Tema Gelap"}</span>}
        </button>
        {!isCollapsed && <p className="text-xs text-gray-400">© 2025 Mobilin</p>}
      </div>
    </aside>
  );
}

function Section({ title, isCollapsed, children }) {
  return (
    <div>
      {!isCollapsed && <p className="text-xs text-gray-400 uppercase mb-2 pl-1">{title}</p>}
      <nav className="space-y-1">{children}</nav>
    </div>
  );
}

function NavItem({ to, icon, label, isCollapsed, hoverStyle }) {
  return (
    <Link to={to} className={`flex items-center gap-3 px-2 py-2 text-sm rounded ${hoverStyle} transition`}>
      {icon}
      {!isCollapsed && <span>{label}</span>}
    </Link>
  );
}
