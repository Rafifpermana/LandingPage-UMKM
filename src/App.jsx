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
import UmkmDaysPage from "./pages/UmkmDaysPage";
import ProHirePage from "./pages/ProHirePage";
import InternshipHirePage from "./pages/InternshipHirePage";
import VolunteerPage from "./pages/VolunteerPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";

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
          <Route path="/umkm-days" element={<UmkmDaysPage />} />
          <Route path="/karir-prohire" element={<ProHirePage />} />
          <Route path="/karir-magang" element={<InternshipHirePage />} />
          <Route path="/karir-relawan" element={<VolunteerPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
