import { Bell, ChevronsLeft, ChevronsRight, Search } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Overlay - Hanya muncul di mobile saat sidebar terbuka */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div
        className={`flex-1 min-h-screen transition-all duration-300 ease-in-out ${
          sidebarOpen ? "lg:ml-72" : "lg:ml-0"
        }`}
      >
        {/* Topbar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-200">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors"
                title={sidebarOpen ? "Tutup Sidebar" : "Buka Sidebar"}
              >
                {sidebarOpen ? (
                  <ChevronsLeft size={24} />
                ) : (
                  <ChevronsRight size={24} />
                )}
              </button>

              {/* Search Bar */}
              <div className="hidden sm:flex items-center gap-2 bg-gray-100/50 border border-gray-200 rounded-xl px-4 py-2.5 w-64 lg:w-80 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                <Search size={18} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari sesuatu..."
                  className="bg-transparent text-sm outline-none w-full text-gray-600 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <button className="relative p-2.5 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
              </button>

              <div className="hidden sm:block h-8 w-px bg-gray-200"></div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:block text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    Halo, Admin
                  </p>
                  <p className="text-xs text-gray-500">Super Admin</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/25">
                  AD
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
