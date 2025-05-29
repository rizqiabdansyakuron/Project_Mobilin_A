import React from 'react';
import { useParams, Link } from 'react-router-dom';
import dataMobil from '../../assets/data_mobil_bekas.json';

export default function DetailMobil() {
  const { id } = useParams();
  const mobil = dataMobil.find((item) => item.id.toString() === id);

  if (!mobil) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-red-500">Mobil tidak ditemukan</h2>
        <Link to="/mobil" className="text-blue-600 underline">Kembali ke daftar</Link>
      </div>
    );
  }

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/mobil" className="text-sm text-blue-600 underline mb-4 inline-block">← Kembali ke daftar mobil</Link>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex gap-6">
          <img src={mobil.gambar} alt={mobil.merek} className="w-64 rounded" />
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">{mobil.merek} {mobil.tipe}</h2>
            <p><strong>Tahun:</strong> {mobil.tahun_beli}</p>
            <p><strong>Transmisi:</strong> {mobil.transmisi}</p>
            <p><strong>Jarak Tempuh:</strong> {mobil.jarak_tempuh.toLocaleString()} km</p>
            <p><strong>Warna:</strong> {mobil.warna}</p>
            <p><strong>Harga:</strong> {formatRupiah(mobil.harga)}</p>
            <p><strong>Daerah:</strong> {mobil.daerah}</p>
            <p><strong>Fitur Tambahan:</strong></p>
            <ul className="list-disc list-inside">
              {mobil.fitur_tambahan.map((fitur, i) => (
                <li key={i}>{fitur}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
