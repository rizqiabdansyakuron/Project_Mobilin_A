import React, { useState } from "react";

const Pengaturan = () => {
  const [activeTab, setActiveTab] = useState("umum");
  const [formData, setFormData] = useState({
    namaToko: "Mobilin Jaya Abadi",
    email: "kontak@mobilin.com",
    telepon: "+6281234567890",
    alamat: "Jl. Raya Mobil No. 123, Jakarta",
    jamOperasional: "09:00 - 17:00",
    notifikasiEmail: true,
    notifikasiSMS: false,
    tema: "terang",
    bahasa: "id",
    metodePembayaran: ["transfer", "tunai"],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePaymentMethodChange = (method) => {
    const updatedMethods = formData.metodePembayaran.includes(method)
      ? formData.metodePembayaran.filter((m) => m !== method)
      : [...formData.metodePembayaran, method];
    
    setFormData({
      ...formData,
      metodePembayaran: updatedMethods,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pengaturan berhasil disimpan!");
    // Here you would typically send the data to your backend
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-[Inter, sans-serif]">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Pengaturan</h1>
          <p className="text-gray-600 mt-2">Kelola preferensi dan informasi toko mobil Anda</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab("umum")}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === "umum" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                <i className="fas fa-cog mr-2"></i>
                Umum
              </button>
              <button
                onClick={() => setActiveTab("notifikasi")}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === "notifikasi" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                <i className="fas fa-bell mr-2"></i>
                Notifikasi
              </button>
              <button
                onClick={() => setActiveTab("keamanan")}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === "keamanan" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                <i className="fas fa-shield-alt mr-2"></i>
                Keamanan
              </button>
              <button
                onClick={() => setActiveTab("pembayaran")}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === "pembayaran" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                <i className="fas fa-credit-card mr-2"></i>
                Pembayaran
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* General Settings */}
            {activeTab === "umum" && (
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Informasi Toko</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="namaToko" className="block text-sm font-medium text-gray-700 mb-1">
                          Nama Toko
                        </label>
                        <input
                          type="text"
                          id="namaToko"
                          name="namaToko"
                          value={formData.namaToko}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="telepon" className="block text-sm font-medium text-gray-700 mb-1">
                          Nomor Telepon
                        </label>
                        <input
                          type="tel"
                          id="telepon"
                          name="telepon"
                          value={formData.telepon}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="jamOperasional" className="block text-sm font-medium text-gray-700 mb-1">
                          Jam Operasional
                        </label>
                        <input
                          type="text"
                          id="jamOperasional"
                          name="jamOperasional"
                          value={formData.jamOperasional}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="alamat" className="block text-sm font-medium text-gray-700 mb-1">
                          Alamat
                        </label>
                        <textarea
                          id="alamat"
                          name="alamat"
                          rows={3}
                          value={formData.alamat}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Preferensi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="bahasa" className="block text-sm font-medium text-gray-700 mb-1">
                          Bahasa
                        </label>
                        <select
                          id="bahasa"
                          name="bahasa"
                          value={formData.bahasa}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="id">Bahasa Indonesia</option>
                          <option value="en">English</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="tema" className="block text-sm font-medium text-gray-700 mb-1">
                          Tema Tampilan
                        </label>
                        <select
                          id="tema"
                          name="tema"
                          value={formData.tema}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="terang">Terang</option>
                          <option value="gelap">Gelap</option>
                          <option value="sistem">Sesuai Sistem</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Simpan Perubahan
                  </button>
                </div>
              </form>
            )}

            {/* Notification Settings */}
            {activeTab === "notifikasi" && (
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Preferensi Notifikasi</h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="notifikasiEmail"
                            name="notifikasiEmail"
                            type="checkbox"
                            checked={formData.notifikasiEmail}
                            onChange={handleChange}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="notifikasiEmail" className="font-medium text-gray-700">
                            Email Notifikasi
                          </label>
                          <p className="text-gray-500">
                            Dapatkan pemberitahuan melalui email tentang transaksi dan aktivitas akun
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="notifikasiSMS"
                            name="notifikasiSMS"
                            type="checkbox"
                            checked={formData.notifikasiSMS}
                            onChange={handleChange}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="notifikasiSMS" className="font-medium text-gray-700">
                            SMS Notifikasi
                          </label>
                          <p className="text-gray-500">
                            Dapatkan pemberitahuan melalui SMS tentang transaksi penting
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Jenis Notifikasi</h2>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">
                            Pembelian Baru
                          </span>
                          <div className="flex items-center">
                            <span className="mr-3 text-sm text-gray-500">Email</span>
                            <label className="inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">
                            Pembayaran Diterima
                          </span>
                          <div className="flex items-center">
                            <span className="mr-3 text-sm text-gray-500">Email & SMS</span>
                            <label className="inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">
                            Mobil Dikembalikan
                          </span>
                          <div className="flex items-center">
                            <span className="mr-3 text-sm text-gray-500">Email</span>
                            <label className="inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Simpan Perubahan
                  </button>
                </div>
              </form>
            )}

            {/* Security Settings */}
            {activeTab === "keamanan" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Keamanan Akun</h2>
                  <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-200">
                    <div className="p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-gray-900">Kata Sandi</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Terakhir diubah 3 bulan yang lalu
                        </p>
                      </div>
                      <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                        Ubah
                      </button>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-gray-900">Verifikasi 2 Langkah</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Tambahkan lapisan keamanan ekstra ke akun Anda
                        </p>
                      </div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-gray-900">Perangkat Terkoneksi</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          3 perangkat aktif
                        </p>
                      </div>
                      <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                        Kelola
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <i className="fas fa-exclamation-triangle text-red-400"></i>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">Hapus Akun</h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>
                          Setelah menghapus akun Anda, semua data akan dihapus secara permanen.
                        </p>
                      </div>
                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          Hapus Akun Saya
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Payment Settings */}
            {activeTab === "pembayaran" && (
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Metode Pembayaran</h2>
                    <p className="text-sm text-gray-500 mb-4">
                      Pilih metode pembayaran yang akan ditampilkan kepada pelanggan
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="transfer"
                            name="transfer"
                            type="checkbox"
                            checked={formData.metodePembayaran.includes("transfer")}
                            onChange={() => handlePaymentMethodChange("transfer")}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="transfer" className="font-medium text-gray-700">
                            Transfer Bank
                          </label>
                          <p className="text-gray-500">
                            Pelanggan dapat membayar melalui transfer bank
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="tunai"
                            name="tunai"
                            type="checkbox"
                            checked={formData.metodePembayaran.includes("tunai")}
                            onChange={() => handlePaymentMethodChange("tunai")}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="tunai" className="font-medium text-gray-700">
                            Tunai (COD)
                          </label>
                          <p className="text-gray-500">
                            Pembayaran tunai saat mobil diambil/dikirim
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="kredit"
                            name="kredit"
                            type="checkbox"
                            checked={formData.metodePembayaran.includes("kredit")}
                            onChange={() => handlePaymentMethodChange("kredit")}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="kredit" className="font-medium text-gray-700">
                            Kredit Mobil
                          </label>
                          <p className="text-gray-500">
                            Penawaran pembiayaan melalui mitra kami
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Rekening Bank</h2>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <i className="fas fa-university text-blue-600"></i>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">BCA</h3>
                            <p className="text-sm text-gray-500">1234567890</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <i className="fas fa-pencil-alt"></i>
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <i className="fas fa-plus-circle mr-2"></i>
                        Tambah Rekening Bank
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Simpan Perubahan
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pengaturan;