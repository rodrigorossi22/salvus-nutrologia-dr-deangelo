"use client";

import { useEffect, useState } from "react";

export interface UtmData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
}

const UTM_KEYS: (keyof UtmData)[] = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
];

export function useUtmTracking(): UtmData {
  const [utms, setUtms] = useState<UtmData>({});

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const current: UtmData = {};

      UTM_KEYS.forEach((key) => {
        const fromUrl = urlParams.get(key);
        if (fromUrl) {
          sessionStorage.setItem(`salvus_${key}`, fromUrl);
          current[key] = fromUrl;
        } else {
          const fromStorage = sessionStorage.getItem(`salvus_${key}`);
          if (fromStorage) {
            current[key] = fromStorage;
          }
        }
      });

      setUtms(current);
    } catch {
      // Storage unavailable or sandboxed
    }
  }, []);

  return utms;
}

export function getStoredUtmSummary(): string {
  if (typeof window === "undefined") return "";

  try {
    const parts: string[] = [];
    UTM_KEYS.forEach((key) => {
      const val = sessionStorage.getItem(`salvus_${key}`);
      if (val) {
        parts.push(`${key}=${encodeURIComponent(val)}`);
      }
    });

    return parts.length > 0 ? `\n\n[Ref: ${parts.join("&")}]` : "";
  } catch {
    return "";
  }
}
