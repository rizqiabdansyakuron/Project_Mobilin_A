import { useEffect, useState } from "react";
import { karyawanAPI } from "../../services/karyawanAPI";
import { useTheme } from "../../context/ThemeContext"

const BASE_URL = import.meta.env.DEV
  ? "http://localhost:5173"
  : "https://mobilin.com";

const fixImagePath = (path) => {
  if (!path || path.trim() === "") return "/img/Karyawan/default.png";
  return path.replace("/image/karyawan/", "/img/Karyawan/");
};

const TeamManager = () => {
  const { isDark } = useTheme();
  const [team, setTeam] = useState([]);
  const [newMember, setNewMember] = useState({
    nama: "",
    jabatan: "",
    email: "",
    deskripsi: "",
    foto: "",
    telepon: "",
    tanggal_join: "",
  });

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

  const handleAdd = async () => {
    if (!newMember.nama || !newMember.jabatan) return;

    const dataToSend = {
      ...newMember,
      foto: newMember.foto.trim() === "" ? "/image/karyawan/default.png" : newMember.foto.trim(),
    };

    try {
      await karyawanAPI.create(dataToSend);
      const updatedData = await karyawanAPI.fetch();
      setTeam(updatedData);
      setNewMember({
        nama: "",
        jabatan: "",
        email: "",
        deskripsi: "",
        foto: "",
        telepon: "",
        tanggal_join: "",
      });
    } catch (error) {
      console.error("Gagal tambah karyawan:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await karyawanAPI.delete(id);
      setTeam(team.filter((member) => member.id_karyawan !== id));
    } catch (error) {
      console.error("Gagal hapus karyawan:", error);
    }
  };

  // Dynamic classes based on theme
  const containerClass = isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900";
  const formBgClass = isDark ? "bg-gray-800" : "bg-gray-50";
  const borderClass = isDark ? "border-gray-700" : "border-gray-200";
  const inputClass = `w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200 ${
    isDark ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
           : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
  }`;
  const cardClass = `rounded-lg overflow-hidden hover:shadow-md transition-shadow ${
    isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
  }`;

  return (
    <div className={`rounded-xl shadow-md overflow-hidden p-6 ${containerClass}`}>
      <h2 className="text-2xl font-bold mb-6">
        Manajemen Tim
      </h2>

      {/* Form Tambah */}
      <div className={`p-5 rounded-lg mb-8 border ${formBgClass} ${borderClass}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            value={newMember.nama}
            onChange={(e) => setNewMember({ ...newMember, nama: e.target.value })}
            placeholder="Nama lengkap"
            className={inputClass}
          />
          <input
            type="text"
            value={newMember.jabatan}
            onChange={(e) => setNewMember({ ...newMember, jabatan: e.target.value })}
            placeholder="Jabatan"
            className={inputClass}
          />
          <input
            type="email"
            value={newMember.email}
            onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
            placeholder="Email"
            className={inputClass}
          />
          <input
            type="text"
            value={newMember.telepon}
            onChange={(e) => setNewMember({ ...newMember, telepon: e.target.value })}
            placeholder="Nomor Telepon"
            className={inputClass}
          />
          <input
            type="date"
            value={newMember.tanggal_join}
            onChange={(e) => setNewMember({ ...newMember, tanggal_join: e.target.value })}
            className={inputClass}
          />
          <input
            type="text"
            value={newMember.foto}
            onChange={(e) => setNewMember({ ...newMember, foto: e.target.value })}
            placeholder="/image/karyawan/1.png"
            className={inputClass}
          />
          <textarea
            value={newMember.deskripsi}
            onChange={(e) => setNewMember({ ...newMember, deskripsi: e.target.value })}
            placeholder="Deskripsi singkat"
            className={`${inputClass} md:col-span-3`}
            rows={3}
          />
        </div>

        <button
          onClick={handleAdd}
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-lg transition-colors duration-200"
        >
          Tambah Anggota
        </button>
      </div>

      {/* Daftar Tim */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {team.map((member) => (
          <div
            key={member.id_karyawan}
            className={`border ${cardClass}`}
          >
            <div className={`w-full aspect-[3/2] ${isDark ? "bg-gray-700" : "bg-gray-100"} overflow-hidden`}>
              <img
                src={`${BASE_URL}${fixImagePath(member.foto)}`}
                alt={member.nama}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className={`font-bold text-lg ${isDark ? "text-white" : "text-gray-900"}`}>
                {member.nama}
              </h3>
              <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {member.jabatan}
              </p>
              {member.deskripsi && (
                <p className={`mt-2 text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  {member.deskripsi}
                </p>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className={`block mt-2 text-sm ${isDark ? "text-yellow-400" : "text-yellow-600"} hover:underline`}
                >
                  {member.email}
                </a>
              )}
              {member.telepon && (
                <p className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  {member.telepon}
                </p>
              )}
              {member.tanggal_join && (
                <p className={`text-xs mt-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                  Bergabung: {new Date(member.tanggal_join).toLocaleDateString("id-ID")}
                </p>
              )}
              <button
                onClick={() => handleDelete(member.id_karyawan)}
                className={`mt-3 text-sm transition-colors duration-200 ${
                  isDark ? "text-red-400 hover:text-red-300" : "text-red-500 hover:text-red-700"
                }`}
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamManager;