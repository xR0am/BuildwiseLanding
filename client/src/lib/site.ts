export const SITE_ORIGIN = "https://buildwise-studios.com";

export const BUILDWISE_CAL_URL =
  "https://cal.com/charles-fauchet-buildwise/intelligence-agents";

export const VERTICAL_ROUTES = {
  headhunting: "/ai-agents-for-headhunting-professionals",
  legal: "/hong-kong-legal-agents",
  scoping: "/intel-agent-scoping-v2",
} as const;

/** Static LLM manifests (client/public) — keep in sync with VERTICAL_ROUTES */
export const LLMS_PATHS = {
  hub: "/llms.txt",
  landingMd: "/landing.md",
  headhunting: `${VERTICAL_ROUTES.headhunting}/llms.txt`,
  legal: `${VERTICAL_ROUTES.legal}/llms.txt`,
} as const;
