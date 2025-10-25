import React from "react";

const TabNavigation = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 ${
            activeTab === tab.id
              ? "text-blue-600 border-b-2 border-blue-600 -mb-[2px]"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
