import React, { useState, useEffect, useRef } from "react";
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
      "https://images.unsplash.com/photo-1665221965525-87fe35deabdd?q=80&w=756&auto=format&fit=crop",
  },
  {
    name: "Stage Lighting System",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=500&h=600&fit=crop",
  },
];

// Duplicate for seamless loop
const loopItems = [...equipments, ...equipments];

const GAP = 24; // px — matches gap-6

const EquipmentCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const total = equipments.length;

  // Measure container
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Responsive items per view
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Seamless loop reset
  useEffect(() => {
    if (currentIndex >= total) {
      const t1 = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500);
      const t2 = setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [currentIndex, total]);

  const scroll = (dir) => {
    if (dir === "prev") {
      setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // ✅ Correct card width: account for gaps between cards
  // Total gaps in view = itemsPerView - 1
  // cardWidth = (containerWidth - gaps) / itemsPerView
  const cardWidth =
    containerWidth > 0
      ? (containerWidth - GAP * (itemsPerView - 1)) / itemsPerView
      : 0;

  // Offset per slide = cardWidth + gap
  const slideOffset = cardWidth + GAP;

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-full mx-4 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-black mb-1">
              Professional
            </h2>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black">
              <span className="text-red-600">Sound & Lighting</span>
              <span className="text-black"> Setup</span>
            </h3>
          </div>

          <div className="flex gap-3 sm:gap-4">
            <button
              onClick={() => scroll("prev")}
              className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("next")}
              className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ✅ overflow-hidden ONLY on the track wrapper, not the outer container */}
        <div className="overflow-hidden" ref={containerRef}>
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(-${currentIndex * slideOffset}px)`,
              transition: isTransitioning ? "transform 0.5s ease" : "none",
            }}
          >
            {loopItems.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 group"
                style={{ width: cardWidth > 0 ? `${cardWidth}px` : "auto" }}
              >
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg h-56 sm:h-72 md:h-80 lg:h-96">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 p-4 sm:p-6">
                    <h3 className="text-white text-sm sm:text-lg font-bold">
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