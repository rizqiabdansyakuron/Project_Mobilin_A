import React from 'react';
import SimpleTable from '../components/SimpleTable';
import PageHeader from '../components/PageHeader';

const data = [
  { nama: 'Tiara', alamat: 'Jakarta', kontak: '08123456789' },
  { nama: 'Agus', alamat: 'Bandung', kontak: '08198765432' },
];

const columns = [
  { header: 'Nama', accessor: 'nama' },
  { header: 'Alamat', accessor: 'alamat' },
  { header: 'Kontak', accessor: 'kontak' },
];

const Pembeli = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <PageHeader title="Kelola Pembeli" />
        <button className="bg-gray-800 hover:bg-gray-600 text-white px-5 py-2 rounded-lg shadow transition duration-300">
          + Add Customer
        </button>
      </div>
      <SimpleTable columns={columns} data={data} />
    </div>
  );
};

export default Pembeli;
