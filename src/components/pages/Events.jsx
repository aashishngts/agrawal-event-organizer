import Footer from "../layout/Footer";

const Events = () => {
  return (
    <>
      
      {/* HERO SECTION */}
      <section
        className="h-[40vh] sm:h-[50vh] md:h-80 bg-cover bg-center relative flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=2000&auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold uppercase">
            Events
          </h1>
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="bg-[#f3f3f3] py-16 text-center">
        <div className="max-w-xl mx-auto text-gray-600 leading-relaxed">
          A glimpse of some recent events, helping some of the largest clients
          and celebrities with our best-in-class sound systems, advanced
          lighting equipment, SFX Systems, truss systems, Silent Generator (DG)
          sets, LED walls, and more.
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#f3f3f3] pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4">
            {/* Big Left Image */}
            <img
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&auto=format&fit=crop&q=80"
              className="col-span-2 row-span-2 object-cover w-full h-full rounded-lg"
              alt="Concert Lighting"
            />

            {/* 🔥 Fixed Second Image */}
            <img
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80"
              className="object-cover w-full h-full rounded-lg"
              alt="Fashion Event"
            />

            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=2000&auto=format&fit=crop&q=80"
              className="object-cover w-full h-full rounded-lg"
              alt="Stage Show"
            />

            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&auto=format&fit=crop&q=80"
              className="col-span-2 object-cover w-full h-full rounded-lg"
              alt="Live Concert"
            />

            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=80"
              className="object-cover w-full h-full rounded-lg"
              alt="Wedding Event"
            />

            <img
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&auto=format&fit=crop&q=80"
              className="object-cover w-full h-full rounded-lg"
              alt="Corporate Event"
            />
          </div>
        </div>
      </section>
      {/* EXPERIENCE STATS SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-5xl font-bold text-red-600">7500+</h3>
            <p className="mt-3 text-gray-600 uppercase tracking-widest text-sm">
              Events Executed
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-red-600">30+</h3>
            <p className="mt-3 text-gray-600 uppercase tracking-widest text-sm">
              Cities Served
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-red-600">20+</h3>
            <p className="mt-3 text-gray-600 uppercase tracking-widest text-sm">
              Years Experience
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="relative py-24 bg-cover bg-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506157786151-b8491531f063?w=2000&auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Ready To Power Your Next Event?
          </h2>

          <p className="text-gray-300 mb-8">
            From concept to execution, we deliver professional sound, lighting,
            staging, and technical excellence that leaves a lasting impact.
          </p>

          <button className="bg-red-600 px-8 py-3 text-white uppercase tracking-widest hover:bg-red-700 transition">
            Get In Touch
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Events;
