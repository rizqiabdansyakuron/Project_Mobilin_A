import { useTheme } from "../context/ThemeContext";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`mt-auto ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"}`}>
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/LOGO.png" 
                alt="Mobilin Logo" 
                className="h-8 mr-2"
              />
              <span className="text-xl font-bold">Mobilin</span>
            </div>
            <p className="text-sm">
              Platform manajemen dealer mobil terintegrasi untuk pengalaman bisnis otomotif yang lebih baik.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition">Beranda</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Layanan</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Kontak</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <address className="not-italic space-y-2">
              <p>Jl. Otomotif No. 123</p>
              <p>Jakarta, Indonesia</p>
              <p>Email: info@mobilin.com</p>
              <p>Telp: +62 123 4567 890</p>
            </address>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Media Sosial</h3>
            <div className="flex space-x-4">
              <a href="#" className={`p-2 rounded-full ${isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-200"} transition`}>
                <FaFacebook className="text-blue-500" />
              </a>
              <a href="#" className={`p-2 rounded-full ${isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-200"} transition`}>
                <FaTwitter className="text-blue-400" />
              </a>
              <a href="#" className={`p-2 rounded-full ${isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-200"} transition`}>
                <FaInstagram className="text-pink-500" />
              </a>
              <a href="#" className={`p-2 rounded-full ${isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-200"} transition`}>
                <FaLinkedin className="text-blue-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-8 pt-6 border-t ${isDark ? "border-gray-700" : "border-gray-200"} text-center text-sm`}>
          <p>© {new Date().getFullYear()} Mobilin. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-blue-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition">Terms of Service</a>
            <a href="#" className="hover:text-blue-500 transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}