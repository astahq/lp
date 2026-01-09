import { Button } from "@/components/ui/button";
import astaLogo from "@/assets/asta-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={astaLogo} alt="Asta" className="h-8 w-8" />
          <span className="text-xl font-semibold text-foreground">Asta</span>
        </a>

        <div className="flex items-center gap-6">
          <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Pricing
          </a>
          <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground" asChild>
            <a href="https://cal.com/sefa-oruc-asta/15min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
              Request demo
            </a>
          </Button>
          <Button className="rounded-lg px-6 h-10 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="https://app.useasta.com/auth" target="_blank" rel="noopener noreferrer">
              Review your Property for Free
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
