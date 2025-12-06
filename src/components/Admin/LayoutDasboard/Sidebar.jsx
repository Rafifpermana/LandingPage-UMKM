import {
  Briefcase,
  FileText,
  Layout,
  LayoutDashboard,
  LogOut,
  Users,
  X,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    alert("Anda telah keluar.");
    navigate("/admin/login");
  };

  const menuItems = [
    { path: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/admin/karir", icon: Briefcase, label: "Manajemen Karir" },
    { path: "/admin/blog", icon: FileText, label: "Manajemen Blog" },
    { path: "/admin/tim", icon: Users, label: "Manajemen Tim" },
    { path: "/admin/konten", icon: Layout, label: "Konten Beranda" },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-72 bg-slate-900 border-r border-white/10 z-50 flex flex-col transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Logo Area */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">UMKM Admin</h2>
              <p className="text-xs text-slate-400">Management Panel</p>
            </div>
          </div>

          {/* Tombol Close HANYA muncul di Mobile */}
          <button
            onClick={onClose}
            className="lg:hidden text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto custom-scrollbar">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 mb-3">
          Menu Utama
        </p>
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              // Di mobile tutup sidebar saat klik, di desktop biarkan
              onClick={() => window.innerWidth < 1024 && onClose()}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/30"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <IconComponent
                    size={20}
                    className={
                      isActive
                        ? "text-white"
                        : "text-slate-400 group-hover:text-white"
                    }
                  />
                  <span className="font-medium text-sm">{item.label}</span>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User Card */}
      <div className="p-4 border-t border-white/10 bg-slate-900">
        <div className="bg-white/5 rounded-xl p-4 mb-3 backdrop-blur-sm border border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm ring-2 ring-white/20">
              AD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                Administrator
              </p>
              <p className="text-xs text-slate-400 truncate">admin@umkm.com</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all duration-200 border border-red-500/10 hover:border-red-500/20"
        >
          <LogOut size={20} />
          <span className="font-medium text-sm">Keluar</span>
        </button>
      </div>
    </aside>
  );
}
