import { useState } from 'react';

const JobManager = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      posisi: "Mekanik Mobil",
      lokasi: "Jakarta",
      gaji: "Rp 5.000.000 - Rp 7.000.000",
      deskripsi: "Membutuhkan mekanik berpengalaman minimal 2 tahun di bidang otomotif.",
      tipe: "Full-time",
      status: "Aktif"
    }
  ]);

  const [newJob, setNewJob] = useState({ 
    posisi: "", 
    lokasi: "", 
    gaji: "", 
    deskripsi: "", 
    tipe: "Full-time",
    status: "Aktif" 
  });

  const handleAdd = () => {
    if (!newJob.posisi || !newJob.deskripsi) return;
    setJobs([...jobs, { ...newJob, id: Date.now() }]);
    setNewJob({ 
      posisi: "", 
      lokasi: "", 
      gaji: "", 
      deskripsi: "", 
      tipe: "Full-time",
      status: "Aktif" 
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Manajemen Lowongan
      </h2>

      <div className="bg-gray-50 p-5 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Posisi</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              value={newJob.posisi}
              onChange={(e) => setNewJob({...newJob, posisi: e.target.value})}
              placeholder="Contoh: Sales Executive"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              value={newJob.lokasi}
              onChange={(e) => setNewJob({...newJob, lokasi: e.target.value})}
              placeholder="Kota tempat kerja"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gaji</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              value={newJob.gaji}
              onChange={(e) => setNewJob({...newJob, gaji: e.target.value})}
              placeholder="Range gaji (opsional)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tipe Pekerjaan</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              value={newJob.tipe}
              onChange={(e) => setNewJob({...newJob, tipe: e.target.value})}
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Kontrak">Kontrak</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              value={newJob.status}
              onChange={(e) => setNewJob({...newJob, status: e.target.value})}
            >
              <option value="Aktif">Aktif</option>
              <option value="Non-aktif">Non-aktif</option>
            </select>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 min-h-[120px]"
            value={newJob.deskripsi}
            onChange={(e) => setNewJob({...newJob, deskripsi: e.target.value})}
            placeholder="Deskripsi pekerjaan dan persyaratan..."
            required
          />
        </div>
        
        <button 
          onClick={handleAdd}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Tambah Lowongan
        </button>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className={`border rounded-lg overflow-hidden ${
            job.status === "Aktif" ? "border-green-200 bg-green-50" : "border-gray-200 bg-gray-50"
          }`}>
            <div className="p-4 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-lg">{job.posisi}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    job.status === "Aktif" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                  }`}>
                    {job.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-2">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.lokasi}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.gaji || "Gaji negotiable"}
                  </span>
                  <span>{job.tipe}</span>
                </div>
                <p className="text-gray-700 line-clamp-2">{job.deskripsi}</p>
              </div>
              <button
                onClick={() => setJobs(jobs.filter(j => j.id !== job.id))}
                className="text-red-500 hover:text-red-700 p-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobManager;