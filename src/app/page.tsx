import Cup3DClient from "@/components/three/Cup3DClient";
import Reveal from "@/components/Reveal";
import { BRAND, FLAVOURS, USE_CASES, TRUST, waLink } from "@/lib/brand";

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
      <Contact />
      <Footer />
    </main>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/cup2eat-logo.svg" alt="CUP2EAT logo" className="h-11 w-11" />
          <span className="font-serif text-xl font-bold tracking-wide text-cream">
            CUP<span className="text-gold">2</span>EAT
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-cream/80 md:flex">
          <a href="#flavours" className="hover:text-gold">Flavours</a>
          <a href="#wholesale" className="hover:text-gold">Wholesale</a>
          <a href="#trust" className="hover:text-gold">Why Us</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </nav>
        <a
          href={waLink("Hi CUP2EAT! I'd like to order edible cups.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-forest-deep transition hover:bg-gold-soft"
        >
          Order Now
        </a>
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
            <a
              href={waLink("Hi CUP2EAT! I'd like to order edible cups.")}
              target="_blank"
              className="rounded-full bg-gold px-7 py-3.5 font-semibold text-forest-deep shadow-lg shadow-gold/20 transition hover:bg-gold-soft"
            >
              Order on WhatsApp
            </a>
            <a
              href="#wholesale"
              className="rounded-full border border-cream/30 px-7 py-3.5 font-semibold text-cream transition hover:border-gold hover:text-gold"
            >
              Bulk / Café Enquiry
            </a>
          </div>
          <p className="mt-6 text-sm text-cream/50">
            ₹20 / cup retail · from ~₹10 / cup wholesale · 4 flavours
          </p>
        </div>

        <div className="relative h-[420px] md:h-[600px]">
          <Cup3DClient interactive className="h-full w-full" />
          <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-cream/40">
            drag to spin
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BADGE MARQUEE ---------------- */
function BadgeMarquee() {
  const items = [...TRUST, "Free Pan-India Delivery", "Small Sip · Big Change"];
  return (
    <div className="border-y border-cream/10 bg-forest py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 text-sm font-semibold uppercase tracking-wider text-gold/90">
        {items.map((t) => (
          <span key={t} className="flex items-center gap-2">
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
                <a
                  href={waLink(`Hi CUP2EAT! I'm interested in the ${t.name} (${t.price} ${t.unit}).`)}
                  target="_blank"
                  className={`mt-8 block rounded-full px-6 py-3 text-center font-semibold transition ${
                    t.highlight
                      ? "bg-gold text-forest-deep hover:bg-gold-soft"
                      : "border border-cream/30 text-cream hover:border-gold hover:text-gold"
                  }`}
                >
                  Enquire on WhatsApp
                </a>
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <Reveal key={n} delay={n * 100}>
              {/* TODO: replace with Instagram embed <blockquote class="instagram-media" ...> + embed.js */}
              <div className="flex aspect-[9/13] flex-col items-center justify-center rounded-2xl border border-dashed border-cream/20 bg-forest-deep p-6 text-center">
                <div className="text-3xl">▶</div>
                <p className="mt-3 text-sm text-cream/50">
                  Instagram reel #{n}
                  <br />
                  <span className="text-xs">paste a reel URL to embed here</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-cream/40">
          Send me the reel URLs you want featured and I&apos;ll wire the live embeds.
        </p>
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
            <a
              href={waLink("Hi CUP2EAT! I'd like to place an order.")}
              target="_blank"
              className="rounded-full bg-gold px-8 py-4 font-semibold text-forest-deep shadow-lg shadow-gold/20 transition hover:bg-gold-soft"
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/cup2eat-logo.svg" alt="CUP2EAT logo" className="h-11 w-11" />
            <span className="font-serif text-xl font-bold text-cream">
              CUP<span className="text-gold">2</span>EAT
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
