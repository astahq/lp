import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "./components/Hero";
import MortgageCalculator from "./components/MortgageCalculator";
import Features from "./components/Features";
import InfoSection from "./components/InfoSection";
import FAQ from "./components/FAQ";
import Disclaimer from "./components/Disclaimer";

const MortgageCalculatorTool = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        <section id="calculator" className="py-20">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Calculate Your Investment
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Enter your property details below to see estimated monthly payments, stamp duty, and total costs.
              </p>
            </div>
            
            <div className="mt-12">
              <MortgageCalculator />
            </div>
          </div>
        </section>

        <Features />
        <InfoSection />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default MortgageCalculatorTool;
