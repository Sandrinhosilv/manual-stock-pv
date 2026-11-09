import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown, BrainCircuit, Check, ChevronDown, CircleStop, Cog, Crown, Disc3, FileText, Fuel, Mail, MoveVertical, ShieldCheck, Smartphone, Star, X, Zap,
} from "lucide-react";
import { CheckoutButton } from "./CheckoutButton";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const WISTIA =
  "https://fast.wistia.net/embed/iframe/ihxhmo32xu?autoPlay=true&muted=false&controlsVisibleOnLoad=false&playbar=false&playButton=false&smallPlayButton=false&volumeControl=false&fullscreenButton=false&settingsControl=false&playsinline=true";

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
      <div className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-2 md:gap-10">
        <div className="contents md:block">
          
          <h1 className="order-1 text-center text-4xl font-black uppercase italic leading-[0.95] tracking-tight md:text-left md:text-6xl">
            Acesse{" "}
            <span className="mt-1 inline-block -rotate-1 rounded-xl bg-gradient-primary px-3 py-1 text-primary-foreground shadow-glow">
              +5000 manuais técnicos
            </span>{" "}
            em qualquer lugar e a qualquer hora
          </h1>

          <a
            href="#planos"
            className="mt-6 hidden rounded-full bg-gradient-primary px-8 py-4 text-sm font-black uppercase text-primary-foreground shadow-glow md:inline-flex"
          >
            Liberar meu acesso
          </a>

          <div className="order-4 mt-4 flex items-center justify-center gap-3 md:justify-start">
            <div className="flex">
              {[ "a03.webp", "a05.webp", "a07.webp"].map((avatar, i) => (
                <div
                  key={avatar}
                  className={`relative -ml-3 h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white first:ml-0 ${i === 3 ? "z-[3]" : i === 2 ? "z-[2]" : "z-[1]"}`}
                >
                  <img
                    src={`/avatares/${avatar}`}
                    alt={`Foto de cliente ${i + 1}`}
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
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

        <motion.div {...fade} className="order-2 mx-auto w-full max-w-[300px] md:order-none">
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

        <a
          href="#planos"
          className="order-3 mx-auto rounded-full bg-gradient-primary px-8 py-4 text-sm font-black uppercase text-primary-foreground shadow-glow md:hidden"
        >
          Liberar meu acesso
        </a>
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
    <section className="overflow-hidden bg-gradient-to-b from-secondary/20 to-background py-16 md:py-24">
      <SectionTitle pre="O que você precisa para" hl="nunca mais" post="rejeitar serviço" />
      <div
        className="mt-8 mb-8 flex w-max gap-4 marquee hover:[animation-play-state:paused]"
        role="region"
        aria-label="Categorias de manuais técnicos"
      >
        {[...CATEGORIES, ...CATEGORIES].map((category, i) => (
          <motion.div
            key={`${category.name}-${i}`}
            {...(i < CATEGORIES.length ? fade : {})}
            aria-hidden={i >= CATEGORIES.length}
            whileHover={{ y: -6 }}
            className="group w-[280px] shrink-0 overflow-hidden rounded-2xl bg-card shadow-card sm:w-[320px]"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={img(category.file)}
                alt={i < CATEGORIES.length ? category.name : ""}
                width={400}
                height={300}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <p className="font-black">{category.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{category.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 px-4 text-center">
        <motion.a
          href="#planos"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-8 py-4 text-center text-sm font-black uppercase tracking-wide text-primary-foreground shadow-glow"
        >
          Quero entrar agora!
        </motion.a>
      </div>
    </section>
  );
}

const PRODUCT_CONTENT = [
  {
    title: "Manuais de serviço",
    description: "Procedimentos e especificações para consultar durante o serviço.",
    Icon: FileText,
    image: "IMG (1).webp",
    imageAlt: "Página de um manual técnico de serviço",
    detail: "GUIA TÉCNICO · PDF",
  },
  {
    title: "Esquemas elétricos",
    description: "Diagramas para identificar conexões e consultar circuitos elétricos.",
    Icon: BrainCircuit,
    image: "IMG (6).webp",
    imageAlt: "Esquema elétrico de uma motocicleta",
    detail: "DIAGRAMA · CIRCUITOS",
  },
  {
    title: "Motor",
    description: "Informações técnicas para manutenção e reparo do motor.",
    Icon: Cog,
    image: "IMG (5).webp",
    imageAlt: "Motor em manutenção",
    detail: "MOTOR · COMPONENTES",
  },
  {
    title: "Embreagem",
    description: "Consulte orientações e componentes do sistema de embreagem.",
    Icon: Disc3,
    image: "IMG (2).webp",
    imageAlt: "Componentes de uma embreagem",
    detail: "TRANSMISSÃO · EMBREAGEM",
  },
  {
    title: "Freios",
    description: "Referências para manutenção dos componentes do sistema de freios.",
    Icon: CircleStop,
    image: "IMG (9).webp",
    imageAlt: "Componentes do sistema de freios",
    detail: "SISTEMA · FREIOS",
  },
  {
    title: "Injeção eletrônica",
    description: "Conteúdo de consulta para diagnóstico do sistema de injeção.",
    Icon: Fuel,
    image: "IMG (7).webp",
    imageAlt: "Sistema de injeção eletrônica em diagnóstico",
    detail: "INJEÇÃO · DIAGNÓSTICO",
  },
  {
    title: "Lubrificação",
    description: "Procedimentos e especificações para os componentes da lubrificação.",
    Icon: MoveVertical,
    image: "IMG (8).webp",
    imageAlt: "Componentes do sistema de lubrificação",
    detail: "LUBRIFICAÇÃO · PROCEDIMENTOS",
  },
] as const;

export function ProductContent() {
  return (
    <section className="overflow-hidden bg-secondary/50 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle pre="Conteúdo técnico para" hl="cada serviço" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
          Consulte manuais e sistemas de diferentes áreas da manutenção.
        </p>
        <div
          className="mt-8 flex w-max gap-4 marquee hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]"
          role="region"
          aria-label="Conteúdo dos manuais técnicos"
        >
          {[...PRODUCT_CONTENT, ...PRODUCT_CONTENT].map((content, i) => (
            <motion.article
              key={`${content.title}-${i}`}
              aria-hidden={i >= PRODUCT_CONTENT.length}
              whileHover={{ y: -6 }}
              className="relative h-[420px] w-[240px] shrink-0 overflow-hidden rounded-2xl bg-ink shadow-card"
            >
              <img
                src={`/images/conteudo/${content.image}`}
                alt={i < PRODUCT_CONTENT.length ? content.imageAlt : ""}
                width={240}
                height={420}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-card/95 px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-primary shadow-card">
                <content.Icon aria-hidden="true" className="h-4 w-4" />
                {content.detail}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5 text-ink-foreground">
                <h3 className="text-xl font-black">{content.title}</h3>
                <p className="mt-2 text-sm text-ink-foreground/85">{content.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <motion.a
            href="#planos"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-8 py-4 text-center text-sm font-black uppercase tracking-wide text-primary-foreground shadow-glow"
          >
            Quero acessar os manuais
          </motion.a>
        </div>
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
  ["ADLY", "https://images.seeklogo.com/logo-png/0/1/adly-4-ruedas-logo-png_seeklogo-3400.png"],
  ["SHINERAY", "https://www.motoplanete.com/Shineray/Shineray-logo.webp"],
  ["CAGIVA", "https://th.bing.com/th/id/R.fea868fa1292e6e8febf4bce71f0872d?rik=CjykOfgLggvgtA&riu=http%3a%2f%2fcybermotorcycle.com%2fimages%2fmarques%2fcagiva-logo-1080.jpg&ehk=fXlDHV8GrgGzeR9xCJG7Plh3o8%2bDqBMP5weG2JB9BW8%3d&risl=&pid=ImgRaw&r=0"],
  ["POLARIS", "https://tse1.mm.bing.net/th/id/OIP.OewCm8tRBYFfpiNhQAK_HAHaFQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"],
  ["APRILIA", "https://loghi-famosi.com/wp-content/uploads/2021/08/Logo-della-Aprilia.png"],
  ["ZONTES", "https://zontesmotos.com.br/images/brands/logo_zontes-v2.png"],
  ["HIMALAYAN", "https://tse2.mm.bing.net/th/id/OIP.H2yJU3jiAa5rbGmMASsKRgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"],
  ["AEON", "https://shoplineimg.com/62b91933cf0c8f006091c8ce/684fbedda36906000d30b67a/1200x.webp?source_format=png"],
  ["KASINSKI", "https://tse3.mm.bing.net/th/id/OIP.2cWIFm8eARG0fEaidkkQZAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"],
  ["SANYANG", "https://images.seeklogo.com/logo-png/48/1/sanyang-motor-logo-png_seeklogo-487574.png"],
  ["TRIUMPH", "https://tse4.mm.bing.net/th/id/OIP.cgeqQQMyGmrlNDBCRMj_4QHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"],
  ["Husqvarna", "https://i.ibb.co/3mSkrvXj/HUSQVARNA-1024x675.webp"],
  ["Ducati", "https://i.ibb.co/RGk58vrB/DUCATI-1024x1024.webp"],
  ["HYOSUNG", "https://tse2.mm.bing.net/th/id/OIP.lENJfEDIjFo8nMWEmF_NuQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"],
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
    <section id="faq" className="px-4 py-14">
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
        <a href="#">Política de Privacidade</a>
        <a href="#">Termos de Uso</a>
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
