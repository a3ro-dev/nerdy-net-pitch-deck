"use client";

import { useState, useEffect } from "react";

const slides = [
  { name: "Cover",       href: "#cover"       },
  { name: "Problem",     href: "#problem"     },
  { name: "Solution",    href: "#solution"    },
  { name: "Product",     href: "#product"     },
  { name: "Journey",     href: "#journey"     },
  { name: "Traction",    href: "#traction"    },
  { name: "Market",      href: "#market"      },
  { name: "Model",       href: "#model"       },
  { name: "GTM",         href: "#gtm"         },
  { name: "Competitive", href: "#competitive" },
  { name: "Why Now",     href: "#why-now"     },
  { name: "Roadmap",     href: "#roadmap"     },
  { name: "Team",        href: "#team"        },
  { name: "Ask",         href: "#ask"         },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      // Determine active slide via section positions
      const sections = slides.map((s) =>
        document.querySelector(s.href) as HTMLElement | null
      );
      const scrollY = window.scrollY + window.innerHeight * 0.4;
      let current = 0;
      sections.forEach((sec, i) => {
        if (sec && sec.offsetTop <= scrollY) current = i;
      });
      setActiveSlide(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <a href="#cover" className="flex items-center gap-2 group">
            <span
              className={`font-display tracking-tight transition-all duration-500 ${
                isScrolled ? "text-xl text-foreground" : "text-2xl text-white"
              }`}
            >
              NERDY NETWORK
            </span>
            <span
              className={`font-mono transition-all duration-500 ${
                isScrolled ? "text-[10px] mt-0.5 text-muted-foreground" : "text-xs mt-1 text-white/60"
              }`}
            >
              PITCH
            </span>
          </a>

          {/* Slide navigation — desktop dots */}
          <div className="hidden lg:flex items-center gap-1.5">
            {slides.map((slide, i) => (
              <a
                key={slide.name}
                href={slide.href}
                title={slide.name}
                className={`group relative flex items-center justify-center w-5 h-5 transition-all duration-300`}
              >
                <span
                  className={`rounded-full transition-all duration-300 ${
                    activeSlide === i
                      ? isScrolled ? "w-3 h-3 bg-foreground" : "w-3 h-3 bg-white"
                      : isScrolled
                      ? "w-1.5 h-1.5 bg-foreground/25 group-hover:bg-foreground/60"
                      : "w-1.5 h-1.5 bg-white/25 group-hover:bg-white/60"
                  }`}
                />
                {/* Tooltip */}
                <span className={`absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}>
                  {slide.name}
                </span>
              </a>
            ))}
          </div>

          {/* Slide counter */}
          <div
            className={`hidden md:flex items-center gap-2 font-mono text-xs transition-colors duration-500 ${
              isScrolled ? "text-muted-foreground" : "text-white/50"
            }`}
          >
            <span>{String(activeSlide + 1).padStart(2, "0")}</span>
            <span>/</span>
            <span>{String(slides.length).padStart(2, "0")}</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
