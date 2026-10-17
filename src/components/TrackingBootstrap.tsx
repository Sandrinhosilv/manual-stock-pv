import { useEffect } from "react";
import { buildCheckoutUrl, getAllUTMs, isCheckoutUrl } from "@/lib/tracking";

/** Captura UTMs ao abrir e atualiza links de checkout (inclusive inseridos depois). */
export function TrackingBootstrap() {
  useEffect(() => {
    getAllUTMs();
    const decorate = (root: ParentNode) => {
      root.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((a) => {
        if (a.dataset["tracked"] || !isCheckoutUrl(a.href)) return;
        a.href = buildCheckoutUrl(a.href);
        a.dataset["tracked"] = "1";
      });
    };
    decorate(document);
    const obs = new MutationObserver(() => decorate(document));
    obs.observe(document.body, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, []);
  return null;
}
