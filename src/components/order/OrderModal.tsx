"use client";

import { useEffect, useMemo, useState } from "react";
import { waLink } from "@/lib/brand";
import type { OrderIntent } from "./OrderButton";

const RETAIL_PRICE = 20;
const PACKS = {
  standard: { label: "Standard Pack", price: 3999, cups: 396, note: "Chocolate · Vanilla · Elaichi" },
  premium: { label: "Premium — Chocolate Coated", price: 4000, cups: 200, note: "Glossy chocolate shell" },
} as const;

const FLAVOURS = ["Chocolate", "Vanilla", "Elaichi", "Chocolate Coated", "Mixed"];

type Step = "form" | "paying" | "success";

export default function OrderModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("form");
  const [mode, setMode] = useState<"retail" | "pack">("retail");
  const [pack, setPack] = useState<"standard" | "premium">("standard");
  const [flavour, setFlavour] = useState("Chocolate");
  const [qty, setQty] = useState(25);
  const [packs, setPacks] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const onOpen = (e: Event) => {
      const d = (e as CustomEvent<OrderIntent>).detail || {};
      if (d.mode) setMode(d.mode);
      if (d.pack) {
        setMode("pack");
        setPack(d.pack);
      }
      if (d.flavour) setFlavour(d.flavour);
      setStep("form");
      setOpen(true);
    };
    window.addEventListener("cup2eat:order", onOpen);
    return () => window.removeEventListener("cup2eat:order", onOpen);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const total = useMemo(
    () => (mode === "retail" ? qty * RETAIL_PRICE : PACKS[pack].price * packs),
    [mode, qty, pack, packs]
  );
  const units = mode === "retail" ? qty : PACKS[pack].cups * packs;

  const summaryLine =
    mode === "retail"
      ? `${qty} × ${flavour} cups (₹${RETAIL_PRICE}/cup)`
      : `${packs} × ${PACKS[pack].label} (${PACKS[pack].cups} cups each)`;

  const waOrder = waLink(
    `Hi CUP2EAT! I'd like to order:\n${summaryLine}\nTotal: ₹${total.toLocaleString("en-IN")}\nName: ${name || "-"}\nPhone: ${phone || "-"}\nAddress: ${address || "-"}`
  );

  const pay = () => {
    // DEMO: real Cashfree flow = POST to /api/create-order -> get payment_session_id
    // -> Cashfree().checkout({ paymentSessionId }). Drop in live keys + a backend route.
    setStep("paying");
    setTimeout(() => setStep("success"), 1600);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-gold/25 bg-forest-deep p-6 shadow-2xl sm:rounded-3xl">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
        >
          ✕
        </button>

        {step === "form" && (
          <>
            <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold">
              Order · Demo Checkout
            </div>
            <h3 className="font-serif text-2xl font-bold text-cream">Build your order</h3>

            {/* mode toggle */}
            <div className="mt-5 grid grid-cols-2 gap-2 rounded-full bg-cream/5 p-1">
              {(["retail", "pack"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`rounded-full py-2 text-sm font-semibold transition ${
                    mode === m ? "bg-gold text-forest-deep" : "text-cream/70"
                  }`}
                >
                  {m === "retail" ? "Retail (₹20/cup)" : "Wholesale pack"}
                </button>
              ))}
            </div>

            {mode === "retail" ? (
              <div className="mt-5 space-y-4">
                <div>
                  <label className="text-sm text-cream/70">Flavour</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {FLAVOURS.map((f) => (
                      <button
                        key={f}
                        onClick={() => setFlavour(f)}
                        className={`rounded-full border px-3 py-1.5 text-sm transition ${
                          flavour === f
                            ? "border-gold bg-gold/15 text-gold"
                            : "border-cream/20 text-cream/70 hover:border-gold/50"
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
                <Stepper
                  label="Quantity (cups)"
                  value={qty}
                  min={10}
                  step={5}
                  onChange={setQty}
                />
              </div>
            ) : (
              <div className="mt-5 space-y-4">
                <div className="grid gap-2">
                  {(Object.keys(PACKS) as (keyof typeof PACKS)[]).map((k) => (
                    <button
                      key={k}
                      onClick={() => setPack(k)}
                      className={`flex items-center justify-between rounded-2xl border p-4 text-left transition ${
                        pack === k ? "border-gold bg-gold/10" : "border-cream/15"
                      }`}
                    >
                      <span>
                        <span className="block font-semibold text-cream">{PACKS[k].label}</span>
                        <span className="text-xs text-cream/60">{PACKS[k].note}</span>
                      </span>
                      <span className="text-right">
                        <span className="block font-serif text-lg font-bold text-gold">
                          ₹{PACKS[k].price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-cream/60">{PACKS[k].cups} cups</span>
                      </span>
                    </button>
                  ))}
                </div>
                <Stepper label="Number of packs" value={packs} min={1} step={1} onChange={setPacks} />
              </div>
            )}

            {/* contact */}
            <div className="mt-5 space-y-3">
              <Input placeholder="Full name" value={name} onChange={setName} />
              <Input placeholder="Phone number" value={phone} onChange={setPhone} />
              <Input placeholder="Delivery address" value={address} onChange={setAddress} />
            </div>

            {/* summary */}
            <div className="mt-5 rounded-2xl border border-cream/10 bg-cream/5 p-4">
              <div className="flex justify-between text-sm text-cream/70">
                <span>{summaryLine}</span>
              </div>
              <div className="mt-2 flex items-end justify-between">
                <span className="text-sm text-cream/60">{units} cups · free delivery</span>
                <span className="font-serif text-2xl font-bold text-gradient-gold">
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <button
              onClick={pay}
              className="mt-5 w-full rounded-full bg-gold py-3.5 font-semibold text-forest-deep transition hover:bg-gold-soft"
            >
              Pay securely · Cashfree
            </button>
            <a
              href={waOrder}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block w-full rounded-full border border-cream/25 py-3 text-center font-semibold text-cream transition hover:border-gold hover:text-gold"
            >
              Or order on WhatsApp
            </a>
            <p className="mt-3 text-center text-[11px] text-cream/40">
              Demo checkout — Cashfree payment is simulated. Ready to go live with real keys.
            </p>
          </>
        )}

        {step === "paying" && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="h-12 w-12 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
            <p className="mt-6 font-semibold text-cream">Redirecting to Cashfree…</p>
            <p className="mt-1 text-sm text-cream/50">Securely processing ₹{total.toLocaleString("en-IN")}</p>
          </div>
        )}

        {step === "success" && (
          <div className="flex flex-col items-center justify-center py-14 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-leaf/20 text-3xl text-leaf">
              ✓
            </div>
            <h3 className="mt-5 font-serif text-2xl font-bold text-cream">Order placed!</h3>
            <p className="mt-2 max-w-xs text-sm text-cream/60">
              {summaryLine} — ₹{total.toLocaleString("en-IN")}. This is a demo confirmation;
              we&apos;ll reach out on {phone || "your phone"} to finalise.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full bg-gold px-8 py-3 font-semibold text-forest-deep hover:bg-gold-soft"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Stepper({
  label,
  value,
  min,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  step: number;
  onChange: (n: number) => void;
}) {
  return (
    <div>
      <label className="text-sm text-cream/70">{label}</label>
      <div className="mt-2 flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(min, value - step))}
          className="grid h-10 w-10 place-items-center rounded-full border border-cream/25 text-xl text-cream hover:border-gold"
        >
          −
        </button>
        <span className="w-16 text-center font-serif text-xl font-bold text-cream">{value}</span>
        <button
          onClick={() => onChange(value + step)}
          className="grid h-10 w-10 place-items-center rounded-full border border-cream/25 text-xl text-cream hover:border-gold"
        >
          +
        </button>
      </div>
    </div>
  );
}

function Input({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border border-cream/15 bg-cream/5 px-4 py-3 text-cream placeholder-cream/40 outline-none focus:border-gold"
    />
  );
}
