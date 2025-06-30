import React, { Suspense, lazy, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar"; // jangan ubah penulisan
import LoadingScreen from "./components/LoadingScreen";
import "./assets/tailwind.css";

import { ThemeProvider, useTheme } from "./context/ThemeContext";

// Halaman
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const Orders = lazy(() => import("./pages/Orders"));
const Mobil = lazy(() => import("./pages/Mobil"));
const MobilDetail = lazy(() => import("./pages/Detail/DetailMobil"));
const TestDrive = lazy(() => import("./pages/TestDrive"));
const DetailTestDrive = lazy(() => import("./pages/Detail/DetailTestDrive"));
const DetailPesansaranManajer = lazy(() => import("./pages/DetailPesansaranManajer"));
const Errormobilin = lazy(() => import("./pages/Errormobilin"));
const ManajemenLokasi = lazy(() => import("./pages/ManajemenLokasi"));
const ArtikelManager = lazy(() => import("./components/ArtikelManager"));
const FaqManager = lazy(() => import("./components/FaqManager"));
const TeamManager = lazy(() => import("./components/Admin/TeamManager"));
const JobManager = lazy(() => import("./components/Admin/JobManager"));
const PesanSaranManager = lazy(() => import("./pages/Pesansaranmanager"));

// Tambahan login dan guest
const SignupPage = lazy(() => import("./pages/SignupPage"));
const Login = lazy(() => import("./pages/Login")); // kamu buat sendiri ya
const GuestPage = lazy(() => import("./pages/GuestPage")); // halaman guest sementara

function AppContent() {
  const { isDark } = useTheme();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Halaman tanpa sidebar/navbar
  const plainRoutes = ["/", "/guest", "/signup"]; // <- signup ditambahkan di sini

  const isPlain = plainRoutes.includes(location.pathname);

  return (
    <div className={`min-h-screen flex ${isDark ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"}`}>
      {!isPlain && isSidebarOpen && <Sidebar />}
      <div className="flex-1">
        {!isPlain && <Navbar onToggleSidebar={toggleSidebar} />}
        <div className="p-4">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>

              {/* Login, Signup & Guest */}
              <Route path="/" element={<Login />} />
              <Route path="/guest" element={<GuestPage />} />
              <Route path="/signup" element={<SignupPage />} />

              {/* Dashboard & Admin */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/mobil" element={<Mobil />} />
              <Route path="/mobil/:id" element={<MobilDetail />} />
              <Route path="/test-drive" element={<TestDrive />} />
              <Route path="/test-drive/:id" element={<DetailTestDrive />} />
              <Route path="/admin/artikel" element={<ArtikelManager />} />
              <Route path="/admin/faq" element={<FaqManager />} />
              <Route path="/admin/tim" element={<TeamManager />} />
              <Route path="/admin/lowongan" element={<JobManager />} />
              <Route path="/pesansaran" element={<PesanSaranManager />} />
              <Route path="/pesansaran/:id" element={<DetailPesansaranManajer />} />
              <Route path="/lokasi" element={<ManajemenLokasi />} />

              {/* Error Fallback */}
              <Route path="*" element={<Errormobilin />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
