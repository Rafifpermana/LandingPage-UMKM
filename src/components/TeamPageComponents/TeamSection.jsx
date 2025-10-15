import React from "react";
import TeamMemberCard from "./TeamMemberCard";

export default function TeamSection({ title, subtitle, sections }) {
  return (
    <section className="py-16 lg:py-24 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            {title}
          </h2>
          <p className="text-lg text-gray-500 mt-2 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.title} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-semibold text-center text-gray-700 mb-10">
              {section.title}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {section.members.map((member, index) => (
                <TeamMemberCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  image={member.image}
                  color={member.color}
                  reverse={index % 2 !== 0}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
