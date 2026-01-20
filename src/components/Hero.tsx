import { Button } from "@/components/ui/button";
import dashboardImage from "@/assets/dashboard-preview.jpg";
import { usePostHog } from "posthog-js/react";

const Hero = () => {
  const posthog = usePostHog();

  function handleClickTryForFree() {
    posthog.capture("try_for_free_button_clicked", {
      button_text: "Try for Free",
    });
  }

  return (
    <section className="hero-gradient pt-28 pb-8 md:pt-36 md:pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] text-foreground hero-headline mb-6">
              Instantly analyse and understand property legal packs in the UK
            </h1>
          </div>

          <div className="max-w-md lg:pt-4">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Asta reads all property documents and highlights red flags,
              restrictive covenants, and key clauses before you bid.
            </p>

            <div className="mb-6">
              <Button
                className="h-12 rounded-lg px-6 text-sm font-medium"
                onClick={handleClickTryForFree}
                asChild
              >
                <a
                  href="https://app.useasta.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try for Free
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                No card required
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                Cancel anytime
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                Easy setup
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-6xl mx-auto">
          <div className="card-shadow rounded-xl overflow-hidden bg-card border border-border">
            <img
              src={dashboardImage}
              alt="Asta Dashboard Preview"
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Asta does not give legal advice. It is an AI-powered due diligence
            tool that helps you screen and shortlist properties more
            efficiently.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
