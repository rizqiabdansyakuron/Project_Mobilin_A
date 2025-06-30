import { useTheme } from "../context/ThemeContext";
import { FaEnvelope, FaPhoneAlt, FaQuestionCircle, FaBook } from "react-icons/fa";

export default function Bantuan() {
  const { isDark } = useTheme();

  // Dynamic color classes
  const textColor = isDark ? "text-gray-100" : "text-gray-800";
  const secondaryTextColor = isDark ? "text-gray-300" : "text-gray-600";
  const bgColor = isDark ? "bg-gray-800" : "bg-gray-50";
  const borderColor = isDark ? "border-gray-700" : "border-gray-200";
  const inputBg = isDark ? "bg-gray-700" : "bg-white";

  return (
    <div className={`p-6 min-h-screen ${isDark ? "bg-gray-900" : "bg-white"} rounded-xl shadow-md`}>
      <h2 className={`text-3xl font-bold mb-6 flex items-center gap-2 ${textColor}`}>
        <FaQuestionCircle className="text-blue-500" /> Bantuan & Dukungan
      </h2>

      {/* FAQ */}
      <div className="mb-8">
        <h3 className={`text-xl font-semibold mb-3 ${textColor}`}>Pertanyaan yang Sering Ditanyakan</h3>
        <div className="space-y-4">
          {[
            { q: "Bagaimana cara menambahkan mobil baru?", a: "Buka menu Mobil > Tambah Mobil lalu isi formulir." },
            { q: "Bagaimana melihat data test drive?", a: "Masuk ke menu Test Drive untuk melihat daftar & status pengajuan." },
            { q: "Apa yang harus dilakukan jika data tidak muncul?", a: "Coba refresh halaman, periksa koneksi, atau hubungi admin sistem." },
          ].map((faq, i) => (
            <details 
              key={i} 
              className={`group border rounded-md p-4 transition-all duration-200 ${bgColor} ${borderColor}`}
            >
              <summary className={`font-medium cursor-pointer group-open:text-blue-500 ${textColor}`}>
                {faq.q}
              </summary>
              <p className={`text-sm mt-2 ${secondaryTextColor}`}>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Form Kirim Pesan */}
      <div className="mb-8">
        <h3 className={`text-xl font-semibold mb-3 ${textColor}`}>Masih Bingung? Kirim Pertanyaan</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nama Anda"
            className={`p-3 rounded-md border ${inputBg} ${borderColor} ${textColor} placeholder-gray-400`}
          />
          <input
            type="email"
            placeholder="Email"
            className={`p-3 rounded-md border ${inputBg} ${borderColor} ${textColor} placeholder-gray-400`}
          />
          <textarea
            placeholder="Tulis pertanyaan atau kendala Anda..."
            rows="4"
            className={`md:col-span-2 p-3 rounded-md border ${inputBg} ${borderColor} ${textColor} placeholder-gray-400`}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md md:col-span-2 transition"
          >
            Kirim Pesan
          </button>
        </form>
      </div>

      {/* Kontak & Dokumentasi */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className={`p-4 border rounded-lg ${bgColor} ${borderColor}`}>
          <h4 className={`font-bold mb-2 flex items-center gap-2 ${textColor}`}>
            <FaEnvelope className="text-blue-500" /> Email Support
          </h4>
          <p className={textColor}>mobilin-support@gmail.com</p>
        </div>
        <div className={`p-4 border rounded-lg ${bgColor} ${borderColor}`}>
          <h4 className={`font-bold mb-2 flex items-center gap-2 ${textColor}`}>
            <FaPhoneAlt className="text-blue-500" /> Kontak Admin
          </h4>
          <p className={textColor}>+62 812-3456-7890 (Senin - Jumat, 09:00 - 17:00)</p>
        </div>
        <div className={`md:col-span-2 p-4 border rounded-lg ${bgColor} ${borderColor}`}>
          <h4 className={`font-bold mb-2 flex items-center gap-2 ${textColor}`}>
            <FaBook className="text-blue-500" /> Dokumentasi Sistem
          </h4>
          <p className={textColor}>
            Lihat dokumentasi lengkap dan panduan teknis di{" "}
            <a 
              href="https://docs.mobilin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              docs.mobilin.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}