import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Quote />
        <Features />
        <HowItWorks />
        <CTA />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
