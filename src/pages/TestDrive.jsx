import React from 'react';
import { Link } from 'react-router-dom';
import testDriveData from '../assets/testDriveData.json'; // Import data JSON
import PageHeader from '../components/PageHeader';

const TestDrive = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <PageHeader title="Kelola Test Drive" />
        <button className="bg-gray-800 hover:bg-gray-600 text-white px-5 py-2 rounded-lg shadow transition duration-300">
          + Add Test Drive
        </button>
      </div>

      <div className="overflow-x-auto border rounded-lg shadow-md mt-4">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Gambar</th>
              <th className="p-2">Nama</th>
              <th className="p-2">Tanggal</th>
              <th className="p-2">Mobil</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testDriveData.map((testDrive) => (
              <tr key={testDrive.id} className="border-t">
                <td className="p-2">
                  <img
                    src={testDrive.gambar}
                    alt={testDrive.nama}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="p-2">{testDrive.nama}</td>
                <td className="p-2">{testDrive.tanggal}</td>
                <td className="p-2">{testDrive.mobil}</td>
                <td className="p-2 space-y-1">
                  <Link
                    to={`/test-drive/${testDrive.id}`}
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

export default TestDrive;
