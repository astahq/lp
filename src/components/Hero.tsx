import { Button } from "@/components/ui/button";
import { Clock, FileCheck, Shield } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const Hero = () => {
  const posthog = usePostHog();
  const { hasConsented } = useCookieConsent();

  function handleClickStartFreeTrial() {
    if (hasConsented) {
      posthog.capture("start_free_trial_button_clicked", {
        button_text: "Start Free Trial",
      });
    }
  }

  function handleClickBookDemo() {
    if (hasConsented) {
      posthog.capture("book_a_demo_button_clicked", {
        button_text: "Book a Demo",
      });
    }
  }

  return (
    <section className="hero-gradient pt-28 pb-12 md:pt-36 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Trusted by UK Property Solicitors
          </div>

          <h1 className="text-2xl md:text-5xl lg:text-[56px] text-foreground hero-headline mb-6">
            Review legal packs in minutes <br />
            <span className="text-primary">not hours</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Asta uses AI to review all property documents and delivers a
            comprehensive risk report in under 5 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              className="h-12 rounded-lg px-8 text-base font-medium"
              onClick={handleClickStartFreeTrial}
              asChild
            >
              <a
                href="https://app.useasta.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                14 Days Free Trial
              </a>
            </Button>
            <Button
              variant="soft"
              className="h-12 rounded-lg px-8 text-base font-medium"
              onClick={handleClickBookDemo}
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

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              5-minute analysis
            </span>
            <span className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-primary" />
              No setup fees
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              GDPR compliant
            </span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="card-shadow rounded-xl overflow-hidden bg-card border border-border">
            <img
              alt="Asta Legal Pack Analysis Dashboard"
              className="w-full h-auto"
              src={dashboardImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
