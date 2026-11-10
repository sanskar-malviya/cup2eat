import Cup3DClient from "@/components/three/Cup3DClient";
import Reveal from "@/components/Reveal";
import InstagramEmbed from "@/components/InstagramEmbed";
import OrderModal from "@/components/order/OrderModal";
import OrderButton from "@/components/order/OrderButton";
import { BRAND, FLAVOURS, USE_CASES, TRUST, REELS, waLink } from "@/lib/brand";

export default function Home() {
  return (
    <main className="relative bg-forest-deep text-cream">
      <Nav />
      <Hero />
      <BadgeMarquee />
      <Mission />
      <Flavours />
      <UseCases />
      <Wholesale />
      <Trust />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <OrderModal />
      <FloatingWhatsApp />
    </main>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hi CUP2EAT! I have a question.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl shadow-lg shadow-black/30 transition hover:scale-110"
    >
      <span aria-hidden>💬</span>
    </a>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="block h-11 w-11 overflow-hidden rounded-full ring-1 ring-gold/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/logo.png"
              alt="CUP2EAT logo"
              className="h-full w-full scale-[1.18] object-cover"
            />
          </span>
          <span className="font-serif text-xl font-bold tracking-wide text-cream">
            CUP<span className="text-gold text-[1.35em] font-extrabold">2</span>EAT
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-cream/80 md:flex">
          <a href="#flavours" className="hover:text-gold">Flavours</a>
          <a href="#wholesale" className="hover:text-gold">Wholesale</a>
          <a href="#trust" className="hover:text-gold">Why Us</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </nav>
        <OrderButton className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-forest-deep transition hover:bg-gold-soft">
          Order Now
        </OrderButton>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-leaf/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-6 px-5 pt-24 md:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            🌱 Zero-Waste · FSSAI Licensed
          </span>
          <h1 className="mt-5 font-serif text-5xl font-extrabold leading-[1.05] text-cream md:text-7xl">
            Drink it.
            <br />
            Then <span className="text-gradient-gold">eat it.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-cream/70">
            India&apos;s edible, biodegradable cups. Enjoy your chai, coffee or
            dessert — then eat the cup. Free delivery all over India.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <OrderButton className="rounded-full bg-gold px-7 py-3.5 font-semibold text-forest-deep shadow-lg shadow-gold/20 transition hover:bg-gold-soft">
              Order Now →
            </OrderButton>
            <a
              href={waLink("Hi CUP2EAT! I'd like to order edible cups.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/30 px-7 py-3.5 font-semibold text-cream transition hover:border-gold hover:text-gold"
            >
              Order on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-cream/50">
            ₹20 / cup retail · from ~₹10 / cup wholesale · 4 flavours
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 border-t border-cream/10 pt-6">
            {[
              { n: "100ml", l: "per cup" },
              { n: "4", l: "flavours" },
              { n: "0", l: "plastic waste" },
              { n: "Pan-India", l: "free delivery" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-lg font-bold text-gradient-gold sm:text-xl">
                  {s.n}
                </div>
                <div className="text-xs text-cream/50">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="pointer-events-none relative order-first h-[300px] w-full sm:h-[420px] md:order-none md:h-[600px]"
          style={{ touchAction: "pan-y" }}
        >
          <Cup3DClient variant="hero" className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- BADGE MARQUEE ---------------- */
function BadgeMarquee() {
  const items = [
    ...TRUST,
    "Free Pan-India Delivery",
    "Small Sip · Big Change",
    "Drink it · Then Eat it",
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-cream/10 bg-forest py-4">
      <div className="flex w-max animate-marquee items-center gap-x-8 whitespace-nowrap px-4 text-sm font-semibold uppercase tracking-wider text-gold/90">
        {row.map((t, i) => (
          <span key={`${t}-${i}`} className="flex items-center gap-2">
            <span className="text-leaf">✦</span> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- MISSION ---------------- */
function Mission() {
  return (
    <section className="bg-forest-deep py-24">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <Reveal>
          <h2 className="font-serif text-4xl font-bold text-cream md:text-5xl">
            Small Sip. <span className="text-gradient-gold">Big Change.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-cream/70">
            Every year billions of plastic and paper cups are used once and
            thrown away. CUP2EAT replaces them with a cup you can actually eat —
            or that composts naturally. Say no to plastic. Make every sip count.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            { big: "0", small: "plastic waste left behind" },
            { big: "100%", small: "edible & biodegradable" },
            { big: "4", small: "delicious flavours" },
          ].map((s, i) => (
            <Reveal key={s.small} delay={i * 120}>
              <div className="rounded-2xl border border-cream/10 bg-forest p-8">
                <div className="font-serif text-5xl font-extrabold text-gradient-gold">
                  {s.big}
                </div>
                <div className="mt-2 text-sm uppercase tracking-wide text-cream/60">
                  {s.small}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FLAVOURS ---------------- */
function Flavours() {
  return (
    <section id="flavours" className="bg-forest py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="text-center">
          <h2 className="font-serif text-4xl font-bold text-cream md:text-5xl">
            Four Flavours. <span className="text-gradient-gold">One Cup.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Tap and drag any cup to explore it. Real flavours, a greener planet.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FLAVOURS.map((f, i) => (
            <Reveal key={f.key} delay={i * 100}>
              <div className="group rounded-3xl border border-cream/10 bg-forest-deep p-5 transition hover:border-gold/50">
                <div className="h-56 w-full">
                  <Cup3DClient
                    url={f.model}
                    tint={f.tint}
                    glossy={f.glossy}
                    className="h-full w-full"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl font-bold text-cream">
                    {f.name}
                  </h3>
                  {f.glossy && (
                    <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gold">
                      Premium
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-cream/60">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-cream/40">
          Live 3D models — Chocolate, Vanilla &amp; Elaichi share the biscuit cup
          (tinted); Chocolate Coated uses its own glossy model.
        </p>
      </div>
    </section>
  );
}

/* ---------------- USE CASES ---------------- */
function UseCases() {
  return (
    <section className="bg-forest-deep py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="text-center">
          <h2 className="font-serif text-4xl font-bold text-cream md:text-5xl">
            Perfect For <span className="text-gradient-gold">Everything</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((u, i) => (
            <Reveal key={u.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-cream/10 bg-forest p-7 transition hover:-translate-y-1 hover:border-gold/50">
                <div className="text-4xl">{u.icon}</div>
                <h3 className="mt-4 font-serif text-lg font-bold text-cream">
                  {u.title}
                </h3>
                <p className="mt-1 text-sm text-cream/60">{u.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHOLESALE ---------------- */
function Wholesale() {
  const tiers = [
    {
      name: "Standard Pack",
      price: "₹3,999",
      unit: "for 396 cups",
      per: "≈ ₹10 / cup",
      feats: ["Chocolate, Vanilla & Elaichi", "100 ml capacity", "Free pan-India delivery"],
      highlight: false,
    },
    {
      name: "Premium — Chocolate Coated",
      price: "₹4,000",
      unit: "for 200 cups",
      per: "≈ ₹20 / cup",
      feats: ["Glossy chocolate shell", "Perfect for desserts & events", "Free pan-India delivery"],
      highlight: true,
    },
  ];
  return (
    <section id="wholesale" className="bg-forest py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            For Businesses
          </span>
          <h2 className="mt-2 font-serif text-4xl font-bold text-cream md:text-5xl">
            Wholesale for Cafés & Events
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Stand out with a serving experience customers remember. Bulk pricing,
            delivered free across India.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <div
                className={`relative h-full rounded-3xl border p-8 ${
                  t.highlight
                    ? "border-gold bg-gradient-to-b from-gold/15 to-transparent"
                    : "border-cream/15 bg-forest-deep"
                }`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-xs font-bold text-forest-deep">
                    BEST FOR DESSERTS
                  </span>
                )}
                <h3 className="font-serif text-xl font-bold text-cream">{t.name}</h3>
                <div className="mt-4 flex items-end gap-2">
                  <span className="font-serif text-5xl font-extrabold text-gradient-gold">
                    {t.price}
                  </span>
                  <span className="pb-1 text-sm text-cream/60">{t.unit}</span>
                </div>
                <div className="text-sm font-medium text-leaf">{t.per}</div>
                <ul className="mt-6 space-y-3">
                  {t.feats.map((fe) => (
                    <li key={fe} className="flex items-start gap-2 text-sm text-cream/80">
                      <span className="text-gold">✓</span> {fe}
                    </li>
                  ))}
                </ul>
                <OrderButton
                  intent={{ mode: "pack", pack: t.highlight ? "premium" : "standard" }}
                  className={`mt-8 block w-full rounded-full px-6 py-3 text-center font-semibold transition ${
                    t.highlight
                      ? "bg-gold text-forest-deep hover:bg-gold-soft"
                      : "border border-cream/30 text-cream hover:border-gold hover:text-gold"
                  }`}
                >
                  Order this pack
                </OrderButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST ---------------- */
function Trust() {
  return (
    <section id="trust" className="bg-forest-deep py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2">
        <Reveal>
          <h2 className="font-serif text-4xl font-bold text-cream md:text-5xl">
            Safe, Certified & <span className="text-gradient-gold">Made with Care</span>
          </h2>
          <p className="mt-4 text-cream/70">
            Founded by {BRAND.founder}, CUP2EAT is a proudly Indian startup —
            recognised at Startup Mahakumbh 2025 and fully FSSAI licensed. Because
            you&apos;re eating the cup, food safety comes first.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {TRUST.map((t) => (
              <span
                key={t}
                className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-cream/50">
            FSSAI Reg. No. <span className="text-cream/80">{BRAND.fssai}</span>
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "Pan-India", v: "Free delivery everywhere" },
              { k: "100 ml", v: "Ideal serving size" },
              { k: "Pure Veg", v: "Vegan friendly too" },
              { k: "Startup", v: "Mahakumbh 2025 featured" },
            ].map((c) => (
              <div
                key={c.k}
                className="rounded-2xl border border-cream/10 bg-forest p-6"
              >
                <div className="font-serif text-2xl font-bold text-gradient-gold">
                  {c.k}
                </div>
                <div className="mt-1 text-sm text-cream/60">{c.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- REVIEWS (Instagram embed slots) ---------------- */
function Reviews() {
  return (
    <section className="bg-forest py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="text-center">
          <h2 className="font-serif text-4xl font-bold text-cream md:text-5xl">
            Loved on <span className="text-gradient-gold">Instagram</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Real reels, streamed live from @cup2eat — nothing downloaded.
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REELS.map((url, i) => (
            <Reveal key={url} delay={(i % 3) * 100}>
              <InstagramEmbed url={url} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-cream/30 px-7 py-3 font-semibold text-cream transition hover:border-gold hover:text-gold"
          >
            Follow @cup2eat on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    {
      q: "Can you really eat the cup?",
      a: "Yes! The cup is 100% edible, made from a biscuit-style dough. Enjoy your drink, then eat the cup — or let it compost naturally. Nothing to throw away.",
    },
    {
      q: "What flavours are available?",
      a: "Chocolate, Vanilla and Elaichi in the standard range, plus a premium Chocolate Coated cup. Each holds 100 ml — perfect for chai, coffee, ice-cream and desserts.",
    },
    {
      q: "Does the cup get soggy?",
      a: "No. The cups are designed to hold hot and cold drinks long enough to enjoy them, staying crunchy to the last sip.",
    },
    {
      q: "Do you deliver across India?",
      a: "Yes — free delivery all over India. Retail and wholesale orders both ship nationwide with safe, protective packaging.",
    },
    {
      q: "Are the cups food-safe?",
      a: `Absolutely. CUP2EAT is FSSAI licensed (Reg. No. ${BRAND.fssai}). Because you're eating the cup, food safety is our top priority. They're pure veg and vegan friendly.`,
    },
    {
      q: "Can I order in bulk for my café or event?",
      a: "Yes. Choose a wholesale pack in the order window, or message us on WhatsApp for custom quantities for cafés, restaurants, weddings and events.",
    },
  ];
  return (
    <section className="bg-forest-deep py-24">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal className="text-center">
          <h2 className="font-serif text-4xl font-bold text-cream md:text-5xl">
            Frequently <span className="text-gradient-gold">Asked</span>
          </h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group rounded-2xl border border-cream/10 bg-forest p-5 transition hover:border-gold/40">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-cream">
                  {f.q}
                  <span className="ml-4 text-gold transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="bg-forest-deep py-24">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <h2 className="font-serif text-4xl font-bold text-cream md:text-5xl">
            Ready to <span className="text-gradient-gold">Eat Your Drink?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-cream/70">
            Order retail or enquire about bulk pricing for your café, restaurant
            or event. We deliver all over India.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <OrderButton className="rounded-full bg-gold px-8 py-4 font-semibold text-forest-deep shadow-lg shadow-gold/20 transition hover:bg-gold-soft">
              Order Now →
            </OrderButton>
            <a
              href={waLink("Hi CUP2EAT! I'd like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/30 px-8 py-4 font-semibold text-cream transition hover:border-gold hover:text-gold"
            >
              💬 WhatsApp Us
            </a>
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="rounded-full border border-cream/30 px-8 py-4 font-semibold text-cream transition hover:border-gold hover:text-gold"
            >
              📞 {BRAND.phone}
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="rounded-full border border-cream/30 px-8 py-4 font-semibold text-cream transition hover:border-gold hover:text-gold"
            >
              ✉️ Email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-forest py-12">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="block h-11 w-11 overflow-hidden rounded-full ring-1 ring-gold/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/logo.png"
                alt="CUP2EAT logo"
                className="h-full w-full scale-[1.18] object-cover"
              />
            </span>
            <span className="font-serif text-xl font-bold text-cream">
              CUP<span className="text-gold text-[1.35em] font-extrabold">2</span>EAT
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-cream/60">
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CUP2EAT on Instagram"
              className="hover:text-gold"
            >
              Instagram
            </a>
            <a
              href={BRAND.threads}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CUP2EAT on Threads"
              className="hover:text-gold"
            >
              Threads
            </a>
            <a
              href={waLink("Hi CUP2EAT! I'd like to order edible cups.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with CUP2EAT on WhatsApp"
              className="hover:text-gold"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              aria-label="Email CUP2EAT"
              className="hover:text-gold"
            >
              Email
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-cream/10 pt-6 text-center text-xs text-cream/40">
          <p>
            {BRAND.name} — {BRAND.tagline}. · FSSAI {BRAND.fssai} · {BRAND.address}
          </p>
          <p className="mt-2">Founded by {BRAND.founder}. Delivered free all over India.</p>
        </div>
      </div>
    </footer>
  );
}
