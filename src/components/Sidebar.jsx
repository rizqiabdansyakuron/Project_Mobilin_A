import { useState } from "react";
import { FaGears } from "react-icons/fa6";
import {
  FaFileAlt, FaQuestionCircle, FaUsers, FaBriefcase,
  FaMoon, FaSun, FaChevronLeft, FaChevronRight,
  FaComments, FaCogs, FaTachometerAlt, FaWindowMaximize,
  FaFileAlt as FarFileAlt, FaTh, FaPalette, FaChartBar
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const sidebarStyle = isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  const hoverStyle = isDark ? "hover:bg-gray-700" : "hover:bg-gray-200";
  const borderStyle = isDark ? "border-gray-700" : "border-gray-200";
  const textColor = isDark ? "text-gray-400" : "text-gray-500";

  return (
    <aside className={`min-h-screen ${isCollapsed ? "w-20" : "w-56"} ${sidebarStyle} flex flex-col px-4 py-6 font-poppins transition-all duration-300 shadow-md border-r ${borderStyle}`}>
      {/* Header with Logo */}
      <div className={`mb-6 flex justify-between items-center ${isCollapsed ? 'px-0' : 'px-2'}`}>
        <Link to="/">
         <Link to="/">
          <img src="/LOGO.png" alt="Logo" className={isCollapsed ? "w-8" : "w-28"} />
        </Link>
          
        </Link>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto">
        {/* Dashboard Link */}
        <NavItem 
          to="/dashboard" 
          icon={<FaTachometerAlt className={isDark ? "text-gray-300" : "text-gray-500"} />} 
          label="Dashboard" 
          isCollapsed={isCollapsed} 
          hoverStyle={hoverStyle} 
        />

        {/* Features Section */}
        <Section title="Features" isCollapsed={isCollapsed} isDark={isDark}>
          <NavItem 
            to="/bootstrap-ui" 
            icon={<FaWindowMaximize className={textColor} />} 
            label="Bootstrap UI" 
            isCollapsed={isCollapsed} 
            hoverStyle={hoverStyle} 
            showChevron
          />
          <NavItem 
            to="/forms" 
            icon={<FarFileAlt className={textColor} />} 
            label="Forms" 
            isCollapsed={isCollapsed} 
            hoverStyle={hoverStyle} 
            showChevron
          />
          <NavItem 
            to="/tables" 
            icon={<FaTh className={textColor} />} 
            label="Tables" 
            isCollapsed={isCollapsed} 
            hoverStyle={hoverStyle} 
            showChevron
          />
          <NavItem 
            to="/ui-colors" 
            icon={<FaPalette className={textColor} />} 
            label="UI Colors" 
            isCollapsed={isCollapsed} 
            hoverStyle={hoverStyle} 
            showChevron
          />
        </Section>

        {/* Original Menu Section */}
        <Section title="Menu" isCollapsed={isCollapsed} isDark={isDark}>
          <NavItem to="/admin/artikel" icon={<FaFileAlt className="text-blue-400" />} label="Artikel" isCollapsed={isCollapsed} hoverStyle={hoverStyle} />
          <NavItem to="/admin/faq" icon={<FaQuestionCircle className="text-green-400" />} label="FAQ" isCollapsed={isCollapsed} hoverStyle={hoverStyle} />
          <NavItem to="/admin/tim" icon={<FaUsers className="text-yellow-400" />} label="Team" isCollapsed={isCollapsed} hoverStyle={hoverStyle} />
          <NavItem to="/admin/lowongan" icon={<FaBriefcase className="text-purple-400" />} label="Lowongan" isCollapsed={isCollapsed} hoverStyle={hoverStyle} />
        </Section>

        {/* Examples Section */}
        <Section title="Examples" isCollapsed={isCollapsed} isDark={isDark}>
          <NavItem 
            to="/pages" 
            icon={<FaWindowMaximize className={textColor} />} 
            label="Pages" 
            isCollapsed={isCollapsed} 
            hoverStyle={hoverStyle} 
            showChevron
          />
          <NavItem 
            to="/charts" 
            icon={<FaChartBar className={textColor} />} 
            label="Charts" 
            isCollapsed={isCollapsed} 
            hoverStyle={hoverStyle} 
            showChevron
          />
        </Section>

        {/* Support Section */}
        <Section title="Support" isCollapsed={isCollapsed} isDark={isDark}>
          <NavItem
            to="/bantuan"
            icon={<FaComments className="text-cyan-400" />}
            label="Bantuan"
            isCollapsed={isCollapsed}
            hoverStyle={hoverStyle}
          />
          <NavItem
            to="/pengaturan"
            icon={<FaGears className="text-cyan-400" />}
            label="Pengaturan"
            isCollapsed={isCollapsed}
            hoverStyle={hoverStyle}
          />
        </Section>
      </div>

      {/* Footer */}
      <div className={`mt-6 pt-4 border-t ${borderStyle} space-y-2`}>
        <button onClick={toggleTheme} className={`flex items-center gap-2 text-sm ${hoverStyle} px-2 py-1.5 rounded transition w-full`}>
          {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
          {!isCollapsed && <span>{isDark ? "Tema Terang" : "Tema Gelap"}</span>}
        </button>
        {!isCollapsed && (
          <>
            <p className={`text-xs ${textColor} select-none`}>Version 1.1</p>
            <p className={`text-xs ${textColor}`}>© 2025 Mobilin</p>
          </>
        )}
      </div>
    </aside>
  );
}

function Section({ title, isCollapsed, children, isDark }) {
  const textColor = isDark ? "text-gray-400" : "text-gray-500";
  
  return (
    <div>
      {!isCollapsed && (
        <p className={`text-xs font-semibold tracking-widest ${textColor} uppercase mb-3 select-none`}>
          {title}
        </p>
      )}
      <nav className="space-y-1">{children}</nav>
    </div>
  );
}

function NavItem({ to, icon, label, isCollapsed, hoverStyle, showChevron }) {
  return (
    <Link to={to} className={`flex items-center justify-between gap-3 px-2 py-2 text-sm rounded ${hoverStyle} transition`}>
      <div className="flex items-center gap-3">
        {icon}
        {!isCollapsed && <span>{label}</span>}
      </div>
      {!isCollapsed && showChevron && (
        <i className="fas fa-chevron-right text-gray-400 text-xs"></i>
      )}
    </Link>
  );
}