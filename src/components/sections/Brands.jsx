import React, { useState, useRef } from "react";
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

const EquipmentCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const itemsPerView = 4;
  const maxIndex = equipments.length - itemsPerView;

  const scroll = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    } else {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    }
  };

  const handleCardHover = (index) => {
    // Smooth scroll to card if needed
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cards = container.querySelectorAll(".carousel-card");
      if (cards[index]) {
        const cardLeft = cards[index].offsetLeft;
        const containerLeft = container.offsetLeft;
        const scrollLeft = cardLeft - containerLeft;
        // Optional: auto-scroll on hover
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
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

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll("prev")}
              disabled={currentIndex === 0}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black hover:bg-gray-800 disabled:bg-gray-300 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Previous items"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("next")}
              disabled={currentIndex === maxIndex}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black hover:bg-gray-800 disabled:bg-gray-300 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Next items"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}% - ${
                currentIndex * 24
              }px))`,
            }}
          >
            {equipments.map((item, index) => (
              <div
                key={index}
                className="carousel-card flex-shrink-0 w-full sm:w-1/4 group cursor-pointer"
                onMouseEnter={() => handleCardHover(index)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-80 sm:h-96">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-lg sm:text-xl font-bold">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Counter */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm">
            Showing {currentIndex + 1} - {Math.min(currentIndex + itemsPerView, equipments.length)} of{" "}
            {equipments.length} items
          </p>
        </div>
      </div>
    </section>
  );
};

export default EquipmentCarousel;