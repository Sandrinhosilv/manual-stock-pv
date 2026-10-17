export const OFFERS = {
  basico: {
    url: import.meta.env.VITE_CHECKOUT_BASICO || "https://pay.lowify.com.br/go.php?offer=39faaf35",
    utm: {
      utm_source: "manual-stock",
      utm_medium: "Pacote-basica",
      utm_campaign: "basico-1000-manuais-honda-yamaha",
      utm_content: "basico-29-90",
    },
  },
  premium: {
    url: import.meta.env.VITE_CHECKOUT_PREMIUM || "https://pay.lowify.com.br/go.php?offer=l19yc5f",
    utm: {
      utm_source: "manual-stock",
      utm_medium: "Pacote-premium",
      utm_campaign: "premium-5000-manuais-completo",
      utm_content: "premium-59-90",
    },
  },
  upsell: {
    url: "https://pay.lowify.com.br/go.php?offer=8fd14ca6",
    utm: {
      utm_source: "manual-stock",
      utm_medium: "quiz-upsell",
      utm_campaign: "basico-para-premium-37",
      utm_content: "premium-37",
    },
  },
} as const;

export type OfferKey = keyof typeof OFFERS;
