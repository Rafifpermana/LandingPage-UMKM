import { herobackground } from "../../data/Aboutpage/Hero";

export default function AboutHero() {
  return (
    <section className="relative min-h-[400px] lg:min-h-[550px] flex items-center overflow-hidden group">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-fade-in text-white">
          {herobackground.title} {""}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {herobackground.subtitle}
          </span>
        </h1>
      </div>

      <div className="absolute inset-0">
        <img
          src={herobackground.image}
          alt={herobackground.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    </section>
  );
}
