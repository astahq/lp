import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const CTASection = () => {
  return (
    <section className="bg-primary/5 py-16">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Analyse Your Property?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get a comprehensive rental yield analysis and property investment review from our experts.
          </p>
          
          <Button size="lg" asChild className="mt-8 gap-2 text-base">
            <a href="https://app.useasta.com/" target="_blank" rel="noopener noreferrer">
              Review Your Property for Free
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <Alert className="mx-auto mt-12 max-w-3xl border-border/50 bg-background/50">
          <AlertDescription className="text-center text-sm text-muted-foreground">
            This calculator provides estimates only. Always seek professional financial advice before making investment decisions.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default CTASection;
