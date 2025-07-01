import React, { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { lokasiAPI } from "../services/lokasiAPI";
import Loading from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";

export default function ManajemenLokasi() {
  const [lokasiData, setLokasiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formMode, setFormMode] = useState("create");
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    kategori: "",
    jam_operasional: "",
    telepon: "",
    email: "",
    tunjukkan_peta: true,
  });
  const [editingId, setEditingId] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await lokasiAPI.fetch();
      setLokasiData(data);
    } catch (err) {
      console.error("Gagal mengambil data lokasi:", err);
      setError("Gagal mengambil data lokasi.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus lokasi ini?")) return;
    try {
      await lokasiAPI.delete(id);
      setLokasiData((prev) => prev.filter((item) => item.id_lokasi !== id));
    } catch (err) {
      alert("Gagal menghapus lokasi");
    }
  };

  const handleEdit = (lokasi) => {
    setFormMode("edit");
    setEditingId(lokasi.id_lokasi);
    setFormData({
      nama: lokasi.nama,
      alamat: lokasi.alamat,
      kategori: lokasi.kategori,
      jam_operasional: lokasi.jam_operasional,
      telepon: lokasi.telepon || "",
      email: lokasi.email || "",
      tunjukkan_peta: lokasi.tunjukkan_peta ?? true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.nama.trim() ||
      !formData.alamat.trim() ||
      !formData.kategori.trim() ||
      !formData.jam_operasional.trim()
    ) {
      alert("Semua field wajib diisi.");
      return;
    }

    try {
      if (formMode === "create") {
        await lokasiAPI.create(formData);
      } else {
        await lokasiAPI.edit(editingId, formData);
      }
      fetchData();
      setFormMode("create");
      setFormData({
        nama: "",
        alamat: "",
        kategori: "",
        jam_operasional: "",
        telepon: "",
        email: "",
        tunjukkan_peta: true,
      });
      setEditingId(null);
    } catch (err) {
      console.error("Gagal menyimpan lokasi:", err.response?.data || err.message);
      alert("Gagal menyimpan lokasi. Silakan cek console untuk detail.");
    }
  };

  if (loading) return <Loading message="Memuat data lokasi..." />;
  if (error) return <div className="text-red-500 p-4">{error}</div>;
  if (lokasiData.length === 0) return <EmptyState message="Belum ada data lokasi." />;

  return (
//     <div
//   className="p-6 md:p-10 min-h-screen bg-cover bg-center bg-no-repeat"
//   style={{ backgroundImage: "url('/img/uwp4503445.jpeg')" }}
// ></div>
    <div className="p-6 md:p-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Manajemen Lokasi</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mb-6 grid grid-cols-1 gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2"
      >
        <input
          type="text"
          placeholder="Nama lokasi"
          className="rounded border px-3 py-2"
          value={formData.nama}
          onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Alamat"
          className="rounded border px-3 py-2"
          value={formData.alamat}
          onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
          required
        />
        <select
          className="rounded border px-3 py-2"
          value={formData.kategori}
          onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
          required
        >
          <option value="">Pilih Kategori</option>
          <option value="Experience Center">Experience Center</option>
          <option value="Inspection Center">Inspection Center</option>
          <option value="Stockyard">Stockyard</option>
        </select>
        <input
          type="text"
          placeholder="Jam Operasional (contoh: Senin - Jumat 09.00 - 17.00)"
          className="rounded border px-3 py-2"
          value={formData.jam_operasional}
          onChange={(e) =>
            setFormData({ ...formData, jam_operasional: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Telepon"
          className="rounded border px-3 py-2"
          value={formData.telepon}
          onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded border px-3 py-2"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button
          type="submit"
          className="col-span-1 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 md:col-span-2"
        >
          {formMode === "create" ? "Tambah Lokasi" : "Simpan Perubahan"}
        </button>
      </form>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full border border-gray-200 bg-white text-sm">
          <thead className="bg-gray-100 text-left text-xs font-semibold text-gray-600">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Nama</th>
              <th className="p-3">Alamat</th>
              <th className="p-3">Kategori</th>
              <th className="p-3">Jam Operasional</th>
              <th className="p-3">Telepon</th>
              <th className="p-3">Email</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {lokasiData.map((lokasi, index) => (
              <tr key={lokasi.id_lokasi} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="p-3">{index + 1}</td>
                <td className="p-3 font-medium text-gray-800">{lokasi.nama}</td>
                <td className="p-3 text-gray-600">{lokasi.alamat}</td>
                <td className="p-3 text-gray-600">{lokasi.kategori}</td>
                <td className="p-3 text-gray-600">{lokasi.jam_operasional}</td>
                <td className="p-3 text-gray-600">{lokasi.telepon}</td>
                <td className="p-3 text-gray-600">{lokasi.email}</td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <button
                      className="rounded bg-yellow-500 px-2 py-1 text-xs text-white hover:bg-yellow-400"
                      onClick={() => handleEdit(lokasi)}
                    >
                      <Pencil size={14} />
                    </button>
                    <button
                      className="rounded bg-red-600 px-2 py-1 text-xs text-white hover:bg-red-500"
                      onClick={() => handleDelete(lokasi.id_lokasi)}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
