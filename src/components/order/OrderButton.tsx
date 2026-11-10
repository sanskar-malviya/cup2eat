"use client";

export type OrderIntent = {
  mode?: "retail" | "pack";
  pack?: "standard" | "premium";
  flavour?: string;
};

export function openOrder(detail: OrderIntent = {}) {
  window.dispatchEvent(new CustomEvent("cup2eat:order", { detail }));
}

export default function OrderButton({
  children,
  intent = {},
  className = "",
}: {
  children: React.ReactNode;
  intent?: OrderIntent;
  className?: string;
}) {
  return (
    <button type="button" onClick={() => openOrder(intent)} className={className}>
      {children}
    </button>
  );
}
