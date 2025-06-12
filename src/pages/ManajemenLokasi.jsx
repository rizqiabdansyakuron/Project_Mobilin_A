// src/pages/ManajemenLokasi.jsx
import React, { useEffect, useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { lokasiAPI } from "../../src/services/lokasiAPI";
import Loading from "../../src/components/LoadingSpinner";
import EmptyState from "../../src/components/EmptyState";

export default function ManajemenLokasi() {
  const [lokasiData, setLokasiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      await lokasiAPI.delete(id); // Pastikan method delete tersedia di lokasiAPI
      setLokasiData((prev) => prev.filter((item) => item.id_lokasi !== id));
    } catch (err) {
      alert("Gagal menghapus lokasi");
    }
  };

  if (loading) return <Loading message="Memuat data lokasi..." />;
  if (error) return <Error message={error} />;
  if (lokasiData.length === 0) return <EmptyState message="Belum ada data lokasi." />;

  return (
    <div className="p-6 md:p-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Manajemen Lokasi</h1>
        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">
          <Plus size={18} />
          Tambah Lokasi
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full border border-gray-200 bg-white text-sm">
          <thead className="bg-gray-100 text-left text-xs font-semibold text-gray-600">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Nama</th>
              <th className="p-3">Alamat</th>
              <th className="p-3">Jarak</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {lokasiData.map((lokasi, index) => (
              <tr key={lokasi.id_lokasi} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="p-3">{index + 1}</td>
                <td className="p-3 font-medium text-gray-800">{lokasi.nama}</td>
                <td className="p-3 text-gray-600">{lokasi.alamat}</td>
                <td className="p-3 text-gray-600">{lokasi.jarak}</td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <button
                      className="rounded bg-yellow-500 px-2 py-1 text-xs text-white hover:bg-yellow-400"
                      onClick={() => alert("Edit belum diimplementasikan")}
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
