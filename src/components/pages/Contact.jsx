import Footer from "../layout/Footer";

const Contact = () => {
  return (
    <div className="relative">
      
      {/* HERO */}
      <section
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-white text-6xl font-bold tracking-widest uppercase">
          Get in touch
        </h1>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* LEFT SIDE - FORM */}
          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
            <div className="bg-red-600 text-white p-6">
              <h3 className="font-bold uppercase text-lg">Have a Question?</h3>
              <p className="text-sm mt-1">
                Fill out the form and our team will contact you shortly.
              </p>
            </div>

            <form className="p-8 space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-red-600 transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-red-600 transition"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-red-600 transition"
              />
              <textarea
                rows="4"
                placeholder="Tell us about your event"
                className="w-full border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-red-600 transition"
              ></textarea>

              <button className="w-full bg-red-600 text-white py-3 rounded-md uppercase tracking-widest hover:bg-red-700 transition">
                Let's Get Started
              </button>
            </form>
          </div>

          {/* RIGHT SIDE - CONTACT INFO */}
          <div className="flex flex-col justify-center gap-8">
            {/* PHONE */}
            <div className="bg-white shadow-lg p-8 rounded-2xl flex items-start gap-4 hover:shadow-2xl transition">
              <div className="text-red-600 text-3xl">📞</div>
              <div>
                <h4 className="uppercase font-semibold mb-2">Phone</h4>
                <p className="text-gray-600 text-sm">
                  +91 731 4044289 <br />
                  +91 98270 37289
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="bg-white shadow-lg p-8 rounded-2xl flex items-start gap-4 hover:shadow-2xl transition">
              <div className="text-red-600 text-3xl">✉️</div>
              <div>
                <h4 className="uppercase font-semibold mb-2">Email</h4>
                <p className="text-gray-600 text-sm">info@agarwalsound.com</p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="bg-white shadow-lg p-8 rounded-2xl flex items-start gap-4 hover:shadow-2xl transition">
              <div className="text-red-600 text-3xl">📍</div>
              <div>
                <h4 className="uppercase font-semibold mb-2">Address</h4>
                <p className="text-gray-600 text-sm">
                  10, Race Course Road,
                  <br />
                  Indore - 452001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
