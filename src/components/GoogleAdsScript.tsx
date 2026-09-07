"use client";

import Script from "next/script";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    SALVUS_ADS_CONFIG?: {
      GOOGLE_ADS_ID: string;
      NUTRO_CONVERSION_LABEL: string;
      CONCIERGE_PHONE: string;
    };
  }
}

export function GoogleAdsScript() {
  const GOOGLE_ADS_ID = "AW-XXXXXXXXX"; // Substituir pelo ID real do Google Ads
  const NUTRO_CONVERSION_LABEL = "XXXXXXXXX"; // Substituir pelo Label real
  const CONCIERGE_PHONE = "5511948445629";

  return (
    <>
      <Script id="salvus-ads-config" strategy="beforeInteractive">
        {`
          window.SALVUS_ADS_CONFIG = {
            GOOGLE_ADS_ID: '${GOOGLE_ADS_ID}',
            NUTRO_CONVERSION_LABEL: '${NUTRO_CONVERSION_LABEL}',
            CONCIERGE_PHONE: '${CONCIERGE_PHONE}'
          };
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
