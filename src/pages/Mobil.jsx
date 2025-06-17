import React from 'react';
import { Link } from 'react-router-dom';
import dataMobil from '../assets/data_mobil_bekas.json';
import PageHeader from '../components/PageHeader';
import { useTheme } from '../context/ThemeContext';

const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(number);
};

const Mobil = () => {
  const { isDark } = useTheme();

  const bgContainer = isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800";
  const tableHeadBg = isDark ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800";
  const tableRowHover = isDark ? "hover:bg-gray-800" : "hover:bg-gray-100";
  const borderColor = isDark ? "border-gray-700" : "border-gray-300";

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <PageHeader title="Kelola Mobil Bekas" />
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition shadow">
          + Add Mobil
        </button>
      </div>

      {/* Table */}
      <div className={`overflow-x-auto rounded-xl shadow border ${borderColor} ${bgContainer}`}>
        <table className="min-w-full text-sm">
          <thead className={tableHeadBg}>
            <tr>
              <th className="p-3 text-left">Gambar</th>
              <th className="p-3 text-left">Merek</th>
              <th className="p-3 text-left">Tipe</th>
              <th className="p-3 text-left">Tahun</th>
              <th className="p-3 text-left">Transmisi</th>
              <th className="p-3 text-left">Jarak Tempuh</th>
              <th className="p-3 text-left">Warna</th>
              <th className="p-3 text-left">Harga</th>
              <th className="p-3 text-left">Daerah</th>
              <th className="p-3 text-left">Fitur</th>
              <th className="p-3 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataMobil.map((mobil) => (
              <tr key={mobil.id} className={`${tableRowHover} transition`}>
                <td className="p-3">
                  <img
                    src={mobil.gambar}
                    alt={mobil.merek}
                    className="w-20 h-auto rounded"
                  />
                </td>
                <td className="p-3">{mobil.merek}</td>
                <td className="p-3">{mobil.tipe}</td>
                <td className="p-3">{mobil.tahun_beli}</td>
                <td className="p-3">{mobil.transmisi}</td>
                <td className="p-3">{mobil.jarak_tempuh.toLocaleString()} km</td>
                <td className="p-3">{mobil.warna}</td>
                <td className="p-3">{formatRupiah(mobil.harga)}</td>
                <td className="p-3">{mobil.daerah}</td>
                <td className="p-3">
                  <ul className="list-disc pl-5">
                    {mobil.fitur_tambahan.map((fitur, i) => (
                      <li key={i}>{fitur}</li>
                    ))}
                  </ul>
                </td>
                <td className="p-3 space-y-1">
                  <Link
                    to={`/mobil/${mobil.id}`}
                    className="block w-full px-3 py-1 bg-green-600 text-white rounded text-center hover:bg-green-700 transition"
                  >
                    Detail
                  </Link>
                  <button className="block w-full px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                    Edit
                  </button>
                  <button className="block w-full px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mobil;
