import {
  ArrowDownRight,
  ArrowUpRight,
  Briefcase,
  FileText,
  MoreHorizontal,
  TrendingUp,
  Users,
} from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      label: "Total Artikel",
      value: "128",
      icon: FileText,
      gradient: "from-blue-500 to-blue-600",
      bgLight: "bg-blue-50",
      iconColor: "text-blue-500",
      change: "+12%",
      isUp: true,
    },
    {
      label: "Lowongan Aktif",
      value: "24",
      icon: Briefcase,
      gradient: "from-emerald-500 to-emerald-600",
      bgLight: "bg-emerald-50",
      iconColor: "text-emerald-500",
      change: "+8%",
      isUp: true,
    },
    {
      label: "Total Pelamar",
      value: "1,482",
      icon: Users,
      gradient: "from-violet-500 to-violet-600",
      bgLight: "bg-violet-50",
      iconColor: "text-violet-500",
      change: "+24%",
      isUp: true,
    },
    {
      label: "Visitor Bulan Ini",
      value: "48.2K",
      icon: TrendingUp,
      gradient: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-50",
      iconColor: "text-amber-500",
      change: "-3%",
      isUp: false,
    },
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Artikel baru dipublikasikan",
      time: "2 menit lalu",
      type: "blog",
      color: "bg-blue-500",
    },
    {
      id: 2,
      action: "Pelamar baru untuk posisi Designer",
      time: "15 menit lalu",
      type: "karir",
      color: "bg-emerald-500",
    },
    {
      id: 3,
      action: "Tim baru ditambahkan",
      time: "1 jam lalu",
      type: "tim",
      color: "bg-violet-500",
    },
    {
      id: 4,
      action: "Lowongan Developer ditutup",
      time: "3 jam lalu",
      type: "karir",
      color: "bg-amber-500",
    },
    {
      id: 5,
      action: "Konten beranda diperbarui",
      time: "5 jam lalu",
      type: "konten",
      color: "bg-rose-500",
    },
  ];

  const chartData = [
    { day: "Sen", value: 65 },
    { day: "Sel", value: 45 },
    { day: "Rab", value: 80 },
    { day: "Kam", value: 55 },
    { day: "Jum", value: 90 },
    { day: "Sab", value: 40 },
    { day: "Min", value: 70 },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Dashboard Overview
        </h1>
        <p className="text-gray-500 mt-1">
          Selamat datang kembali! Berikut ringkasan aktivitas terbaru.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 border border-gray-100 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 ${stat.bgLight} rounded-xl flex items-center justify-center transition-transform group-hover:scale-110`}
              >
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
              <span
                className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                  stat.isUp
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-red-50 text-red-500"
                }`}
              >
                {stat.isUp ? (
                  <ArrowUpRight size={14} />
                ) : (
                  <ArrowDownRight size={14} />
                )}
                {stat.change}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Charts & Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Card */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-semibold text-gray-900">
                Statistik Pengunjung
              </h3>
              <p className="text-sm text-gray-500">7 hari terakhir</p>
            </div>
            <select className="text-sm bg-gray-100 rounded-xl px-4 py-2.5 outline-none cursor-pointer hover:bg-gray-200 transition-colors">
              <option>7 Hari Terakhir</option>
              <option>30 Hari Terakhir</option>
              <option>3 Bulan Terakhir</option>
            </select>
          </div>

          {/* Bar Chart */}
          <div className="h-64 flex items-end justify-between gap-2 sm:gap-4 px-2">
            {chartData.map((item, i) => (
              <div
                key={item.day}
                className="flex-1 flex flex-col items-center gap-2"
              >
                <div className="relative w-full group/bar">
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                    {item.value}%
                  </div>
                  <div
                    className="w-full bg-gradient-to-t from-blue-500 to-violet-500 rounded-t-lg transition-all duration-500 hover:from-blue-600 hover:to-violet-600 cursor-pointer"
                    style={{ height: `${(item.value / 100) * 200}px` }}
                  ></div>
                </div>
                <span className="text-xs font-medium text-gray-500">
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Aktivitas Terbaru</h3>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreHorizontal size={18} className="text-gray-400" />
            </button>
          </div>

          <div className="space-y-3">
            {recentActivity.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${item.color} group-hover:scale-125 transition-transform`}
                ></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-800 group-hover:text-gray-900 transition-colors">
                    {item.action}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 py-2.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-colors">
            Lihat Semua Aktivitas
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-6 sm:p-8 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">Butuh bantuan?</h3>
            <p className="text-blue-100 text-sm">
              Hubungi tim support kami untuk pertanyaan seputar dashboard.
            </p>
          </div>
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg shadow-blue-700/25">
            Hubungi Support
          </button>
        </div>
      </div>
    </div>
  );
}
