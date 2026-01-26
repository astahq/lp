import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "./components/Hero";
import RentalYieldCalculator from "./components/RentalYieldCalculator";
import Features from "./components/Features";
import InfoSection from "./components/InfoSection";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";

const RentalYieldCalculatorTool = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        <section id="calculator" className="py-20">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Calculate Your Rental Yield
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Enter your property details below to calculate gross yield, net yield, and cash-on-cash return.
              </p>
            </div>
            
            <div className="mt-12">
              <RentalYieldCalculator />
            </div>
          </div>
        </section>

        <Features />
        <InfoSection />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default RentalYieldCalculatorTool;
