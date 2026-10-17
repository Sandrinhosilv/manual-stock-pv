import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { buildCheckoutUrl } from "@/lib/tracking";
import { OFFERS, type OfferKey } from "@/lib/offers";
import { cn } from "@/lib/utils";

export function CheckoutButton({
  offer,
  children,
  className,
  onIntercept,
}: {
  offer: OfferKey;
  children: ReactNode;
  className?: string;
  /** Se retornar true, cancela a navegação (ex.: abrir upsell). */
  onIntercept?: () => boolean;
}) {
  const o = OFFERS[offer];
  return (
    <motion.a
      href={o.url}
      data-tracked="1"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={(e) => {
        if (onIntercept?.()) {
          e.preventDefault();
          return;
        }
        e.currentTarget.href = buildCheckoutUrl(o.url, o.utm);
      }}
      className={cn(
        "inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-primary-foreground shadow-glow",
        className,
      )}
    >
      {children}
    </motion.a>
  );
}
