import { useState, useEffect, useCallback, ReactNode } from "react";
import { usePostHog } from "posthog-js/react";
import {
  CookieConsentContext,
  CONSENT_KEY,
  ConsentStatus,
} from "./cookieConsentTypes";

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const posthog = usePostHog();
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted" || stored === "declined") {
      return stored;
    }
    return "pending";
  });

  useEffect(() => {
    if (consentStatus === "accepted") {
      posthog?.opt_in_capturing();
    } else {
      posthog?.opt_out_capturing();
    }
  }, [consentStatus, posthog]);

  const acceptCookies = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsentStatus("accepted");
  }, []);

  const declineCookies = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setConsentStatus("declined");
  }, []);

  const hasConsented = consentStatus === "accepted";

  return (
    <CookieConsentContext.Provider
      value={{ consentStatus, acceptCookies, declineCookies, hasConsented }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}
