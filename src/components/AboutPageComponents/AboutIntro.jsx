import { IntroData } from "../../data/Aboutpage/Intro";

export default function AboutIntro() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {IntroData.title}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
                {IntroData.highlight}
              </span>
            </h2>
          </div>

          <div className="text-gray-600 leading-relaxed space-y-6">
            {IntroData.cards.map((card) => (
              <div
                key={card.id}
                className={`p-6 ${card.style} rounded-2xl border transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                <p>
                  {card.text}{" "}
                  {card.highlightText && (
                    <strong className="text-blue-600">
                      {card.highlightText}
                    </strong>
                  )}{" "}
                  {card.suffix}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
