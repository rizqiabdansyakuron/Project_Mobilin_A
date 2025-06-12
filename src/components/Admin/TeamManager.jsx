import { useEffect, useState } from "react";
import { karyawanAPI } from "../../services/karyawanAPI";

const TeamManager = () => {
  const [team, setTeam] = useState([]);
  const [newMember, setNewMember] = useState({
    nama: "",
    jabatan: "",
    divisi: "Penjualan",
  });

  // Ambil data dari API saat komponen dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await karyawanAPI.fetch();
        setTeam(data);
      } catch (error) {
        console.error("Gagal fetch karyawan:", error);
      }
    };
    fetchData();
  }, []);

  // Tambahkan anggota baru ke API dan state
  const handleAdd = async () => {
    if (!newMember.nama || !newMember.jabatan) return;

    const payload = {
      ...newMember,
      foto: "/placeholder-avatar.jpg", // Default foto jika tidak ada
    };

    try {
      const created = await karyawanAPI.create([payload]); // Supabase perlu array
      const updatedData = await karyawanAPI.fetch(); // Ambil ulang data dari server
      setTeam(updatedData);
      setNewMember({ nama: "", jabatan: "", divisi: "Penjualan" });
    } catch (error) {
      console.error("Gagal tambah karyawan:", error);
    }
  };

  // Hapus anggota dari API dan perbarui state
  const handleDelete = async (id) => {
    try {
      await karyawanAPI.delete(id);
      setTeam(team.filter((member) => member.id !== id));
    } catch (error) {
      console.error("Gagal hapus karyawan:", error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Manajemen Tim
      </h2>

      {/* Form Tambah */}
      <div className="bg-gray-50 p-5 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
            <input
              type="text"
              value={newMember.nama}
              onChange={(e) => setNewMember({ ...newMember, nama: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Nama anggota tim"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Jabatan</label>
            <input
              type="text"
              value={newMember.jabatan}
              onChange={(e) => setNewMember({ ...newMember, jabatan: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Posisi/jabatan"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Divisi</label>
            <select
              value={newMember.divisi}
              onChange={(e) => setNewMember({ ...newMember, divisi: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            >
              <option value="Penjualan">Penjualan</option>
              <option value="Layanan">Layanan</option>
              <option value="Marketing">Marketing</option>
              <option value="Administrasi">Administrasi</option>
            </select>
          </div>
        </div>
        <button
          onClick={handleAdd}
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Tambah Anggota
        </button>
      </div>

      {/* Daftar Anggota */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {team.map((member) => (
          <div key={member.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="w-full aspect-[3/2] bg-gray-100 overflow-hidden">
              <img
                src={member.foto || "/placeholder-avatar.jpg"}
                alt={member.nama}
                className="w-full h-full object-cover"
                onError={(e) => (e.target.src = "/placeholder-avatar.jpg")}
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{member.nama}</h3>
                  <p className="text-gray-600">{member.jabatan}</p>
                  <span className={`inline-block mt-2 px-2 py-1 text-xs font-semibold rounded-full ${
                    member.divisi === "Penjualan" ? "bg-blue-100 text-blue-800" :
                    member.divisi === "Layanan" ? "bg-green-100 text-green-800" :
                    member.divisi === "Marketing" ? "bg-purple-100 text-purple-800" :
                    "bg-gray-100 text-gray-800"
                  }`}>
                    {member.divisi}
                  </span>
                </div>
                <button
                  onClick={() => handleDelete(member.id)}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamManager;
