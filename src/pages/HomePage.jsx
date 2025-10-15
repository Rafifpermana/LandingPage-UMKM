import Hero from "../components/HomePageComponents/Hero";
import Stats from "../components/HomePageComponents/Stats";
import About from "../components/HomePageComponents/About";
import Courses from "../components/HomePageComponents/Courses";
import Testimonials from "../components/HomePageComponents/Testimonials";
import News from "../components/HomePageComponents/News";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Courses />
      <Testimonials />
      <News />
    </main>
  );
}
