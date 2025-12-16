import { BackgroundData } from "../../data/Aboutpage/Background";

export default function AboutBackground() {
  const { title, highlight, steps } = BackgroundData;

  const StepCard = ({ step, index }) => {
    const Icon = step.icon;
    return (
      <div className="group relative">
        <div className="relative bg-white pt-12 pb-8 px-6 rounded-3xl shadow-lg border border-gray-100 text-center flex flex-col items-center min-h-[280px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
          <div
            className={`absolute -top-8 bg-gradient-to-br ${step.color} w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
          >
            <Icon size={32} className="text-white" strokeWidth={2.5} />
          </div>
          <div className="mt-6 text-6xl font-black bg-gradient-to-br from-gray-200 to-gray-300 bg-clip-text text-transparent mb-4">
            {index + 1}
          </div>
          <p className="text-gray-600 text-base leading-relaxed">{step.text}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            {title}
          </h2>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-3xl lg:text-5xl font-bold">
            {highlight}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {steps.slice(0, 6).map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}

          <div className="md:col-span-2 lg:col-span-1 lg:col-start-2">
            <StepCard step={steps[6]} index={6} />
          </div>
        </div>
      </div>
    </section>
  );
}
