import { Button } from "@/components/ui/button";
import astaLogo from "@/assets/asta-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={astaLogo} alt="Asta" className="h-8 w-8" />
          <span className="text-xl font-semibold text-foreground">Asta</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Pricing
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Request demo
          </Button>
          <Button className="rounded-lg px-6 h-10 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90">
            Review your Property for Free
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
