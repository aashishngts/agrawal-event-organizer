import Footer from "../layout/Footer";

const servicesData = [
  {
    title: "Live Concerts",
    description:
      "Our Experience and expertise in setting up and calibrating Sound and light Systems for Live Concerts. We have also complimented these capabilities with staging and lighting services. In that everlasting moment before the audience is instantaneously wowed, our clients feel confidence in our audio production.",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    letter: "L",
  },
  {
    title: "Fashion Shows",
    description:
      "From initial conception and budget development through on-site event coordination, we provide complete production services for fashion shows. Over the past years, we have organized fashion shows for a large number of clients and ensure them of timely execution of the necessary tasks.",
    image:
      "https://images.unsplash.com/photo-1733322992706-1210ca79f4df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    letter: "F",
  },
  {
    title: "Corporate Meets",
    description:
      "When we design, plan and deliver your Corporate event, fulfilling your Corporate vision is our primary concern. Dedicated to making visual statements by executing events for prominent corporations, we infuse style and flair into your corporate events.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    letter: "C",
  },
  {
    title: "Brand Events",
    description:
      "Our Experience and expertise in setting up and calibrating Sound and light Systems for Live Concerts. We have also complimented these capabilities with staging and lighting services.",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
    letter: "B",
  },
  {
    title: "Theme Parties",
    description:
      "When it comes to organizing your themed party, we offer our exotic efforts for the creation of unforgettable events for you. Our imaginative approach will bring your concept to life.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
    letter: "T",
  },
  {
    title: "Weddings",
    description:
      "We offer a suite of wedding planning services to fulfill all your needs. We add a personal touch and a creative eye, combining your wedding with style and imagination.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    letter: "W",
  },
];

const Services = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="h-[35vh] sm:h-[45vh] md:h-80 bg-cover bg-center relative flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold uppercase">
            Services
          </h1>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 sm:py-20 lg:py-28 overflow-hidden mx-2">
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE SIDE */}
                <div className="relative flex justify-center w-full lg:w-1/2 lg:max-w-xl">
                  <div className="absolute bg-red-600 w-[85%] h-[85%] -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 z-0"></div>

                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative z-10 w-full h-[260px] sm:h-[350px] lg:h-[400px] object-cover shadow-xl rounded-md"
                  />
                </div>

                {/* TEXT SIDE */}
                <div className="relative w-full lg:w-1/2 lg:max-w-xl">
                  {/* Background Letter */}
                  <span className="absolute -top-6 sm:-top-10 lg:-top-16 left-0 text-[80px] sm:text-[140px] lg:text-[180px] font-bold text-gray-100 z-0 select-none pointer-events-none">
                    {service.letter}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-red-600 uppercase text-xs sm:text-sm tracking-widest">
                        Services
                      </span>
                      <div className="h-[2px] w-16 sm:w-24 bg-red-600"></div>
                    </div>

                    <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase mb-3 sm:mb-4">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
