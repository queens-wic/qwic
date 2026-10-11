"use client";

import { useState } from "react";

const gallery2024 = [
  "/gallery/spinco.jpeg",
  "/gallery/hackher2.jpeg",
  "/gallery/hackher.jpeg",
  "/gallery/oweekbooth.jpeg",
  "/gallery/hackher3.jpeg",
  "/gallery/formal.jpeg",
  "/gallery/hackher4.jpeg",
  "/gallery/braceletmaking.jpg",
  "/gallery/hackher5.jpeg",
  "/gallery/oweek2.jpeg",
  "/gallery/hackher6.png",
  "/gallery/hackher.jpeg",
];

const gallery2025 = [
  "/gallery/25-26/community/fullTeam.jpg",
  "/gallery/25-26/community/braceletMaking.png",
  "/gallery/25-26/community/braceletMaking2.png",
  "/gallery/25-26/community/casLabCrafts.jpg",
  "/gallery/25-26/community/funPic.jpg",
  "/gallery/25-26/community/githubEvent.jpg",
  "/gallery/25-26/community/someOfTheTeam.jpg",
  "/gallery/25-26/community/pitchYourFriend.jpg",
  "/gallery/25-26/community/pitchYourFriend2.jpg",
  "/gallery/25-26/community/pumpkinsWPeople.jpg",
  "/gallery/25-26/community/pumpkins.jpg",
  "/gallery/25-26/community/fullTeamProfessional.jpg"
]; //filled october 2026

const PhotoGridWithTabs = () => {
  const [activeTab, setActiveTab] = useState("2024");

  const handleTabChange = (year) => setActiveTab(year);

  const renderGallery = (images) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {images.map((src, index) => (
        <div key={index} className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md">
          <img
            src={src}
            alt={`Photo ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => handleTabChange("2024")}
          className={`px-4 py-2 rounded-full font-medium transition ${
            activeTab === "2024" ? "bg-black text-white" : "bg-gray-200 text-gray-600"
          }`}
        >
          2024–2025
        </button>
        <button
          onClick={() => handleTabChange("2025")}
          className={`px-4 py-2 rounded-full font-medium transition ${
            activeTab === "2025" ? "bg-black text-white" : "bg-gray-200 text-gray-600"
          }`}
        >
          2025–2026
        </button>
      </div>

      {/* Gallery content */}
      {activeTab === "2024" && renderGallery(gallery2024)}

      {activeTab === "2025" && renderGallery(gallery2025)}
    </div>
  );
};

export default PhotoGridWithTabs;

