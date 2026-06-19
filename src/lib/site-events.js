/**
 * Optional site events — supports Plausible or GA4 via VITE_ANALYTICS_ID.
 * Plausible: set VITE_ANALYTICS_DOMAIN=yourdomain.com
 * GA4: set VITE_ANALYTICS_ID=G-XXXXXXXXXX
 *
 * Named site-events.js (not analytics.js) so browser tracking protection
 * and ad blockers do not block the app bundle on import.
 */
export function initAnalytics() {
  const gaId = import.meta.env.VITE_ANALYTICS_ID;
  const plausibleDomain = import.meta.env.VITE_ANALYTICS_DOMAIN;

  if (plausibleDomain) {
    const script = document.createElement("script");
    script.defer = true;
    script.dataset.domain = plausibleDomain;
    script.src = "https://plausible.io/js/script.js";
    document.head.appendChild(script);
    return;
  }

  if (gaId?.startsWith("G-")) {
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", gaId);
    window.gtag = gtag;
  }
}

export function trackSectionView(sectionId) {
  if (window.gtag) {
    window.gtag("event", "section_view", { section_id: sectionId });
  }
}
