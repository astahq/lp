import astaLogo from "@/assets/asta-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={astaLogo as string} alt="Asta Logo" className="w-7 h-7" />
              <span className="text-lg font-semibold">Asta</span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed mb-4">
            AI-powered document assistant for UK solicitors and conveyancing firms.
            </p>
            <p className="text-sm text-background/60 leading-relaxed">
              71-75 Shelton Street<br />
              Covent Garden<br />
              London WC2H 9JQ
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-2.5 text-sm text-background/60">
              <li>
                <a href="/#solutions" className="hover:text-background transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-background transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/#trusted" className="hover:text-background transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="hover:text-background transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2.5 text-sm text-background/60">
              <li>
                <a href="/#faqs" className="hover:text-background transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2.5 text-sm text-background/60">
              <li>
                <a href="/privacy" className="hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-background transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} Asta. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/60">
            <Link to="https://x.com/useastahq" className="hover:text-background transition-colors">
              Twitter
            </Link>
            <Link to="https://www.linkedin.com/company/astahq/about/?viewAsMember=true" className="hover:text-background transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
