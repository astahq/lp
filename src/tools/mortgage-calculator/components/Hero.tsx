import { ArrowDown, TrendingUp, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/mortage_calc_hero-bg.jpg";

const Hero = () => {
  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="UK Property Investment"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <TrendingUp className="h-4 w-4" />
            UK Property Investment Calculator
          </div>
          
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Calculate Your <span className="text-primary">Buy-to-Let</span> Mortgage
          </h1>
          
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Plan your UK property investment with our comprehensive mortgage calculator. 
            Get instant estimates for monthly payments, stamp duty, and total costs.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" onClick={scrollToCalculator} className="gap-2 text-base">
              Start Calculating
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 text-base">
              <a href="https://app.useasta.com/" target="_blank" rel="noopener noreferrer">Review Your Property for Free</a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">Accurate</p>
                <p className="text-xs text-muted-foreground">UK-specific rates</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">Instant</p>
                <p className="text-xs text-muted-foreground">Real-time results</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">Complete</p>
                <p className="text-xs text-muted-foreground">All costs included</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
