import React from "react";
import artistBg from "../../assets/images/artist-bg.jpg";
const About = () => {
  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-full mx-10 px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=1200&h=700&fit=crop"
                alt="Concert Stage Lighting"
                className="w-full h-[420px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=700&fit=crop"
                alt="Lighting Setup"
                className="w-full h-[260px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=700&fit=crop"
                alt="Live Stage Event"
                className="w-full h-[260px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          <div>
            <p className="text-red-600 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Professional <br />
              <span className="text-red-600">Sound & Lighting</span>
            </h2>

            <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
              <p>
                Agrawal Sound & Light stands among India’s most established and
                trusted names in professional audio, lighting, and event
                production. Since
                <span className="font-bold text-red-600"> 1952</span>, we have
                continuously evolved with technology while staying committed to
                one mission — delivering powerful, immersive, and flawlessly
                executed event experiences.
              </p>

              <p>
                Based in Indore and serving clients across India, we specialize
                in end-to-end technical event solutions. From grand weddings and
                high-energy live concerts to prestigious government functions
                and corporate conferences, our team transforms venues into
                unforgettable environments.
              </p>

              <p>
                With over
                <span className="font-bold text-red-600">
                  {" "}
                  7,500 successful events across 30+ cities
                </span>
                , our legacy is built on precision, reliability, and creative
                execution. We don’t just provide equipment — we design
                atmospheres that captivate audiences and elevate every occasion.
              </p>

              <p className="font-semibold text-gray-900">
                Creating Moments That Resonate — In Sound, Light, and Experience
                — Since
                <span className="text-red-600 font-bold"> 1952</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODERN STATS SECTION ================= */}
      <section
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${artistBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {/* Years */}
          <div className="group p-10 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition duration-300">
            <h3 className="text-5xl font-extrabold text-white group-hover:scale-110 transition">
              30+
            </h3>
            <p className="mt-3 text-gray-200 font-semibold tracking-wide">
              Years Experience
            </p>
          </div>

          {/* Events */}
          <div className="group p-10 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition duration-300">
            <h3 className="text-5xl font-extrabold text-white group-hover:scale-110 transition">
              7500+
            </h3>
            <p className="mt-3 text-gray-200 font-semibold tracking-wide">
              Events Executed
            </p>
          </div>

          {/* Cities */}
          <div className="group p-10 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition duration-300">
            <h3 className="text-5xl font-extrabold text-white group-hover:scale-110 transition">
              30+
            </h3>
            <p className="mt-3 text-gray-200 font-semibold tracking-wide">
              Cities Served
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
