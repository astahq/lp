import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAllTools } from "@/tools/config";
import astaLogo from "@/assets/asta-logo.png";

const Header = () => {
  const tools = getAllTools();
  const [open, setOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const navLinks = [
    { href: "/#solutions", label: "Solutions" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#faqs", label: "FAQs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={astaLogo as string} alt="Asta Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold text-foreground">Asta</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
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
                    className="p-0 hover:bg-neutral-200"
                  >
                    <a
                      href={`/tools/${tool.slug}`}
                      className="flex items-start gap-3 p-3 rounded-sm cursor-pointer"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm text-foreground">
                          {tool.name}
                        </div>

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
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <a
              href="https://app.useasta.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
          </Button>

          <Button className="rounded-lg px-5 h-10" asChild>
            <a
              href="https://app.useasta.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Free Trial
            </a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium py-2"
                  >
                    {link.label}
                  </a>
                ))}

                <Collapsible
                  open={toolsOpen}
                  onOpenChange={setToolsOpen}
                  className="pt-4 border-t"
                >
                  <CollapsibleTrigger asChild>
                    <button className="flex items-center justify-between w-full text-lg font-medium py-2">
                      Tools
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          toolsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1 pt-2">
                    {tools.map((tool) => {
                      const Icon = tool.icon;
                      return (
                        <a
                          key={tool.id}
                          href={`/tools/${tool.slug}`}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-neutral-100"
                        >
                          <Icon className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{tool.name}</span>
                        </a>
                      );
                    })}
                  </CollapsibleContent>
                </Collapsible>

                <div className="pt-4 border-t flex flex-col gap-3">
                  <Button variant="ghost" asChild>
                    <a
                      href="https://app.useasta.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Login
                    </a>
                  </Button>

                  <Button asChild>
                    <a
                      href="https://app.useasta.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start Free Trial
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
