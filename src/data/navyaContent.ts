export interface ArtisanProduct {
  id: string;
  title: string;
  category: 'Handloom & Textiles' | 'Organic Foods' | 'Natural Crafts' | 'Eco Living';
  priceDisplay: string;
  artisanName: string;
  artisanRole: string;
  shgGroup: string;
  village: string;
  district: string;
  state: string;
  storyQuote: string;
  backstory: string;
  craftTechnique: string;
  materials: string;
  incomeTransformation: {
    before: string;
    after: string;
    timeline: string;
    familyImpact: string;
  };
  image: string;
  artisanPortrait?: string;
  sustainabilityTags: string[];
}

export interface SixLPillar {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  quote: string;
  coreMetrics: { label: string; value: string }[];
  keyInitiatives: { title: string; desc: string }[];
  fieldStory: {
    title: string;
    person: string;
    location: string;
    narrative: string;
  };
}

export interface JourneyStage {
  step: string;
  phase: string;
  title: string;
  duration: string;
  focus: string;
  description: string;
  keyMilestones: string[];
  testimonial: {
    quote: string;
    author: string;
    cluster: string;
  };
}

export interface FinishingSchoolTrack {
  id: string;
  title: string;
  duration: string;
  focusArea: string;
  description: string;
  modules: string[];
  equipmentProvided: string[];
  graduatedEnterprises: number;
  avgRevenueIncrease: string;
}

export interface PlatformItem {
  id: string;
  codeName: string;
  title: string;
  role: string;
  description: string;
  keyFeatures: string[];
  usersActive: string;
  volumeProcessed: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Artisans' | 'Finishing School' | 'Field & Harvest' | 'Assemblies';
  location: string;
  year: string;
  caption: string;
  image: string;
}

export const NAVYA_ABOUT = {
  name: 'Navya',
  tagline: 'Empowering Rural & Young Women Through Business, Well-Being & Leadership',
  missionHeadline: 'From Village Circles to Sovereign Economic Collectives',
  missionLead:
    'NAVYA is a women’s empowerment programme that helps rural women and young women gain business skills, improve well-being, access markets, earn sustainable income, and become confident community leaders.',
  coreDefinition:
    'NAVYA is a women’s empowerment programme that helps rural women and young women gain business skills, improve well-being, access markets, earn sustainable income, and become confident community leaders.',
  foundingEthos: [
    {
      title: 'Financial Sovereignty',
      desc: 'Eliminating predatory local moneylenders through disciplined doorstep thrift, transparent digitized ledgers, and formal institutional credit linkage.',
    },
    {
      title: 'Dignified Livelihoods',
      desc: 'Upgrading hereditary indigenous craft and agro-processing through modern market standards, fair-trade pricing, and direct consumer platforms.',
    },
    {
      title: 'Voice at the Gram Sabha',
      desc: 'Nurturing public confidence so women demand clean water pipelines, school teachers, and equitable land titles at local governance assemblies.',
    },
  ],
  verifiedNumbers: [
    { value: '38,400+', label: 'Women Mobilized', detail: 'Across 650+ rural village hamlets' },
    { value: '2,480+', label: 'Active SHG Groups', detail: 'Operating weekly savings meetings' },
    { value: '₹42.8 Cr', label: 'Micro-Credit Rotated', detail: 'Zero default rate with 98.6% recovery' },
    { value: '410+', label: 'Graduated Enterprises', detail: 'Trained via the Navya Finishing School' },
  ],
};

export const SIX_L_PILLARS: SixLPillar[] = [
  {
    id: 'life',
    title: 'Life',
    kicker: 'Dignity, Health & Psycho-Social Solidarity',
    summary:
      'Empowerment starts with the bodily autonomy, maternal nutrition, and mental well-being of the woman. We establish community health emergency funds, adolescent iron-supplementation drives, and safe peer spaces.',
    quote:
      'Before our SHG, illness in the family meant selling a goat to pay the local debt-collector. Today, our group corpus paid for my daughter’s surgery interest-free.',
    coreMetrics: [
      { label: 'Health Corpus Created', value: '₹3.2 Cr' },
      { label: 'Institutional Deliveries', value: '99.2%' },
      { label: 'Health Counseling Camps', value: '1,420+' },
    ],
    keyInitiatives: [
      { title: 'Arogya-Sangh Health Pool', desc: 'Doorstep monthly emergency health revolving fund accessible in under 2 hours.' },
      { title: 'Nutritional Backyard Gardens', desc: 'Seed kits for moringa, indigenous greens, and papaya ensuring balanced dietary iron.' },
      { title: 'Mental Well-Being Circles', desc: 'Fortnightly safe spaces addressing domestic stress and shared trauma support.' },
    ],
    fieldStory: {
      title: 'Health Autonomy in Alwar',
      person: 'Kamla Meena',
      location: 'Alwar District, Rajasthan',
      narrative: 'When Kamla faced acute postpartum complications, her Mahila Pragati SHG released ₹18,000 within 45 minutes to transfer her to the tertiary district hospital, preventing a lifelong medical debt spiral.',
    },
  },
  {
    id: 'learning',
    title: 'Learning',
    kicker: 'Functional Numeracy, Digital Skills & Legal Literacy',
    summary:
      'Knowledge turns passive participation into active negotiation. We teach women to read bank passbooks, manage smartphone UPI payments, and decode government land and welfare entitlements.',
    quote:
      'When I signed my name with ink instead of a thumb impression at the bank counter, the manager spoke to me with dignity for the first time.',
    coreMetrics: [
      { label: 'Literate in Passbooks', value: '31,800+' },
      { label: 'UPI / Digital Banking Active', value: '88.4%' },
      { label: 'RTI / Legal Petitions Won', value: '240+' },
    ],
    keyInitiatives: [
      { title: 'Digi-Shiksha Smartphone Labs', desc: 'Hands-on tablet instruction for digital ledger keeping, QR code generation, and voice banking.' },
      { title: 'Haq-Ki-Baat Legal Literacy', desc: 'Practical rights training on domestic violence acts, minimum wages, and inheritance rights.' },
      { title: 'Contract & Invoice Mastery', desc: 'Understanding batch numbers, purchase orders, payment terms, and delivery challans.' },
    ],
    fieldStory: {
      title: 'Decoding Bank Ledgers',
      person: 'Radha Bai',
      location: 'Dindori District, MP',
      narrative: 'Radha caught an unrecorded ₹650 ledger error made by an arrogant local banking correspondent and demanded a printed receipt, backed by her group passbook ledger.',
    },
  },
  {
    id: 'livelihood',
    title: 'Livelihood',
    kicker: 'Value-Added Enterprises & Fair Market Value',
    summary:
      'Moving women from low-yield daily manual labor to asset-owning micro-entrepreneurs. We incubate cold-pressed oil mills, natural dye handloom looms, organic spice grinding, and mushroom cultivation.',
    quote:
      'I am no longer dependent on seasonal crop labor. My handloom runs 10 months a year, and my textiles reach boutiques in Bangalore and Mumbai.',
    coreMetrics: [
      { label: 'Average Income Lift', value: '+340%' },
      { label: 'Registered Micro-Enterprises', value: '412' },
      { label: 'Fair Trade Value Realized', value: '₹18.4 Cr' },
    ],
    keyInitiatives: [
      { title: 'Agro-Processing Cooperatives', desc: 'Decentralized cold-pressed seed extraction, turmeric pulverizing, and solar food drying.' },
      { title: 'Artisan Textile Guilds', desc: 'Upgrading traditional pit looms to ergonomic fly-shuttle frames with natural indigo vats.' },
      { title: 'Zero-Middleman Procurement', desc: 'Direct collective supply agreements with corporate gifting networks and retail cooperatives.' },
    ],
    fieldStory: {
      title: 'From ₹80 Daily Wage to Loom Owner',
      person: 'Devki Devi',
      location: 'Madhubani, Bihar',
      narrative: 'Devki now manages a cluster of four weavers, generating over ₹32,000 monthly collective turnover with guaranteed advance orders.',
    },
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle',
    kicker: 'Clean Energy, Sanitation & Domestic Ease',
    summary:
      'Time poverty exhausts rural women before they can build enterprises. We introduce solar home systems, piped greywater recycling, smokeless induction stoves, and hygienic private sanitation.',
    quote:
      'Gathering firewood used to steal three hours from every morning. With our collective solar stove, I have time to manage our poultry business.',
    coreMetrics: [
      { label: 'Solar Kitchens Installed', value: '8,400+' },
      { label: 'Hours Saved Daily', value: '2.8 hrs' },
      { label: 'Safe Sanitation Access', value: '96.8%' },
    ],
    keyInitiatives: [
      { title: 'Surya-Jyoti Clean Energy', desc: 'Group micro-loans for rooftop solar lighting and high-efficiency induction cooking.' },
      { title: 'Gram-Swachh Sanitation Units', desc: 'Twin-pit hygienic toilet constructions managed and supervised by women inspectors.' },
      { title: 'Rainwater Household Cisterns', desc: 'Rooftop rainwater harvesting systems eliminating daily 2-kilometer walks to the well.' },
    ],
    fieldStory: {
      title: 'The Gift of Time',
      person: 'Parvati Soren',
      location: 'Mayurbhanj, Odisha',
      narrative: 'Having a piped water standpost right in her hamlet saved Parvati 2.5 hours every dawn, which she channeled into our finishing school beekeeping module.',
    },
  },
  {
    id: 'leadership',
    title: 'Leadership',
    kicker: 'Gram Panchayat Representation & Collective Voice',
    summary:
      'When women speak together, village hierarchies change. Navya trains SHG leaders in public administration, government scheme advocacy, resolution drafting, and village assembly participation.',
    quote:
      'When our SHG federation entered the Panchayat hall, the Pradhan had to table our petition for the secondary school road first.',
    coreMetrics: [
      { label: 'Elected Women Representatives', value: '428' },
      { label: 'Village Resolutions Passed', value: '1,890+' },
      { label: 'Panchayat Attendance Rate', value: '92%' },
    ],
    keyInitiatives: [
      { title: 'Panchayat Sakhi Leadership Fellowship', desc: 'Intensive 6-month mentorship for women contesting local Gram Panchayat elections.' },
      { title: 'Social Audit Committees', desc: 'Independent SHG review teams monitoring rural employment (MGNREGA) muster rolls.' },
      { title: 'Federation Apex Councils', desc: 'Block-level federations representing 300+ SHGs for institutional bank negotiations.' },
    ],
    fieldStory: {
      title: 'Sarpanch of Change',
      person: 'Manju Ahirwar',
      location: 'Tikamgarh, MP',
      narrative: 'Trained in public speaking by Navya, Manju won the Sarpanch seat in 2024 and successfully sanctioned a pucca road and high-school science lab for her village.',
    },
  },
  {
    id: 'landscape',
    title: 'Landscape',
    kicker: 'Ecological Restoration & Regenerative Farming',
    summary:
      'Women bear the brunt of climate droughts and depleted groundwater. We train SHG farmers in permaculture, indigenous seed conservation, solar micro-irrigation, and community afforestation.',
    quote:
      'The soil is not an expense—it is our mother. Chemical fertilizers dried our wells; our organic jeevamrut brought the earthworms and moisture back.',
    coreMetrics: [
      { label: 'Acres in Organic Transition', value: '14,200+' },
      { label: 'Native Trees Planted', value: '280,000+' },
      { label: 'Community Check Dams Built', value: '86' },
    ],
    keyInitiatives: [
      { title: 'Bija-Rakshak Indigenous Seed Banks', desc: 'Preserving drought-hardy millets, native pulses, and deep-root heirloom rice varieties.' },
      { title: 'Jeevamrut Bio-Input Micro-Plants', desc: 'Village-level production units for natural liquid bio-fertilizers and botanical pest repellents.' },
      { title: 'Jal-Sanchay Micro Watersheds', desc: 'Constructing stone contour bunds, trenches, and percolation tanks to elevate groundwater tables.' },
    ],
    fieldStory: {
      title: 'Reviving the Dry Stream',
      person: 'Shanti Bai',
      location: 'Jhabua District, MP',
      narrative: 'Shanti led 65 women to dig 14 contour bunds across a barren slope. Within two monsoon seasons, groundwater rose 12 feet, reviving 4 seasonal farm wells.',
    },
  },
];

export const SHG_JOURNEY: JourneyStage[] = [
  {
    step: '01',
    phase: 'Formation & Trust',
    title: 'The Village Circle Gathers',
    duration: 'Months 1 – 3',
    focus: 'Doorstep Weekly Thrift & Peer Governance',
    description:
      'Ten to fifteen women from contiguous households meet every week. They establish internal bylaws, elect rotating leaders, and deposit small thrift savings (₹20–₹50). This builds unconditional financial discipline and mutual trust without external reliance.',
    keyMilestones: [
      'Formation of 10-15 member peer circle',
      'Doorstep weekly thrift savings ritual',
      'Election of rotating President and Treasurer',
      'Democratically voted internal loan rules',
    ],
    testimonial: {
      quote: 'Sitting in that circle was the first time in my life anyone asked me what I thought about money.',
      author: 'Sunita Devi',
      cluster: 'Sitamarhi SHG Cluster',
    },
  },
  {
    step: '02',
    phase: 'Induction & Basics',
    title: 'The 6Ls Foundational Capacity',
    duration: 'Months 4 – 6',
    focus: 'Numeracy, Health Sovereignty & Bank Linkage',
    description:
      'Women undergo Navya’s core modules: mastering paper and mobile ledgers, establishing an emergency healthcare corpus, opening group bank accounts under NABARD guidelines, and obtaining initial bank credit ratings.',
    keyMilestones: [
      'Mastery of group passbooks and debit registers',
      'Opening of formal zero-fee group savings account',
      'Graduation from internal thrift to bank credit rating',
      'Health corpus setup for maternal emergencies',
    ],
    testimonial: {
      quote: 'We no longer sign with our thumbs. We cross-verify the bank branch stamp ourselves.',
      author: 'Rekha Bheel',
      cluster: 'Udaipur Rural Federation',
    },
  },
  {
    step: '03',
    phase: 'Enterprise Incubation',
    title: 'The Finishing School',
    duration: 'Months 7 – 10',
    focus: 'Quality Standards, FSSAI Compliance & Machinery',
    description:
      'Selected high-potential SHG clusters enter Navya’s flagship Finishing School. They learn standardized packaging, lab testing for food purity, loom ergonomic modifications, digital barcode generation, and cost modeling.',
    keyMilestones: [
      '12-week specialized technical incubation track',
      'FSSAI certification and batch packaging compliance',
      'Setup of collective processing machinery unit',
      'Creation of initial product catalogue and brand label',
    ],
    testimonial: {
      quote: 'At the finishing school, we stopped selling raw mustard seed and started bottling cold-pressed oil with our own barcode.',
      author: 'Anandi Patel',
      cluster: 'Narmada Agri Federation',
    },
  },
  {
    step: '04',
    phase: 'Market Access',
    title: 'Platform Market Integration',
    duration: 'Months 11 – 18',
    focus: 'Shilp-Haat, B2B Linkages & Fair Price Guarantees',
    description:
      'Through Navya’s digital Shilp-Haat and Kisan-Sahay platforms, the enterprise bypasses local predatory middlemen. Products are sold directly to corporate buyers, conscious retail brands, and institutional partners with advance contracts.',
    keyMilestones: [
      'Direct onboarding onto Shilp-Haat fair trade portal',
      'Secured forward contracts with institutional buyers',
      'Digital payment acceptance via UPI soundboxes',
      'Quarterly dividend distribution to all member households',
    ],
    testimonial: {
      quote: 'When the organic boutique in Mumbai placed an order for 800 scarves, our whole village celebrated.',
      author: 'Kusum Devi',
      cluster: 'Bhagalpur Silk Collective',
    },
  },
  {
    step: '05',
    phase: 'Sovereign Growth',
    title: 'Civic Leadership & Mentorship',
    duration: 'Ongoing',
    focus: 'Gram Panchayat Voice & Regional Replication',
    description:
      'Graduated members transition into community statesmen. They lead social audits of government rural schemes, mentor newly forming SHGs in neighboring panchayats, and contest local elections to influence policy.',
    keyMilestones: [
      'Election of members to Gram Panchayat councils',
      'Federation apex representation at district collectorates',
      'Mentorship of 5+ junior SHG circles per graduate',
      'Generational shift in girl-child education attendance',
    ],
    testimonial: {
      quote: 'Today, the District Collector invites our federation to review rural water allocations. That is true power.',
      author: 'Suman Kashyap',
      cluster: 'Bastar Federation Council',
    },
  },
];

export const FINISHING_SCHOOL_TRACKS: FinishingSchoolTrack[] = [
  {
    id: 'agro-processing',
    title: 'Agro-Processing & Value Addition',
    duration: '12 Weeks (Hybrid Classroom + Pilot Mill)',
    focusArea: 'Cold-pressed oils, spice pulverizing, solar dried fruit, honey bottling',
    description:
      'Transforms farmers who sell raw commodities at distress prices into certified food processors. Covers hygienic processing protocols, sterile vacuum sealing, moisture testing, and FSSAI licensing.',
    modules: [
      'Module 1: Good Manufacturing Practices (GMP) & Hygiene',
      'Module 2: Machinery Maintenance & Electrical Safety',
      'Module 3: FSSAI Lab Testing & Nutrition Fact Panels',
      'Module 4: Eco-Packaging & Tamper-Evident Sealing',
    ],
    equipmentProvided: [
      'Low-RPM Cold-Press Oil Expeller',
      'Stainless Steel Grade 304 Spice Grinder',
      'Refractometer for Moisture Testing',
      'Nitrogen Flush Pouch Sealer',
    ],
    graduatedEnterprises: 148,
    avgRevenueIncrease: '+380% vs raw crop sales',
  },
  {
    id: 'textiles-handloom',
    title: 'Artisan Handloom & Natural Dyeing',
    duration: '10 Weeks (Master Weaver Studio)',
    focusArea: 'Fly-shuttle loom operation, natural indigo extraction, pattern drafting',
    description:
      'Equips traditional weaving families with contemporary design language, yarn tension ergonomics, azo-free botanical dyes, and international finishing standards demanded by sustainable apparel labels.',
    modules: [
      'Module 1: Botanical Dye Chemistry & Mordanting',
      'Module 2: Ergonomic Frame Looms & High-Speed Shuttles',
      'Module 3: Contemporary Color Palettes & Export Specs',
      'Module 4: Quality Inspection & Fabric Washing Protocols',
    ],
    equipmentProvided: [
      'Heavy-Duty Pneumatic Fly-Shuttle Looms',
      'Stainless Steel Dye Boiling Vats',
      'Yarn Tensioning Creels',
      'Electronic Fabric Weight Scales',
    ],
    graduatedEnterprises: 112,
    avgRevenueIncrease: '+290% per woven yard',
  },
  {
    id: 'fin-ops',
    title: 'Enterprise Bookkeeping & Digital Ops',
    duration: '8 Weeks (Digital Lab)',
    focusArea: 'GST billing, cloud ledger, inventory barcode scanners, UPI settlement',
    description:
      'Ensures that women manage their enterprise finances with rigor. Teaches balance sheet comprehension, unit cost economics, working capital management, and multi-bank reconciliation.',
    modules: [
      'Module 1: Double-Entry Ledger Principles on Tablets',
      'Module 2: Real-Time Inventory & Barcode Tracking',
      'Module 3: Working Capital & Credit Line Management',
      'Module 4: GST Invoicing, E-Way Bills & Tax Filing',
    ],
    equipmentProvided: [
      'Enterprise Android Tablets with Offline Ledger',
      'Bluetooth Thermal Receipt Printers',
      'Handheld 2D Barcode Scanners',
      'UPI Smart Speaker Soundboxes',
    ],
    graduatedEnterprises: 95,
    avgRevenueIncrease: 'Elimination of all cash leakage',
  },
  {
    id: 'brand-markets',
    title: 'Brand Storytelling & B2B Negotiation',
    duration: '6 Weeks (Executive Studio)',
    focusArea: 'Product pitch, corporate gifting catalogs, trade shows, customer service',
    description:
      'Builds the executive presence of rural women to pitch directly to procurement officers at luxury hotels, corporate gift departments, and international fair-trade exporters.',
    modules: [
      'Module 1: Framing the Artisan Heritage Narrative',
      'Module 2: Price Quotations, MoQ & Volume Tiers',
      'Module 3: Sample Dispatch & Professional Packaging',
      'Module 4: Managing Buyer Disputes & Deliveries',
    ],
    equipmentProvided: [
      'High-Resolution Mobile Studio Lightboxes',
      'Printed Linen Product Presentation Folios',
      'Professional Brand Swatch Kits',
      'Corporate Order Contract Templates',
    ],
    graduatedEnterprises: 55,
    avgRevenueIncrease: '+420% margin over bulk auction',
  },
];

export const NAVYA_PLATFORMS: PlatformItem[] = [
  {
    id: 'shilp-haat',
    codeName: 'SHILP-HAAT',
    title: 'Fair-Trade Artisan Marketplace',
    role: 'Market Linkage & Ethical Retail',
    description:
      'A curated digital B2B and consumer marketplace connecting registered SHG craft enterprises with ethical consumers and corporate gifting buyers. 100% of retail proceeds directly credit the collective bank account.',
    keyFeatures: [
      'Zero-commission direct-to-artisan payouts',
      'Integrated batch tracking with maker identity QR codes',
      'Bulk corporate gifting order engine with custom branding',
      'Pre-negotiated logistics network picking from rural clusters',
    ],
    usersActive: '2,800+ Artisan Guilds',
    volumeProcessed: '₹14.2 Cr in ethical commerce',
  },
  {
    id: 'kisan-sahay',
    codeName: 'KISAN-SAHAY',
    title: 'Agro-Input Collective Purchasing',
    role: 'Procurement & Agritech Federation',
    description:
      'Aggregates seed, bio-fertilizer, and solar pump orders across 1,200+ farming groups to secure wholesale bulk pricing, slashing cultivation expenses by 32% for women smallholders.',
    keyFeatures: [
      'Wholesale bulk bargaining for certified heirloom seeds',
      'Shared rental pool of solar threshers and cold storages',
      'Hyperlocal weather forecasting and bio-pest advisory',
      'Direct buy-back agreements at minimum guaranteed prices',
    ],
    usersActive: '18,500+ Women Farmers',
    volumeProcessed: '3,800 MT of produce aggregated',
  },
  {
    id: 'sanchay-digi',
    codeName: 'SANCHAY-DIGI',
    title: 'Transparent Micro-Credit Ledger',
    role: 'Financial Inclusion & Governance',
    description:
      'An offline-first bilingual mobile ledger that records weekly group savings, internal loans, interest settlements, and bank balances. Generates audited credit profiles for commercial bank linkage.',
    keyFeatures: [
      'Voice-guided SMS transaction alerts in local dialects',
      'Offline sync designed for low-connectivity rural belts',
      'Algorithmic credit scoring unlocking low-interest bank loans',
      'Real-time fraud prevention with dual-biometric approval',
    ],
    usersActive: '2,480 SHG Groups',
    volumeProcessed: '₹42.8 Cr verified micro-loans',
  },
  {
    id: 'nari-nyaya',
    codeName: 'NARI-NYAYA',
    title: 'Community Legal & Ombudsperson Cell',
    role: 'Justice & Rights Defense',
    description:
      'A grassroots para-legal network providing confidential mediation, domestic violence counseling, land title assistance, and pro-bono representation for marginalized women.',
    keyFeatures: [
      'Trained peer paralegals (Nyaya Sakhis) in every block',
      'Emergency helpline linked to women police desks',
      'Free documentation support for agricultural land titling',
      'Mobile family dispute settlement lok-adalats',
    ],
    usersActive: '650+ Village Hamlets',
    volumeProcessed: '3,120+ Cases successfully resolved',
  },
];

export const ARTISAN_PRODUCTS: ArtisanProduct[] = [
  {
    id: 'ikat-silk-dupatta',
    title: 'Heritage Single-Ikat Mulberry Silk Stole',
    category: 'Handloom & Textiles',
    priceDisplay: '₹3,450',
    artisanName: 'Kamla Meena',
    artisanRole: 'Master Loom Weaver & Guild Lead',
    shgGroup: 'Maa Saraswati Mahila Mandal',
    village: 'Chanderi Cluster',
    district: 'Ashoknagar',
    state: 'Madhya Pradesh',
    storyQuote:
      'Each warp thread is tied and dyed thirty times by hand before the loom moves an inch. When you touch this silk, you feel two months of our patience.',
    backstory:
      'Kamla inherited weaving from her grandmother but had to stop for a decade because middlemen paid less than ₹200 for a week of labor. Through Navya’s Finishing School, her group modernized their frame looms, mastered organic madder root dyes, and now sells directly to sustainable design houses.',
    craftTechnique: 'Resist tie-and-dye with handspun mulberry silk on traditional pit looms, finished with hand-knotted fringe.',
    materials: '100% Certified Mulberry Silk, Natural Madder Root & Iron Acetate Dye',
    incomeTransformation: {
      before: '₹1,800 / month (manual brick kiln labor)',
      after: '₹14,200 / month (sovereign loom production)',
      timeline: '14 Months after Finishing School',
      familyImpact: 'Enrolled two daughters in English-medium higher secondary school and installed rooftop solar lighting.',
    },
    image: '/src/assets/images/artisan_weaving_1791487453796.jpg',
    sustainabilityTags: ['Azo-Free Dye', 'Zero Carbon Footprint', 'Direct Artisan Payout', 'FSSAI / Handloom Mark'],
  },
  {
    id: 'cold-pressed-mustard-oil',
    title: 'Traditional Wooden Ghani Cold-Pressed Mustard Oil',
    category: 'Organic Foods',
    priceDisplay: '₹420 / 1L',
    artisanName: 'Savitri Bai',
    artisanRole: 'Micro-Mill Operations Manager',
    shgGroup: 'Annapurna Krishi SHG',
    village: 'Barabanki',
    district: 'Barabanki',
    state: 'Uttar Pradesh',
    storyQuote:
      'We run the wooden press at less than 35 RPM so the oil never heats up. The pungency and natural antioxidants stay locked in the bottle.',
    backstory:
      'Savitri gathered 12 smallholder women farmers who were distressed by fluctuating seed market rates. With Navya’s seed capital and Kisan-Sahay platform, they established a solar-powered wooden press unit. Today, they package 800 liters monthly under their own brand, certified pure by FSSAI.',
    craftTechnique: 'Slow-speed cold extraction using native neem-wood pestles, naturally decanted without chemical filtration.',
    materials: 'Heirloom Black Mustard Seeds, Single-Estate Non-GMO',
    incomeTransformation: {
      before: '₹2,400 / month (selling raw seed at wholesale market)',
      after: '₹11,800 / month (processing and retailing finished oil)',
      timeline: '9 Months from mill commissioning',
      familyImpact: 'Constructed an all-weather brick home and redeemed 1.5 acres of mortgaged family farmland.',
    },
    image: '/src/assets/images/finishing_school_1791487476738.jpg',
    sustainabilityTags: ['Solar Powered Processing', 'Zero Additives', 'Recycled Glass Bottling', 'Organic Certified'],
  },
  {
    id: 'wild-forest-honey',
    title: 'Raw Multi-Flora Forest Honey (Unheated)',
    category: 'Organic Foods',
    priceDisplay: '₹680 / 500g',
    artisanName: 'Bimla Soren',
    artisanRole: 'Indigenous Apiary Specialist',
    shgGroup: 'Van-Shakti Mahila Samiti',
    village: 'Similipal Buffer Belt',
    district: 'Mayurbhanj',
    state: 'Odisha',
    storyQuote:
      'The bees collect nectar from wild mahua, karanj, and sal blossoms. We take only half the comb, ensuring the swarm thrives for the next generation.',
    backstory:
      'Traditionally, Bimla’s family risked dangerous forest climbs and burned hives with torches to sell crude honey to greedy contractors. Navya’s Finishing School introduced non-destructive box apiaries at the forest edge, hygienic stainless steel strainers, and micro-lot moisture testers.',
    craftTechnique: 'Cruelty-free sustainable apiary extraction, cotton double-strained, never micro-filtered or pasteurized.',
    materials: '100% Wild Nectar from Similipal Biosphere Flora',
    incomeTransformation: {
      before: '₹1,500 / seasonal harvest',
      after: '₹9,600 / monthly regular apiary income',
      timeline: '11 Months',
      familyImpact: 'Installed household tap water filter and established a year-round pantry buffer.',
    },
    image: '/src/assets/images/landscape_farming_1791487498393.jpg',
    sustainabilityTags: ['Bee-Friendly Extraction', 'Forest Biosphere Origin', 'Lab Tested Purity', 'Raw & Unpasteurized'],
  },
  {
    id: 'terracotta-water-carafe',
    title: 'Burnished Red Clay Water Carafe & Tumbler',
    category: 'Natural Crafts',
    priceDisplay: '₹1,250',
    artisanName: 'Champa Devi',
    artisanRole: 'Master Potter & Shape Sculptor',
    shgGroup: 'Mitti-Sparsh Artisan Circle',
    village: 'Panchmura',
    district: 'Bankura',
    state: 'West Bengal',
    storyQuote:
      'Clay remembers the hand that shapes it. River silt naturally cools water by three to four degrees through microscopic evaporative pores.',
    backstory:
      'Champa’s pottery collective was on the brink of abandonment as cheap plastic bottles flooded local bazaars. Navya partnered them with urban industrial designers to refine classic ergonomic contours, lead-free river slip finishes, and protective eco-packaging.',
    craftTechnique: 'Hand-thrown on traditional wheel, surface burnished with river pebbles, fired in wood-ash reduction pit kilns.',
    materials: 'Local Alluvial Riverbed Clay, Organic Wood Ash, Natural Mica Dust',
    incomeTransformation: {
      before: '₹2,100 / month (selling broken terracotta pots)',
      after: '₹10,500 / month (supplying boutique hospitality clients)',
      timeline: '8 Months',
      familyImpact: 'Purchased electric pottery wheels and ended dependence on grueling manual clay foot-kneading.',
    },
    image: '/src/assets/images/hero_women_collective_1791487435923.jpg',
    sustainabilityTags: ['100% Biodegradable', 'Zero Lead / Zero Glaze', 'Naturally Cooling', 'Traditional Kiln'],
  },
  {
    id: 'bamboo-artisan-tray',
    title: 'Woven River-Cane & Bamboo Presentation Tray',
    category: 'Eco Living',
    priceDisplay: '₹1,480',
    artisanName: 'Monika Bodo',
    artisanRole: 'Structural Cane Artisan',
    shgGroup: 'Pragjyoti Bamboo Weavers',
    village: 'Barpeta Cluster',
    district: 'Barpeta',
    state: 'Assam',
    storyQuote:
      'Bamboo is our green gold. When harvested at three years, the root shoots multiply faster, binding the riverbank against monsoon floods.',
    backstory:
      'Monika organized 18 women whose homes were annually threatened by Brahmaputra floodwaters. By planting riparian bamboo barriers and creating high-end tabletop trays for urban homes, their SHG turned an ecological defense into an export business.',
    craftTechnique: 'Fine knife-split bamboo strands woven in twill weave, smoke-cured with rice husks to prevent beetle infestation.',
    materials: 'Sustainably Harvested Assam Muli Bamboo, Natural Beeswax Finish',
    incomeTransformation: {
      before: '₹1,200 / seasonal casual weeding',
      after: '₹8,900 / monthly sustainable craft earnings',
      timeline: '6 Months',
      familyImpact: 'Built an elevated flood-resilient house plinth and invested in a community solar generator.',
    },
    image: '/src/assets/images/artisan_weaving_1791487453796.jpg',
    sustainabilityTags: ['Renewable Bamboo', 'Smoke Treated (Pesticide-Free)', 'Plastic-Free Packaging', 'Flood-Buffer Sourcing'],
  },
  {
    id: 'ayurvedic-turmeric-powder',
    title: 'High-Curcumin Lakadong Turmeric Powder (8.2%)',
    category: 'Organic Foods',
    priceDisplay: '₹340 / 250g',
    artisanName: 'Kong Phidalia',
    artisanRole: 'Agro-Quality Assessor',
    shgGroup: 'Jaintia Hills Organic Federation',
    village: 'Shangpung',
    district: 'West Jaintia Hills',
    state: 'Meghalaya',
    storyQuote:
      'Look at this deep orange hue—it comes from the mineral limestone soil and rainwater mist of our hills. You cannot fake this aroma.',
    backstory:
      'Trained in precision solar dehydration and sterile grinding at Navya’s Finishing School, Phidalia’s group tests every batch in government accredited labs to guarantee a minimum 7.5%+ curcumin content, fetching premium rates across wellness retailers.',
    craftTechnique: 'Shadow-dried rhizomes, pulverised at controlled low temperature to retain aromatic volatile oils.',
    materials: 'Single-Origin Lakadong Turmeric Rhizomes',
    incomeTransformation: {
      before: '₹2,800 / month (raw wet root auctions)',
      after: '₹13,400 / month (certified packaged turmeric)',
      timeline: '12 Months',
      familyImpact: 'Financed university tuition fees for her niece and bought a community weighing station.',
    },
    image: '/src/assets/images/finishing_school_1791487476738.jpg',
    sustainabilityTags: ['High Curcumin 8.2%', 'Lab Tested Pure', 'Sun Shadow Dried', 'Farmer-Owned Brand'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Weekly Doorstep Thrift Council',
    category: 'Assemblies',
    location: 'Sitamarhi, Bihar',
    year: '2026',
    caption: 'Women of the Mahila Pragati SHG review their mutual savings passbooks under the shade of a central village banyan tree.',
    image: '/src/assets/images/hero_women_collective_1791487435923.jpg',
  },
  {
    id: 'g-2',
    title: 'Precision Ikat Tensioning on the Loom',
    category: 'Artisans',
    location: 'Chanderi, Madhya Pradesh',
    year: '2026',
    caption: 'Master weaver Kamla Meena operating the newly modified fly-shuttle pit loom, weaving silk stoles for direct corporate partners.',
    image: '/src/assets/images/artisan_weaving_1791487453796.jpg',
  },
  {
    id: 'g-3',
    title: 'Finishing School Digital Billing Lab',
    category: 'Finishing School',
    location: 'Udaipur Rural Center, Rajasthan',
    year: '2026',
    caption: 'Entrepreneurs in the 12-week Finishing School learning barcode generation, tablet ledger entry, and FSSAI packaging guidelines.',
    image: '/src/assets/images/finishing_school_1791487476738.jpg',
  },
  {
    id: 'g-4',
    title: 'Solar-Powered Drip Irrigation in the Hills',
    category: 'Field & Harvest',
    location: 'Mayurbhanj, Odisha',
    year: '2026',
    caption: 'Women farmers checking moisture levels in their chemical-free permaculture plot powered by a community solar micro-pump.',
    image: '/src/assets/images/landscape_farming_1791487498393.jpg',
  },
  {
    id: 'g-5',
    title: 'From Artisan Guild to Cooperative Founder',
    category: 'Artisans',
    location: 'Barabanki, Uttar Pradesh',
    year: '2026',
    caption: 'Graduated entrepreneur Savitri Bai inspecting cold-pressed mustard oil batches packaged with certified nutritional tracking.',
    image: '/src/assets/images/artisan_entrepreneur_1791525508149.jpg',
  },
  {
    id: 'g-6',
    title: 'Gram Sabha Leadership & Forest Stewardship',
    category: 'Assemblies',
    location: 'Similipal Biosphere, Odisha',
    year: '2026',
    caption: 'Indigenous women forest protectors convening with block officers to ratify community non-timber forest produce rights.',
    image: '/src/assets/images/hero_women_collective_1791487435923.jpg',
  },
];

export const IMPACT_METRICS = {
  heroHighlights: [
    { num: '38,400+', label: 'Women Mobilized into SHGs', note: 'Across 650+ village habitations' },
    { num: '2,480+', label: 'Active Self-Help Groups', note: 'Weekly doorstep savings discipline' },
    { num: '₹42.8 Cr', label: 'Micro-Credit Capital Rotated', note: 'Zero non-performing assets' },
    { num: '98.6%', label: 'On-Time Loan Repayment', note: 'Verified by lead commercial banks' },
  ],
  socioEconomicGains: [
    { metric: 'Household Average Monthly Income', before: '₹2,650 / mo', after: '₹11,400 / mo', change: '+330%' },
    { metric: 'Girl Children in Secondary School', before: '41.2%', after: '94.8%', change: '+53.6 pp' },
    { metric: 'Women Holding Bank Passbooks in Own Name', before: '14.5%', after: '98.2%', change: '+83.7 pp' },
    { metric: 'Emergency Healthcare Out-of-Pocket Debt', before: '68.0%', after: '4.2%', change: '-63.8 pp' },
    { metric: 'Women Attending Gram Sabha Assemblies', before: '11.0%', after: '88.5%', change: '+77.5 pp' },
  ],
  regionalFootprint: [
    { state: 'Madhya Pradesh', districts: '8 Districts', shgs: '780 Groups', members: '11,400 Women', keyCraft: 'Handloom Silk, Chanderi Weaving, Millets' },
    { state: 'Rajasthan', districts: '6 Districts', shgs: '590 Groups', members: '9,200 Women', keyCraft: 'Block Print, Natural Dyes, Camel Milk Soap' },
    { state: 'Bihar', districts: '5 Districts', shgs: '460 Groups', members: '7,500 Women', keyCraft: 'Madhubani Painting, Sujani Quilting, Mustard Oil' },
    { state: 'Odisha', districts: '5 Districts', shgs: '380 Groups', members: '6,100 Women', keyCraft: 'Wild Forest Honey, Sabai Grass, Pattachitra' },
    { state: 'Assam & NE', districts: '4 Districts', shgs: '270 Groups', members: '4,200 Women', keyCraft: 'Bamboo Furniture, Lakadong Turmeric, Eri Silk' },
  ],
};

export const CHAPTER_CONTACTS = [
  { city: 'National Secretariat & HQ', location: 'Navya Rural Center, Institutional Area, Sector 14, Jaipur, Rajasthan 302004', phone: '+91 141 278 9400', email: 'secretariat@navya-impact.org' },
  { city: 'Central India Regional Chapter', location: 'Shilp Gram Road, Near Craft Council, Bhopal, Madhya Pradesh 462003', phone: '+91 755 244 8190', email: 'central@navya-impact.org' },
  { city: 'Eastern India Regional Chapter', location: 'Old Mission Compound, Mayurbhanj Road, Baripada, Odisha 757001', phone: '+91 6792 252 110', email: 'east@navya-impact.org' },
  { city: 'B2B & CSR Partnership Desk', location: '4th Floor, Social Innovation Pavilion, BKC, Mumbai, Maharashtra 400051', phone: '+91 22 6902 4411', email: 'partnerships@navya-impact.org' },
];
