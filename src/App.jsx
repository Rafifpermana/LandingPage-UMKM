import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";

export default function App() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang-kami" element={<AboutPage />} />
          <Route path="/tim-kami" element={<TeamPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
