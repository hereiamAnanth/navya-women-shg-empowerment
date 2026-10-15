# Navya — Empowering Women Through Self-Help Groups (SHGs)

An immersive, aesthetic, and interactive editorial web experience for Navya, an NGO dedicated to women's socio-economic self-reliance and grassroots leadership through Self-Help Groups (SHGs).

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following architectural and aesthetic choices were confirmed and refined through feedback:

- **Confirmed Typography Pairing**:
  - **Display & Headings**: `Bricolage Grotesque` — distinctive, high-character grotesque with expressive curves and rhythmic humanist energy.
  - **Body & Interface Pairing**: `Plus Jakarta Sans` — refined, open geometric sans-serif delivering exceptional reading legibility across descriptions, curriculums, and data cards.
  - **Editorial Italic Accent**: `Lora` — used for authentic artisan pull quotes and spoken testimonials.
  - **Metrics & Numbers**: `font-mono tabular-nums` — vertical alignment across financial and socio-economic tables.
- **Confirmed Aesthetic Direction**: Editorial warm terracotta (`#B94A28`), deep emerald (`#184A3B`), and soft limestone alabaster (`#FAF7F2`), with anti-slop zero-pill discipline and smooth motion transitions.
- **Confirmed 6Ls Empowerment Framework**: Structured across **Life**, **Learning**, **Livelihood**, **Lifestyle**, **Leadership**, and **Landscape** with deep interactive drill-downs.
- **Confirmed Signature Interactive Experience**: **Artisan Product Showcase & Interactive Story Viewer** — connecting handcrafted micro-enterprise creations directly to the artisan's biography, SHG village cluster, before-and-after income impact, and community voice.
- **Full Information Architecture Enforced**:
  `About` $\rightarrow$ `Journey` $\rightarrow$ `6Ls` $\rightarrow$ `Platforms` $\rightarrow$ `Finishing School` $\rightarrow$ `Impact` $\rightarrow$ `Gallery` $\rightarrow$ `Contact`

---

## 1. Overview & Core Concept

- **What It Does**: Navya's web platform serves as both a high-impact narrative hub for partners/donors and an engaging window into grassroots women's empowerment. Visitors can traverse the complete lifecycle of rural women joining SHGs, explore the transformative 6Ls curriculum, interact with the specialized Finishing School modules, inspect transparent impact statistics, and experience the artisan showcase.
- **Target Audience**: Development partners, CSR foundations, micro-finance institutions, community allies, volunteers, and ethical trade supporters.
- **Key Value**: Replaces sterile NGO report brochures with an engaging, tactile editorial experience that honors the agency, craft, and economic power of women-led collectives.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Editorial Marquee & Top Bar Navigation**:
   - Single-element wordmark `NAVYA` set in `Bricolage Grotesque`.
   - Clean text navigation covering all 8 pillars: `About`, `Journey`, `6Ls`, `Platforms`, `Finishing School`, `Impact`, `Gallery`, `Contact`.
   - Primary single-line action: `Support Our Groups`.
2. **Hero & Mission Statement**:
   - Compelling editorial narrative: *"From Village Circles to Sovereign Enterprises"*.
   - Key focal imagery showcasing women collective leaders in workshop and field settings.
   - Quick impact ribbons (`38,000+ Women Mobilized`, `2,450+ SHG Collectives`, `98.4% Loan Recovery Rate`, `12 Distinct Enterprise Clusters`).
3. **The 6Ls Interactive Framework**:
   - Tabbed/segmented editorial explorer for:
     1. **Life**: Health sovereignty, maternal nutrition, clean water rights, and psycho-social solidarity.
     2. **Learning**: Foundational numeracy, digital literacy, contract comprehension, and legal awareness.
     3. **Livelihood**: Organic farming, textile weaving, honey harvesting, solar assembly, and agro-processing.
     4. **Lifestyle**: Clean cookstoves, sanitation infrastructure, savings culture, and domestic dignity.
     5. **Leadership**: Gram Panchayat representation, conflict mediation, and collective bargaining.
     6. **Landscape**: Native tree planting, groundwater restoration, and regenerative community farming.
4. **The Journey (Lifecycle of an SHG Member)**:
   - Interactive 5-stage progressive timeline:
     - *Stage 01: The Circle Gathers (Thrift & Weekly Savings)*
     - *Stage 02: Foundational Capacity (The 6Ls Induction)*
     - *Stage 03: The Finishing School (Micro-Enterprise Incubation)*
     - *Stage 04: Market Access & Platform Linkage*
     - *Stage 05: Sovereign Leadership & Mentorship*
5. **The Finishing School**:
   - Deep dive into Navya's flagship incubator bridging basic SHG savings to market-ready businesses:
     - Curriculum tracks: *Packaging & Quality Assurance*, *Bookkeeping & Digital Banking*, *Brand Identity & Negotiation*, *Compliance & FSSAI Standards*.
     - Interactive cohort explorer with syllabus breakdown, graduation milestones, and enterprise case studies.
6. **Platforms Ecosystem**:
   - Visual breakdown of Navya’s supportive platforms:
     - *Kisan-Sahay (Agro-Input Collective Purchasing)*
     - *Shilp-Haat (Fair-Trade Artisan Marketplace Linkage)*
     - *Sanchay-Digi (Community Micro-Credit & Peer Ledger)*
     - *Nari-Nyaya (Legal Aid & Community Ombudsperson Desk)*
7. **Artisan Product Showcase & Story Viewer (Interactive Feature)**:
   - Filterable catalog of authentic SHG products (e.g., Handloom Ikat Dupattas, Cold-Pressed Mustard Oil, Wild Forest Honey, Bamboo Kitchenware, Natural Clay Pottery, Herbal Indigo Dye Textiles).
   - Click any item to launch the **Artisan Story Modal**:
     - Maker portrait and name (e.g., Sunita Devi, Saraswati SHG, Madhubani cluster).
     - Step-by-step handcraft technique & raw material origin.
     - Income transformation metric (e.g., $₹2,400/\text{mo} \rightarrow ₹11,200/\text{mo}$).
     - Direct "Inquire for Bulk / Corporate Gifting" or "Sponsor a Loom" interaction.
8. **Transparent Impact Dashboard**:
   - Tabular metrics with `font-mono tabular-nums`.
   - Regional footprint breakdown (districts, cluster federations, village coverage).
   - Before-and-after socio-economic indicators.
9. **Curated Gallery & Media Archive**:
   - Curated photo archive with category filtering (*Artisans at Work*, *Finishing School Cohorts*, *Panchayat Assemblies*, *Harvest Festivals*).
   - Museum-grade captions, date tags, and photographer credits.
10. **Interactive Contact & Partnership Engine**:
    - Multi-purpose engagement form with tab selection: *Corporate CSR Partnership*, *Volunteer / Fellow Application*, *Artisan Bulk Inquiries*, *Visit a Chapter*.
    - Immediate validation, simulated confirmation toast, and chapter directory with coordinator contacts.

### Visual Identity & Theme Tokens

- **Palette**:
  - Dominant Neutral Canvas (60%): `#FAF7F2` (soft archival limestone) and `#F4EFE6` (warm parchment surfaces).
  - Structural Surfaces (30%): Rich dark slate `#1C1917`, warm stone `#292524`, crisp porcelain white `#FFFFFF` with delicate hairline borders `rgba(38, 38, 38, 0.08)`.
  - Curatorial Accents (10%): Warm Terracotta `#B94A28` / `#94381C` and Deep Forest Emerald `#184A3B` / `#0D3328`.
- **Typography**:
  - Headings & Editorial Display: `Bricolage Grotesque` (`font-display font-semibold tracking-tight`).
  - Body & Micro-Copy: `Plus Jakarta Sans` (`font-sans leading-relaxed`).
  - Pull Quotes & Oral Narratives: `Lora` (`font-serif italic`).
  - Numbers & Data: Tabular figures (`font-mono tabular-nums`).
- **Styling Discipline**:
  - Strict zero-pill rules for metadata: labels formatted as unboxed text with `·` dividers.
  - Balanced typography headlines with no orphan words.
  - Subtle micro-interactions with smooth springs (`motion`).

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Typography Harmony with Bricolage Grotesque**:
  - *Chosen Approach*: Use Google Fonts to load `Bricolage Grotesque` (variable weights 400-800) alongside `Plus Jakarta Sans` and `Lora`.
  - *Why*: Bricolage Grotesque gives Navya a fresh, assertive, and humane voice that honors both the grassroots authenticity and modern enterprise capability of rural women.
- **Decision 2: Single-Page Editorial Flow with Smooth Anchor Navigation**:
  - *Chosen Approach*: Deliver all 8 required Information Architecture sections on a fluid, seamless page with sticky header navigation, active scrollspy highlighting, and deep-linkable section anchors.
- **Decision 3: Interactive State Modals vs. Multi-page Routes**:
  - *Chosen Approach*: Rich interactive slide-over and modal dialogs for the Artisan Story Viewer and Finishing School Curriculum Details.

---

## 4. Technical Architecture & Component Structure

```
┌────────────────────────────────────────────────────────────────────────┐
│                              NAVYA APP                                 │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Navigation Bar (Single Brand Wordmark · 8 Section Links · CTA)  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Hero Section: Editorial Headline, Narrative, Metric Ticker      │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ 01. About: Mission, Grassroots Philosophy & Collective Model    │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ 02. Journey: 5-Step Member Evolution Interactive Timeline        │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ 03. The 6Ls: Life · Learning · Livelihood · Lifestyle ·         │  │
│  │              Leadership · Landscape (Interactive Switcher)       │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ 04. Platforms: Kisan-Sahay, Shilp-Haat, Sanchay, Nari-Nyaya      │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ 05. Finishing School: Enterprise Incubator & Cohort Curriculum   │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ [Interactive Feature] Artisan Showcase & Maker Story Viewer      │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ 06. Impact: Verified Metrics, Regional Map Data & Outcomes       │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ 07. Gallery: Curated Field Photography & Archival Records        │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ 08. Contact: Multi-Intent Engagement Engine & Chapter Directory  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Footer: Curated Colophon, Accreditation, Legal & Transparency   │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### Component Hierarchy

- `src/App.tsx`: Main layout, active section tracking, toast notifications, modal states.
- `src/components/Navbar.tsx`: Strict one-row top bar adhering to the Top Bar Contract.
- `src/components/Hero.tsx`: High-impact editorial opener with hero visual, statement, and quick metrics.
- `src/components/AboutSection.tsx`: Deep context on the SHG movement and Navya's founding ethos.
- `src/components/JourneySection.tsx`: Interactive step-by-step timeline of an SHG member's growth.
- `src/components/SixLsSection.tsx`: Comprehensive 6Ls matrix with interactive tabs, case studies, and outcomes.
- `src/components/PlatformsSection.tsx`: Digital and ground platforms enabling finance, justice, and market reach.
- `src/components/FinishingSchoolSection.tsx`: Cohort syllabus, enterprise incubation tracks, and training highlights.
- `src/components/ArtisanShowcase.tsx`: The primary interactive feature with product filtering, high-craft cards, and full-screen Artisan Story Modal.
- `src/components/ImpactSection.tsx`: Verified quantitative proof, interactive impact calculator, and annual audited breakdown.
- `src/components/GallerySection.tsx`: Lightbox-enabled photo documentary archive with category tabs.
- `src/components/ContactSection.tsx`: Interactive multi-purpose CSR/donor/volunteer contact engine.
- `src/components/Footer.tsx`: Restrained institutional footer with chapter links and governance disclosure.
- `src/data/navyaContent.ts`: Rich factual dataset covering all artisans, 6Ls pillars, finishing school modules, impact metrics, and gallery items.
