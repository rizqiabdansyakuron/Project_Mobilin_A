import { useEffect, useState } from "react";
import { testDriveAPI } from "../services/testdriveAPI";
import { FaTrash, FaCheck, FaTimes, FaPlus } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function KelolaTestDrive() {
  const { isDark } = useTheme();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    nama: "",
    nohp: "",
    tanggal: "",
    waktu: "",
    car_id: 1,
  });

  const fetchData = async () => {
    try {
      const data = await testDriveAPI.fetch();
      setList(data);
    } catch (error) {
      console.error("Gagal fetch test drive:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTambah = async () => {
    try {
      await testDriveAPI.create(form);
      fetchData();
      setForm({ nama: "", nohp: "", tanggal: "", waktu: "", car_id: 1 });
    } catch (error) {
      console.error("Gagal simpan test drive:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus data ini?")) return;
    try {
      await testDriveAPI.delete(id);
      fetchData();
    } catch (error) {
      console.error("Gagal hapus:", error);
    }
  };

  // Dynamic classes based on theme
  const containerClass = isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900";
  const inputClass = `border px-3 py-2 rounded focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${
    isDark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" 
           : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
  }`;
  const tableHeaderClass = isDark ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-900";
  const tableRowClass = isDark ? "border-gray-700 hover:bg-gray-800" : "border-gray-200 hover:bg-gray-50";
  const deleteBtnClass = isDark ? "text-red-400 hover:text-red-300" : "text-red-600 hover:text-red-800";

  if (loading) return <p className={`p-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>Loading data test drive...</p>;

  return (
    <div className={`p-6 rounded-xl shadow-md transition-colors duration-300 ${containerClass}`}>
      <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
        Kelola Test Drive
      </h2>

      {/* Form Tambah */}
      <div className="mb-6 grid md:grid-cols-5 gap-4">
        <input
          type="text"
          placeholder="Nama"
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="No HP"
          value={form.nohp}
          onChange={(e) => setForm({ ...form, nohp: e.target.value })}
          className={inputClass}
        />
        <input
          type="date"
          value={form.tanggal}
          onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
          className={inputClass}
        />
        <input
          type="time"
          value={form.waktu}
          onChange={(e) => setForm({ ...form, waktu: e.target.value })}
          className={inputClass}
        />
        <button
          onClick={handleTambah}
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-2 rounded flex items-center justify-center gap-2 transition-colors duration-200"
        >
          <FaPlus /> Tambah
        </button>
      </div>

      {/* Table Data */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className={`text-left ${tableHeaderClass}`}>
              <th className="px-4 py-2">Nama</th>
              <th className="px-4 py-2">No HP</th>
              <th className="px-4 py-2">Tanggal</th>
              <th className="px-4 py-2">Waktu</th>
              <th className="px-4 py-2">Car ID</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr 
                key={item.id_test_drive} 
                className={`border-b ${tableRowClass} transition-colors duration-200`}
              >
                <td className="px-4 py-2">{item.nama}</td>
                <td className="px-4 py-2">{item.nohp}</td>
                <td className="px-4 py-2">{item.tanggal}</td>
                <td className="px-4 py-2">{item.waktu}</td>
                <td className="px-4 py-2">{item.car_id}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(item.id_test_drive)}
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