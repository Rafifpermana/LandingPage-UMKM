import Hero from "../components/HomePageComponents/Hero";
import Stats from "../components/HomePageComponents/Stats";
import About from "../components/HomePageComponents/About";
import Courses from "../components/HomePageComponents/Courses";
import Testimonials from "../components/HomePageComponents/Testimonials";
import News from "../components/HomePageComponents/News";
import Programs from "../components/HomePageComponents/Programs";
import Informan from "../components/HomePageComponents/Informan";
import Mitra from "../components/HomePageComponents/Mitra";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Programs />
      <About />
      <Courses />
      <Testimonials />
      <Informan />
      <Mitra />
      <News />
    </main>
  );
}
