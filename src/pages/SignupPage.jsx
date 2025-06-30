import { useState } from "react";
import { userAPI } from "../services/userAPI";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Cek apakah email sudah terdaftar
      const existingUser = await userAPI.fetchByEmail(email);
      if (existingUser) {
        alert("❌ Email sudah terdaftar.");
        setLoading(false);
        return;
      }

      // Simpan user baru sebagai guest
      await userAPI.create({
        email,
        password,
        role: "guest",
      });

      alert("✅ Akun berhasil dibuat! Mengarahkan ke halaman utama...");
      window.location.href = "https://mobilin.web.id"; // Redirect ke halaman utama
    } catch (error) {
      console.error(error);
      alert("❌ Gagal membuat akun. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
        <div className="flex justify-center mb-6">
          <img
            src="/img/LOGO.png"
            alt="Mobilin Logo"
            className="h-14 w-14 object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/56";
            }}
          />
        </div>
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
          Daftar akun guest
        </h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md 
                       text-gray-800 placeholder-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md 
                       text-gray-800 placeholder-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Mendaftarkan..." : "SIGN UP"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Sudah punya akun?{" "}
          <a
            href="http://localhost:5173/"
            className="text-purple-600 hover:underline"
          >
            Login di sini
          </a>
        </p>
      </div>
    </div>
  );
}
