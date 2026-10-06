// Cookie consent: what the visitor chose, stored in a first-party cookie.
// Load any analytics or marketing script only after hasConsent() says yes,
// and listen for CONSENT_EVENT to react when the visitor changes their mind.

type Category = "necessary" | "analytics" | "marketing";

type Consent = {
  version: number;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  savedAt: string;
};

export const categories: { id: Category; name: string; body: string; required?: boolean }[] = [
  {
    id: "necessary",
    name: "Strictly necessary",
    body: "Keep the site working: remembering this choice and signing in to the live demo. Always on.",
    required: true,
  },
  {
    id: "analytics",
    name: "Analytics",
    body: "Count visits and see which pages people use, so we can improve the site. Nothing is shared for advertising.",
  },
  {
    id: "marketing",
    name: "Marketing",
    body: "Measure whether our campaigns bring people to the site.",
  },
];

// Bump when the categories or their purposes change, so everyone is asked again.
const CONSENT_VERSION = 1;
const COOKIE = "grcflow_consent";
const MAX_AGE = 60 * 60 * 24 * 180; // ask again after six months

// Fired on window when someone saves their choice; listen for it to start or stop
// analytics without a page reload.
export const CONSENT_EVENT = "grcflow:consent";
export const OPEN_SETTINGS_EVENT = "grcflow:open-cookie-settings";

export function readConsent(): Consent | null {
  if (typeof document === "undefined") return null;
  const raw = document.cookie.split("; ").find((c) => c.startsWith(`${COOKIE}=`));
  if (!raw) return null;
  try {
    const value = JSON.parse(decodeURIComponent(raw.slice(COOKIE.length + 1))) as Consent;
    return value.version === CONSENT_VERSION ? value : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: { analytics: boolean; marketing: boolean }): Consent {
  const consent: Consent = { version: CONSENT_VERSION, necessary: true, ...choice, savedAt: new Date().toISOString() };
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE}=${encodeURIComponent(JSON.stringify(consent))}; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent<Consent>(CONSENT_EVENT, { detail: consent }));
  return consent;
}

// Check this before loading any analytics or marketing script (none are loaded today).
export function hasConsent(category: Category): boolean {
  if (category === "necessary") return true;
  return readConsent()?.[category] === true;
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
