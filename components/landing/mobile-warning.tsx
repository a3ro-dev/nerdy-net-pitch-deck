"use client";

import { useState, useEffect } from "react";
import { Monitor } from "lucide-react";

export function MobileWarning() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Only run on client — show if narrower than lg (1024px)
    const check = () => {
      if (window.innerWidth < 1024 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [dismissed]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl px-8 text-center">
      {/* Subtle grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-white"
            style={{ top: `${16.66 * (i + 1)}%`, left: 0, right: 0 }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-white"
            style={{ left: `${20 * (i + 1)}%`, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-sm">
        {/* Icon */}
        <div className="w-16 h-16 border border-white/20 flex items-center justify-center">
          <Monitor className="w-7 h-7 text-white/60" />
        </div>

        {/* Wordmark */}
        <p className="text-xs font-mono text-white/30 tracking-widest uppercase">
          Nerdy Network &middot; Pitch Deck
        </p>

        {/* Headline */}
        <div className="space-y-2">
          <h2 className="text-4xl font-display text-white leading-tight tracking-tight">
            Best viewed
            <br />
            <span className="text-white/30">on desktop.</span>
          </h2>
        </div>

        {/* Body */}
        <p className="text-sm text-white/50 leading-relaxed">
          This pitch deck is designed for large screens. Open it on a laptop or monitor for the full experience — animations, layouts, and data visualizations all depend on it.
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-white/10" />

        {/* Actions */}
        <div className="flex flex-col items-center gap-4 w-full">
          <button
            onClick={() => setDismissed(true)}
            className="w-full py-3 border border-white/20 text-white/40 text-sm font-mono hover:border-white/40 hover:text-white/60 transition-all duration-300"
          >
            View anyway
          </button>
          <p className="text-xs font-mono text-white/20">
            Some sections may not display correctly.
          </p>
        </div>
      </div>
    </div>
  );
}
