import astaLogo from "@/assets/asta-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={astaLogo} alt="Asta" className="h-7 w-7" />
              <span className="text-lg font-semibold">Asta</span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed mb-4">
              AI-powered legal pack analysis for UK property investors.
            </p>
            <address className="text-sm text-background/60 leading-relaxed not-italic">
              71-75 Shelton Street<br />
              Covent Garden<br />
              London<br />
              WC2H 9JQ
            </address>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-2.5 text-sm text-background/60">
              <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Use Cases</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2.5 text-sm text-background/60">
              <li><span className="cursor-default">Privacy Policy</span></li>
              <li><span className="cursor-default">Terms of Service</span></li>
              <li><span className="cursor-default">Cookie Policy</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-sm text-background/40">
              © {new Date().getFullYear()} Asta. All rights reserved.
            </p>
            <span className="text-sm text-background/40">Built in London</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-background/60">
            <a href="https://x.com/useastahq" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">Twitter</a>
            <a href="https://www.linkedin.com/company/astahq/" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
