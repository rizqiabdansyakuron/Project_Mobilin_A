import { useState } from 'react';

const FaqManager = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      pertanyaan: "Bagaimana cara mengecek riwayat kecelakaan mobil bekas?",
      jawaban: "Kami menyediakan laporan lengkap termasuk riwayat kecelakaan melalui sistem inspeksi 360° kami.",
      kategori: "Pembelian"
    }
  ]);

  const [newFaq, setNewFaq] = useState({ 
    pertanyaan: "", 
    jawaban: "", 
    kategori: "Umum" 
  });

  const handleAdd = () => {
    if (!newFaq.pertanyaan || !newFaq.jawaban) return;
    setFaqs([...faqs, { ...newFaq, id: Date.now() }]);
    setNewFaq({ pertanyaan: "", jawaban: "", kategori: "Umum" });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Manajemen FAQ
      </h2>

      <div className="bg-gray-50 p-5 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pertanyaan</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={newFaq.pertanyaan}
              onChange={(e) => setNewFaq({...newFaq, pertanyaan: e.target.value})}
              placeholder="Contoh: Apa dokumen yang diperlukan?"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={newFaq.kategori}
              onChange={(e) => setNewFaq({...newFaq, kategori: e.target.value})}
            >
              <option value="Umum">Umum</option>
              <option value="Pembelian">Pembelian</option>
              <option value="Pembiayaan">Pembiayaan</option>
            </select>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Jawaban</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 min-h-[100px]"
            value={newFaq.jawaban}
            onChange={(e) => setNewFaq({...newFaq, jawaban: e.target.value})}
            placeholder="Tulis jawaban lengkap disini..."
            required
          />
        </div>
        
        <button 
          onClick={handleAdd}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Tambah FAQ
        </button>
      </div>

      <div className="space-y-3">
        {faqs.map((faq) => (
          <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-50 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  faq.kategori === "Pembelian" ? "bg-blue-100 text-blue-800" :
                  faq.kategori === "Pembiayaan" ? "bg-purple-100 text-purple-800" :
                  "bg-gray-100 text-gray-800"
                }`}>
                  {faq.kategori}
                </span>
                <h3 className="font-medium text-gray-800">{faq.pertanyaan}</h3>
              </div>
              <button
                onClick={() => setFaqs(faqs.filter(f => f.id !== faq.id))}
                className="text-red-500 hover:text-red-700 p-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-600">{faq.jawaban}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqManager;