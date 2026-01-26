import { ExternalLink, Home, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PropertyReview = () => {
  return (
    <section id="property-review" className="py-20 bg-primary/5">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Home className="h-8 w-8 text-primary" />
          </div>
          
          <h2 className="text-3xl font-bold md:text-4xl">
            Review Your Property for Free
          </h2>
          
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Get a comprehensive property review with detailed area measurements, valuation insights, 
            and expert recommendations - completely free.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              "Professional area assessment",
              "Detailed room breakdown",
              "Market valuation insights",
              "Expert recommendations",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full border border-border/50 bg-background px-4 py-2 text-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button size="lg" asChild className="gap-2 text-base">
              <a href="https://app.useasta.com/" target="_blank" rel="noopener noreferrer">
                Start Your Free Review
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            No payment required. Get your property review instantly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PropertyReview;
