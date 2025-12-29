import React, { useState, useEffect } from "react";
import TeamMemberCard from "./TeamMemberCard";
import TabNavigation from "./TabNavigation";
import { teamService } from "../../services/teamService";
import { API_IMAGE_URL } from "../../services/api";

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState("foundation");
  const [teamData, setTeamData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const colors = [
    "bg-gradient-to-br from-orange-500 to-orange-600",
    "bg-gradient-to-br from-teal-500 to-teal-600",
    "bg-gradient-to-br from-red-500 to-red-600",
    "bg-gradient-to-br from-sky-500 to-sky-600",
    "bg-gradient-to-br from-lime-500 to-lime-600",
    "bg-gradient-to-br from-indigo-500 to-indigo-600",
    "bg-gradient-to-br from-rose-500 to-rose-600",
    "bg-gradient-to-br from-amber-500 to-amber-600",
    "bg-gradient-to-br from-fuchsia-500 to-fuchsia-600",
    "bg-gradient-to-br from-cyan-500 to-cyan-600",
    "bg-gradient-to-br from-emerald-500 to-emerald-600",
  ];

  const roleOrderConfig = {
    foundation: [
      { role: "Pembina", title: "PEMBINA" },
      { role: "Pengawas", title: "PENGAWAS" },
      { role: "Pengurus Inti", title: "PENGURUS INTI" },
    ],
    executive: [
      { role: "Management & Program", title: "MANAJEMEN & PROGRAM" },
      { role: "Kelas UMKM Hebat", title: "KELAS UMKM HEBAT" },
    ],
  };

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        setIsLoading(true);
        const response = await teamService.getAllTeams();
        setTeamData(response.data || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching team data:", err);
        setError("Gagal memuat data tim");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  const getImageUrl = (imageName) => {
    if (!imageName)
      return "https://placehold.co/400x500/334155/94a3b8?text=Photo";
    if (imageName.startsWith("http")) return imageName;
    return `${API_IMAGE_URL}/${imageName}`;
  };

  const formatMemberData = (member, colorIndex) => {
    const imageUrls =
      member.images && member.images.length > 0
        ? member.images.map((img) => getImageUrl(img))
        : [getImageUrl(null)];

    return {
      name: member.name,
      role: member.role,
      division: member.division || member.role, // Gunakan division, fallback ke role
      description: member.description || "Belum ada deskripsi",
      color: colors[colorIndex % colors.length],
      image: imageUrls,
      linkedin: member.linkedin_link,
      instagram: member.instagram_link,
      facebook: member.facebook_link,
      twitter: member.twitter_link,
    };
  };

  const organizeTeamData = (data, category) => {
    const filtered = data.filter((member) => member.category === category);
    const orderConfig = roleOrderConfig[category] || [];
    const sections = orderConfig.map((config) => {
      const members = filtered.filter((member) => member.role === config.role);

      return {
        title: config.title,
        members: members.map((member, index) =>
          formatMemberData(member, index)
        ),
      };
    });

    return sections.filter((section) => section.members.length > 0);
  };

  const tabs = [
    { id: "foundation", label: "Pengurus Yayasan" },
    { id: "executive", label: "Executive Team" },
  ];

  const sectionDataConfig = {
    foundation: {
      title: "Pengurus Yayasan",
      subtitle: "Yayasan Kagama Bhakti Nusantara (YKBN)",
      sections: organizeTeamData(teamData, "foundation"),
    },
    executive: {
      title: "Executive Team",
      subtitle: "Tim yang menjalankan operasional UMKM Hebat sehari-hari",
      sections: organizeTeamData(teamData, "executive"),
    },
  };

  const { title, subtitle, sections } = sectionDataConfig[activeTab];

  if (isLoading) {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Memuat data tim...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-red-600 text-lg font-semibold">{error}</div>
            <p className="mt-2 text-gray-600">Silakan coba lagi nanti</p>
          </div>
        </div>
      </section>
    );
  }

  if (sections.length === 0) {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold uppercase tracking-wider">
              {activeTab === "foundation" ? "Struktur Organisasi" : "Tim Kami"}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          <TabNavigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabs}
          />

          <div className="text-center mt-12 py-16">
            <p className="text-gray-500 text-lg">
              Belum ada data anggota tim untuk kategori ini
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold uppercase tracking-wider">
            {activeTab === "foundation" ? "Struktur Organisasi" : "Tim Kami"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <TabNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
        />

        <div className="mt-12">
          {sections.map((section) => (
            <div key={section.title} className="mb-16 last:mb-0">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                {section.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.members.map((member, index) => (
                  <div
                    key={`${member.name}-${index}`}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <TeamMemberCard
                      name={member.name}
                      role={member.division}
                      description={member.description}
                      color={member.color}
                      image={member.image}
                      linkedin={member.linkedin}
                      instagram={member.instagram}
                      facebook={member.facebook}
                      twitter={member.twitter}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
