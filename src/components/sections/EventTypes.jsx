import React from "react";
import wedding from "../../assets/images/wedding.png";
import corporate from "../../assets/images/corporate.png";
import live from "../../assets/images/live.png";
import publicevents from "../../assets/images/publicevents.png";
import festival from "../../assets/images/culture.png";
import government from "../../assets/images/government.png";

const events = [
  {
    title: "Wedding Events",
    image: wedding,
    points: [
      "Luxury Wedding Sound & Lighting",
      "Sangeet & Reception DJ Setup",
      "Stage, Truss & LED Wall Support",
    ],
  },
  {
    title: "Live Concerts",
    image: live,
    points: [
      "High-Power Line Array Systems",
      "Artist Monitoring & Mixing",
      "Concert Lighting & Visual FX",
    ],
  },
  {
    title: "Corporate Events",
    image: corporate,
    points: [
      "Conference AV Solutions",
      "Product Launch Setups",
      "LED Screens & Presentations",
    ],
  },
  {
    title: "Public Events",
    image: publicevents,
    points: [
      "Large Crowd Handling",
      "Outdoor Sound & Lighting",
      "City-Level Event Execution",
    ],
  },
  {
    title: "Government Shows",
    image: government,
    points: [
      "Official Government Programs",
      "High-Safety Setup",
      "Protocol-Based Execution",
    ],
  },
  {
    title: "Cultural & Festivals",
    image: festival,
    points: [
      "Garba & Navratri Events",
      "Traditional Stage Programs",
      "Festival Audio & Lighting",
    ],
  },
];

const EventTypes = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold">
            Event Categories
          </p>
          <h2 className="text-5xl font-extrabold mt-4">Experiences We Power</h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            From grand weddings to high-scale public gatherings, we engineer
            sound, lighting, and stage environments built for impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <div
              key={event.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                <h3 className="absolute bottom-6 left-6 text-white text-2xl font-bold">
                  {event.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 border-l-4 border-red-600">
                <ul className="space-y-3 text-gray-700">
                  {event.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
