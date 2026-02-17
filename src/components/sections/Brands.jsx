import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const equipments = [
  {
    name: "Concert Stage Production",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=600&fit=crop",
  },
  {
    name: "Line Array Sound Systems",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&h=600&fit=crop",
  },
  {
    name: "Intelligent Moving Lights",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=600&fit=crop",
  },
  {
    name: "LED Video Walls",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=600&fit=crop",
  },
  {
    name: "DJ Console",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&h=600&fit=crop",
  },
  {
    name: "Wireless Microphones",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500&h=600&fit=crop",
  },
  {
    name: "Audio Mixing Console",
    image:
      "https://images.unsplash.com/photo-1581093588401-22d70e6b3b1f?w=500&h=600&fit=crop",
  },
  {
    name: "Stage Lighting System",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=500&h=600&fit=crop",
  },
];

// 🔁 Duplicate items for seamless loop
const loopItems = [...equipments, ...equipments];

const EquipmentCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  const itemsPerView = 4;
  const total = equipments.length;

  // 🔥 Auto Scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // 🧠 Seamless Reset (No Jump Effect)
  useEffect(() => {
    if (currentIndex >= total) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(0);
      }, 500);

      setTimeout(() => {
        setTransition(true);
      }, 550);
    }
  }, [currentIndex, total]);

  const scroll = (dir) => {
    if (dir === "prev") {
      setCurrentIndex((prev) =>
        prev === 0 ? total - 1 : prev - 1
      );
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-black mb-2">
              Professional
            </h2>
            <h3 className="text-3xl sm:text-5xl font-black">
              <span className="text-red-600">Sound & Lighting</span>
              <span className="text-black"> Setup</span>
            </h3>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => scroll("prev")}
              className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("next")}
              className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              transition: transition
                ? "transform 0.5s ease"
                : "none",
            }}
          >
            {loopItems.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/4 group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-80 sm:h-96">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-white text-lg font-bold">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EquipmentCarousel;
