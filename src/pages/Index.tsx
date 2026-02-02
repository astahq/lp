import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Problem from "@/components/Problem";
import KeyFeatures from "@/components/KeyFeatures";
import UseCases from "./UseCases";
import ROICalculator from "@/components/ROICalculator";
import Pricing from "./Pricing";
import TrustedSecure from "@/components/TrustedSecure";
import { useScrollToHash } from "@/hooks/useScrollToHash";

const Index = () => {
  useScrollToHash();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <KeyFeatures />
        <UseCases />
        <ROICalculator />
        <Pricing />
        <CTA />
        <TrustedSecure />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
