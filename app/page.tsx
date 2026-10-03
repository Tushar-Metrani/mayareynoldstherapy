import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import OurExpertise from "@/components/sections/OurExpertise";
import OurSpecialties from "@/components/sections/OurSpecialties";
import QuoteBand from "@/components/sections/QuoteBand";
import AppointmentCTA from "@/components/sections/Appointmentcta";
import HowWeWork from "@/components/sections/HowWeWork";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <WhoWeHelp />
        <QuoteBand/>
        <OurExpertise/>
        <HowWeWork/>
        <OurSpecialties/>
        <AppointmentCTA/>
      </main>
      <Footer/>
    </>
  );
}