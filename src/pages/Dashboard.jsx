import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-[Inter, sans-serif]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Mobilin</h1>
          <p className="text-gray-600 mt-2">Manajemen penjualan mobil bekas Anda</p>
        </div>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {/* Total Mobil Terdaftar */}
          <article className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-600 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Mobil</p>
                <p className="text-2xl font-bold mt-1 text-gray-800">142</p>
                <p className="text-xs mt-2">
                  <span className="text-green-500 font-semibold">↑ 8.2%</span> bulan lalu
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <i className="fas fa-car text-lg"></i>
              </div>
            </div>
          </article>

          {/* Mobil Terjual */}
          <article className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-600 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Terjual</p>
                <p className="text-2xl font-bold mt-1 text-gray-800">28</p>
                <p className="text-xs mt-2">
                  <span className="text-green-500 font-semibold">↑ 15.3%</span> bulan lalu
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg text-green-600">
                <i className="fas fa-check-circle text-lg"></i>
              </div>
            </div>
          </article>

          {/* Pendapatan */}
          <article className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-600 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Pendapatan</p>
                <p className="text-2xl font-bold mt-1 text-gray-800">Rp1.2M</p>
                <p className="text-xs mt-2">
                  <span className="text-green-500 font-semibold">↑ 22.1%</span> bulan lalu
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                <i className="fas fa-wallet text-lg"></i>
              </div>
            </div>
          </article>

          {/* Rating */}
          <article className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-500 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Rating</p>
                <p className="text-2xl font-bold mt-1 text-gray-800">4.8</p>
                <p className="text-xs mt-2">
                  <span className="text-green-500 font-semibold">↑ 0.3</span> dari bulan lalu
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg text-yellow-600">
                <i className="fas fa-star text-lg"></i>
              </div>
            </div>
          </article>
        </section>

        {/* Chart and Recent Transactions */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sales Chart */}
          <article className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Statistik Penjualan</h2>
              <select className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>30 Hari Terakhir</option>
                <option>3 Bulan Terakhir</option>
                <option>Tahun Ini</option>
              </select>
            </div>
            <div className="h-64 sm:h-80 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
              <p className="text-gray-500">Grafik penjualan mobil akan muncul di sini</p>
            </div>
          </article>

          {/* Recent Transactions */}
          <article className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Transaksi Terkini</h2>
              <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                Lihat Semua
              </button>
            </div>
            
            <div className="space-y-4">
              {/* Transaction 1 */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <i className="fas fa-car text-blue-600 text-lg"></i>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-gray-900">Toyota Avanza</h3>
                    <span className="text-green-600 font-semibold">Rp185jt</span>
                  </div>
                  <p className="text-sm text-gray-500">12 Juli 2023 • Bandung</p>
                </div>
              </div>
              
              {/* Transaction 2 */}
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <i className="fas fa-car text-green-600 text-lg"></i>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-gray-900">Honda HR-V</h3>
                    <span className="text-green-600 font-semibold">Rp325jt</span>
                  </div>
                  <p className="text-sm text-gray-500">10 Juli 2023 • Jakarta</p>
                </div>
              </div>
              
              {/* Transaction 3 */}
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <i className="fas fa-car text-purple-600 text-lg"></i>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-gray-900">Mitsubishi Xpander</h3>
                    <span className="text-green-600 font-semibold">Rp275jt</span>
                  </div>
                  <p className="text-sm text-gray-500">8 Juli 2023 • Surabaya</p>
                </div>
              </div>
              
              {/* Transaction 4 */}
              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                  <i className="fas fa-car text-yellow-600 text-lg"></i>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-gray-900">Suzuki Ertiga</h3>
                    <span className="text-green-600 font-semibold">Rp210jt</span>
                  </div>
                  <p className="text-sm text-gray-500">5 Juli 2023 • Medan</p>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* Popular Cars */}
        <section className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Mobil Paling Dicari</h2>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
              Lihat Semua
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Car 1 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <i className="fas fa-car text-4xl text-gray-400"></i>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Toyota Avanza 2020</h3>
                <p className="text-blue-600 font-bold mt-1">Rp185.000.000</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <i className="fas fa-road mr-1"></i>
                  <span className="mr-3">25.000 km</span>
                  <i className="fas fa-gas-pump mr-1"></i>
                  <span>Bensin</span>
                </div>
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                  <span className="text-yellow-500">
                    <i className="fas fa-star"></i> 4.8
                  </span>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                    Detail
                  </button>
                </div>
              </div>
            </div>
            
            {/* Car 2 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <i className="fas fa-car text-4xl text-gray-400"></i>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Honda HR-V 2019</h3>
                <p className="text-blue-600 font-bold mt-1">Rp325.000.000</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <i className="fas fa-road mr-1"></i>
                  <span className="mr-3">35.000 km</span>
                  <i className="fas fa-gas-pump mr-1"></i>
                  <span>Bensin</span>
                </div>
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                  <span className="text-yellow-500">
                    <i className="fas fa-star"></i> 4.9
                  </span>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                    Detail
                  </button>
                </div>
              </div>
            </div>
            
            {/* Car 3 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <i className="fas fa-car text-4xl text-gray-400"></i>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Mitsubishi Xpander 2021</h3>
                <p className="text-blue-600 font-bold mt-1">Rp275.000.000</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <i className="fas fa-road mr-1"></i>
                  <span className="mr-3">15.000 km</span>
                  <i className="fas fa-gas-pump mr-1"></i>
                  <span>Bensin</span>
                </div>
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                  <span className="text-yellow-500">
                    <i className="fas fa-star"></i> 4.7
                  </span>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                    Detail
                  </button>
                </div>
              </div>
            </div>
            
            {/* Car 4 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <i className="fas fa-car text-4xl text-gray-400"></i>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Suzuki Ertiga 2018</h3>
                <p className="text-blue-600 font-bold mt-1">Rp210.000.000</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <i className="fas fa-road mr-1"></i>
                  <span className="mr-3">45.000 km</span>
                  <i className="fas fa-gas-pump mr-1"></i>
                  <span>Bensin</span>
                </div>
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                  <span className="text-yellow-500">
                    <i className="fas fa-star"></i> 4.6
                  </span>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                    Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;