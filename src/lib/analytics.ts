const GA_MEASUREMENT_ID = "G-Z72SZF3K62";

export function initGA(): void {
  if (!GA_MEASUREMENT_ID) {
    console.warn('VITE_GA_MEASUREMENT_ID is not set');
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];

  // ✅ MUST use `arguments` — NOT spread (...args)
  // Spread creates a true Array; GA4 requires the native Arguments object
  window.gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // We'll track manually per route change
    transport_type: 'beacon',
  });
}

export function trackPageView(path: string, title?: string): void {
  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_title: title ?? document.title,
  });
}

export function trackEvent(name: string, params?: Record<string, unknown>): void {
  window.gtag?.('event', name, params);
}

// Type declarations
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
