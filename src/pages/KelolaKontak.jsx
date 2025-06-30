import { useEffect, useState } from "react";
import { kontakAPI } from "../services/KontakAPI";
import { FaTrash, FaPlus } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function KelolaKontak() {
  const { isDark } = useTheme();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    nama_depan: "",
    nama_belakang: "",
    email: "",
    pesan: "",
  });

  const fetchData = async () => {
    try {
      const data = await kontakAPI.fetch();
      setList(data);
    } catch (error) {
      console.error("Gagal ambil data kontak:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTambah = async () => {
    try {
      await kontakAPI.create(form);
      fetchData();
      setForm({ nama_depan: "", nama_belakang: "", email: "", pesan: "" });
    } catch (error) {
      console.error("Gagal tambah kontak:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus kontak ini?")) return;
    try {
      await kontakAPI.delete(id);
      fetchData();
    } catch (error) {
      console.error("Gagal hapus kontak:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Dynamic classes based on theme
  const containerClass = isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900";
  const inputClass = `border px-3 py-2 rounded focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${
    isDark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" 
           : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
  }`;
  const tableHeaderClass = isDark ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800";
  const tableRowClass = isDark ? "border-gray-700 hover:bg-gray-800" : "border-gray-200 hover:bg-gray-50";
  const deleteBtnClass = isDark ? "text-red-400 hover:text-red-300" : "text-red-600 hover:text-red-800";

  if (loading) return <p className={`p-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>Memuat data kontak...</p>;

  return (
    <div className={`p-4 md:p-6 rounded-xl shadow-md transition-colors duration-300 ${containerClass}`}>
      <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
        Kelola Kontak
      </h2>

      {/* Form Tambah Kontak */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        <input
          type="text"
          placeholder="Nama Depan"
          value={form.nama_depan}
          onChange={(e) => setForm({ ...form, nama_depan: e.target.value })}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Nama Belakang"
          value={form.nama_belakang}
          onChange={(e) => setForm({ ...form, nama_belakang: e.target.value })}
          className={inputClass}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Pesan"
          value={form.pesan}
          onChange={(e) => setForm({ ...form, pesan: e.target.value })}
          className={`${inputClass} md:col-span-2`}
        />
        <button
          onClick={handleTambah}
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-2 rounded flex items-center justify-center gap-2 transition-colors duration-200 col-span-2 md:col-span-1"
        >
          <FaPlus /> Tambah
        </button>
      </div>

      {/* Tabel Kontak */}
      <div className="overflow-x-auto rounded-lg border dark:border-gray-700">
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className={`text-left ${tableHeaderClass}`}>
              <th className="px-4 py-3 min-w-[120px]">Nama Depan</th>
              <th className="px-4 py-3 min-w-[120px]">Nama Belakang</th>
              <th className="px-4 py-3 min-w-[160px]">Email</th>
              <th className="px-4 py-3 min-w-[200px]">Pesan</th>
              <th className="px-4 py-3 w-20">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr 
                key={item.id_kontak} 
                className={`border-b ${tableRowClass} transition-colors duration-200`}
              >
                <td className="px-4 py-3">{item.nama_depan}</td>
                <td className="px-4 py-3">{item.nama_belakang}</td>
                <td className="px-4 py-3">{item.email}</td>
                <td className="px-4 py-3 line-clamp-2">{item.pesan}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleDelete(item.id_kontak)}
                    className={`${deleteBtnClass} transition-colors duration-200`}
                    title="Hapus"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}