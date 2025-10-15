import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import News from "../components/News";

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
