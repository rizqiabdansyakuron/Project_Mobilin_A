import { FaStar, FaMoneyBillWave, FaCar, FaUser } from "react-icons/fa";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import PageHeader from "../components/PageHeader";
import { useTheme } from "../context/ThemeContext"; // pastikan path sesuai

const data = [
  { name: "Sen", upload: 3 },
  { name: "Sel", upload: 5 },
  { name: "Rab", upload: 2 },
  { name: "Kam", upload: 8 },
  { name: "Jum", upload: 4 },
  { name: "Sab", upload: 6 },
  { name: "Min", upload: 7 },
];

const recentActivities = [
  "✅ Tambah mobil: Honda Brio 2020",
  "🗑️ Hapus: Daihatsu Xenia 2014",
  "📈 Update data penjualan",
  "⭐ Tandai favorit: Toyota Rush 2022",
];

export default function Dashboard() {
  const { isDark } = useTheme();

  const background = isDark ? "bg-gray-900" : "bg-gray-100";
  const cardBg = isDark ? "bg-gray-800" : "bg-white";
  const textMain = isDark ? "text-white" : "text-gray-800";
  const textSub = isDark ? "text-gray-400" : "text-gray-500";
  const hoverItem = isDark ? "hover:bg-gray-600" : "hover:bg-gray-100";

  return (
    <div className={`min-h-screen p-6 transition-colors duration-300 ${background}`}>
      <PageHeader title="Dashboard Admin" />

      {/* Statistik Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {[
          {
            title: "Mobil Terfavorit",
            value: "Toyota Avanza 2015",
            icon: <FaStar />,
            color: "bg-purple-600",
          },
          {
            title: "Total Penjualan",
            value: "Rp 12.500.000",
            icon: <FaMoneyBillWave />,
            color: "bg-green-600",
          },
          {
            title: "Jumlah Mobil",
            value: "124 unit",
            icon: <FaCar />,
            color: "bg-blue-600",
          },
          {
            title: "Admin Aktif",
            value: "3 orang",
            icon: <FaUser />,
            color: "bg-yellow-500",
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`shadow rounded-2xl p-5 flex items-center gap-4 hover:scale-[1.02] transition-transform ${cardBg}`}
          >
            <div className={`text-white p-3 rounded-full ${card.color} text-xl`}>
              {card.icon}
            </div>
            <div>
              <p className={`text-sm ${textSub}`}>{card.title}</p>
              <p className={`text-xl font-semibold ${textMain}`}>{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Grafik dan Aktivitas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Grafik Upload */}
        <div className={`shadow rounded-2xl p-5 col-span-2 ${cardBg}`}>
          <h2 className={`text-lg font-semibold mb-4 ${textMain}`}>
            Tren Upload Mobil / Minggu
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke={isDark ? "#ccc" : "#555"} />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? "#1f2937" : "#fff",
                  border: "none",
                  color: isDark ? "#fff" : "#000",
                }}
              />
              <Line
                type="monotone"
                dataKey="upload"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Aktivitas Terakhir */}
        <div className={`shadow rounded-2xl p-5 ${cardBg}`}>
          <h2 className={`text-lg font-semibold mb-4 ${textMain}`}>
            Aktivitas Terakhir
          </h2>
          <ul className="space-y-2 text-sm">
            {recentActivities.map((item, idx) => (
              <li
                key={idx}
                className={`rounded-lg p-3 ${hoverItem} ${textMain} transition`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
