// src/pages/Detail/PesanSaranDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import pesanData from '../assets/PesanSaranData.json';

const formatTanggal = (tanggalStr) => {
  const date = new Date(tanggalStr);
  return date.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const PesanSaranDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const saran = useMemo(() => pesanData.find((item) => item.id === parseInt(id)), [id]);

  if (!saran) {
    return <div className="p-4 text-red-600 font-semibold">Data tidak ditemukan</div>;
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Detail Pesan Saran
      </h2>

      <div className="bg-gray-50 p-5 rounded-lg mb-4 space-y-3">
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">Username</span>
          <p className="text-gray-900 font-semibold">{saran.username}</p>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">Email</span>
          <p className="text-gray-900">{saran.email}</p>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">Tanggal</span>
          <p className="text-gray-900">{formatTanggal(saran.tanggal)}</p>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">Pertanyaan</span>
          <p className="text-gray-800">{saran.pertanyaan}</p>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => navigate('/pesansaran')}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Kembali
        </button>
        <button
          // Tombol hapus statis, fungsi belum dibuat
          onClick={() => alert('Fungsi hapus belum tersedia')}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

export default PesanSaranDetail;
