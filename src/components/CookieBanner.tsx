import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const { consentStatus, acceptCookies, declineCookies } = useCookieConsent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (consentStatus === "pending") {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
    setIsVisible(false);
  }, [consentStatus]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="mx-auto max-w-4xl">
        <div className="relative rounded-xl border border-border bg-card p-4 shadow-lg md:p-6">
          <button
            onClick={declineCookies}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <div className="flex items-start gap-3 md:flex-1">
              <div className="rounded-lg bg-primary/10 p-2">
                <Cookie className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 pr-6 md:pr-0">
                <h3 className="font-semibold text-foreground mb-1">
                  We value your privacy
                </h3>
                <p className="text-sm text-muted-foreground">
                  We use cookies to enhance your browsing experience, analyse
                  site traffic, and understand where our visitors come from. By
                  clicking "Accept", you consent to our use of cookies.{" "}
                  <a
                    href="/privacy"
                    className="text-primary hover:underline"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row md:flex-shrink-0">
              <Button
                variant="outline"
                onClick={declineCookies}
                className="order-2 sm:order-1"
              >
                Decline
              </Button>
              <Button onClick={acceptCookies} className="order-1 sm:order-2">
                Accept Cookies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
