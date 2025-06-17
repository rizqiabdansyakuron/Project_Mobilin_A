import React, { Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/navbar"; // jangan ubah penulisan
import LoadingScreen from "./components/LoadingScreen";
// import QuoteBox from "./components/QuoteBox";
import './assets/tailwind.css';

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
const Pembeli = lazy(() => import("./pages/Pembeli"));
const Errormobilin = lazy(() => import("./pages/Errormobilin"));
const ManajemenLokasi = lazy(() => import("./pages/ManajemenLokasi"));

// Komponen admin
const ArtikelManager = lazy(() => import("./components/ArtikelManager"));
const FaqManager = lazy(() => import("./components/FaqManager"));
const TeamManager = lazy(() => import("./components/Admin/TeamManager"));
const JobManager = lazy(() => import("./components/Admin/JobManager"));
const PesanSaranManager = lazy(() => import("./pages/Pesansaranmanager"));
const Notes = lazy(() => import("./pages/Notes"));

function AppContent() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const { isDark } = useTheme();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`min-h-screen flex ${isDark ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"}`}>
      {isSidebarOpen && <Sidebar />}
      <div className="flex-1">
        <Navbar onToggleSidebar={toggleSidebar} />
        {/* <div className="px-4"><QuoteBox /></div> */}
        <div className="p-4">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              {/* Rute utama */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/mobil" element={<Mobil />} />
              <Route path="/mobil/:id" element={<MobilDetail />} />
              <Route path="/test-drive" element={<TestDrive />} />
              <Route path="/test-drive/:id" element={<DetailTestDrive />} />
              <Route path="/pembeli" element={<Pembeli />} />
              <Route path="/notes" element={<Notes />} />

              {/* Admin */}
              <Route path="/admin/artikel" element={<ArtikelManager />} />
              <Route path="/admin/faq" element={<FaqManager />} />
              <Route path="/admin/tim" element={<TeamManager />} />
              <Route path="/admin/lowongan" element={<JobManager />} />
              <Route path="/pesansaran" element={<PesanSaranManager />} />
              <Route path="/pesansaran/:id" element={<DetailPesansaranManajer />} />
              <Route path="/lokasi" element={<ManajemenLokasi />} />

              {/* Fallback */}
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
