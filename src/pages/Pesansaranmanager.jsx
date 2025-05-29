import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import pesanData from '../assets/PesanSaranData.json';

const PesanSaranManager = () => {
  const [pesanSaran, setPesanSaran] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    setPesanSaran(pesanData);
  }, []);

  return (
    <div className="p-4">
      <div className="mb-6">
        <PageHeader title="Kelola Pesan & Saran" />
      </div>

      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Tanggal</th>
              <th className="px-6 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {pesanSaran.map((pesan) => (
              <tr key={pesan.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{pesan.username}</td>
                <td className="px-6 py-4 text-gray-700">{pesan.email}</td>
                <td className="px-6 py-4 text-gray-700">{pesan.tanggal}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => navigate(`/pesansaran/${pesan.id}`)}
                    className="text-blue-600 hover:underline"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
            {pesanSaran.length === 0 && (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                  Tidak ada data saran.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PesanSaranManager;
