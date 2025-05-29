import React from 'react';
import { useParams, Link } from 'react-router-dom';
import testDriveData from '../../assets/testDriveData.json';

export default function DetailTestDrive() {
  const { id } = useParams();
  const testDrive = testDriveData.find((item) => item.id.toString() === id);

  if (!testDrive) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-red-500">Data test drive tidak ditemukan</h2>
        <Link to="/test-drive" className="text-blue-600 underline">Kembali ke daftar</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/test-drive" className="text-sm text-blue-600 underline mb-4 inline-block">
        ← Kembali ke daftar test drive
      </Link>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex gap-6">
          <img src={testDrive.gambar} alt={testDrive.nama} className="w-64 rounded" />
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">{testDrive.nama}</h2>
            <p><strong>Tanggal:</strong> {testDrive.tanggal}</p>
            <p><strong>Mobil yang Diuji:</strong> {testDrive.mobil}</p>
            {testDrive.catatan && (
              <p><strong>Catatan:</strong> {testDrive.catatan}</p>
            )}
            {/* Tambahkan informasi tambahan lain jika tersedia di JSON */}
          </div>
        </div>
      </div>
    </div>
  );
}
