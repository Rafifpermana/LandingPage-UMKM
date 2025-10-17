import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import MarketplacePage from "./pages/MarketplacePage";
import InternshipPage from "./pages/InternshipPage";
import TrainingPage from "./pages/TrainingPage";
import IncubationPage from "./pages/IncubationPage";

export default function App() {
  return (
    <div className="bg-white text-gray-800">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang-kami" element={<AboutPage />} />
          <Route path="/tim-kami" element={<TeamPage />} />
          <Route path="/pasar-umkm" element={<MarketplacePage />} />
          <Route path="/magang-relawan" element={<InternshipPage />} />
          <Route path="/training-umkm" element={<TrainingPage />} />
          <Route path="/inkubasi" element={<IncubationPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
