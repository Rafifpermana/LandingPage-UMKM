import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

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

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <div className="text-center relative">
      <div className="relative inline-block">
        <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            className="w-12 h-12 border-4 border-purple-200 border-b-purple-600 rounded-full animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "0.8s" }}
          ></div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 animate-pulse">
          Memuat halaman
        </h2>
        <div className="flex items-center justify-center space-x-1">
          <span
            className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></span>
          <span
            className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></span>
          <span
            className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></span>
        </div>
      </div>

      <div
        className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        style={{ animation: "blob 7s infinite" }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        style={{ animation: "blob 7s infinite 2s" }}
      ></div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="bg-white text-gray-800">
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
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
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
