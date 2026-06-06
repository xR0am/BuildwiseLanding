/** Shared URLs and referrer detection for the HK legal vertical LP */

export const LEGAL_TOOLKIT_GITHUB_URL =
  "https://github.com/Buildwise-Studios/claude-for-hk-law";

export const LEGAL_CAL_URL =
  "https://cal.com/charles-fauchet-buildwise/intelligence-agents";

/** Single primary CTA label — all scoping buttons use this + LEGAL_CAL_URL */
export const LEGAL_SCOPING_CTA = "Book a scoping call";

export const LEGAL_ROUTES = {
  primary: "/hong-kong-legal-agents",
  alias: "/ai-agents-for-hong-kong-law-firms",
} as const;

export function isToolkitReferrer(): boolean {
  if (typeof window === "undefined") return false;

  const params = new URLSearchParams(window.location.search);
  if (params.get("ref") === "toolkit") return true;

  try {
    const ref = document.referrer;
    if (!ref) return false;
    const url = new URL(ref);
    if (url.hostname !== "github.com") return false;
    return (
      url.pathname.includes("claude-for-hk-law") ||
      url.pathname.includes("Buildwise-Studios")
    );
  } catch {
    return false;
  }
}
