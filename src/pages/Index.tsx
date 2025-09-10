import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
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
        <section id="amenities">
          <Features />
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
