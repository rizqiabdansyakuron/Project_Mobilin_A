import { useEffect, useState } from 'react';
import { ulasanAPI } from '../services/ulasanAPI';

const FaqManager = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const getFaqs = async () => {
      try {
        const data = await ulasanAPI.fetch();
        setFaqs(data);
      } catch (error) {
        console.error('Gagal memuat FAQ:', error);
      }
    };

    getFaqs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await ulasanAPI.delete(id);
      setFaqs((prevFaqs) => prevFaqs.filter((faq) => faq.id !== id));
    } catch (error) {
      console.error('Gagal menghapus FAQ:', error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
        <svg
          className="w-7 h-7 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3
            0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0
            3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Manajemen FAQ
      </h2>

      {faqs.length === 0 ? (
        <div className="text-gray-500 text-center py-10">
          Belum ada data FAQ yang tersedia.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-xl p-4 bg-gray-50 hover:shadow transition"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span
                    className={`inline-block px-2 py-1 mb-1 text-xs font-medium rounded-full ${
                      faq.kategori === 'Pembelian'
                        ? 'bg-blue-100 text-blue-800'
                        : faq.kategori === 'Pembiayaan'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {faq.kategori}
                  </span>
                  <h3 className="text-lg font-medium text-gray-800">{faq.pertanyaan}</h3>
                </div>
                <button
                  onClick={() => handleDelete(faq.id)}
                  className="text-red-500 hover:text-red-700 p-1 rounded-full transition"
                  title="Hapus FAQ"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 
                      4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600">{faq.jawaban}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FaqManager;
