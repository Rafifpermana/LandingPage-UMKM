import { Hero } from "../../data/ContactPage/Hero";

export default function ContactHero() {
  const { image, title, subtitle } = Hero;

  return (
    <section className="relative text-white h-96 lg:h-[350px] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-3 ">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Contact Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    </section>
  );
}
