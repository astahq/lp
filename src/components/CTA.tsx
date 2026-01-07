import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="section-label mb-3 block">GET STARTED</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Ready to save on legal pack reviews?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join 300+ UK property investors already on the waitlist. Get early access and 1 month free.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 rounded-lg px-4 bg-card border-border text-base flex-1"
            />
            <Button className="h-12 rounded-lg px-6 text-sm font-medium">
              Get Early Access
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Asta does not give legal advice. It is an AI-powered due-diligence
            tool that helps you screen and shortlist properties faster.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
