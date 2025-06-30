import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { lowonganAPI } from "../../services/lowonganAPI";
import Loading from "../../components/LoadingSpinner";
import Errormobilin from "../../pages/Errormobilin";
import EmptyState from "../EmptyState";
import { useTheme } from "../../context/ThemeContext";

export default function JobManager() {
  const [lowonganData, setLowonganData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isDark } = useTheme();

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
      await fetchLowongan();
    } catch (err) {
      alert("Gagal menghapus lowongan");
    }
  };

  useEffect(() => {
    fetchLowongan();
  }, []);

  // Theme classes
  const baseText = isDark ? "text-gray-100" : "text-gray-900";
  const bgBase = isDark ? "bg-gray-900" : "bg-white";
  const tableHeaderBg = isDark ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800";
  const rowHover = isDark ? "hover:bg-gray-800" : "hover:bg-gray-50";
  const borderColor = isDark ? "border-gray-700" : "border-gray-200";

  if (loading) return <Loading message="Memuat data lowongan..." />;
  if (error) return <Errormobilin message={error} />;
  if (lowonganData.length === 0)
    return (
      <div className={`p-8 ${bgBase} ${baseText} min-h-screen`}>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Manajemen Lowongan</h1>
          <Link
            to="/admin/lowongan/tambah"
            className="rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600 transition whitespace-nowrap"
          >
            + Tambah Lowongan
          </Link>
        </div>
        <EmptyState message="Belum ada lowongan yang tersedia." />
      </div>
    );

  return (
    <div className={`p-4 md:p-8 ${bgBase} ${baseText} min-h-screen`}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">Manajemen Lowongan</h1>
        <Link
          to="/admin/lowongan/tambah"
          className="rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600 transition whitespace-nowrap"
        >
          + Tambah Lowongan
        </Link>
      </div>

      <div className={`overflow-x-auto shadow border ${borderColor} rounded-xl`}>
        <table className="min-w-full divide-y divide-gray-300 text-sm text-left">
          <thead className={tableHeaderBg}>
            <tr>
              <th className="px-4 py-3 w-12">#</th>
              <th className="px-4 py-3 min-w-[150px]">Posisi</th>
              <th className="px-4 py-3 min-w-[120px]">Lokasi</th>
              <th className="px-4 py-3 min-w-[200px]">Deskripsi</th>
              <th className="px-4 py-3 min-w-[200px]">Kualifikasi</th>
              <th className="px-4 py-3 min-w-[200px] text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {lowonganData.map((job, index) => (
              <tr key={job.id_lowongan} className={`${rowHover} transition-colors`}>
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 font-medium">{job.posisi}</td>
                <td className="px-4 py-3">{job.lokasi?.kota || "-"}</td>
                <td className="px-4 py-3 line-clamp-2 max-w-[300px]">{job.deskripsi}</td>
                <td className="px-4 py-3 max-w-[300px]">
                  <ul className="list-disc list-inside space-y-1">
                    {job.kualifikasi?.slice(0, 3).map((item, i) => (
                      <li key={i} className="line-clamp-1">{item}</li>
                    ))}
                    {job.kualifikasi?.length > 3 && (
                      <li className="text-gray-500">+{job.kualifikasi.length - 3} lebih banyak</li>
                    )}
                  </ul>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap justify-center gap-2">
                    <Link
                      to={`/admin/lowongan/edit/${job.id_lowongan}`}
                      className="px-3 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 whitespace-nowrap"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(job.id_lowongan)}
                      className="px-3 py-1 text-sm rounded bg-red-600 text-white hover:bg-red-700 whitespace-nowrap"
                    >
                      Hapus
                    </button>
                    <Link
                      to={`/karir/${job.id_lowongan}`}
                      className="px-3 py-1 text-sm rounded bg-gray-700 text-white hover:bg-yellow-500 whitespace-nowrap"
                    >
                      Detail
                    </Link>
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