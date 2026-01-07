import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Asta Logo */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="hsl(200 100% 45%)" />
            <path d="M10 18V23H14V20H18V23H22V18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 18L16 11L24 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 15L16 11M16 11L13 14M16 11L19 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-xl font-semibold text-foreground">Asta</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Solutions
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Pricing
          </a>
          <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Resources
          </a>
          <a href="#faqs" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            FAQs
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Let's talk
          </Button>
          <Button className="rounded-lg px-5 h-10 text-sm font-medium bg-foreground text-background hover:bg-foreground/90">
            Request demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
