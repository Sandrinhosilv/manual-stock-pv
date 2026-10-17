import { createFileRoute } from "@tanstack/react-router";
import {
  Brands, Categories, FAQ, Footer, Guarantee, Hero, Included, Pricing, Testimonials, TopBar,
} from "@/components/sales/Sections";

const OG = "https://i.ibb.co/VWxFWBQG/Manulstock.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manual Stock — +5.000 Manuais Técnicos de Motos no Celular" },
      { name: "description", content: "Acesse mais de 5.000 manuais técnicos de motos, quadriciclos, jet skis e motores de popa em qualquer lugar." },
      { property: "og:title", content: "Manual Stock — Todos os manuais técnicos na sua mão" },
      { property: "og:description", content: "+5.000 manuais de 80+ marcas. Acesso imediato e garantia de 7 dias." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG },
    ],
    links: [{ rel: "canonical", href: "https://manualstock.com.br/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <TopBar />
      <Hero />
      <Included />
      <Testimonials />
      <Categories />
      <Brands />
      <Pricing />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  );
}
