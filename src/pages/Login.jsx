import { useNavigate } from "react-router-dom";
import { userAPI } from "../services/userAPI";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const user = await userAPI.fetchByEmail(email);

    if (!user) return alert("❌ User tidak ditemukan");
    if (user.password !== password) return alert("❌ Password salah");

    if (user.role === "admin") {
      alert("✅ Selamat! Anda berhasil login sebagai admin.");
      navigate("/dashboard");
    } else if (user.role === "guest") {
      alert("✅ Anda berhasil login sebagai guest.");
      window.location.href = "https://www.mobilin.web.id/";
    } else {
      alert("⚠️ Role tidak dikenali");
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
          Welcome back.
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
          <div className="text-right text-sm text-gray-500">
            <a href="#" className="hover:underline">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition"
          >
            LOGIN
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-purple-600 hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
