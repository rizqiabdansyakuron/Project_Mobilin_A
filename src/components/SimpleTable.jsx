// src/components/SimpleTable.jsx
import React from 'react';

const SimpleTable = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto border rounded-lg shadow-md">
      <table className="min-w-full table-auto text-sm">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col, i) => (
              <th key={i} className="px-4 py-2 text-left font-semibold">{col.header}</th>
            ))}
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="border-t">
              {columns.map((col, i) => (
                <td key={i} className="px-4 py-2">{item[col.accessor]}</td>
              ))}
              <td className="px-4 py-2 space-x-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">Edit</button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
