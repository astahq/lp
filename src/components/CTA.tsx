import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
const CTA = () => {
  return (
    <section className="py-20 md:py-28 text-primary-foreground bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to transform your conveyancing workflow?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join 150+ UK law firms already saving 3+ hours per transaction with
            Asta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="soft" asChild>
              <a
                href="https://app.useasta.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start 14 Days Free Trial
              </a>
            </Button>
            <Button
              variant="ghost"
              className="text-neutral-100 hover:text-neutral-100 hover:bg-transparent hover:underline hover:underline-offset-2"
              asChild
            >
              <a
                href="https://cal.com/sefa-oruc-asta/15min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm opacity-80">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              14-day free trial
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              GDPR compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA;
