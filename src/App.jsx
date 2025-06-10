import React, { Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/navbar"; // jangan ubah penulisan navbar nya
import LoadingScreen from "./components/LoadingScreen";
// import QuoteBox from "./components/QuoteBox";
import './assets/tailwind.css';

// Komponen utama
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

// Komponen tambahan
const ArtikelManager = lazy(() => import("./components/ArtikelManager"));
const FaqManager = lazy(() => import("./components/FaqManager"));
const TeamManager = lazy(() => import("./components/Admin/TeamManager"));
const JobManager = lazy(() => import("./components/Admin/JobManager"));
const PesanSaranManager = lazy(() => import("./pages/Pesansaranmanager"));
const Notes= lazy(() => import("./pages/Notes"));

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div id="app-container" className="min-h-screen flex bg-gray-100">
      {isSidebarOpen && <Sidebar />}
      <div id="main-content" className="flex-1">
        <Navbar onToggleSidebar={toggleSidebar} />
        {/* <div className="px-4">
          <QuoteBox />
        </div> */}

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
              {/* Rute admin */}
              <Route path="/admin/artikel" element={<ArtikelManager />} />
              <Route path="/admin/faq" element={<FaqManager />} />
              <Route path="/admin/tim" element={<TeamManager />} />
              <Route path="/admin/lowongan" element={<JobManager />} />
              <Route path="/pesansaran" element={<PesanSaranManager />} /> 
              <Route path="/pesansaran/:id" element={<DetailPesansaranManajer />} />
              {/* Fallback */}
              <Route path="*" element={<Errormobilin />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
