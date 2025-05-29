import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import pembeliData from '../assets/pembeliData.json'; // JSON yang sudah berisi gambar

const Pembeli = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <PageHeader title="Kelola Pembeli" />
        <button className="bg-gray-800 hover:bg-gray-600 text-white px-5 py-2 rounded-lg shadow transition duration-300">
          + Add Customer
        </button>
      </div>

      <div className="overflow-x-auto border rounded-lg shadow-md mt-4">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Gambar</th>
              <th className="p-2">Nama</th>
              <th className="p-2">Alamat</th>
              <th className="p-2">Kontak</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pembeliData.map((pembeli) => (
              <tr key={pembeli.id} className="border-t">
                <td className="p-2">
                  <img
                    src={pembeli.gambar}
                    alt={pembeli.nama}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-2">{pembeli.nama}</td>
                <td className="p-2">{pembeli.alamat}</td>
                <td className="p-2">{pembeli.kontak}</td>
                <td className="p-2 space-y-1">
                  <Link
                    to={`/pembeli/${pembeli.id}`}
                    className="block bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 text-center"
                  >
                    Detail
                  </Link>
                  <button className="block w-full bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="block w-full bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
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

export default Pembeli;
