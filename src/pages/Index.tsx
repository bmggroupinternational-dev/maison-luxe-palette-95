import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SpecialOffers from "@/components/SpecialOffers";
import Restaurant from "@/components/Restaurant";
import RomancePackages from "@/components/RomancePackages";
import Features from "@/components/Features";
import RelaxingExperiences from "@/components/RelaxingExperiences";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="offers">
          <SpecialOffers />
        </section>
        <section id="restaurant">
          <Restaurant />
        </section>
        <section id="romance">
          <RomancePackages />
        </section>
        <section id="amenities">
          <Features />
        </section>
        <section id="experiences">
          <RelaxingExperiences />
        </section>
        <section id="location">
          <Gallery />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
