import { useState } from 'react';

const ArtikelManager = () => {
  const [artikel, setArtikel] = useState([
    {
      id: 1,
      judul: "5 Tips Membeli Mobil Bekas Berkualitas",
      konten: "Panduan lengkap untuk memilih mobil bekas terbaik...",
      tanggal: "2023-10-15",
      kategori: "Tips & Trik"
    }
  ]);

  const [formData, setFormData] = useState({ 
    judul: "", 
    konten: "", 
    kategori: "Umum" 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArtikel = {
      id: Date.now(),
      ...formData,
      tanggal: new Date().toLocaleDateString('id-ID'),
      thumbnail: "/placeholder-article.jpg"
    };
    setArtikel([...artikel, newArtikel]);
    setFormData({ judul: "", konten: "", kategori: "Umum" });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
        Manajemen Artikel
      </h2>

      <form onSubmit={handleSubmit} className="mb-8 bg-gray-50 p-5 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Judul Artikel</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.judul}
              onChange={(e) => setFormData({...formData, judul: e.target.value})}
              placeholder="Contoh: Cara Cek Kilometer Mobil Bekas"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.kategori}
              onChange={(e) => setFormData({...formData, kategori: e.target.value})}
            >
              <option value="Umum">Umum</option>
              <option value="Tips & Trik">Tips & Trik</option>
              <option value="Berita">Berita</option>
            </select>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Konten</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[150px]"
            value={formData.konten}
            onChange={(e) => setFormData({...formData, konten: e.target.value})}
            placeholder="Tulis konten artikel disini..."
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Tambah Artikel
        </button>
      </form>

      <div className="space-y-4">
        {artikel.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mb-2">
                    {item.kategori}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800">{item.judul}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.tanggal}</p>
                </div>
                <button
                  onClick={() => setArtikel(artikel.filter(art => art.id !== item.id))}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mt-3 line-clamp-2">{item.konten}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtikelManager;