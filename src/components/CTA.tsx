import { Button } from "@/components/ui/button";
const CTA = () => {
  return <section className="py-20 bg-background md:py-[70px]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="section-label mb-3 block">GET STARTED</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Ready to save on legal pack reviews?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join 300+ UK property investors already using us!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="h-12 rounded-lg px-8 text-sm font-medium" asChild>
              <a href="https://app.useasta.com/auth" target="_blank" rel="noopener noreferrer">
                Get Started for Free
              </a>
            </Button>
            <Button variant="outline" className="h-12 rounded-lg px-8 text-sm font-medium" asChild>
              <a href="https://cal.com/sefa-oruc-asta/15min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
                Request Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;