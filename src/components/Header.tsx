import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import astaLogo from "@/assets/asta-logo.png";
import { useState } from "react";
import { getAllTools } from "@/tools/config";

const Header = () => {
  const [open, setOpen] = useState(false);
  const tools = getAllTools();

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
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium outline-none">
              Tools
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <DropdownMenuItem 
                    key={tool.id} 
                    asChild 
                    className="p-0 focus:bg-neutral-100 focus:text-foreground data-[highlighted]:bg-neutral-100 data-[highlighted]:text-foreground"
                  >
                    <a
                      href={`/tools/${tool.slug}`}
                      className="flex items-start gap-3 p-3 rounded-sm hover:bg-neutral-100 focus:bg-neutral-100 transition-colors cursor-pointer"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm text-foreground">{tool.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                          {tool.description}
                        </div>
                      </div>
                    </a>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
            asChild
          >
            <a
              href="https://cal.com/sefa-oruc-asta/15min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request demo
            </a>
          </Button>
          <Button
            className="rounded-lg px-6 h-10 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a
              href="https://app.useasta.com"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                    className="text-foreground hover:text-foreground transition-colors text-lg font-medium py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-semibold text-muted-foreground mb-3 px-2">Tools</p>
                  {tools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <a
                        key={tool.id}
                        href={`/tools/${tool.slug}`}
                        onClick={() => setOpen(false)}
                        className="flex items-start gap-3 px-2 py-3 rounded-lg hover:bg-neutral-100 transition-colors mb-2"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-base text-foreground">{tool.name}</div>
                          <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                            {tool.description}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
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
                  <a
                    href="https://app.useasta.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
