import AdminLoginForm from "../components/Admin/LoginComponent";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Blobs */}
        <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-blue-600/20 rounded-full blur-[100px] animate-blob"></div>
        <div
          className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vw] bg-purple-600/20 rounded-full blur-[100px] animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] bg-cyan-600/10 rounded-full blur-[100px] animate-blob"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      {/* Main Content */}
      <AdminLoginForm />
    </div>
  );
}
