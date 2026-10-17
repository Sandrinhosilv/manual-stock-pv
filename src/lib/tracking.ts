// Captura e propagação de UTMs (mesmas regras da Manual Stock)
export interface UTMs {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_id: string;
  utm_term: string;
  utm_content: string;
  fbclid: string;
  gclid: string;
  msclkid: string;
  ttclid: string;
  ref: string;
  referrer: string;
  af: string; // afiliado
}

export const TRACK_KEYS = [
  "utm_source", "utm_medium", "utm_campaign", "utm_id", "utm_term", "utm_content",
  "fbclid", "gclid", "msclkid", "ttclid", "ref", "af",
] as const;

export const CHECKOUT_HOSTS = [
  "pay.hub.la", "invoice.hub.la", "app.hub.la", "hub.la",
  "lastlink.com", "lowify.dev", "lowify.com.br",
];

function readStored(): Partial<UTMs> {
  try {
    return JSON.parse(localStorage.getItem("allUTMs") || "{}");
  } catch {
    return {};
  }
}

/** Valores novos da URL têm prioridade; ausentes preservam os armazenados. */
export function getAllUTMs(): UTMs {
  const params = new URLSearchParams(window.location.search);
  const stored = readStored();
  const utms = {} as UTMs;
  for (const k of TRACK_KEYS) {
    const v = params.get(k) || stored[k] || "";
    utms[k] = v;
    if (v) localStorage.setItem(k, v);
  }
  utms.referrer = document.referrer || stored.referrer || "";
  localStorage.setItem("allUTMs", JSON.stringify(utms));
  return utms;
}

export function getStoredUTMs(): UTMs {
  const stored = localStorage.getItem("allUTMs");
  if (stored) {
    try {
      return JSON.parse(stored) as UTMs;
    } catch {
      return getAllUTMs();
    }
  }
  return getAllUTMs();
}

function getCookie(name: string) {
  const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : "";
}

export function isCheckoutUrl(href: string) {
  try {
    const h = new URL(href).hostname;
    return CHECKOUT_HOSTS.some((d) => h === d || h.endsWith("." + d));
  } catch {
    return false;
  }
}

/** Monta a URL final do checkout com UTMs, fbp/fbc, sck e padrões da oferta. */
export function buildCheckoutUrl(base: string, defaults: Record<string, string> = {}) {
  if (typeof window === "undefined") return base;
  const url = new URL(base);
  const current = new URLSearchParams(window.location.search);
  current.forEach((v, k) => v && url.searchParams.set(k, v));

  const utms = getStoredUTMs();
  for (const k of TRACK_KEYS) {
    if (utms[k] && !url.searchParams.get(k)) url.searchParams.set(k, utms[k]);
  }
  const fbp = getCookie("_fbp");
  const fbc = getCookie("_fbc");
  if (fbp) url.searchParams.set("fbp", fbp);
  if (fbc) url.searchParams.set("fbc", fbc);

  for (const [k, v] of Object.entries(defaults)) {
    if (!url.searchParams.get(k)) url.searchParams.set(k, v);
  }
  const src = url.searchParams.get("utm_source");
  if (src) {
    url.searchParams.set(
      "sck",
      [src, url.searchParams.get("utm_medium") || "", url.searchParams.get("utm_campaign") || ""].join("|"),
    );
  }
  return url.toString();
}
