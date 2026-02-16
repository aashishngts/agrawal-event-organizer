import owner from "../../assets/owner1.webp";
import Footer from "../layout/Footer";

const About = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="h-80 bg-cover bg-center relative flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506157786151-b8491531f063?w=2000&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-white text-5xl md:text-6xl font-bold uppercase">
            About Us
          </h1>
        </div>
      </section>

      {/* ABOUT CONTENT SECTION */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-xl font-semibold tracking-widest uppercase mb-6 text-red-600">
              Our Legacy & Vision
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Agarwal Sound & Lighting delivers professional sound systems,
              advanced lighting solutions, staging structures, and LED setups
              for weddings, concerts, corporate events, and large public shows.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We combine technical expertise with creative execution to
              transform venues into immersive experiences powered by sound,
              light, and precision engineering.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={owner}
              alt="Agarwal Team"
              className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* EQUIPMENT CARDS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold uppercase">
              Our Equipment & Services
            </h2>
            <p className="text-gray-600 mt-4">
              Professional solutions engineered for impactful events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* MUSIC & LIGHTING CARD */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=1000&fit=crop"
                  alt="Music & Lighting"
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-600 mb-4">
                  Music & Lighting Systems
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Line Array Sound Systems</li>
                  <li>• Digital Mixing Consoles</li>
                  <li>• Moving Head & LED Lights</li>
                  <li>• Laser & Special Effects</li>
                </ul>
              </div>
            </div>

            {/* STAGE SETUP CARD */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1000&fit=crop"
                  alt="Stage Setup"
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-600 mb-4">
                  Stage & Structural Setup
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Truss & Rigging Systems</li>
                  <li>• Custom Stage Platforms</li>
                  <li>• LED Video Walls</li>
                  <li>• Power Distribution</li>
                </ul>
              </div>
            </div>

            {/* EVENT ORGANIZER CARD */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1000&fit=crop"
                  alt="Event Management"
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-600 mb-4">
                  Event Organizer Solutions
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Complete Event Production</li>
                  <li>• Technical Team Support</li>
                  <li>• Artist Rider Management</li>
                  <li>• Safety & Compliance Setup</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default About;
