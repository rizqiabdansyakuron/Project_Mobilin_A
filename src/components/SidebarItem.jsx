import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function SidebarItem({ to, label, icon: Icon, badge, onClick }) {
  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          clsx(
            "group flex items-center gap-3 py-2 px-3 rounded-lg text-sm font-medium transition",
            isActive
              ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/60"
          )
        }
      >
        <Icon className="text-xl shrink-0" />
        <span className="flex-1">{label}</span>
        {badge && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-600 text-white">
            {badge}
          </span>
        )}
      </NavLink>
    </li>
  );
}
