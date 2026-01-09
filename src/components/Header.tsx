import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import astaLogo from "@/assets/asta-logo.png";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/use-cases", label: "Use Cases" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={astaLogo} alt="Asta" className="h-8 w-8" />
          <span className="text-xl font-semibold text-foreground">Asta</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
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

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-foreground hover:text-primary transition-colors text-lg font-medium py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://cal.com/sefa-oruc-asta/15min?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:text-primary transition-colors text-lg font-medium py-2"
                >
                  Request demo
                </a>
                <Button className="rounded-lg mt-4 w-full" asChild>
                  <a href="https://app.useasta.com/auth" target="_blank" rel="noopener noreferrer">
                    Review your Property for Free
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
