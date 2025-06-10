import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { lowonganAPI } from "../../services/lowonganAPI";
import Loading from "../../components/LoadingSpinner";
import Errormobilin from "../../pages/Errormobilin";
import EmptyState from "../EmptyState";

export default function JobManager() {
  const [lowonganData, setLowonganData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLowongan = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await lowonganAPI.fetch();
      setLowonganData(data);
    } catch (error) {
      console.error("Gagal mengambil data lowongan:", error);
      setError("Gagal mengambil data lowongan");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus lowongan ini?")) return;
    try {
      await lowonganAPI.delete(id);
      await fetchLowongan(); // Refresh data
    } catch (err) {
      alert("Gagal menghapus lowongan");
    }
  };

  useEffect(() => {
    fetchLowongan();
  }, []);

  if (loading) return <Loading message="Memuat data lowongan..." />;
  if (error) return <Errormobilin message={error} />;
  if (lowonganData.length === 0)
    return (
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Manajemen Lowongan</h1>
          <Link
            to="/admin/lowongan/tambah"
            className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-yellow-500 transition"
          >
            + Tambah Lowongan
          </Link>
        </div>
        <EmptyState message="Belum ada lowongan yang tersedia." />
      </div>
    );

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Manajemen Lowongan</h1>
        <Link
          to="/admin/lowongan/tambah"
          className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-yellow-500 transition"
        >
          + Tambah Lowongan
        </Link>
      </div>

      <div className="overflow-x-auto shadow border rounded-xl">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Posisi</th>
              <th className="px-4 py-3">Lokasi</th>
              <th className="px-4 py-3">Deskripsi</th>
              <th className="px-4 py-3">Kualifikasi</th>
              <th className="px-4 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {lowonganData.map((job, index) => (
              <tr key={job.id_lowongan} className="hover:bg-gray-50">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 font-medium">{job.posisi}</td>
                <td className="px-4 py-3">{job.lokasi?.kota || "-"}</td>
                <td className="px-4 py-3 line-clamp-2">{job.deskripsi}</td>
                <td className="px-4 py-3">
                  <ul className="list-disc list-inside space-y-1">
                    {job.kualifikasi?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-3 text-center space-x-2">
                  <Link
                    to={`/admin/lowongan/edit/${job.id_lowongan}`}
                    className="inline-block px-3 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(job.id_lowongan)}
                    className="inline-block px-3 py-1 text-sm rounded bg-red-600 text-white hover:bg-red-700"
                  >
                    Hapus
                  </button>
                  <Link
                    to={`/karir/${job.id_lowongan}`}
                    className="inline-block px-3 py-1 text-sm rounded bg-gray-800 text-white hover:bg-yellow-500"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
