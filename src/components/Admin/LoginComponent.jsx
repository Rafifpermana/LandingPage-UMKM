import { AlertCircle, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // --- SIMULASI BACKEND (DUMMY) ---
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (email === "admin@umkmhebat.id" && password === "admin123") {
      localStorage.setItem("adminToken", "ini-adalah-token-rahasia-dummy");

      alert("Login Berhasil!");
      navigate("/admin/dashboard");
    } else {
      setError("Email atau password salah.");
    }
    // -------------------------------

    setIsLoading(false);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl w-full max-w-md relative z-10">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-4 shadow-lg shadow-blue-500/30 transform rotate-3 hover:rotate-6 transition-transform duration-300">
          <Lock className="w-8 h-8 text-white" strokeWidth={2} />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2 tracking-wide">
          Admin Portal
        </h1>
        <p className="text-blue-200 text-sm">
          Masuk untuk mengelola konten UMKM Hebat
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-3 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3 animate-fade-in">
          <AlertCircle className="w-5 h-5 text-red-300 flex-shrink-0" />
          <span className="text-red-200 text-sm font-medium">{error}</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-blue-100 mb-2">
            Email
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="w-5 h-5 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              placeholder="admin@umkmhebat.id"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-blue-100 mb-2">
            Password
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="w-5 h-5 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-10 pr-12 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Options */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-slate-600 bg-slate-900/50 text-blue-500 focus:ring-blue-500/50 focus:ring-offset-0 cursor-pointer"
            />
            <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
              Ingat saya
            </span>
          </label>
          <button
            type="button"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            Lupa password?
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !email || !password}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:from-slate-700 disabled:to-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Memproses...</span>
            </>
          ) : (
            <span>Masuk Dashboard</span>
          )}
        </button>
      </form>

      {/* Footer Demo Info */}
      <div className="mt-8 pt-6 border-t border-white/10 text-center">
        <p className="text-slate-500 text-xs">
          Kredensial Demo: <br />
          <span className="font-mono text-blue-300">
            admin@umkmhebat.id
          </span> / <span className="font-mono text-blue-300">admin123</span>
        </p>
      </div>
    </div>
  );
}
