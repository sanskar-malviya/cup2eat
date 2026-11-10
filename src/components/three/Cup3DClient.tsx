"use client";

import dynamic from "next/dynamic";

/** Client-only loader so the R3F Canvas never runs during server render. */
const Cup3DClient = dynamic(() => import("./Cup3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
    </div>
  ),
});

export default Cup3DClient;
