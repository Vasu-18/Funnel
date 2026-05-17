"use client";

/**
 * <MetaPixel />
 *
 * Loads the Meta Pixel base code once (via next/script) and fires a PageView
 * event on every client-side route change using Next.js pathname monitoring.
 *
 * Mount this component once in the root layout — it handles everything
 * automatically, including SPA navigation.
 */

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { META_PIXEL_ID, trackPageView } from "@/lib/meta-pixel";

export default function MetaPixel() {
  const pathname = usePathname();
  const isInitialLoad = useRef(true);

  // Track PageView on every client-side route change (not the first load —
  // the inline script in <Script> already fires the initial PageView).
  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }
    trackPageView();
  }, [pathname]);

  return (
    <>
      {/* Load the Meta Pixel SDK */}
      <Script
        id="meta-pixel-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
    </>
  );
}
