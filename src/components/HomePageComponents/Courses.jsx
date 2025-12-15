import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { coursesData } from "../../data/HomePage/coursesData";
import CourseCard from "./CourseCard";

export default function Courses() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsVisible(entries[0].isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const newIndex = Math.round(
          scrollRef.current.scrollLeft / scrollRef.current.offsetWidth
        );
        setCurrentIndex(newIndex);
      }
    };
    const ref = scrollRef.current;
    ref?.addEventListener("scroll", handleScroll);
    return () => ref?.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.offsetWidth * index,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const scrollPrev = () => {
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : coursesData.length - itemsPerView;
    scrollToIndex(newIndex);
  };

  const scrollNext = () => {
    const maxIndex = coursesData.length - itemsPerView;
    const newIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  const classLink = "https://kelas.umkmhebat.id/";

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-4 relative z-10">
        <div
          className={`flex flex-col lg:flex-row justify-between items-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <span className="text-xs font-bold text-blue-400 bg-blue-500/20 px-4 py-2 rounded-full uppercase tracking-wider inline-block mb-3">
              Kursus Unggulan
            </span>
            <h2 className="text-3xl lg:text-5xl lg:leading-snug font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Kelas Unggulan{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                UMKM Hebat,
              </span>
            </h2>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className={`flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6 -mx-4 px-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="flex-none w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href={classLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-gray-900 font-bold px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-amber-500/50"
          >
            Lihat Semua Kelas
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
