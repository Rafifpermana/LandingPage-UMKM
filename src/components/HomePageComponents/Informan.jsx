import { Facebook, Instagram, Linkedin, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { speakersData } from "../../data/HomePage/speakersData";

export default function SpeakersSlider() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = document.getElementById("speakers-container");
    if (container) {
      const maxScroll = container.scrollWidth / 2;
      if (scrollPosition >= maxScroll) {
        container.scrollLeft = 0;
        setScrollPosition(0);
      } else {
        container.scrollLeft = scrollPosition;
      }
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setScrollPosition((prev) => prev + 0.5);
    }, 20);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-black font-bold text-lg tracking-wide mb-2 uppercase">
            Narasumber Hebat Yang Pernah Mengisi Di
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              UMKM Hebat
            </span>
          </h2>
        </div>

        <div className="relative">
          <div
            id="speakers-container"
            className="flex gap-6 overflow-x-hidden pb-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...speakersData, ...speakersData].map((speaker, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative group cursor-pointer h-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                    <div className="relative h-64 flex items-center justify-center overflow-hidden">
                      <img
                        src={speaker.bgImage}
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300 z-20 border border-white/30 group-hover:bg-blue-600 group-hover:border-blue-600">
                        <Share2 size={18} />
                      </div>

                      <div
                        className={`absolute top-16 right-4 flex flex-col gap-3 transition-all duration-500 ease-out z-20 ${
                          hoveredIndex === index
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-4 pointer-events-none"
                        }`}
                      >
                        <a
                          href={speaker.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                          title="Facebook"
                        >
                          <Facebook size={18} />
                        </a>

                        <a
                          href={speaker.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-600 shadow-lg hover:bg-pink-600 hover:text-white transition-all duration-300 hover:scale-110"
                          title="Instagram"
                        >
                          <Instagram size={18} />
                        </a>

                        <a
                          href={speaker.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-700 shadow-lg hover:bg-blue-700 hover:text-white transition-all duration-300 hover:scale-110"
                          title="LinkedIn"
                        >
                          <Linkedin size={18} />
                        </a>
                      </div>
                    </div>

                    <div className="p-6 text-center bg-white flex-grow flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {speaker.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {speaker.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
