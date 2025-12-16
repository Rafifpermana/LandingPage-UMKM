import { PillarsData } from "../../data/Aboutpage/Pillars";

export default function AboutPillars() {
  const { title, highlight, items } = PillarsData;

  const PillarCard = ({ p }) => {
    const Icon = p.icon;
    return (
      <div className="group text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
        <div
          className={`inline-flex p-6 bg-gradient-to-br ${p.color} text-white rounded-2xl mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}
        >
          <Icon size={44} strokeWidth={2} />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">{p.title}</h3>
        <p className="text-gray-600 leading-relaxed">{p.description}</p>
      </div>
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            {title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              {highlight}
            </span>
          </h2>
          <div className="flex justify-center pt-4">
            <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mb-8">
          {items.slice(0, 3).map((p) => (
            <PillarCard key={p.title} p={p} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {items.slice(3, 5).map((p) => (
            <PillarCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
