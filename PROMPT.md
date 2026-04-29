Here's a refined, ultra-specific prompt for v0 that will get you a stunning showcase site:

---

**RESHA — v0 Prompt**

```
Build a multi-page showcase website for "RESHA — Reverence in Recycling", a pilot-stage circular economy platform that processes sacred ritual textile waste from Indian religious institutions with cultural dignity.

## AESTHETIC DIRECTION — NON-NEGOTIABLE

Draw visual inspiration from the brand's PPT: earthy cream/parchment backgrounds with bold ethnic geometric patterns as accents. The palette is:
- Primary: deep forest green (#1B5E3B) for headlines and brand
- Accent: rich saffron/orange (#E87722) for CTAs and highlights  
- Gold: (#F5A623) for decorative elements
- Dark maroon (#7B1C1C) for depth
- Background: warm off-white parchment (#F5F0E8)

Typography must feel sacred + modern:
- Display headlines: "Playfair Display" or "DM Serif Display" — large, elegant, serif
- Body: "Jost" or "Outfit" — clean, readable
- Accent scripts for taglines only: "Pacifico" or similar

The entire visual language should feel like: ancient manuscript meets climate-tech startup. Ritual + data. Sacred + systemic.

Use geometric ethnic border patterns (SVG or CSS) as decorative dividers between sections — inspired by Indian folk art / rangoli / ikat motifs. These should appear as thin horizontal bands between major sections, not overwhelming the content.

NO gradients unless earthy and muted. NO purple. NO neon. NO generic SaaS blues.

## ROUTING — 3 PAGES

Use React Router or Next.js App Router with these routes:
- `/` — Landing Page (most important, most elaborate)
- `/network` — Operations Dashboard  
- `/onboard` — Institution Onboarding

Shared navigation bar: Logo "resha" in display font + nav links + "Partner With Us" CTA button in saffron.

---

## PAGE 1: LANDING PAGE `/`

### HERO
Full-viewport hero. Large serif headline split across two lines:
Line 1: "Sacred Cloth." (green)
Line 2: "Reborn with Reverence." (saffron)

Subheadline: "India's first dignity-first circular infrastructure for ritual textile waste — from temple floors to recycled fiber."

Two CTAs side by side: [Explore Network →] [Partner With RESHA →]

Background: parchment texture with a subtle geometric SVG mandala-like pattern fading from center. A thin ethnic border band at the bottom of the hero.

### PROBLEM SECTION — "The Holy Waste Paradox"
Dark forest green background section. White text.
Three columns with large stat numbers in saffron:
- "800M+ tonnes" — ritual offerings generated annually across India
- "7.79M tonnes" — India's annual unmanaged textile waste
- "3.4%" — cloth waste at major temple sites like Thirunallar

Below stats: Two-column layout. Left: bold paragraph explaining that devotees cannot discard sacred cloth in ordinary bins — it is a spiritual crisis, not just an environmental one. Right: three bullet cards for "Cultural Dilemma", "Scale of Crisis", "Ecological Consequence" — each card has a small saffron icon and 2-3 sentence explanation.

Bottom of section: thin ethnic geometric divider in gold.

### SOLUTION PIPELINE — "The Dignity-First Approach"
Light parchment background. 
Horizontal 4-step process flow with connecting arrows/line:
Step 1: 🏛️ Institution generates ritual textile waste
Step 2: 📦 Dedicated collection point established on-site
Step 3: ⚙️ Moksha Shredder processes cloth on premises
Step 4: 🔄 Shredded fiber routed to processing partners
Step 5: 🌿 Converted into recycled fiber / ESG-tracked products

Each step: icon + bold label + 1-sentence description. Steps connected by a dashed saffron line.

### MOKSHA SHREDDER SPOTLIGHT
Split section. Left half: dark maroon background with large white text:
Headline: "The Moksha Shredder™"
Subheadline: "On-site. Dignified. Irreversible."
Body: "Our proprietary shredding units are installed directly within temple premises. Sacred cloth is processed on-site — never leaving consecrated grounds as intact fabric — preserving ritual completion while preparing the fiber for its next life."

Right half: parchment background with a stylized mechanical diagram / isometric illustration of the shredder unit (use CSS/SVG art or a decorative geometric block representation — no real image needed). Add specs: Capacity: 80kg/day | Footprint: 1.2m × 0.8m | Process: Dignity-certified | Noise: <45dB

### TRACEABILITY SECTION
Centered section. Headline: "Every Fiber. Fully Traced."
Show a mock traceability card — styled like a logistics shipping card but sacred:

```
BATCH ID: RSH-2024-VNS-0147
Source: Kashi Vishwanath Temple Trust, Varanasi, UP
Collection Date: 12 April 2025
Shredder Unit: MS-007 (Installed: Jan 2025)
Processing Partner: EcoFiber Pvt. Ltd., Kanpur
Material Output: 34.2 kg recycled cotton fiber
Final Destination: Meditation cushion manufacturing, Bengaluru
Status: ✅ Delivered & Certified
```

Style this card with a green left border, parchment background, monospace-style batch ID at top, and a "Verified by RESHA Network" badge. Below it, show 3 smaller batch mini-cards in a row to imply volume.

### IMPACT / ESG METRICS
Dark green background. Large animated counting numbers (use useEffect + setInterval to count up on scroll/mount):
- 12,400 kg — Ritual textile waste diverted
- 8 — Active pilot sites
- 23 — Religious institutions onboarded  
- 5 — Certified processing partners
- 3 states — Operational coverage
- 410 kg — CO₂ equivalent prevented

Grid of 6 metric cards, each with large saffron number + green label + small descriptor line.

### NETWORK PREVIEW TEASER
Light section. Show a simplified static India map outline (SVG) with 5-6 glowing dot markers on cities: Varanasi, Amritsar, Tirupati, Mumbai, Kolkata, Jaipur. Dots pulse gently with CSS animation. Different colors: green = active, orange = onboarding, gold = processing partner.

Below map: CTA button "Open Full Operations Dashboard →" (routes to /network)

### FINAL CTA
Full-width saffron background section.
Large headline: "Bring Dignity to Your Sacred Waste."
Subtext: "Join India's first ritual textile circular economy network. Request a pilot Moksha Shredder installation for your institution."
Button: [Request a Pilot Installation] — dark green, large, prominent
Secondary link: "Learn about ESG partnerships →"

---

## PAGE 2: NETWORK DASHBOARD `/network`

### HEADER
Dark green top bar. "RESHA Operations Network" title. Live mock timestamp. Status badge: "● 8 Sites Active"

### METRICS ROW
4 horizontal stat cards across top:
- Active Pilots: 8
- Textile Processed (MTD): 1,840 kg
- Processing Partners: 5
- Onboarding Requests: 14

### MAP SECTION (MAIN)
Large India map (SVG — use a simplified India outline with state borders). 
Plot nodes:
- 🟢 Green filled circles: Active pilot sites (Varanasi, Amritsar, Tirupati, Jaipur)
- 🟡 Gold circles: Processing partners (Kanpur, Surat, Coimbatore)
- 🟠 Orange dashed circles: Onboarding in progress (Mumbai, Kolkata, Pune)

Draw thin dashed lines connecting active sites to their processing partners (logistics routes).

Clicking a node opens a right-side drawer/panel with:
```
Institution: Kashi Vishwanath Temple Trust
Type: Hindu Temple | Tier-1 Heritage Site
City: Varanasi, Uttar Pradesh
Status: ✅ Active Pilot
Installed: January 2025
Shredder: MS-007 | Capacity: 80kg/day
Waste Diverted: 2,340 kg total
Last Pickup: April 18, 2025
Assigned Partner: EcoFiber Pvt. Ltd., Kanpur
Traceability Batches: RSH-2024-VNS-0141 through 0151
```

Each of the 6-8 mock nodes should have unique realistic institution names.

### RIGHT SIDEBAR — ACTIVITY FEED
"Recent Activity" panel with timestamped entries:
- ✅ Batch RSH-VNS-0151 certified — 2h ago
- 🔄 Pickup completed: Golden Temple, Amritsar — 1d ago
- 📋 New onboarding request: ISKCON Mumbai — 2d ago
- ⚙️ Shredder MS-011 installed: Tirupati Devasthanam — 5d ago
- 📦 EcoFiber received 340kg batch — 6d ago

### TRACEABILITY DRILLDOWN
Below map: "Recent Batches" table with 5-6 rows:
Columns: Batch ID | Source | Date | Weight | Partner | Status | [View]

Clicking [View] opens modal with full batch detail (same format as landing page traceability card, more detail).

---

## PAGE 3: ONBOARDING `/onboard`

### HERO
Simple centered hero. Headline: "Partner With RESHA"
Subtext: "Request a Moksha Shredder installation for your institution. Our team will conduct a site assessment and pilot proposal within 7 business days."

### FORM
Clean, elegant form on parchment card. Fields:
- Institution Name (text)
- Institution Type (select: Hindu Temple | Mosque | Gurudwara | Church | Other)
- City (text)
- State (select — Indian states)
- Contact Person Name (text)
- Email Address (text)
- Phone Number (text)
- Monthly Ritual Textile Volume — approx. kg (select: <50kg | 50–200kg | 200–500kg | 500kg+)
- Current Disposal Method (select: River immersion | Open burning | Municipal bin | No system | Other)
- Preferred Consultation Date (date picker)
- Are you interested in ESG reporting? (checkbox)
- Are you interested in joining as a pilot partner? (checkbox)
- Additional Notes (textarea)

Submit button: "Submit Onboarding Request" — saffron, full width

### SUCCESS STATE
After submit, replace form with success card:
```
✅ Request Received

Request ID: RQ-2025-0089
Status: Under Review
Estimated Response: Within 7 business days
Assigned Coordinator: Priya Sharma — North India Region

Projected Impact (if onboarded):
• ~120 kg/month diverted from rivers
• 1,440 kg/year circular material created
• Qualifies for RESHA ESG Partner Certificate
```

Styled as a clean receipt/confirmation card. Green checkmark at top. Saffron accent line.

---

## SHARED DESIGN RULES
- Ethnic geometric SVG border patterns between all major sections (thin horizontal bands, ~40px tall, using repeating diamond/chevron/zigzag motifs in gold/maroon)
- Smooth page transitions
- All data is hardcoded mock — no backend, no APIs
- Mobile responsive
- Subtle hover states on all interactive elements
- The word "resha" in the logo always uses the display serif font, lowercase, forest green
- Saffron (#E87722) is used ONLY for CTAs, accents, numbers — never as a background
- Never use stock photo placeholders — use CSS/SVG illustrations or geometric art blocks instead
```

