import Footer from "../layout/Footer";
import AboutSection from "../sections/AboutSection";
import Brands from "../sections/Brands";
import Equipments from "../sections/Equipments";
import EventTypes from "../sections/EventTypes";
import Founder from "../sections/Founder";
import Hero from "../sections/Hero";
import InstagramReel from "../sections/InstagramReel";
import Services from "../sections/Services";
import { Helmet } from "react-helmet-async";

const Home = () => {
  
  return (
    <>
      <Hero />
      <Services />
      <EventTypes />
      {/* <AboutSection/> */}
      <Brands />
      {/* <Founder/> */}
      <Equipments />
      <InstagramReel />
      <Footer />
    </>
  );
};

export default Home;
