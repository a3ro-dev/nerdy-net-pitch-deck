
# AGENTS.md — Nerdy Network Pitch Deck

## Mandatory References

Before making **any** changes to `pitch-deck.html`, you **must** read and follow:

1. **[SKILL.md](./SKILL.md)** — Frontend Slides skill. Contains viewport fitting rules, content density limits, responsive breakpoint requirements, and animation patterns. Every rule in this file is non-negotiable.
3. **[pitch-content.txt](./pitch-content.txt)** — The authoritative pitch deck content. All slide text, stats, and facts must come from this file. Do not invent or hallucinate numbers.
4. **[cmd.txt](./cmd.txt)** — PDF export command and dev server instructions.

---

## Design Standards

### Anti-AI-Slop Rules

> [!CAUTION]
> The pitch deck must look like a **professionally designed investor presentation**, not AI-generated template garbage. Violating these rules is unacceptable.

**DO:**
- Use intentional, brand-aligned color palette (teal `hsl(175, 84%, 32%)`, green `hsl(86, 100%, 38%)`, blue `#20adee`)
- Use premium fonts from **Google Fonts** (currently: Plus Jakarta Sans + Inter)
- Use Lucide Icons via CDN for all iconography — no emojis
- Use consistent card styling, spacing rhythm, and visual hierarchy
- Use subtle, purposeful animations (entrance reveals, not bouncing/spinning)
- Keep each slide to exactly **100vh** — no scrolling, ever
- Use `clamp()` for all typography and spacing

**DO NOT:**
- Use rainbow gradients, neon glows, or "glassmorphism" effects
- Use generic placeholder colors (plain red, blue, green)
- Use emojis as icons
- Add decorative elements that don't serve the content
- Use Fontshare or any CDN that fails in Puppeteer — stick to Google Fonts
- Cram content to fit — split into multiple slides instead
- Use `loveable.dev` / `v0` / generic AI template aesthetics

### Typography Rules
- **Display font:** `Plus Jakarta Sans` (600/700/800) — headings, titles, stats
- **Body font:** `Inter` (400/500/700) — paragraphs, labels, descriptions
- All sizes must use `clamp(min, preferred, max)` — no fixed pixel sizes

### Color Palette
```css
--accent: hsl(175, 84%, 32%);        /* Primary teal */
--accent-secondary: hsl(175, 84%, 40%); /* Lighter teal */
--accent-alt: hsl(86, 100%, 38%);    /* Green */
--accent-alt2: #20adee;              /* Blue */
--bg-primary: #121212;               /* Dark background */
--text-primary: #ffffff;
--text-secondary: #a1a1aa;
--text-muted: #71717a;
```

---

## Technical Requirements

### Viewport Fitting (from SKILL.md)
- Every `.slide` must have `height: 100vh; height: 100dvh; overflow: hidden;`
- Content density limits: max 6 cards or 6 bullet points per slide
- Responsive breakpoints required at heights: 700px, 600px, 500px
- Width breakpoint at 600px for grid stacking
- `@media (prefers-reduced-motion: reduce)` must be included

### Zero Dependencies
- Single HTML file with inline CSS and JS
- No npm, no build tools, no frameworks
- External resources: Google Fonts CDN + Lucide Icons CDN only

### PDF Export
```bash
# Start dev server first (Live Server on port 5500)
# Then export:
npx decktape generic http://127.0.0.1:5500/pitch-deck.html pitch-deck.pdf --size 1920x1080
```

The HTML includes `@media print` styles for `Ctrl+P` → Save as PDF as an alternative. Set margins to "None" and enable "Background graphics."

### Content Authority
- All facts, stats, and slide text must come from `pitch-content.txt`
- Do not change numbers without user approval
- When condensing for viewport fit, preserve the most impactful stat and the core message
- Use `[Founder Name]`, `[Email]`, `[Calendar Link]` as placeholders for personal info

---

