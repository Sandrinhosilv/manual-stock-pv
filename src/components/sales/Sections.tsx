import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown, Check, ChevronDown, Crown, Mail, ShieldCheck, Smartphone, Star, X, Zap,
} from "lucide-react";
import { CheckoutButton } from "./CheckoutButton";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const WISTIA =
  "https://fast.wistia.net/embed/iframe/e4nghpbjil?autoPlay=true&muted=false&controlsVisibleOnLoad=false&playbar=false&playButton=false&smallPlayButton=false&volumeControl=false&fullscreenButton=false&settingsControl=false&playsinline=true";

const img = (name: string) => `/images/${encodeURIComponent(name)}`;

function SectionTitle({ pre, hl, post }: { pre: string; hl: string; post?: string }) {
  return (
    <h2 className="mx-auto max-w-2xl text-center text-3xl font-black uppercase leading-tight tracking-tight md:text-4xl">
      {pre} <span className="text-gradient">{hl}</span> {post}
    </h2>
  );
}

export function TopBar() {
  return (
    <div className="bg-ink py-2 text-center text-xs font-bold uppercase tracking-widest text-ink-foreground">
      <Zap className="mr-1 inline h-3.5 w-3.5 text-primary-glow" />
      Oferta termina hoje · <span className="text-primary-glow">acesso imediato</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-gradient-hero px-4 pb-14 pt-8">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
        <div className="text-center md:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-bold shadow-card">
            <Smartphone className="h-4 w-4 text-primary" /> Manual Stock
          </div>
          <h1 className="text-4xl font-black uppercase italic leading-[0.95] tracking-tight md:text-6xl">
            Tenha acesso a todos os{" "}
            <span className="mt-1 inline-block -rotate-1 rounded-xl bg-gradient-primary px-3 py-1 text-primary-foreground shadow-glow">
              manuais técnicos
            </span>{" "}
            em qualquer lugar e a qualquer hora
          </h1>
          <p className="mt-5 text-muted-foreground">
            Mais de 5.000 manuais de motos, quadriciclos, jet skis e motores de popa direto no seu celular.
          </p>

          <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl bg-card p-3 pl-5 shadow-card">
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">A partir de</p>
              <p className="text-2xl font-black text-primary">R$ 29,90</p>
            </div>
            <a href="#planos" className="rounded-full bg-gradient-primary px-5 py-3 text-xs font-black uppercase text-primary-foreground shadow-glow">
              Ver planos →
            </a>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
            <div className="flex -space-x-2">
              {["JS", "MR", "AL", "PC"].map((i) => (
                <span key={i} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-accent text-[10px] font-bold text-accent-foreground">
                  {i}
                </span>
              ))}
            </div>
            <div className="text-left text-xs">
              <div className="flex items-center gap-0.5 text-star">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                <span className="ml-1 font-bold text-foreground">4.9</span>
              </div>
              <p className="text-muted-foreground">+3.000 mecânicos satisfeitos</p>
            </div>
          </div>
        </div>

        <motion.div {...fade} className="mx-auto w-full max-w-[300px]">
          <div className="rounded-[2.5rem] bg-ink p-2.5 shadow-glow">
            <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-ink">
              <iframe
                src={WISTIA}
                title="Vídeo Manual Stock"
                allow="autoplay; fullscreen"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
          <a href="#planos" className="mt-5 flex items-center justify-center gap-2 text-sm font-bold text-primary">
            Role para baixo <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const INCLUDED = [
  "+5.000 manuais técnicos em PDF",
  "Motos, quadriciclos, UTVs e jet skis",
  "Motores de popa e motos elétricas",
  "Diagramas elétricos e torques",
  "Mais de 80 marcas",
  "Acesso pelo celular, tablet ou PC",
  "Grupo exclusivo no Telegram",
  "Atualizações constantes",
];

export function Included() {
  return (
    <section className="px-4 py-14">
      <motion.div {...fade} className="mx-auto max-w-xl rounded-3xl bg-card p-6 shadow-card">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Conteúdo do pack</p>
        <p className="mb-4 mt-1 text-xs font-black uppercase tracking-widest text-primary">Tudo incluso</p>
        <ul className="space-y-3">
          {INCLUDED.map((i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Check className="h-3 w-3 text-primary" />
              </span>
              {i}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

const FEEDBACKS = Array.from({ length: 8 }, (_, i) => img(`feedbacks (${i + 1}).webp`));

export function Testimonials() {
  return (
    <section className="overflow-hidden py-14">
      <SectionTitle pre="Clientes reais" hl="satisfeitos" />
      <div className="mt-8 flex w-max gap-4 marquee hover:[animation-play-state:paused]">
        {[...FEEDBACKS, ...FEEDBACKS].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Depoimento de cliente ${(i % 8) + 1}`}
            width={240}
            height={420}
            loading="lazy"
            decoding="async"
            className="h-[420px] w-[240px] rounded-2xl bg-muted object-cover shadow-card"
          />
        ))}
      </div>
    </section>
  );
}

const CATEGORIES = [
  { name: "Motos", file: "MOTOS.webp", desc: "Manuais de serviço das principais marcas." },
  { name: "Quadriciclos", file: "QUADRICICLO.webp", desc: "ATVs completos, do motor à parte elétrica." },
  { name: "Jet Skis", file: "JETSKI.webp", desc: "Manutenção náutica sem adivinhação." },
  { name: "UTVs", file: "UTVS.webp", desc: "Informações técnicas para UTVs." },
  { name: "Motos elétricas", file: "Moto-eletrica.webp", desc: "A nova geração também está aqui." },
  { name: "Motores de popa", file: "MOTOR DE POPA.webp", desc: "Revisões e reparos de motores náuticos." },
];

export function Categories() {
  return (
    <section className="bg-secondary/50 px-4 py-14">
      <SectionTitle pre="O que você precisa para" hl="nunca mais" post="rejeitar serviço" />
      <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3">
        {CATEGORIES.map((c) => (
          <motion.div
            {...fade}
            key={c.name}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-2xl bg-card shadow-card"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={img(c.file)}
                alt={c.name}
                width={400}
                height={300}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <p className="font-black">{c.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="#planos" className="text-sm font-black uppercase text-primary">Quero entrar agora ↓</a>
      </div>
    </section>
  );
}

const BRANDS = [
  ["Honda", "https://i.ibb.co/Wvzzdprb/hondal-1024x799.webp"],
  ["Yamaha", "https://i.ibb.co/JFCtg1Sm/YAMAHA-813x1024.webp"],
  ["Kawasaki", "https://i.ibb.co/HTgDLmVn/KAWASAKI.webp"],
  ["Suzuki", "https://i.ibb.co/j9nM5D2D/SUZUKI-1024x1024.webp"],
  ["BMW", "https://i.ibb.co/Mk8sYKbf/BMW.webp"],
  ["Harley-Davidson", "https://i.ibb.co/Z6yGSrxV/HARLEY-DAVIDSON.webp"],
  ["Dafra", "https://i.ibb.co/BVmgRq2p/dafra.png"],
  ["Royal Enfield", "https://i.ibb.co/60zcrB2x/ROYAL-ENFIELD-1024x494.webp"],
  ["Sundown", "https://i.ibb.co/wrRbG6nf/sundown-motos-vector-logo.webp"],
  ["KTM", "https://i.ibb.co/p6HhMxFs/KTM.webp"],
  ["Husqvarna", "https://i.ibb.co/3mSkrvXj/HUSQVARNA-1024x675.webp"],
  ["Ducati", "https://i.ibb.co/RGk58vrB/DUCATI-1024x1024.webp"],
];

export function Brands() {
  return (
    <section className="px-4 py-14">
      <SectionTitle pre="As maiores" hl="marcas" post="do mundo na sua mão" />
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-3 gap-3 md:grid-cols-4">
        {BRANDS.map(([name, src]) => (
          <div key={name} className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-card p-4 shadow-card">
            <img src={src} alt={name} width={120} height={80} loading="lazy" decoding="async" className="max-h-16 w-auto object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Price({ value }: { value: string }) {
  const [int, cents] = value.split(",");
  return (
    <p className="text-center font-black text-primary">
      <span className="align-top text-lg">R$</span>
      <span className="text-6xl">{int}</span>
      <span className="text-2xl">,{cents}</span>
    </p>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="my-6 space-y-2.5 text-sm">
      {items.map((i) => (
        <li key={i} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-success" /> {i}</li>
      ))}
    </ul>
  );
}

export function Pricing() {
  const [upsell, setUpsell] = useState(false);
  return (
    <section id="planos" className="bg-gradient-hero px-4 py-14">
      <SectionTitle pre="Escolha seu" hl="pacote" />
      <div className="mx-auto mt-10 grid max-w-4xl items-start gap-6 md:grid-cols-2">
        <motion.div {...fade} className="rounded-3xl bg-card p-6 shadow-card">
          <h3 className="text-center text-2xl font-black">Pacote <span className="text-primary">Básico</span></h3>
          <div className="mt-3 rounded-xl bg-secondary p-3 text-center">
            <p className="font-black text-secondary-foreground">1.000 Manuais Técnicos</p>
            <p className="text-xs text-muted-foreground">Honda · Yamaha</p>
          </div>
          <Bullets items={["1.000 manuais técnicos", "Honda – Yamaha", "Acesso ao grupo Telegram"]} />
          <p className="text-center text-xs text-muted-foreground line-through">De R$ 97,00</p>
          <Price value="29,90" />
          <p className="mb-5 text-center text-xs text-muted-foreground">Pagamento único · acesso imediato</p>
          <CheckoutButton offer="basico" onIntercept={() => { setUpsell(true); return true; }}>
            Quero os 1.000 manuais
          </CheckoutButton>
        </motion.div>

        <motion.div {...fade} className="relative rounded-3xl bg-ink p-6 text-ink-foreground shadow-glow ring-2 ring-primary">
          <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-primary px-4 py-1 text-xs font-black uppercase text-primary-foreground">
            <Crown className="h-3.5 w-3.5" /> Mais vendido
          </span>
          <h3 className="text-center text-2xl font-black">Pacote <span className="text-primary-glow">Premium</span></h3>
          <div className="mt-3 rounded-xl bg-primary/20 p-3 text-center">
            <p className="font-black">5.000+ Manuais Técnicos</p>
            <p className="text-xs opacity-70">80+ marcas · todas as categorias</p>
          </div>
          <Bullets
            items={[
              "5.000+ manuais técnicos",
              "80+ marcas mundiais",
              "Grupo Telegram exclusivo",
              "Grupo WhatsApp privado",
              "Atualizações constantes",
              "Acesso vitalício",
            ]}
          />
          <p className="text-center text-xs line-through opacity-60">De R$ 197,00</p>
          <p className="text-center font-black text-primary-glow">
            <span className="align-top text-lg">R$</span><span className="text-6xl">59</span><span className="text-2xl">,90</span>
          </p>
          <p className="mb-5 text-center text-xs opacity-70">Pagamento único · acesso imediato</p>
          <CheckoutButton offer="premium">Quero acesso premium</CheckoutButton>
        </motion.div>
      </div>
      <UpsellModal open={upsell} onClose={() => setUpsell(false)} />
    </section>
  );
}

function UpsellModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-3xl bg-card p-6 text-center shadow-glow"
          >
            <button onClick={onClose} aria-label="Fechar" className="absolute right-4 top-4 text-muted-foreground">
              <X className="h-5 w-5" />
            </button>
            <p className="text-xs font-black uppercase tracking-widest text-primary">Espere! Oferta única</p>
            <h3 className="mt-2 text-2xl font-black">Leve o <span className="text-gradient">Premium</span> por apenas</h3>
            <p className="my-3 text-sm text-muted-foreground line-through">R$ 59,90</p>
            <Price value="37,00" />
            <p className="mb-5 mt-2 text-sm text-muted-foreground">5.000+ manuais, 80+ marcas e grupo VIP — só nesta tela.</p>
            <CheckoutButton offer="upsell">Sim, quero o Premium</CheckoutButton>
            <CheckoutButton offer="basico" className="mt-3 bg-none bg-muted text-muted-foreground shadow-none">
              Não, quero só o básico
            </CheckoutButton>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Guarantee() {
  return (
    <section className="px-4 py-14">
      <motion.div {...fade} className="mx-auto max-w-xl rounded-3xl bg-gradient-primary p-8 text-center text-primary-foreground shadow-glow">
        <ShieldCheck className="mx-auto h-16 w-16" />
        <h2 className="mt-3 text-3xl font-black">Garantia de 7 dias</h2>
        <p className="mt-3 opacity-90">
          Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia e sem riscos.
        </p>
      </motion.div>
    </section>
  );
}

const FAQS = [
  ["Como vou receber o material?", "Logo após a confirmação do pagamento você recebe o acesso por e-mail, de forma imediata."],
  ["O material funciona para qualquer marca de moto?", "O Premium cobre mais de 80 marcas. O Básico é focado em Honda e Yamaha."],
  ["Por quanto tempo terei acesso ao material?", "O acesso é vitalício: pague uma vez e use para sempre."],
  ["Posso baixar os arquivos no celular?", "Sim! Os manuais funcionam no celular, tablet e computador."],
  ["E se eu não gostar do material?", "Você tem 7 dias de garantia. Basta pedir o reembolso e devolvemos 100% do valor."],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-4 py-14">
      <SectionTitle pre="Perguntas" hl="frequentes" />
      <div className="mx-auto mt-8 max-w-2xl space-y-3">
        {FAQS.map(([q, a], i) => (
          <div key={q} className="overflow-hidden rounded-2xl bg-card shadow-card">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold"
            >
              {q}
              <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="px-5 pb-5 text-sm text-muted-foreground">{a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink px-4 py-12 text-center text-sm text-ink-foreground">
      <p className="text-xl font-black">Manual <span className="text-primary-glow">Stock</span></p>
      <nav className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 opacity-80">
        <a href="#planos">Planos</a>
        <a href="#faq">Dúvidas</a>
        <a href="/privacidade">Política de Privacidade</a>
        <a href="/termos">Termos de Uso</a>
      </nav>
      <a href="mailto:suporte@manualstock.com" className="mt-4 inline-flex items-center gap-2 opacity-80">
        <Mail className="h-4 w-4" /> suporte@manualstock.com
      </a>
      <p className="mt-6 opacity-60">© {new Date().getFullYear()} Manual Stock. Todos os direitos reservados.</p>
      <p className="mx-auto mt-3 max-w-2xl text-xs opacity-50">
        Este site não é afiliado ao Facebook, Google ou a qualquer fabricante citado. Marcas pertencem aos seus
        respectivos donos. Resultados podem variar.
      </p>
    </footer>
  );
}
