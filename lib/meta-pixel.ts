/**
 * Meta Pixel (Facebook Pixel) utility module.
 *
 * Provides type-safe helpers for tracking standard Meta Pixel events.
 * The pixel base code is loaded once via the <MetaPixel /> component in the
 * root layout; these helpers simply call `window.fbq` when available.
 */

export const META_PIXEL_ID = "1664866348191684";

// ── Types ────────────────────────────────────────────────────────────────────

type StandardEvent =
  | "PageView"
  | "ViewContent"
  | "Lead"
  | "CompleteRegistration"
  | "Contact"
  | "InitiateCheckout"
  | "Purchase"
  | "Search"
  | "AddToCart"
  | "AddToWishlist"
  | "Subscribe";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FbqParams = Record<string, any>;

// Extend window with fbq
declare global {
  interface Window {
    fbq: (
      action: string,
      eventOrId: string,
      params?: FbqParams,
    ) => void;
    _fbq: typeof window.fbq;
  }
}

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Returns true when the Meta Pixel SDK (`fbq`) is loaded and available.
 */
function isFbqReady(): boolean {
  return typeof window !== "undefined" && typeof window.fbq === "function";
}

/**
 * Fire a standard Meta Pixel event.
 *
 * @example
 *   trackEvent("Lead");
 *   trackEvent("ViewContent", { content_name: "Book Page" });
 */
export function trackEvent(event: StandardEvent, params?: FbqParams): void {
  if (!isFbqReady()) return;
  if (params) {
    window.fbq("track", event, params);
  } else {
    window.fbq("track", event);
  }
}

/**
 * Fire a PageView event. Typically called on route changes.
 */
export function trackPageView(): void {
  trackEvent("PageView");
}
