import React from "react";

const steps = [
  {
    month: "Bulan 1: Fondasi",
    title: "Validasi & Strategi",
    description:
      "Memperkuat model bisnis, validasi pasar, dan menyusun strategi go-to-market.",
  },
  {
    month: "Bulan 2: Akselerasi",
    title: "Eksekusi & Pertumbuhan",
    description:
      "Fokus pada eksekusi strategi marketing, optimalisasi operasional, dan manajemen keuangan.",
  },
  {
    month: "Bulan 3: Puncak",
    title: "Pitching & Demo Day",
    description:
      "Menyiapkan pitch deck, latihan pitching, dan presentasi di hadapan investor.",
  },
  {
    month: "Bulan 4: Puncak",
    title: "Pitching & Demo Day",
    description:
      "Menyiapkan pitch deck, latihan pitching, dan presentasi di hadapan investor.",
  },
];

export default function ProgramTimeline() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Alur Program 3 Bulan
          </h2>
        </div>

        <div className="relative hidden lg:block">
          <div
            className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200"
            style={{ transform: "translateX(-50%)" }}
          ></div>
          <div className="relative flex flex-col gap-12">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-center w-full">
                <div
                  className={`w-1/2 pr-8 text-right ${
                    index % 2 !== 0 ? "invisible" : ""
                  }`}
                >
                  <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-100">
                    <p className="text-purple-600 font-bold">{step.month}</p>
                    <h3 className="text-xl font-bold text-gray-800 mt-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div
                  className="absolute left-1/2 w-4 h-4 bg-purple-600 rounded-full z-10"
                  style={{ transform: "translateX(-50%)" }}
                ></div>

                <div
                  className={`w-1/2 pl-8 ${index % 2 === 0 ? "invisible" : ""}`}
                >
                  <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-100">
                    <p className="text-purple-600 font-bold">{step.month}</p>
                    <h3 className="text-xl font-bold text-gray-800 mt-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:hidden flex flex-col gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-purple-500"
            >
              <p className="text-purple-600 font-bold">{step.month}</p>
              <h3 className="text-xl font-bold text-gray-800 mt-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
