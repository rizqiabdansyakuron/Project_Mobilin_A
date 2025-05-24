import React from 'react';
import SimpleTable from '../components/SimpleTable';
import PageHeader from '../components/PageHeader';

const data = [
  { nama: 'Budi', tanggal: '2025-04-20', mobil: 'Toyota Avanza' },
  { nama: 'Sinta', tanggal: '2025-04-22', mobil: 'Honda Brio' },
];

const columns = [
  { header: 'Nama', accessor: 'nama' },
  { header: 'Tanggal', accessor: 'tanggal' },
  { header: 'Mobil', accessor: 'mobil' },
];

const TestDrive = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <PageHeader title="Kelola Test Drive" />
        <button className="bg-gray-800 hover:bg-gray-600 text-white px-5 py-2 rounded-lg shadow transition duration-300">
          + Add Test Drive
        </button>
      </div>
      <SimpleTable columns={columns} data={data} />
    </div>
  );
};

export default TestDrive;
