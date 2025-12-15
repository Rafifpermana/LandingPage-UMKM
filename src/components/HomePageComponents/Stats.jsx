import { useEffect, useRef, useState } from "react";
import { statsData } from "../../data/HomePage/statsData";

export default function Stats() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [animatedNumbers, setAnimatedNumbers] = useState({});
  const hasAnimated = useRef(new Set());
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  const animateNumber = (index, targetNumber) => {
    const numericValue = parseInt(targetNumber.replace(/[^0-9]/g, ""));
    const suffix = targetNumber.replace(/[0-9,]/g, "");
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, numericValue);

      const formatted = Math.floor(current).toLocaleString("id-ID");
      setAnimatedNumbers((prev) => ({
        ...prev,
        [index]: formatted + suffix,
      }));

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedNumbers((prev) => ({
          ...prev,
          [index]: targetNumber,
        }));
      }
    }, duration / steps);
  };

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1 && !hasAnimated.current.has(index)) {
              setVisibleCards((prev) => [...prev, index]);
              hasAnimated.current.add(index);
              setTimeout(() => {
                animateNumber(index, statsData[index].number);
              }, index * 100);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) cardObserver.unobserve(card);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 lg:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {statsData.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group relative transition-all duration-700 transform ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: visibleCards.includes(index)
                  ? `${index * 100}ms`
                  : "0ms",
              }}
            >
              <div className="relative bg-white p-4 lg:p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div
                  className={`relative ${stat.bgColor} w-11 h-11 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <stat.icon
                    className={`${stat.iconColor} transition-colors duration-300`}
                    size={22}
                    strokeWidth={2}
                  />
                </div>

                <div className="relative text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-gray-800">
                    {animatedNumbers[index] || "0"}
                  </div>

                  <div className="text-xs text-gray-600 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>

                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-gray-100 to-transparent rounded-full opacity-50"></div>
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-gradient-to-br from-gray-50 to-transparent rounded-full opacity-50"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
