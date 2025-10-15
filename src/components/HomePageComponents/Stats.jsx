import { Users, BookOpen, Award, BarChart3 } from "lucide-react";

const stats = [
  { icon: BookOpen, number: "455", label: "Kelas Online" },
  { icon: Users, number: "109", label: "Instruktur Ahli" },
  { icon: BarChart3, number: "10,657", label: "Member Aktif" },
  { icon: Award, number: "8,000+", label: "Sertifikat Diterbitkan" },
];

export default function Stats() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center transition-transform hover:-translate-y-2 duration-300"
            >
              <stat.icon
                className="mx-auto mb-3 text-blue-600"
                size={40}
                strokeWidth={1.5}
              />
              <div className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
