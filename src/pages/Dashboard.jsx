import { FaStar, FaMoneyBillWave } from "react-icons/fa";
import { LineChart, Line, Tooltip, ResponsiveContainer, CartesianGrid, XAxis, YAxis } from "recharts";
import PageHeader from "../components/PageHeader";

const data = [
  { name: "Sen", upload: 3 },
  { name: "Sel", upload: 5 },
  { name: "Rab", upload: 2 },
  { name: "Kam", upload: 8 },
  { name: "Jum", upload: 4 },
  { name: "Sab", upload: 6 },
  { name: "Min", upload: 7 },
];

export default function Dashboard() {
  return (
    <div id="dashboard-container">
      <PageHeader />

      <div className="p-5 grid md:grid-cols-3 gap-6">
        {/* Mobil Terfavorit */}
        <div className="bg-white rounded-xl shadow-md p-5 flex items-center space-x-4 hover:shadow-lg transition">
          <div className="bg-purple-600 text-white rounded-full p-4">
            <FaStar className="text-xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Mobil Terfavorit</p>
            <p className="font-bold text-lg">Toyota Avanza 2015</p>
          </div>
        </div>

        {/* Total Penjualan */}
        <div className="bg-white rounded-xl shadow-md p-5 flex items-center space-x-4 hover:shadow-lg transition">
          <div className="bg-green-500 text-white rounded-full p-4">
            <FaMoneyBillWave className="text-xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Penjualan</p>
            <p className="font-bold text-lg">Rp 12.500.000</p>
          </div>
        </div>

        {/* Grafik Tren Upload Mobil */}
        <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition col-span-1 md:col-span-1">
          <h3 className="font-semibold text-gray-700 mb-2">Upload Mobil Mingguan</h3>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis hide />
              <Tooltip />
              <Line type="monotone" dataKey="upload" stroke="#4F46E5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
