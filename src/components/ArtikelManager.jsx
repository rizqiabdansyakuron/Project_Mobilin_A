import { useState } from 'react';
import { FaNewspaper, FaPlus, FaTrashAlt } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ArtikelManager = () => {
  const [artikel, setArtikel] = useState([
    {
      id: 1,
      judul: "5 Tips Membeli Mobil Bekas Berkualitas",
      konten: "Panduan lengkap untuk memilih mobil bekas terbaik...",
      tanggal: "2023-10-15",
      kategori: "Tips & Trik",
    },
  ]);

  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    judul: '',
    konten: '',
    kategori: 'Umum',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArtikel = {
      id: Date.now(),
      ...formData,
      tanggal: new Date().toLocaleDateString('id-ID'),
    };
    setArtikel([...artikel, newArtikel]);
    setFormData({ judul: '', konten: '', kategori: 'Umum' });
  };

  const bgMain = isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800';
  const bgCard = isDark ? 'bg-gray-800' : 'bg-gray-50';
  const border = isDark ? 'border-gray-700' : 'border-gray-200';
  const textSecondary = isDark ? 'text-gray-300' : 'text-gray-600';
  const inputBg = isDark ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300';
  const inputFocus = isDark ? 'focus:ring-blue-400 focus:border-blue-400' : 'focus:ring-blue-500 focus:border-blue-500';

  return (
    <div className={`rounded-xl shadow-md overflow-hidden p-6 ${bgMain}`}>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaNewspaper className="text-blue-500 w-6 h-6" />
        Manajemen Artikel
      </h2>

      <form onSubmit={handleSubmit} className={`mb-8 p-5 rounded-lg ${bgCard} ${border} border`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Judul Artikel</label>
            <input
              type="text"
              className={`w-full px-4 py-2 rounded-lg border ${inputBg} ${inputFocus}`}
              value={formData.judul}
              onChange={(e) => setFormData({ ...formData, judul: e.target.value })}
              placeholder="Contoh: Cara Cek Kilometer Mobil Bekas"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Kategori</label>
            <select
              className={`w-full px-4 py-2 rounded-lg border ${inputBg} ${inputFocus}`}
              value={formData.kategori}
              onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
            >
              <option value="Umum">Umum</option>
              <option value="Tips & Trik">Tips & Trik</option>
              <option value="Berita">Berita</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Konten</label>
          <textarea
            className={`w-full px-4 py-2 rounded-lg border min-h-[150px] ${inputBg} ${inputFocus}`}
            value={formData.konten}
            onChange={(e) => setFormData({ ...formData, konten: e.target.value })}
            placeholder="Tulis konten artikel disini..."
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          <FaPlus className="w-4 h-4" />
          Tambah Artikel
        </button>
      </form>

      <div className="space-y-4">
        {artikel.map((item) => (
          <div
            key={item.id}
            className={`rounded-lg overflow-hidden transition-shadow border ${bgCard} ${border} hover:shadow-md`}
          >
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mb-2">
                    {item.kategori}
                  </span>
                  <h3 className="text-lg font-semibold">{item.judul}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.tanggal}</p>
                </div>
                <button
                  onClick={() => setArtikel(artikel.filter((art) => art.id !== item.id))}
                  className="text-red-500 hover:text-red-700 p-1"
                  title="Hapus Artikel" 
                >
                  <FaTrashAlt className="w-5 h-5" />
                </button>
              </div>
              <p className={`mt-3 line-clamp-2 ${textSecondary}`}>{item.konten}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtikelManager;
