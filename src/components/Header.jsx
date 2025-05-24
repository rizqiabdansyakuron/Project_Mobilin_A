import { FaBell, FaSearch, FaLanguage, FaBars } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function Header({ onToggleSidebar }) {
    return (
        <header className="flex justify-between items-center px-6 py-4 bg-white text-gray-800 shadow-sm">
            {/* Kiri: Toggle Sidebar dan Search Bar */}
            <div className="flex items-center gap-4 w-full max-w-md">
                {/* Tombol Toggle Sidebar */}
                <button
                    onClick={onToggleSidebar}
                    className="text-gray-600 text-xl p-2 rounded hover:bg-gray-100 transition"
                >
                    <FaBars />
                </button>

                {/* Search Bar */}
                <div className="relative flex-1">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-gray-100 border border-gray-200 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                </div>
            </div>

            {/* Kanan: Notifikasi, Bahasa, Profil */}
            <div className="flex items-center gap-4 ml-6">
                {/* Notification */}
                <div className="relative">
                    <div className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer">
                        <FaBell className="text-gray-700 text-lg" />
                    </div>
                    <span className="absolute top-0 right-0 text-[10px] bg-red-500 text-white rounded-full px-1.5 py-0.5 translate-x-1/2 -translate-y-1/2">
                        9+
                    </span>
                </div>

                {/* Language */}
                <div className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer">
                    <FaLanguage className="text-gray-700 text-lg" />
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3 pl-4 border-l border-gray-300">
                    <div className="text-right">
                        <p className="text-sm font-medium">Rizqi Abdan</p>
                        <p className="text-xs text-gray-500">Admin</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-white text-xl cursor-pointer">
                        <IoPerson />
                    </div>
                </div>
            </div>
        </header>
    );
}
