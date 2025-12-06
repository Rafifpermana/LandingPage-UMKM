import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

//user pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const MarketplacePage = lazy(() => import("./pages/MarketplacePage"));
const InternshipPage = lazy(() => import("./pages/InternshipPage"));
const TrainingPage = lazy(() => import("./pages/TrainingPage"));
const IncubationPage = lazy(() => import("./pages/IncubationPage"));
const UmkmDaysPage = lazy(() => import("./pages/UmkmDaysPage"));
const ProHirePage = lazy(() => import("./pages/ProHirePage"));
const InternshipHirePage = lazy(() => import("./pages/InternshipHirePage"));
const VolunteerPage = lazy(() => import("./pages/VolunteerPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ProductRegistrationPage = lazy(() =>
  import("./pages/ProductRegistrationPage")
);
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));

//admin pages
const LoginPageAdmin = lazy(() => import("./pages/LoginPageAdmin"));
const AdminLayout = lazy(() =>
  import("./components/Admin/LayoutDasboard/AdminLayout")
);
const DashboardPage = lazy(() => import("./pages/admin/DashboardPage"));
const BlogManagementPage = lazy(() =>
  import("./pages/admin/BlogManagementPage")
);
const CarerManagementPage = lazy(() =>
  import("./pages/admin/CareerManagementPage")
);
const TeamManagementPage = lazy(() =>
  import("./pages/admin/TeamManagementPage")
);

//loding animations
import AdminLoading from "./components/Loaders/AdminLoading";
import UserLoading from "./components/Loaders/UserLoading";

export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="bg-white text-gray-800 font-sans">
      <ScrollToTop />
      {!isAdminRoute && <Header />}

      <main>
        <Suspense fallback={isAdminRoute ? <AdminLoading /> : <UserLoading />}>
          <Routes>
            {/* RUTE PRIORITAS  */}
            <Route path="/admin/login" element={<LoginPageAdmin />} />

            {/* RUTE PUBLIK */}
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang-kami" element={<AboutPage />} />
            <Route path="/tim-kami" element={<TeamPage />} />
            <Route path="/pasar-umkm" element={<MarketplacePage />} />
            <Route path="/magang-relawan" element={<InternshipPage />} />
            <Route path="/training-umkm" element={<TrainingPage />} />
            <Route path="/inkubasi" element={<IncubationPage />} />
            <Route path="/umkm-days" element={<UmkmDaysPage />} />
            <Route path="/karir-prohire" element={<ProHirePage />} />
            <Route path="/karir-magang" element={<InternshipHirePage />} />
            <Route path="/karir-relawan" element={<VolunteerPage />} />
            <Route path="/kontak" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route
              path="/daftar-produk"
              element={<ProductRegistrationPage />}
            />

            {/* {RUTE ADMIN } */}
            <Route path="/admin" element={<ProtectedRoute />}>
              <Route element={<AdminLayout />}>
                <Route index element={<DashboardPage />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="karir" element={<CarerManagementPage />} />
                <Route path="blog" element={<BlogManagementPage />} />
                <Route path="tim" element={<TeamManagementPage />} />
                <Route
                  path="konten"
                  element={
                    <div className="p-8 text-2xl">Halaman Konten Beranda</div>
                  }
                />
              </Route>
            </Route>

            <Route
              path="*"
              element={
                <div className="flex items-center justify-center min-h-screen text-xl text-gray-500">
                  Halaman tidak ditemukan (404)
                </div>
              }
            />
          </Routes>
        </Suspense>
      </main>

      {!isAdminRoute && <Footer />}
    </div>
  );
}
