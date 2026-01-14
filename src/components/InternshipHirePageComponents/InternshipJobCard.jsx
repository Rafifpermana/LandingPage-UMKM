import { Clock, MapPin, School } from "lucide-react";

export default function InternshipJobCard({ job, onViewDetail }) {
  if (!job) return null;

  const getSafeString = (val) => {
    if (!val) return "";
    // Jika formatnya object {String: "...", Valid: true}
    if (typeof val === "object" && "String" in val) {
      return val.Valid ? val.String : "";
    }
    return val;
  };

  const handleDetailClick = () => {
    if (typeof onViewDetail === "function") {
      onViewDetail(job);
    } else {
      console.error("onViewDetail is not a function");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-teal-300 transition-all duration-300 flex flex-col h-full group">
      <div className="flex-grow">
        <span className="text-sm font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
          {getSafeString(job.department)}
        </span>

        <h3 className="text-xl font-bold text-gray-800 mt-4 line-clamp-2 group-hover:text-teal-600 transition-colors">
          {getSafeString(job.title)}
        </h3>

        <p className="text-xs text-gray-500 mt-3 line-clamp-2 leading-relaxed">
          {getSafeString(job.summary)}
        </p>

        <div className="flex flex-col gap-2.5 text-gray-500 mt-5 text-xs border-t border-gray-100 pt-4">
          <div className="flex items-center">
            <MapPin size={14} className="mr-2 text-teal-500" />
            {getSafeString(job.location)}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-2 text-teal-500" />
            Durasi: {getSafeString(job.duration)}
          </div>
          <div className="flex items-center">
            <School size={14} className="mr-2 text-teal-500" />
            {/* Cek internship_type atau type */}
            Tipe:{" "}
            {getSafeString(job.internship_type) || getSafeString(job.type)}
          </div>
        </div>
      </div>

      <button
        onClick={handleDetailClick}
        className="mt-6 w-full bg-teal-600 text-white font-semibold py-2.5 rounded-lg hover:bg-teal-700 transition-colors duration-300 text-sm shadow-md shadow-teal-100"
      >
        Lihat Detail
      </button>
    </div>
  );
}
