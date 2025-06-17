import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import testDriveData from '../assets/testDriveData.json';
import PageHeader from '../components/PageHeader';
import { useTheme } from '../context/ThemeContext';

const TestDrive = () => {
  const { isDark } = useTheme();

  const bgMain = isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  const bgTableHead = isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800';
  const border = isDark ? 'border-gray-700' : 'border-gray-200';
  const bgCard = isDark ? 'bg-gray-800' : 'bg-white';

  return (
    <div className={`p-6 rounded-xl shadow ${bgMain}`}>
      <div className="flex items-center justify-between mb-4">
        <PageHeader title="Kelola Test Drive" />
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition duration-300">
          <FaPlus />
          Add Test Drive
        </button>
      </div>

      <div className={`overflow-x-auto border rounded-lg shadow-md mt-4 ${border}`}>
        <table className="min-w-full text-sm">
          <thead className={`${bgTableHead}`}>
            <tr>
              <th className="p-3 text-left">Gambar</th>
              <th className="p-3 text-left">Nama</th>
              <th className="p-3 text-left">Tanggal</th>
              <th className="p-3 text-left">Mobil</th>
              <th className="p-3 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {testDriveData.map((testDrive) => (
              <tr key={testDrive.id} className={`border-t ${border}`}>
                <td className="p-3">
                  <img
                    src={testDrive.gambar}
                    alt={testDrive.nama}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="p-3">{testDrive.nama}</td>
                <td className="p-3">{testDrive.tanggal}</td>
                <td className="p-3">{testDrive.mobil}</td>
                <td className="p-3 space-y-1">
                  <Link
                    to={`/test-drive/${testDrive.id}`}
                    className="flex items-center justify-center gap-1 bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                  >
                    <FaEye className="w-4 h-4" />
                    Detail
                  </Link>
                  <button className="flex items-center justify-center gap-1 w-full bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded">
                    <FaEdit className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="flex items-center justify-center gap-1 w-full bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
                    <FaTrash className="w-4 h-4" />
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
