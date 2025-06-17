import { useEffect, useState } from 'react';
import { ulasanAPI } from '../services/ulasanAPI';
import { useTheme } from '../context/ThemeContext';
import { FaQuestionCircle, FaTrash, FaShoppingCart, FaCreditCard } from 'react-icons/fa';

const FaqManager = () => {
  const [faqs, setFaqs] = useState([]);
  const { isDark } = useTheme();

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

  const containerStyle = isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800';
  const cardStyle = isDark ? 'bg-gray-800 border-gray-700 hover:shadow-lg' : 'bg-gray-50 border-gray-200 hover:shadow';
  const textMuted = isDark ? 'text-gray-300' : 'text-gray-600';

  const getCategoryIcon = (kategori) => {
    if (kategori === 'Pembelian') return <FaShoppingCart className="text-blue-500 mr-1" />;
    if (kategori === 'Pembiayaan') return <FaCreditCard className="text-purple-500 mr-1" />;
    return <FaQuestionCircle className="text-gray-500 mr-1" />;
  };

  return (
    <div className={`p-6 rounded-2xl shadow-md ${containerStyle}`}>
      <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
        <FaQuestionCircle className="text-green-500 w-7 h-7" />
        Manajemen FAQ
      </h2>

      {faqs.length === 0 ? (
        <div className={`${textMuted} text-center py-10`}>
          Belum ada data FAQ yang tersedia.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`border rounded-xl p-4 transition ${cardStyle}`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span
                    className={`inline-flex items-center px-2 py-1 mb-1 text-xs font-medium rounded-full ${
                      faq.kategori === 'Pembelian'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-white'
                        : faq.kategori === 'Pembiayaan'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-white'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white'
                    }`}
                  >
                    {getCategoryIcon(faq.kategori)}
                    {faq.kategori}
                  </span>
                  <h3 className="text-lg font-medium">{faq.pertanyaan}</h3>
                </div>
                <button
                  onClick={() => handleDelete(faq.id)}
                  className="text-red-500 hover:text-red-700 p-1 rounded-full transition"
                  title="Hapus FAQ"
                >
                  <FaTrash className="w-5 h-5" />
                </button>
              </div>
              <p className={`${textMuted}`}>{faq.jawaban}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FaqManager;
