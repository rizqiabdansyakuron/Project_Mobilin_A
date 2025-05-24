import { BiErrorCircle } from "react-icons/bi";
import { BsFillPersonCheckFill, BsBorderStyle } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { NavLink } from "react-router-dom";  
import { FaCar } from "react-icons/fa6";
import { SiSpeedtest } from "react-icons/si";

export default function ListMenu() {

  const menuClass = ({ isActive }) =>
    `flex items-center cursor-pointer rounded-lg px-4 py-3 font-medium text-sm transition-all
    ${isActive 
      ? "bg-yellow-500 text-white font-bold shadow-[0_0_10px_rgba(245,158,11,0.5)]"
      : "text-gray-300 hover:bg-yellow-600 hover:text-white hover:font-semibold"} 
    `;

  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink id="menu-1" to="/" className={menuClass}>
            <AiFillHome className="mr-3 text-lg" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-2" to="/orders" className={menuClass}>
            <BsBorderStyle className="mr-3 text-lg" />
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-3" to="/Pembeli" className={menuClass}>
            <BsFillPersonCheckFill className="mr-3 text-lg" />
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-4" to="/user" className={menuClass}>
            <FaUserFriends className="mr-3 text-lg" />
            Users
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-5" to="/Mobil" className={menuClass}>
            <FaCar className="mr-3 text-lg" />
            Car List
          </NavLink>
        </li>
        {/* Menambahkan menu Test Drive */}
        <li>
          <NavLink id="menu-6" to="/test-drive" className={menuClass}>
            <SiSpeedtest className="mr-3 text-lg" />
            Test Drive
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
