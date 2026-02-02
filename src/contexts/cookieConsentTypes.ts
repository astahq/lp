import { createContext } from "react";

export type ConsentStatus = "pending" | "accepted" | "declined";

export interface CookieConsentContextType {
  consentStatus: ConsentStatus;
  acceptCookies: () => void;
  declineCookies: () => void;
  hasConsented: boolean;
}

export const CONSENT_KEY = "cookie_consent";

export const CookieConsentContext =
  createContext<CookieConsentContextType | null>(null);
