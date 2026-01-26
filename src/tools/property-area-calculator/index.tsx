import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "./components/Hero";
import AreaCalculator from "./components/AreaCalculator";
import Features from "./components/Features";
import PropertyReview from "./components/PropertyReview";
import InfoSection from "./components/InfoSection";
import FAQ from "./components/FAQ";

const PropertyAreaCalculatorTool = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        <section id="calculator" className="py-20">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Calculate Your Property Area
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Enter your room dimensions below to calculate total floor area in square metres and square feet.
              </p>
            </div>
            
            <div className="mt-12">
              <AreaCalculator />
            </div>
          </div>
        </section>

        <Features />
        <PropertyReview />
        <InfoSection />
        <FAQ />

        <section className="border-t border-border/30 bg-muted/30 py-8">
          <div className="container">
            <p className="text-center text-sm text-muted-foreground">
              This calculator provides estimates only. For accurate property valuations, consult a qualified surveyor or estate agent.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyAreaCalculatorTool;
