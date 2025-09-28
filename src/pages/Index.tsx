import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import UpcomingEvents from "@/components/UpcomingEvents";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <UpcomingEvents />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
