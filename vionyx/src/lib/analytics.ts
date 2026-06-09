/**
 * Premium Analytics utility wrapper.
 * Can be integrated with Google Analytics (gtag), Mixpanel, or Vercel Analytics.
 */

interface CustomWindow extends Window {
  gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
}

export const trackPageView = (url: string) => {
  if (typeof window !== "undefined") {
    const customWindow = window as unknown as CustomWindow;
    if (customWindow.gtag) {
      customWindow.gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
        page_path: url,
      });
    }
  }
};

export const trackEvent = (action: string, category: string, label: string, value?: number) => {
  if (typeof window !== "undefined") {
    const customWindow = window as unknown as CustomWindow;
    if (customWindow.gtag) {
      customWindow.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }
};
