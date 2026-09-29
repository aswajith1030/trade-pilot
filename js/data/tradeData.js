// TradePilot AI — Comprehensive Multi-Product Knowledge Base (With Flags & Product Logos)

window.COUNTRY_FLAGS = {
  "India": { code: "in", emoji: "🇮🇳", flagUrl: "https://flagcdn.com/w40/in.png" },
  "Germany": { code: "de", emoji: "🇩🇪", flagUrl: "https://flagcdn.com/w40/de.png" },
  "Italy": { code: "it", emoji: "🇮🇹", flagUrl: "https://flagcdn.com/w40/it.png" },
  "UAE": { code: "ae", emoji: "🇦🇪", flagUrl: "https://flagcdn.com/w40/ae.png" },
  "UK": { code: "gb", emoji: "🇬🇧", flagUrl: "https://flagcdn.com/w40/gb.png" },
  "USA": { code: "us", emoji: "🇺🇸", flagUrl: "https://flagcdn.com/w40/us.png" },
  "Saudi Arabia": { code: "sa", emoji: "🇸🇦", flagUrl: "https://flagcdn.com/w40/sa.png" },
  "Bangladesh": { code: "bd", emoji: "🇧🇩", flagUrl: "https://flagcdn.com/w40/bd.png" },
  "Vietnam": { code: "vn", emoji: "🇻🇳", flagUrl: "https://flagcdn.com/w40/vn.png" },
  "Turkey": { code: "tr", emoji: "🇹🇷", flagUrl: "https://flagcdn.com/w40/tr.png" },
  "China": { code: "cn", emoji: "🇨🇳", flagUrl: "https://flagcdn.com/w40/cn.png" },
  "France": { code: "fr", emoji: "🇫🇷", flagUrl: "https://flagcdn.com/w40/fr.png" },
  "Japan": { code: "jp", emoji: "🇯🇵", flagUrl: "https://flagcdn.com/w40/jp.png" }
};

window.TRADE_PRODUCTS = {
  turmeric: {
    id: "turmeric",
    name: "Turmeric",
    logoIcon: "🌱",
    logoBadgeUrl: "https://cdn-icons-png.flaticon.com/512/6013/6013233.png",
    hsCode: "0910.30 (Curcuma)",
    category: "Agricultural & Spices",
    epc: "Spices Board of India",
    epcUrl: "https://www.indianspices.com",
    description: "High-curcumin aromatic spice widely used in food processing, pharmaceuticals, and cosmetics.",
    defaultOrigin: "India",
    defaultDestination: "Germany",
    qualityGrades: ["Alleppey Finger (Curcumin 5%+)", "Erode Turmeric", "Nizamabad Finger", "Organic Certified"],
    packaging: "25kg / 50kg HDPE laminated jute bags with inner poly-liner",
    marketScore: 88,
    topMarket: "Germany",
    
    keyMarkets: [
      {
        country: "Germany",
        code: "DE",
        flagCode: "de",
        flagUrl: "https://flagcdn.com/w40/de.png",
        opportunityScore: 88,
        demand: "High",
        logistics: "Medium",
        competition: "Medium",
        indicativePrice: "$3,200 - $3,600 / MT",
        duty: "0% (EU MFN Tariff)",
        summary: "Germany is Europe's largest buyer of organic certified high-curcumin turmeric for nutraceuticals.",
        whyMarket: {
          demandFactor: "Growing health awareness and demand for natural curcumin supplements in EU.",
          priceRealization: "Premium pricing for organic and high-curcumin (>5%) certified batches.",
          logisticsFactor: "Direct ocean routes to Hamburg & Bremerhaven with established reefer & dry freight options.",
          dutyFactor: "0% import tariff on raw whole turmeric under EU GSP / MFN tariffs.",
          regulatoryComplexity: "Strict EU Maximum Residue Limits (MRLs) for pesticides, heavy metals, and ethylene oxide.",
          accessibility: "Established spice trading hubs in Hamburg with clear inspection protocols."
        }
      },
      {
        country: "UAE",
        code: "AE",
        flagCode: "ae",
        flagUrl: "https://flagcdn.com/w40/ae.png",
        opportunityScore: 85,
        demand: "High",
        logistics: "Low",
        competition: "Medium",
        indicativePrice: "$2,900 - $3,200 / MT",
        duty: "0% (CEPA Tariff Exemption)",
        summary: "UAE serves both as a strong domestic culinary market and a regional re-export hub for MENA.",
        whyMarket: {
          demandFactor: "High culinary consumption and re-export hub for Gulf & African markets.",
          priceRealization: "Steady high-volume demand with fast payment terms and CEPA trade privileges.",
          logisticsFactor: "Short 3-5 day sea transit from Mundra/Nhava Sheva to Jebel Ali.",
          dutyFactor: "0% import tariff under India-UAE Comprehensive Economic Partnership Agreement (CEPA).",
          regulatoryComplexity: "ESMA / Dubai Municipality food safety guidelines; straightforward compliance.",
          accessibility: "Massive distribution networks in Dubai Spice Souk and JAFZA free zone."
        }
      },
      {
        country: "USA",
        code: "US",
        flagCode: "us",
        flagUrl: "https://flagcdn.com/w40/us.png",
        opportunityScore: 82,
        demand: "High",
        logistics: "High",
        competition: "High",
        indicativePrice: "$3,500 - $4,000 / MT",
        duty: "1.8%",
        summary: "Large market for dietary supplements, functional foods, and cosmetics.",
        whyMarket: {
          demandFactor: "Rapidly expanding wellness market for Curcumin extract and organic golden milk blends.",
          priceRealization: "Highest price realization for FDA-registered organic suppliers.",
          logisticsFactor: "Longer transit (24-30 days) to US East/West ports requiring robust packaging.",
          dutyFactor: "1.8% General Duty Rate.",
          regulatoryComplexity: "US FDA FSVP compliance, heavy metal screening (lead/cadmium), and ASTA standards.",
          accessibility: "Strong demand from major ingredient distributors in California and New Jersey."
        }
      },
      {
        country: "UK",
        code: "GB",
        flagCode: "gb",
        flagUrl: "https://flagcdn.com/w40/gb.png",
        opportunityScore: 79,
        demand: "Medium-High",
        logistics: "Medium",
        competition: "Medium",
        indicativePrice: "$3,100 - $3,500 / MT",
        duty: "0% (UK Global Tariff)",
        summary: "Strong ethnic food sector and growing wellness beverage industry post-Brexit.",
        whyMarket: {
          demandFactor: "Established curry processing industry and booming health supplement market.",
          priceRealization: "Good margins for retail-ready packaging and private label partners.",
          logisticsFactor: "Direct shipping to London Gateway and Felixstowe (18-22 days).",
          dutyFactor: "0% duty under UK Global Tariff scheme.",
          regulatoryComplexity: "UK Food Standards Agency (FSA) compliance post-Brexit.",
          accessibility: "Direct access to UK spice importers and retail chains."
        }
      }
    ],

    journeySteps: [
      {
        title: "Product Requirements",
        code: "01",
        description: "Specify curcumin percentage, moisture content (<10%), and pesticide residue compliance.",
        details: [
          "Minimum Curcumin Content: 3.5% for culinary, 5.0%+ for extraction",
          "Moisture Content: Must be under 10% to prevent aflatoxin development",
          "Foreign Matter: Less than 1.0% total by weight",
          "Ethylene Oxide (EtO): Must be strictly NON-DETECTABLE for EU exports",
          "Heavy Metal Limits: Lead < 2.0 ppm, Cadmium < 1.0 ppm, Arsenic < 1.0 ppm"
        ]
      },
      {
        title: "Documents",
        code: "02",
        description: "Mandatory export documentation for spice customs and phytosanitary clearance.",
        details: [
          "Commercial Invoice & Packing List (signed with HS Code 0910.30)",
          "Certificate of Origin (issued by Spices Board or Chamber of Commerce)",
          "Phytosanitary Certificate (issued by Plant Quarantine Officer, Ministry of Agriculture)",
          "Spices Board Mandatory Sampling & Analysis Report (for EtO & Aflatoxin)",
          "Shipping Bill (filed via ICEGATE under Duty Drawback / RoDTEP scheme)"
        ]
      },
      {
        title: "Customs Clearance",
        code: "03",
        description: "Filing export customs declaration at Indian port and mandatory inspection.",
        details: [
          "ICEGATE Shipping Bill filing with IEC (Importer Exporter Code)",
          "Spices Board Mandatory Quality Clearance (Crep / e-Certificate)",
          "Factory / Warehouse Stuffing Inspection & Container Customs Seal",
          "Port Customs Let Export Order (LEO) generation",
          "Draft Bill of Lading verification with shipping line"
        ]
      },
      {
        title: "Destination Regulations",
        code: "04",
        description: "Target country entry requirements, MRL checks, and food safety standards.",
        details: [
          "EU Regulation 2023/915 on Maximum Residue Limits for contaminants",
          "EU RASFF pesticide residue screening at port of arrival (Hamburg/Rotterdam)",
          "Nutraceutical labeling compliance (German/English mandatory labeling)",
          "Aflatoxin B1 limit: max 5.0 µg/kg; Total Aflatoxin: max 10.0 µg/kg",
          "Non-GMO statement and traceability lot coding required"
        ]
      },
      {
        title: "Ports & Shipping",
        code: "05",
        description: "Select shipping line, port of loading, and container specifications.",
        details: [
          "Origin Ports: Nhava Sheva (JNPT), Mundra, or Chennai Port",
          "Destination Ports: Hamburg, Bremerhaven, or Rotterdam",
          "Container Specs: 20ft FCL Dry Van (approx 18-20 MT payload)",
          "Desiccant Bags: Mandatory 2kg silica gel desiccants per container corner",
          "Transit Time: 18 - 24 Days via direct ocean vessel"
        ]
      },
      {
        title: "Market Intelligence",
        code: "06",
        description: "Opportunity scoring, price realization, and buyer network channels.",
        details: [
          "Top Opportunity Market: Germany (Score: 88/100)",
          "Average CIF Hamburg Realization: $3,400 per Metric Ton",
          "Seasonal Price Peak: October - February (Pre-winter inventory stocking)",
          "Key Buyer Types: Spice Millers, Extractors, Herbal Tea Brands, Wholesale Brokers"
        ]
      },
      {
        title: "Next Steps",
        code: "07",
        description: "Actionable roadmap to complete your export shipment.",
        details: [
          "Obtain IEC Code and Register with Spices Board of India (RCMC)",
          "Request third-party lab testing (SGS/Eurofins) for Curcumin & Pesticide parameters",
          "Finalize Proforma Invoice & Purchase Order under LC (Letter of Credit) or 30% Advance + 70% BL",
          "Book Freight Container with Logistics Partner and schedule Plant Quarantine inspection",
          "File Shipping Bill on ICEGATE and receive LEO"
        ]
      }
    ],

    documents: [
      {
        id: "doc-1",
        name: "Commercial Invoice & Packing List",
        category: "Essential Trade Document",
        purpose: "Declares itemized product details, HS code, quantity, unit price, and packaging layout for customs and buyer.",
        whenRequired: "Mandatory for all export shipments at origin and destination customs clearance.",
        officialReference: "DGFT Export Guidelines Chapter 4 / Customs Act 1962",
        whyNeeded: "Customs officers verify duties, valuation, and transaction legitimacy using the commercial invoice.",
        verificationUrl: "https://www.dgft.gov.in"
      },
      {
        id: "doc-2",
        name: "Phytosanitary Certificate",
        category: "Product Specific / Regulatory",
        purpose: "Certifies that plant products are free from quarantine pests and comply with destination phytosanitary rules.",
        whenRequired: "Mandatory for raw agricultural products entering EU, US, UAE, UK.",
        officialReference: "Directorate of Plant Protection, Quarantine & Storage (PPQS India)",
        whyNeeded: "Prevents introduction of invasive agricultural pests into the importing country.",
        verificationUrl: "https://pqms.cappqis.gov.in"
      },
      {
        id: "doc-3",
        name: "Spices Board Quality Certificate (EtO / Aflatoxin)",
        category: "Product Specific Clearance",
        purpose: "Official test clearance showing non-detectable Ethylene Oxide and safe aflatoxin levels.",
        whenRequired: "Mandatory for all spice exports originating from India bound for EU & UK.",
        officialReference: "Spices Board e-Clearance System",
        whyNeeded: "EU customs automatically reject spice consignments without Spices Board pre-shipment sampling clearance.",
        verificationUrl: "https://www.indianspices.com"
      },
      {
        id: "doc-4",
        name: "Certificate of Origin (Preferential / Non-Preferential)",
        category: "Customs & Tariff Document",
        purpose: "Proves country of origin (India) to claim duty concessions or verify trade agreements.",
        whenRequired: "Required for customs tariff calculation (0% in UAE under CEPA, GSP in EU).",
        officialReference: "DGFT CoO Portal / Export Inspection Council",
        whyNeeded: "Required by destination customs to apply correct tariff rates and preferential duty benefits.",
        verificationUrl: "https://coo.dgft.gov.in"
      },
      {
        id: "doc-5",
        name: "Bill of Lading (B/L)",
        category: "Shipping & Title Document",
        purpose: "Acts as receipt of cargo, contract of carriage, and legal document of title.",
        whenRequired: "Issued by shipping line after container loading onto ocean vessel.",
        officialReference: "Directorate General of Shipping / Maritime Law",
        whyNeeded: "Buyer requires original BL or Telex Release to collect cargo at destination port.",
        verificationUrl: "https://dgshipping.gov.in"
      }
    ],

    regulations: {
      destination: "Germany (European Union)",
      authority: "European Food Safety Authority (EFSA) & BVL Germany",
      keyConsiderations: [
        "Ethylene Oxide (EtO) Residue: Must be non-detectable (LOQ 0.02 mg/kg)",
        "Pesticide Maximum Residue Limits (MRL): Strict EU Reg 396/2005 rules for over 400 compounds",
        "Mycotoxins / Aflatoxin B1: Maximum 5.0 µg/kg; Total Aflatoxin: 10.0 µg/kg",
        "Heavy Metals: Lead (max 2.0 mg/kg), Cadmium (max 1.0 mg/kg)",
        "Microbiological Standards: Salmonella absent in 25g, E. coli < 10 cfu/g"
      ],
      complianceNotes: "German buyers strictly insist on third-party test reports from ISO 17025 accredited labs (e.g. Eurofins, SGS, Intertek) before vessel departure.",
      warning: "Regulatory requirements may change. Verify current requirements with relevant official authorities (EFSA/BVL) before entering supply contracts."
    },

    shipping: {
      originPorts: ["Nhava Sheva (JNPT), Mumbai", "Mundra Port, Gujarat", "Chennai Port, Tamil Nadu"],
      destinationPorts: ["Hamburg Port, Germany", "Bremerhaven, Germany", "Rotterdam, Netherlands"],
      containerOptions: "20ft FCL Dry Container (Loads approx 18 Metric Tons bagged turmeric)",
      transitTime: "18 - 24 Days (Direct EU Container Service)",
      logisticsComplexity: "Medium",
      shippingTips: "Use high-grade kraft paper liner inside container and 2kg dry bags per corner to prevent sweat damage during sea transit."
    },

    trustLayer: [
      {
        recommendation: "Target Germany for highest price realization on organic certified high-curcumin (>5%) turmeric.",
        source: "ITC Trade Map 2024 Trade Data & EU Spice Import Statistics",
        assumption: "Assumes product meets EU MRL pesticide standards and possesses USDA/EU Organic Certification.",
        verifyUrl: "https://www.trademap.org"
      },
      {
        recommendation: "Obtain pre-shipment EtO testing from Spices Board accredited lab before loading container.",
        source: "Spices Board Quality Circular & EU RASFF Alert Database",
        assumption: "EU port customs perform 100% mandatory sampling if pre-shipment test report is missing.",
        verifyUrl: "https://www.indianspices.com"
      }
    ]
  },

  coffee: {
    id: "coffee",
    name: "Coffee",
    logoIcon: "☕",
    logoBadgeUrl: "https://cdn-icons-png.flaticon.com/512/2935/2935413.png",
    hsCode: "0901.11 (Green Coffee Beans, Unroasted)",
    category: "Agricultural & Beverages",
    epc: "Coffee Board of India",
    epcUrl: "https://www.indiacoffee.org",
    description: "Premium Robusta Parchment, Arabica Plantation, and Specialty Malabar Monsooned Coffee Beans.",
    defaultOrigin: "India",
    defaultDestination: "Italy",
    qualityGrades: ["Arabica Plantation AA", "Robusta Cherry AB", "Monsooned Malabar AA", "Specialty Mysore Nuggets"],
    packaging: "60kg GrainPro lined jute bags / Bulk container liners",
    marketScore: 84,
    topMarket: "Italy",

    keyMarkets: [
      {
        country: "Italy",
        code: "IT",
        flagCode: "it",
        flagUrl: "https://flagcdn.com/w40/it.png",
        opportunityScore: 84,
        demand: "High",
        logistics: "Medium",
        competition: "Medium",
        indicativePrice: "$4,100 - $4,600 / MT",
        duty: "0% (EU Tariff)",
        summary: "Italy is the primary destination for Indian Robusta Parchment and Monsooned Coffee for espresso roasters.",
        whyMarket: {
          demandFactor: "Traditional espresso culture relies heavily on high-body Indian Robusta for cream & structure.",
          priceRealization: "Exceptional price realization for Monsooned Malabar AA and Robusta Cherry AB.",
          logisticsFactor: "Direct Mediterranean routes to Genoa, Trieste, and Naples (14-18 days).",
          dutyFactor: "0% duty under EU MFN tariff schedule for green coffee beans.",
          regulatoryComplexity: "Ochratoxin A (OTA) limit compliance and moisture level check (<12.5%).",
          accessibility: "Trieste and Genoa are world-renowned coffee clearing free ports with specialized warehouses."
        }
      },
      {
        country: "Germany",
        code: "DE",
        flagCode: "de",
        flagUrl: "https://flagcdn.com/w40/de.png",
        opportunityScore: 80,
        demand: "High",
        logistics: "Medium",
        competition: "High",
        indicativePrice: "$4,000 - $4,400 / MT",
        duty: "0% (EU Tariff)",
        summary: "Europe's largest coffee importing & re-export roasting hub with huge volume demand.",
        whyMarket: {
          demandFactor: "Massive commercial roasting sector and growing specialty coffee market.",
          priceRealization: "High volume, consistent contract demand for commercial & sustainable certified coffee.",
          logisticsFactor: "Direct shipping to Hamburg (18-22 days) with automated bulk handling.",
          dutyFactor: "0% duty for raw green unroasted coffee beans.",
          regulatoryComplexity: "EU Deforestation Regulation (EUDR) compliance & sustainability proof.",
          accessibility: "Hamburg Coffee Exchange provides transparent price hedging & liquidity."
        }
      },
      {
        country: "USA",
        code: "US",
        flagCode: "us",
        flagUrl: "https://flagcdn.com/w40/us.png",
        opportunityScore: 77,
        demand: "High",
        logistics: "High",
        competition: "High",
        indicativePrice: "$4,200 - $4,800 / MT",
        duty: "0%",
        summary: "Huge demand for specialty shade-grown Indian Arabica and organic single-origin beans.",
        whyMarket: {
          demandFactor: "Third-wave specialty coffee roasters seeking unique single-origin micro-lots.",
          priceRealization: "Top pricing for cupping scores >84 points.",
          logisticsFactor: "Longer transit to New York / Seattle requiring hermetic GrainPro protection.",
          dutyFactor: "0% general tariff.",
          regulatoryComplexity: "FDA Food Facility Registration, Bioterrorism Notice, FDA inspection.",
          accessibility: "Robust coffee importer networks in New York and California."
        }
      },
      {
        country: "UK",
        code: "GB",
        flagCode: "gb",
        flagUrl: "https://flagcdn.com/w40/gb.png",
        opportunityScore: 74,
        demand: "High",
        logistics: "Medium",
        competition: "High",
        indicativePrice: "$4,000 - $4,500 / MT",
        duty: "0%",
        summary: "Rapidly expanding artisanal roasting scene and premium instant coffee market.",
        whyMarket: {
          demandFactor: "High demand for Fairtrade and Rainforest Alliance certified green coffee.",
          priceRealization: "Good margins for certified sustainable grades.",
          logisticsFactor: "Direct shipment to Tilbury and London Gateway.",
          dutyFactor: "0% duty post-Brexit.",
          regulatoryComplexity: "UK FSA rules & pesticide MRL compliance.",
          accessibility: "Established green coffee traders in London and Manchester."
        }
      }
    ],

    journeySteps: [
      {
        title: "Product Requirements",
        code: "01",
        description: "Specify moisture content (<12.5%), bean size (Screen 17/18), and defects count.",
        details: [
          "Moisture Content: Must be strictly between 10.0% - 12.5%",
          "Bean Grading: Arabica Plantation AA (Screen 17+), Robusta Cherry AB (Screen 15+)",
          "Ochratoxin A (OTA): Must be under 5.0 µg/kg for raw coffee beans entering EU",
          "EU Deforestation Regulation (EUDR): Geolocation coordinates of farm origin mandatory",
          "Cupping Score: Minimum 80+ for specialty grade pricing"
        ]
      },
      {
        title: "Documents",
        code: "02",
        description: "Coffee Board export permit and mandatory international documentation.",
        details: [
          "Coffee Board of India Export Permit (Registration cum Membership Certificate - RCMC)",
          "ICO Certificate of Origin (International Coffee Organization standard format)",
          "Phytosanitary Certificate issued by Plant Quarantine Inspector",
          "Commercial Invoice & Packing List with Lot / Mark Numbers",
          "Quality & Grade Certificate from Coffee Board Lab or Licensed Assayer"
        ]
      },
      {
        title: "Customs Clearance",
        code: "03",
        description: "Customs procedure for green coffee export under ICO monitoring.",
        details: [
          "Filing ICO Certificate of Origin details on ICEGATE shipping bill",
          "Coffee Board online export permit verification",
          "Customs container seals inspection at export port",
          "Let Export Order (LEO) generation",
          "Bill of Lading issuance marked 'Freight Prepaid / Payable at Destination'"
        ]
      },
      {
        title: "Destination Regulations",
        code: "04",
        description: "European Union coffee import guidelines and EUDR compliance.",
        details: [
          "EU Deforestation Regulation (EUDR) mandatory due diligence statement",
          "EU Regulation 2023/915 on Mycotoxins (Ochratoxin A limits)",
          "Maximum Residue Limits (MRL) for Chlorpyrifos and Glyphosate",
          "Container hermetic seal inspection at Genoa / Trieste port",
          "Traceability documentation linking container to farm cooperatives"
        ]
      },
      {
        title: "Ports & Shipping",
        code: "05",
        description: "Optimal maritime routes to Italian espresso coffee ports.",
        details: [
          "Origin Ports: Mangalore Port (Kudremukh), Cochin Port, or Nhava Sheva",
          "Destination Ports: Trieste (Italy), Genoa (Italy), Naples (Italy)",
          "Packaging: 60kg jute bags with GrainPro hermetic inner lining inside 20ft container",
          "Container Capacity: 20ft FCL fits approx 320 - 350 bags (19.2 - 21 Metric Tons)",
          "Transit Time: 14 - 18 Days direct Mediterranean line"
        ]
      },
      {
        title: "Market Intelligence",
        code: "06",
        description: "Italian market insights, roaster demand, and pricing benchmark.",
        details: [
          "Top Opportunity Market: Italy (Score: 84/100)",
          "Key Importing Hubs: Trieste (Illy, Hausbrandt), Genoa (Lavazza distribution)",
          "Average Price Realization: $4,300 per Metric Ton CIF Genoa",
          "Demand Drivers: High body, crema production for espresso blends using Indian Robusta"
        ]
      },
      {
        title: "Next Steps",
        code: "07",
        description: "Action plan for coffee exporters to close international contracts.",
        details: [
          "Register with Coffee Board of India and obtain ICO Exporter Code",
          "Send 300g Green Coffee type samples to Italian green coffee importers for physical evaluation",
          "Obtain EUDR farm plot GPS coordinates from grower estate",
          "Execute sales contract under ICO Standard Terms with 20% advance & 80% CAD (Cash Against Documents)",
          "Book GrainPro lined container with shipping line"
        ]
      }
    ],

    documents: [
      {
        id: "doc-c1",
        name: "ICO Certificate of Origin",
        category: "Mandatory Global Coffee Document",
        purpose: "Official International Coffee Organization document tracking origin, grade, bag count, and weight.",
        whenRequired: "Mandatory for all international coffee shipments worldwide.",
        officialReference: "International Coffee Organization (ICO) / Coffee Board India",
        whyNeeded: "Customs authorities in importing countries track global coffee quotas and origin authenticity via ICO certificates.",
        verificationUrl: "https://www.indiacoffee.org"
      },
      {
        id: "doc-c2",
        name: "Coffee Board Export Permit",
        category: "Statutory Export Permit",
        purpose: "Permit granted by Coffee Board of India authorizing export of designated lot.",
        whenRequired: "Mandatory prior to filing shipping bill on ICEGATE.",
        officialReference: "Coffee Act 1942 / Coffee Board Rules",
        whyNeeded: "Ensures exported coffee meets Indian quality standards and national export tracking.",
        verificationUrl: "https://www.indiacoffee.org"
      },
      {
        id: "doc-c3",
        name: "Phytosanitary Certificate",
        category: "Plant Health Document",
        purpose: "Certifies freedom from coffee berry borer and agricultural storage pests.",
        whenRequired: "Required for entry into EU ports (Trieste, Genoa, Hamburg).",
        officialReference: "Plant Quarantine Inspectorate India",
        whyNeeded: "Customs authorities destroy or quarantine uncertified coffee shipments.",
        verificationUrl: "https://pqms.cappqis.gov.in"
      },
      {
        id: "doc-c4",
        name: "GrainPro / Hermetic Packing Declaration",
        category: "Quality Assurance",
        purpose: "Declares moisture barrier protection used to prevent mold and OTA growth during sea voyage.",
        whenRequired: "Requested by Italian specialty roasters and premium coffee buyers.",
        officialReference: "Specialty Coffee Association (SCA) Standard",
        whyNeeded: "Guarantees coffee green cupping score is preserved during maritime transit.",
        verificationUrl: "https://www.sca.coffee"
      }
    ],

    regulations: {
      destination: "Italy (European Union)",
      authority: "Italian Ministry of Health & EU EFSA",
      keyConsiderations: [
        "Ochratoxin A (OTA) Limit: Strict EU ceiling of 5.0 µg/kg in green coffee beans",
        "EUDR Compliance: Mandatory farm plot satellite polygon coordinates for deforestation proof",
        "Moisture Content: Cannot exceed 12.5% at customs check",
        "Pesticide MRLs: Zero tolerance for unauthorized organophosphates",
        "Labeling: Bags must clearly display ICO Country Code (014 for India), Exporter No, and Lot No."
      ],
      complianceNotes: "Italian roasters perform immediate moisture and OTA lab tests at Genoa/Trieste port before accepting delivery.",
      warning: "Regulatory requirements may change. Verify current requirements with relevant official authorities (ICO/Italian Ministry of Health) before signing contracts."
    },

    shipping: {
      originPorts: ["Mangalore Port, Karnataka", "Cochin Port, Kerala", "Nhava Sheva, Mumbai"],
      destinationPorts: ["Trieste Port, Italy", "Genoa Port, Italy", "Naples Port, Italy"],
      containerOptions: "20ft FCL Dry Van with GrainPro Jute Bag lining (~19.5 MT)",
      transitTime: "14 - 18 Days (Direct Mediterranean Service)",
      logisticsComplexity: "Medium",
      shippingTips: "Never stow coffee containers adjacent to engine rooms or heated fuel tanks on ocean vessels."
    },

    trustLayer: [
      {
        recommendation: "Focus on Trieste & Genoa roasters for Indian Robusta Parchment & Monsooned Malabar grades.",
        source: "ICO World Coffee Statistics & Italian Coffee Roasters Guild",
        assumption: "Assumes coffee beans are GrainPro packed with moisture strictly <12.5%.",
        verifyUrl: "https://www.ico.org"
      }
    ]
  },

  tea: {
    id: "tea",
    name: "Tea",
    logoIcon: "🍵",
    logoBadgeUrl: "https://cdn-icons-png.flaticon.com/512/3504/3504780.png",
    hsCode: "0902.40 (Black Tea, Fermented)",
    category: "Agricultural & Beverages",
    epc: "Tea Board of India",
    epcUrl: "https://www.teaboard.gov.in",
    description: "World-renowned Assam Orthodox, Darjeeling GI Tagged, and Nilgiri CTC Teas.",
    defaultOrigin: "India",
    defaultDestination: "UK",
    qualityGrades: ["Darjeeling FTGFOP1 (GI Tagged)", "Assam GFOP Orthodox", "Nilgiri Superfine CTC", "Organic Green Tea"],
    packaging: "Multi-wall paper sacks with aluminum foil barrier / Wooden chests",
    marketScore: 89,
    topMarket: "UK",

    keyMarkets: [
      {
        country: "UK",
        code: "GB",
        flagCode: "gb",
        flagUrl: "https://flagcdn.com/w40/gb.png",
        opportunityScore: 89,
        demand: "High",
        logistics: "Medium",
        competition: "High",
        indicativePrice: "$4,500 - $6,500 / MT",
        duty: "0% (UK Tariff)",
        summary: "Historical top market for Indian Assam CTC, Orthodox, and specialty Darjeeling teas.",
        whyMarket: {
          demandFactor: "High per-capita tea consumption and massive demand for traditional breakfast blends.",
          priceRealization: "Premium realization for Darjeeling GI and Assam single-estate teas.",
          logisticsFactor: "Direct shipping routes to London Gateway and Felixstowe (18-22 days).",
          dutyFactor: "0% UK preferential import tariff.",
          regulatoryComplexity: "UK Food Standards Agency (FSA) compliance for heavy metals and pesticides.",
          accessibility: "Established tea blenders (Twinings, Taylors of Harrogate, Tetley) in UK."
        }
      },
      {
        country: "Germany",
        code: "DE",
        flagCode: "de",
        flagUrl: "https://flagcdn.com/w40/de.png",
        opportunityScore: 83,
        demand: "High",
        logistics: "Medium",
        competition: "Medium",
        indicativePrice: "$5,000 - $8,000 / MT",
        duty: "0%",
        summary: "Europe's leading market for premium specialty Darjeeling GI and organic herbal blends.",
        whyMarket: {
          demandFactor: "Highest willingness to pay for certified organic and single-origin Darjeeling.",
          priceRealization: "Top European price per kg for high-elevation Darjeeling first flush.",
          logisticsFactor: "Direct ocean routes to Hamburg (18-22 days).",
          dutyFactor: "0% EU tariff on raw unflavored tea.",
          regulatoryComplexity: "Strict EU MRL limits for Anthraquinone and pesticides.",
          accessibility: "Major tea trading houses in Hamburg with specialized testing facilities."
        }
      },
      {
        country: "UAE",
        code: "AE",
        flagCode: "ae",
        flagUrl: "https://flagcdn.com/w40/ae.png",
        opportunityScore: 81,
        demand: "High",
        logistics: "Low",
        competition: "Medium",
        indicativePrice: "$3,800 - $4,800 / MT",
        duty: "0% (CEPA)",
        summary: "Major re-export processing center for Middle East and Central Asia.",
        whyMarket: {
          demandFactor: "High regional demand for strong Assam CTC tea for Karak tea preparations.",
          priceRealization: "Fast payment terms and high volume commercial contracts.",
          logisticsFactor: "Short 3-5 day sea transit from Kolkata or Mundra to Dubai Jebel Ali.",
          dutyFactor: "0% duty under India-UAE CEPA agreement.",
          regulatoryComplexity: "ESMA halal & food safety certification.",
          accessibility: "Dubai Tea Centre (DTC) provides world-class blending & packing infrastructure."
        }
      },
      {
        country: "USA",
        code: "US",
        flagCode: "us",
        flagUrl: "https://flagcdn.com/w40/us.png",
        opportunityScore: 78,
        demand: "Medium-High",
        logistics: "High",
        competition: "Medium",
        indicativePrice: "$4,800 - $7,000 / MT",
        duty: "0%",
        summary: "Fastest-growing market for specialty iced teas, matcha, and organic Darjeeling.",
        whyMarket: {
          demandFactor: "Surging popularity of specialty specialty loose leaf and RTD iced tea products.",
          priceRealization: "Strong pricing for specialty certified organic green & black tea.",
          logisticsFactor: "22-28 days transit to East Coast ports.",
          dutyFactor: "0% duty.",
          regulatoryComplexity: "US FDA FSVP regulations and pesticide screening.",
          accessibility: "Direct access to US specialty tea importers and chain retailers."
        }
      }
    ],

    journeySteps: [
      {
        title: "Product Requirements",
        code: "01",
        description: "Specify tea grade, leaf size, moisture (<6.5%), and Anthraquinone limits.",
        details: [
          "Moisture Content: Must be strictly under 6.5% to prevent fermentation loss",
          "Anthraquinone Limit: EU maximum 0.02 mg/kg for tea leaves",
          "Darjeeling GI Certification: Mandatory traceability seal for Darjeeling exports",
          "Pesticide MRL Compliance: Strict adherence to UK FSA / EU pesticide databases",
          "Packaging: Foil-lined multi-wall paper sacks to prevent moisture ingress"
        ]
      },
      {
        title: "Documents",
        code: "02",
        description: "Tea Board of India export license and GI verification documents.",
        details: [
          "Tea Board of India Export License & RCMC",
          "Darjeeling GI Certificate of Origin (for Darjeeling consignments)",
          "Phytosanitary Certificate from Plant Quarantine Authority",
          "Commercial Invoice & Detailed Packing List (Grade-wise breakdown)",
          "Shipping Bill filed on ICEGATE with Tea Board permit details"
        ]
      },
      {
        title: "Customs Clearance",
        code: "03",
        description: "Indian port customs clearance and Tea Board online verification.",
        details: [
          "Online verification of Tea Board Export Clearance (e-NOC)",
          "Filing Shipping Bill with correct HS code (0902.30 / 0902.40)",
          "Customs inspection of container barrier packaging and seals",
          "Let Export Order (LEO) approval",
          "Bill of Lading issuance marked with tea grade specs"
        ]
      },
      {
        title: "Destination Regulations",
        code: "04",
        description: "UK Food Standards Agency and EU food contact packaging regulations.",
        details: [
          "UK FSA pesticide MRL compliance screening",
          "Maximum Residue Limits for Nicotine and Pyrrolizidine Alkaloids (PAs)",
          "Food contact safe packaging declaration for paper sacks / foil",
          "Mandatory labeling: Country of origin, Net weight, Producer ID, Expiry date",
          "Traceability from tea garden estate to export vessel"
        ]
      },
      {
        title: "Ports & Shipping",
        code: "05",
        description: "Shipping routes from eastern Indian tea ports to UK.",
        details: [
          "Origin Ports: Kolkata Port (Syama Prasad Mookerjee), Haldia, or Chennai",
          "Destination Ports: London Gateway, Felixstowe, or Southampton (UK)",
          "Container Type: 20ft / 40ft High Cube Dry Container with moisture absorbents",
          "Payload: 40ft HC fits approx 12 - 14 Metric Tons loose packed paper bags",
          "Transit Time: 18 - 22 Days"
        ]
      },
      {
        title: "Market Intelligence",
        code: "06",
        description: "UK tea market analysis, buyer profiles, and pricing benchmarks.",
        details: [
          "Top Opportunity Market: United Kingdom (Score: 89/100)",
          "Key Buyer Types: Major blenders (Twinings, Tetley), Specialty loose-leaf retailers",
          "Average Price Realization: $5,200 per Metric Ton CIF London",
          "Key Advantage: High reputation of Indian CTC for strong tea body and color"
        ]
      },
      {
        title: "Next Steps",
        code: "07",
        description: "Action plan for tea exporters to secure UK purchase orders.",
        details: [
          "Register with Tea Board of India and obtain Exporter License",
          "Send 100g tea tasting samples to London tea brokers / blenders for organoleptic evaluation",
          "Conduct ISO 17025 lab testing for Anthraquinone & 400+ pesticide residues",
          "Finalize sales contract under e-Auction or Direct Contract terms",
          "Schedule container stuffing with moisture barrier foil lining"
        ]
      }
    ],

    documents: [
      {
        id: "doc-t1",
        name: "Tea Board Export License (e-NOC)",
        category: "Statutory License",
        purpose: "Official permit issued by Tea Board of India authorizing consignment export.",
        whenRequired: "Mandatory for every commercial export shipment of Indian tea.",
        officialReference: "Tea Act 1953 / Tea Board India",
        whyNeeded: "Customs will not grant Let Export Order (LEO) without valid Tea Board e-NOC.",
        verificationUrl: "https://www.teaboard.gov.in"
      },
      {
        id: "doc-t2",
        name: "Darjeeling GI Certificate of Origin",
        category: "Geographical Indication Document",
        purpose: "Authenticates that 100% of the tea was grown in certified Darjeeling tea gardens.",
        whenRequired: "Mandatory when exporting tea under the name 'Darjeeling'.",
        officialReference: "Tea Board GI Protection Cell",
        whyNeeded: "Prevents counterfeit or blended teas from misrepresenting the Darjeeling GI tag.",
        verificationUrl: "https://www.teaboard.gov.in"
      },
      {
        id: "doc-t3",
        name: "Phytosanitary Certificate",
        category: "Plant Health Document",
        purpose: "Certifies freedom from live insects, weeds, and quarantine plant pathogens.",
        whenRequired: "Mandatory for UK customs clearance.",
        officialReference: "Plant Quarantine Inspectorate India",
        whyNeeded: "UK border authorities require plant quarantine validation for agricultural imports.",
        verificationUrl: "https://pqms.cappqis.gov.in"
      }
    ],

    regulations: {
      destination: "United Kingdom",
      authority: "UK Food Standards Agency (FSA)",
      keyConsiderations: [
        "Anthraquinone Level: Must be strictly under 0.02 mg/kg",
        "Pyrrolizidine Alkaloids (PAs): Maximum 150 µg/kg in dried tea leaves",
        "Moisture Limit: 6.5% max at point of import",
        "Packaging Safety: Food-grade aluminum foil paper barrier bags required",
        "Labeling: Must state batch lot number, garden name, net weight, and UK importer address"
      ],
      complianceNotes: "UK blenders sample every incoming batch for taste cupping and pesticide residue before clearance.",
      warning: "Regulatory requirements may change. Verify current requirements with UK FSA before shipping."
    },

    shipping: {
      originPorts: ["Kolkata Port, West Bengal", "Haldia Port, West Bengal", "Chennai Port"],
      destinationPorts: ["London Gateway, UK", "Felixstowe Port, UK", "Southampton, UK"],
      containerOptions: "40ft High Cube Dry Container with Kraft & Desiccant lining (~13 MT)",
      transitTime: "18 - 22 Days",
      logisticsComplexity: "Medium",
      shippingTips: "Ensure container floor is clean, dry, odor-free, and lined with heavy kraft paper."
    },

    trustLayer: [
      {
        recommendation: "Utilize Kolkata port direct vessel lines for Assam and Darjeeling shipments to London Gateway.",
        source: "Tea Board Export Statistics & UK Trade Data",
        assumption: "Assumes moisture content < 6.5% and pre-shipment pesticide test report available.",
        verifyUrl: "https://www.teaboard.gov.in"
      }
    ]
  },

  rice: {
    id: "rice",
    name: "Rice",
    logoIcon: "🌾",
    logoBadgeUrl: "https://cdn-icons-png.flaticon.com/512/3014/3014529.png",
    hsCode: "1006.30 (Semi-milled or Wholly Milled Basmati Rice)",
    category: "Agricultural & Grains",
    epc: "APEDA (Agricultural & Processed Food Products Authority)",
    epcUrl: "https://apeda.gov.in",
    description: "Premium Long Grain Aromatic Basmati Rice (1121, Pusa, Traditional) and Non-Basmati Rice.",
    defaultOrigin: "India",
    defaultDestination: "UAE",
    qualityGrades: ["1121 Steam Basmati", "Traditional Raw Basmati", "Pusa Basmati 1509", "Sona Masoori Non-Basmati"],
    packaging: "5kg / 10kg / 20kg non-woven PP bags or master cartons",
    marketScore: 91,
    topMarket: "UAE",

    keyMarkets: [
      {
        country: "UAE",
        code: "AE",
        flagCode: "ae",
        flagUrl: "https://flagcdn.com/w40/ae.png",
        opportunityScore: 91,
        demand: "Very High",
        logistics: "Low",
        competition: "Medium",
        indicativePrice: "$1,100 - $1,350 / MT",
        duty: "0% (CEPA Tariff)",
        summary: "Largest market and regional distribution hub for Indian Basmati rice in the GCC.",
        whyMarket: {
          demandFactor: "Massive staple food demand across GCC consumer base and re-export trade.",
          priceRealization: "Excellent price realization for premium 1121 Extra Long Grain Basmati.",
          logisticsFactor: "Ultra-fast 3-5 day transit from Mundra or Kandla to Jebel Ali.",
          dutyFactor: "0% duty under India-UAE CEPA trade treaty.",
          regulatoryComplexity: "Straightforward ESMA halal & food safety registration.",
          accessibility: "Highly organized wholesale rice distributor networks in Dubai."
        }
      },
      {
        country: "Saudi Arabia",
        code: "SA",
        flagCode: "sa",
        flagUrl: "https://flagcdn.com/w40/sa.png",
        opportunityScore: 87,
        demand: "Very High",
        logistics: "Low-Medium",
        competition: "High",
        indicativePrice: "$1,150 - $1,400 / MT",
        duty: "0%",
        summary: "World's largest single importer of Indian Basmati rice for traditional Kabsa dishes.",
        whyMarket: {
          demandFactor: "Enormous cultural consumption of long-grain Basmati rice.",
          priceRealization: "High volume long-term annual supply contracts.",
          logisticsFactor: "Direct shipping to Jeddah Islamic Port and Dammam (5-8 days).",
          dutyFactor: "0% duty on staple food grains.",
          regulatoryComplexity: "SFDA (Saudi Food and Drug Authority) strict pesticide checking.",
          accessibility: "Major supermarket chains and established rice brands in KSA."
        }
      },
      {
        country: "UK",
        code: "GB",
        flagCode: "gb",
        flagUrl: "https://flagcdn.com/w40/gb.png",
        opportunityScore: 82,
        demand: "High",
        logistics: "Medium",
        competition: "Medium",
        indicativePrice: "$1,250 - $1,500 / MT",
        duty: "0% (Basmati Duty Privilege)",
        summary: "High demand for authentic DNA-tested Basmati rice with EU/UK duty zero-rating.",
        whyMarket: {
          demandFactor: "Huge Asian diaspora and widespread popularity of Indian cuisine.",
          priceRealization: "Top pricing for DNA-certified authentic Basmati varieties.",
          logisticsFactor: "18-22 days shipping to UK ports.",
          dutyFactor: "0% duty under UK Basmati duty derogation scheme.",
          regulatoryComplexity: "Tricyclazole residue limit (<0.01 mg/kg) & DNA purity check (>95%).",
          accessibility: "Established ethnic retail networks and major UK supermarket chains."
        }
      },
      {
        country: "USA",
        code: "US",
        flagCode: "us",
        flagUrl: "https://flagcdn.com/w40/us.png",
        opportunityScore: 77,
        demand: "Medium-High",
        logistics: "High",
        competition: "Medium",
        indicativePrice: "$1,300 - $1,600 / MT",
        duty: "0%",
        summary: "Growing retail consumption of specialty aromatic rice in North America.",
        whyMarket: {
          demandFactor: "Expanding gourmet food sector and ethnic diaspora demand.",
          priceRealization: "High retail package margins for consumer-ready 5lb/10lb bags.",
          logisticsFactor: "24-30 days to East/West coast ports.",
          dutyFactor: "0% duty.",
          regulatoryComplexity: "US FDA FSMA rules and inorganic arsenic level compliance.",
          accessibility: "Nationwide distribution via Indian grocery importers and mainstream retail."
        }
      }
    ],

    journeySteps: [
      {
        title: "Product Requirements",
        code: "01",
        description: "Specify average grain length (AGL > 8.3mm), elongation ratio, and purity.",
        details: [
          "Average Grain Length (AGL): Minimum 8.35mm uncooked for 1121 Basmati",
          "Moisture Content: Must not exceed 12.0% by weight",
          "Purity / DNA Authenticity: Minimum 95% Basmati grain purity",
          "Broken Grains: Less than 1.0% for premium grade",
          "Discolored & Chalky Grains: Under 1.0% total"
        ]
      },
      {
        title: "Documents",
        code: "02",
        description: "APEDA Basmati registration and mandatory export certificates.",
        details: [
          "APEDA RCMC Certificate & Basmati Export Development Foundation (BEDF) Registration",
          "DNA Authenticity Test Certificate from APEDA approved laboratory",
          "Phytosanitary Certificate issued by Plant Quarantine Station",
          "Certificate of Inspection for Grain Specs & Fumigation Certificate",
          "Commercial Invoice, Packing List, and ICEGATE Shipping Bill"
        ]
      },
      {
        title: "Customs Clearance",
        code: "03",
        description: "APEDA portal registration verification and customs Let Export Order.",
        details: [
          "Mandatory registration of export contract on APEDA Basmati net portal",
          "Filing Minimum Export Price (MEP) declaration on ICEGATE if applicable",
          "Fumigation inspection (Methyl Bromide / Aluminium Phosphide treatment)",
          "Customs Let Export Order (LEO) generation",
          "Bill of Lading issuance with container seal details"
        ]
      },
      {
        title: "Destination Regulations",
        code: "04",
        description: "GCC ESMA / SFDA food safety standards and import requirements.",
        details: [
          "ESMA Halal & Food Safety Registration for UAE entry",
          "Pesticide Maximum Residue Limits (MRL) for Tricyclazole, Buprofezin, & Isoprothiolane",
          "Zero live insect infestation & clean grain certification",
          "Bilingual Arabic/English labeling: Brand, Country of Origin, Production & Expiry Date",
          "Aflatoxin and Heavy Metal compliance"
        ]
      },
      {
        title: "Ports & Shipping",
        code: "05",
        description: "Efficient sea transportation to Middle Eastern bulk grain ports.",
        details: [
          "Origin Ports: Mundra Port, Kandla Port (Gujarat), or Nhava Sheva",
          "Destination Ports: Jebel Ali (Dubai, UAE), Sharjah Port, or Mina Rashid",
          "Container Specs: 20ft FCL Dry Container (~24-25 Metric Tons bagged)",
          "Transit Time: 3 - 5 Days direct Gulf service",
          "Fumigation: Mandatory container fumigation prior to vessel departure"
        ]
      },
      {
        title: "Market Intelligence",
        code: "06",
        description: "UAE market analysis, pricing trends, and distributor channels.",
        details: [
          "Top Opportunity Market: United Arab Emirates (Score: 91/100)",
          "Average Realization: $1,250 per Metric Ton CIF Jebel Ali for 1121 Steam",
          "High Demand Varieties: 1121 Steam Basmati, Pusa 1509, Traditional Raw",
          "Competitive Advantage: Proximity, 0% CEPA duty, established Indian diaspora market"
        ]
      },
      {
        title: "Next Steps",
        code: "07",
        description: "Roadmap to execute your rice export shipment to UAE.",
        details: [
          "Obtain IEC Code and APEDA Basmati RCMC Certificate",
          "Register purchase contract on APEDA BEDF portal",
          "Arrange DNA testing and grain specification certificate from NABL accredited lab",
          "Finalize payment terms under Irrevocable DLC at Sight or 20% advance",
          "Book 20ft dry container with 25 MT payload from Mundra/Kandla"
        ]
      }
    ],

    documents: [
      {
        id: "doc-r1",
        name: "APEDA Registration Certificate (BEDF)",
        category: "Mandatory Regulatory Document",
        purpose: "Contract registration certificate issued by APEDA Basmati Export Development Foundation.",
        whenRequired: "Mandatory for all Basmati rice exports from India.",
        officialReference: "APEDA Export Trade Notice / Foreign Trade Policy",
        whyNeeded: "Customs algorithms block shipping bills without valid APEDA registration number.",
        verificationUrl: "https://apeda.gov.in"
      },
      {
        id: "doc-r2",
        name: "DNA Authenticity Certificate",
        category: "Quality & Purity Document",
        purpose: "Proves Basmati grain DNA purity is >95% to claim authentic Basmati classification.",
        whenRequired: "Required for EU, UK, and premium GCC buyer clearance.",
        officialReference: "APEDA Approved Testing Laboratories",
        whyNeeded: "Prevents adulteration with non-Basmati long grain varieties.",
        verificationUrl: "https://apeda.gov.in"
      },
      {
        id: "doc-r3",
        name: "Fumigation Certificate",
        category: "Logistics Safety",
        purpose: "Certifies container underwent pest fumigation treatment (Aluminium Phosphide / Methyl Bromide).",
        whenRequired: "Mandatory for all grain shipments prior to loading on ocean vessel.",
        officialReference: "Directorate of Plant Protection Quarantine & Storage",
        whyNeeded: "Prevents grain weevils and insect infestation during transit.",
        verificationUrl: "https://pqms.cappqis.gov.in"
      }
    ],

    regulations: {
      destination: "United Arab Emirates (UAE)",
      authority: "Dubai Municipality & MoIAT UAE",
      keyConsiderations: [
        "Pesticide MRLs: Compliance with GSO 223/2012 food safety guidelines",
        "Labeling: Mandatory Arabic & English text stating product name, net weight, origin, lot no, expiry",
        "Grain Moisture: Max 12.0% at port entry",
        "Banned Additives: Strictly zero synthetic coloring or artificial aroma additives",
        "Packaging: Food-grade polypropylene woven bags"
      ],
      complianceNotes: "Dubai Municipality randomly samples rice containers at Jebel Ali port for moisture and pest check.",
      warning: "Regulatory requirements may change. Verify current requirements with official authorities (APEDA/Dubai Municipality) before shipping."
    },

    shipping: {
      originPorts: ["Mundra Port, Gujarat", "Kandla Port, Gujarat", "Nhava Sheva, Mumbai"],
      destinationPorts: ["Jebel Ali Port, Dubai, UAE", "Abu Dhabi Port (Khalifa)", "Sharjah Port"],
      containerOptions: "20ft FCL Heavy Duty Container (24.5 - 25.5 MT bagged rice)",
      transitTime: "3 - 5 Days",
      logisticsComplexity: "Low",
      shippingTips: "Maximizing container payload up to 25 MT lowers freight cost per kilo dramatically."
    },

    trustLayer: [
      {
        recommendation: "Target UAE via Mundra port for fastest transit (3 days) and 0% CEPA duty benefit.",
        source: "APEDA Export Trade Portal & India-UAE CEPA Tariff Schedule",
        assumption: "Assumes contract is registered on APEDA BEDF portal prior to shipping bill filing.",
        verifyUrl: "https://apeda.gov.in"
      }
    ]
  },

  spices: {
    id: "spices",
    name: "Spices",
    logoIcon: "🌶️",
    logoBadgeUrl: "https://cdn-icons-png.flaticon.com/512/325/325712.png",
    hsCode: "0910.99 (Mixed Spices & Condiments)",
    category: "Agricultural & Spices",
    epc: "Spices Board of India",
    epcUrl: "https://www.indianspices.com",
    description: "Cardamom, Cumin, Black Pepper, Red Chili, Coriander, and Specialty Spice Blends.",
    defaultOrigin: "India",
    defaultDestination: "UAE",
    qualityGrades: ["Cumin Seeds (99.5% Purity)", "Tellicherry Black Pepper (TGSEB)", "Cardamom 8mm Green", "Chili S4 / Sanam"],
    packaging: "25kg multi-layer kraft paper bags / Vacuum sealed aluminum pouches",
    marketScore: 88,
    topMarket: "UAE",

    keyMarkets: [
      {
        country: "UAE",
        code: "AE",
        flagCode: "ae",
        flagUrl: "https://flagcdn.com/w40/ae.png",
        opportunityScore: 88,
        demand: "High",
        logistics: "Low",
        competition: "Medium",
        indicativePrice: "$3,800 - $5,500 / MT",
        duty: "0% (CEPA Tariff)",
        summary: "Primary re-export hub for Indian spices across Middle East and North Africa.",
        whyMarket: {
          demandFactor: "High culinary usage and major distribution networks in Dubai Spice Market.",
          priceRealization: "Strong pricing for whole green cardamom and Tellicherry black pepper.",
          logisticsFactor: "3-5 days sea freight from Nhava Sheva or Mundra to Jebel Ali.",
          dutyFactor: "0% duty under India-UAE CEPA agreement.",
          regulatoryComplexity: "Clear ESMA standards and fast customs processing.",
          accessibility: "Established spice traders and processing units in Dubai free zones."
        }
      },
      {
        country: "USA",
        code: "US",
        flagCode: "us",
        flagUrl: "https://flagcdn.com/w40/us.png",
        opportunityScore: 85,
        demand: "High",
        logistics: "High",
        competition: "High",
        indicativePrice: "$4,200 - $6,500 / MT",
        duty: "1.9%",
        summary: "Huge food processing industry demand and retail spice blend market.",
        whyMarket: {
          demandFactor: "Massive demand from industrial food processors and retail spice packing brands.",
          priceRealization: "Top prices for ASTA grade clean whole spices and steam-sterilized powders.",
          logisticsFactor: "22-28 days transit to East/West coast ports.",
          dutyFactor: "Low 1.9% average duty rate.",
          regulatoryComplexity: "US FDA FSVP compliance, Salmonella testing, and ASTA cleanliness specs.",
          accessibility: "Strong demand from ingredient distributors in New Jersey and California."
        }
      },
      {
        country: "Germany",
        code: "DE",
        flagCode: "de",
        flagUrl: "https://flagcdn.com/w40/de.png",
        opportunityScore: 82,
        demand: "High",
        logistics: "Medium",
        competition: "High",
        indicativePrice: "$4,000 - $6,200 / MT",
        duty: "0%",
        summary: "Strict quality market requiring steam sterilization and zero pesticide residues.",
        whyMarket: {
          demandFactor: "High demand for certified organic and steam-sterilized whole spices.",
          priceRealization: "Premium realization for laboratory certified pesticide-free consignments.",
          logisticsFactor: "18-22 days shipping to Hamburg.",
          dutyFactor: "0% duty under EU MFN tariff.",
          regulatoryComplexity: "EU MRL limits, Pyrrolizidine Alkaloids, and EtO non-detectable status.",
          accessibility: "Hamburg spice exchange and processing hubs."
        }
      },
      {
        country: "UK",
        code: "GB",
        flagCode: "gb",
        flagUrl: "https://flagcdn.com/w40/gb.png",
        opportunityScore: 80,
        demand: "Medium-High",
        logistics: "Medium",
        competition: "Medium",
        indicativePrice: "$3,900 - $5,800 / MT",
        duty: "0%",
        summary: "Large ethnic consumer base and booming curry processing industry.",
        whyMarket: {
          demandFactor: "High culinary consumption of cumin, coriander, and chili powders.",
          priceRealization: "Good margins for retail-ready spice jars and food service packs.",
          logisticsFactor: "18-22 days shipping to Felixstowe/London Gateway.",
          dutyFactor: "0% duty post-Brexit.",
          regulatoryComplexity: "UK FSA rules & Sudan Dye zero-tolerance check.",
          accessibility: "Established spice importers and food manufacturers."
        }
      }
    ],

    journeySteps: [
      {
        title: "Product Requirements",
        code: "01",
        description: "Specify purity (>99%), ASTA cleanliness grade, and steam sterilization parameters.",
        details: [
          "ASTA Cleanliness Specs: Maximum 1.0% extraneous matter",
          "Moisture Content: Under 10.0% for cumin/coriander, under 11.0% for pepper",
          "Aflatoxin / Ochratoxin A: Below EU/GCC statutory maximum limits",
          "Sudan Dye Testing: 100% NON-DETECTABLE for red chili & turmeric products",
          "Steam Sterilization: Recommended to guarantee Salmonella absent in 25g"
        ]
      },
      {
        title: "Documents",
        code: "02",
        description: "Spices Board registration and quality certificate requirements.",
        details: [
          "Spices Board RCMC License & Export Registration",
          "Mandatory Pre-Shipment Inspection Certificate from Spices Board",
          "Phytosanitary Certificate issued by Plant Quarantine Inspector",
          "Laboratory Test Report (Salmonella, Aflatoxin, Heavy Metals, Sudan Dye)",
          "Commercial Invoice, Packing List, & ICEGATE Shipping Bill"
        ]
      },
      {
        title: "Customs Clearance",
        code: "03",
        description: "Customs procedure for spice exports and Spices Board portal clearance.",
        details: [
          "Spices Board e-Clearance verification on ICEGATE portal",
          "Customs inspection of container liners and desiccant placement",
          "Verification of HS code (e.g. 0904 for Pepper, 0909 for Cumin/Coriander)",
          "Let Export Order (LEO) approval",
          "Bill of Lading issuance marked 'Freight Prepaid'"
        ]
      },
      {
        title: "Destination Regulations",
        code: "04",
        description: "ESMA / EU / FDA spice cleanliness and microbiological guidelines.",
        details: [
          "Salmonella: Strictly absent in 25g sample",
          "EtO (Ethylene Oxide): Non-detectable limit for EU/UK exports",
          "Pesticide Residue MRLs: Adherence to destination country statutory limits",
          "Labeling: Must state product grade, processing date, lot number, and origin",
          "Packaging: Food-grade vacuum sealed poly-bags or paper sacks"
        ]
      },
      {
        title: "Ports & Shipping",
        code: "05",
        description: "Maritime shipping options for spice consignments.",
        details: [
          "Origin Ports: Cochin Port (Kerala), Nhava Sheva (Mumbai), Mundra (Gujarat)",
          "Destination Ports: Jebel Ali (Dubai), Hamburg (Germany), New York (USA)",
          "Container Type: 20ft FCL Dry Van (~15-18 MT depending on bulk density)",
          "Transit Time: 3-5 Days (UAE), 18-22 Days (EU), 22-28 Days (USA)",
          "Desiccant bags: 2kg silica gel per corner mandatory"
        ]
      },
      {
        title: "Market Intelligence",
        code: "06",
        description: "Global spice market dynamics and pricing realizations.",
        details: [
          "Top Opportunity Market: UAE (Score: 88/100)",
          "High Margin Products: Tellicherry Extra Bold Pepper (TGSEB), 8mm Green Cardamom",
          "Average Realization: $4,500 per Metric Ton CIF Jebel Ali",
          "Buyer Demand: Whole clean spices for grinding, retail packaging, and food service"
        ]
      },
      {
        title: "Next Steps",
        code: "07",
        description: "Action plan for spice exporters to enter overseas markets.",
        details: [
          "Obtain IEC Code and Spices Board of India RCMC",
          "Conduct steam sterilization on whole spices to meet international micro-biology specs",
          "Get lab testing done at Spices Board accredited lab for pesticides and heavy metals",
          "Finalize PO under 30% advance & 70% against BL copy",
          "Book dry container with moisture barrier lining"
        ]
      }
    ],

    documents: [
      {
        id: "doc-s1",
        name: "Spices Board Mandatory Quality Certificate",
        category: "Product Specific Certificate",
        purpose: "Pre-shipment analysis report proving compliance with destination pesticide and micro-biology limits.",
        whenRequired: "Mandatory for spice exports from India.",
        officialReference: "Spices Board Quality Evaluation Laboratory",
        whyNeeded: "Customs and importing port authorities reject spice shipments lacking Spices Board clearance.",
        verificationUrl: "https://www.indianspices.com"
      },
      {
        id: "doc-s2",
        name: "Phytosanitary Certificate",
        category: "Plant Quarantine Document",
        purpose: "Certifies cargo is free from plant pests and quarantine weed seeds.",
        whenRequired: "Mandatory for all raw and whole spice shipments.",
        officialReference: "Plant Quarantine Station India",
        whyNeeded: "Required by destination border inspection posts.",
        verificationUrl: "https://pqms.cappqis.gov.in"
      }
    ],

    regulations: {
      destination: "United Arab Emirates",
      authority: "ESMA & Dubai Municipality",
      keyConsiderations: [
        "Salmonella Zero Tolerance: Must be absent in 25g",
        "Aflatoxin Limit: Total Aflatoxins max 10 µg/kg",
        "Foreign Matter: Less than 1.0%",
        "Labeling: Arabic and English mandatory text",
        "Packaging: Sealed food-grade barrier bags"
      ],
      complianceNotes: "Dubai Municipality inspects spice imports at Jebel Ali for pest contamination and labeling.",
      warning: "Regulatory requirements may change. Verify current rules with Spices Board / Dubai Municipality."
    },

    shipping: {
      originPorts: ["Cochin Port, Kerala", "Nhava Sheva, Mumbai", "Mundra Port, Gujarat"],
      destinationPorts: ["Jebel Ali, Dubai, UAE", "Hamburg, Germany", "Port of Newark, USA"],
      containerOptions: "20ft FCL Dry Van (~16 MT packed spices)",
      transitTime: "3 - 5 Days (UAE) / 18 - 22 Days (EU)",
      logisticsComplexity: "Medium",
      shippingTips: "Always use container moisture desiccants and food-grade Kraft paper lining."
    },

    trustLayer: [
      {
        recommendation: "Obtain Spices Board quality clearance prior to container stuffing to avoid port detention.",
        source: "Spices Board Quality Evaluation Guidelines",
        assumption: "Assumes spice batch undergoes steam sterilization before export packing.",
        verifyUrl: "https://www.indianspices.com"
      }
    ]
  },

  cotton: {
    id: "cotton",
    name: "Cotton",
    logoIcon: "🧶",
    logoBadgeUrl: "https://cdn-icons-png.flaticon.com/512/3309/3309960.png",
    hsCode: "5201.00 (Raw Cotton, Not Carded or Combed)",
    category: "Textiles & Raw Materials",
    epc: "Texprocil (Cotton Textiles Export Promotion Council)",
    epcUrl: "https://www.texprocil.org",
    description: "Shankar-6 Long Staple Raw Cotton Bales and Premium Organic Raw Cotton.",
    defaultOrigin: "India",
    defaultDestination: "Bangladesh",
    qualityGrades: ["Shankar-6 (Staple 28-29mm)", "MCU-5 (Staple 31mm)", "Organic Certified Bales", "Dholleras Low Staple"],
    packaging: "170kg high-density pressed cotton bales wrapped in PP cloth with steel strapping",
    marketScore: 90,
    topMarket: "Bangladesh",

    keyMarkets: [
      {
        country: "Bangladesh",
        code: "BD",
        flagCode: "bd",
        flagUrl: "https://flagcdn.com/w40/bd.png",
        opportunityScore: 90,
        demand: "Very High",
        logistics: "Low",
        competition: "High",
        indicativePrice: "$1,850 - $2,100 / MT",
        duty: "0%",
        summary: "World's largest buyer of Indian Shankar-6 raw cotton for its massive apparel spinning mills.",
        whyMarket: {
          demandFactor: "Massive garment export industry requires huge daily raw cotton yarn spinning capacity.",
          priceRealization: "High volume consistent demand for Shankar-6 staple cotton.",
          logisticsFactor: "Direct overland rail/road border transit via Petrapole-Benapole or short sea transit to Chittagong.",
          dutyFactor: "0% duty under SAFTA trade agreement.",
          regulatoryComplexity: "Simple phytosanitary check for boll weevil and moisture.",
          accessibility: "Direct long-term supply relationships with Dhaka spinning mills."
        }
      },
      {
        country: "Vietnam",
        code: "VN",
        flagCode: "vn",
        flagUrl: "https://flagcdn.com/w40/vn.png",
        opportunityScore: 86,
        demand: "Very High",
        logistics: "Medium",
        competition: "High",
        indicativePrice: "$1,900 - $2,150 / MT",
        duty: "0%",
        summary: "Rapidly expanding textile processing center in Southeast Asia.",
        whyMarket: {
          demandFactor: "High yarn spinning capacity feeding regional apparel manufacturing.",
          priceRealization: "Competitive market pricing with large bulk container contracts.",
          logisticsFactor: "8-12 days direct sea transit to Ho Chi Minh City / Haiphong.",
          dutyFactor: "0% duty under ASEAN-India FTA / MFN schedule.",
          regulatoryComplexity: "Moisture limit check (<8.5%) and staple length verification.",
          accessibility: "Established textile trading agents in Ho Chi Minh City."
        }
      },
      {
        country: "Turkey",
        code: "TR",
        flagCode: "tr",
        flagUrl: "https://flagcdn.com/w40/tr.png",
        opportunityScore: 81,
        demand: "High",
        logistics: "Medium",
        competition: "High",
        indicativePrice: "$1,950 - $2,200 / MT",
        duty: "0%",
        summary: "Major textile supplier to European high-street fashion brands.",
        whyMarket: {
          demandFactor: "High demand for long staple cotton for premium denim and home textiles.",
          priceRealization: "Good margins for contamination-free long staple grades.",
          logisticsFactor: "14-18 days sea transit to Mersin and Izmir.",
          dutyFactor: "0% duty.",
          regulatoryComplexity: "Standard plant quarantine and bale density check.",
          accessibility: "Direct connection with Turkish spinning mills in Adana and Bursa."
        }
      },
      {
        country: "China",
        code: "CN",
        flagCode: "cn",
        flagUrl: "https://flagcdn.com/w40/cn.png",
        opportunityScore: 78,
        demand: "High",
        logistics: "Medium",
        competition: "High",
        indicativePrice: "$1,900 - $2,180 / MT",
        duty: "1.0% (TRQ Rate)",
        summary: "Huge national state reserve and private mill raw material buyer.",
        whyMarket: {
          demandFactor: "Massive scale demand when Tariff Rate Quota (TRQ) import licenses are issued.",
          priceRealization: "High volume single-buyer contracts.",
          logisticsFactor: "12-16 days transit to Qingdao and Shanghai.",
          dutyFactor: "1.0% within TRQ quota.",
          regulatoryComplexity: "CIQ quality inspection at arrival port.",
          accessibility: "Large state trading enterprises and Qingdao cotton exchange."
        }
      }
    ],

    journeySteps: [
      {
        title: "Product Requirements",
        code: "01",
        description: "Specify staple length (28-29mm), micronaire (3.5-4.9), and trash content (<3.0%).",
        details: [
          "Staple Length: 28.5mm - 29.5mm for Shankar-6 grade",
          "Micronaire Value: 3.8 - 4.2 NCL (Fiber fineness indicator)",
          "Trash Content: Must be under 3.0% total after ginning",
          "Moisture Content: Must not exceed 8.0% - 8.5%",
          "Bale Weight & Density: Standard 170kg bales (+/- 5%) with steel bands"
        ]
      },
      {
        title: "Documents",
        code: "02",
        description: "Texprocil membership, HVI test certificate, and export documents.",
        details: [
          "Texprocil RCMC (Registration cum Membership Certificate)",
          "High Volume Instrument (HVI) Cotton Quality Test Certificate (CCI or CIRCOT)",
          "Phytosanitary Certificate issued by Plant Quarantine Officer",
          "Fumigation Certificate (Container/Bale fumigation report)",
          "Commercial Invoice, Packing List showing bale numbers & weights, Shipping Bill"
        ]
      },
      {
        title: "Customs Clearance",
        code: "03",
        description: "Indian port customs Let Export Order and ICEGATE filing.",
        details: [
          "Filing Shipping Bill with HS Code 5201.00",
          "Fumigation inspection by authorized Plant Quarantine agency",
          "Customs Let Export Order (LEO) clearance",
          "Bill of Lading issuance marked with total bale count & gross/net weight",
          "Bank Realization Certificate (BRC) tracking setup"
        ]
      },
      {
        title: "Destination Regulations",
        code: "04",
        description: "Bangladesh Plant Quarantine and Benapole/Chittagong port entry rules.",
        details: [
          "Bangladesh Plant Quarantine Certificate verification at border",
          "Moisture limit verification (<8.5%) to prevent internal bale heating",
          "Zero live insect pests (Pink Bollworm zero tolerance)",
          "SAFTA Certificate of Origin verification for 0% duty benefit",
          "Consignment weight verification at port weighbridge"
        ]
      },
      {
        title: "Ports & Shipping",
        code: "05",
        description: "Overland and maritime transport options to Bangladesh.",
        details: [
          "Origin Ports: Mundra Port, Pipavav (Gujarat), or Petrapole Land Customs Station",
          "Destination Ports: Chittagong Port (Sea) or Benapole LCS (Land)",
          "Container Capacity: 40ft High Cube FCL fits approx 100 - 105 pressed bales (~17-18 MT)",
          "Transit Time: 2-4 Days (Land Border Petrapole) / 5-7 Days (Sea to Chittagong)",
          "Logistics Advantage: Direct land border proximity lowers freight costs drastically"
        ]
      },
      {
        title: "Market Intelligence",
        code: "06",
        description: "Bangladesh spinning mill demand and cotton pricing benchmarks.",
        details: [
          "Top Opportunity Market: Bangladesh (Score: 90/100)",
          "Key Buyer Types: Spinning Mills in Narayanganj, Gazipur, & Chittagong",
          "Average Realization: $1,980 per Metric Ton (CNF Chittagong)",
          "Competitive Advantage: Proximity, staple length consistency, short lead times"
        ]
      },
      {
        title: "Next Steps",
        code: "07",
        description: "Action plan for cotton exporters to close spinning mill deals.",
        details: [
          "Obtain IEC Code and Texprocil RCMC Registration",
          "Get CIRCOT / HVI lab test report for staple length and micronaire parameters",
          "Execute sales contract under ICA (International Cotton Association) standard rules",
          "Secure payment under Irrevocable Letter of Credit (LC) at Sight",
          "Book 40ft HC containers from Mundra or dispatch covered trucks to Petrapole border"
        ]
      }
    ],

    documents: [
      {
        id: "doc-ct1",
        name: "HVI Cotton Test Certificate (CIRCOT / CCI)",
        category: "Quality Testing Document",
        purpose: "Official High Volume Instrument test report certifying staple length, micronaire, strength, and trash %.",
        whenRequired: "Mandatory for commercial cotton bale sales to overseas spinning mills.",
        officialReference: "Central Institute for Research on Cotton Technology (CIRCOT)",
        whyNeeded: "Spinning mill machinery requires exact fiber parameter verification before processing yarn.",
        verificationUrl: "https://circot.icar.gov.in"
      },
      {
        id: "doc-ct2",
        name: "SAFTA Certificate of Origin",
        category: "Preferential Trade Document",
        purpose: "Certifies origin within South Asia to claim 0% preferential import tariff under SAFTA.",
        whenRequired: "Mandatory for duty-free entry into Bangladesh.",
        officialReference: "EIC / Texprocil CoO Portal",
        whyNeeded: "Saves 5% - 10% standard customs duty at Benapole/Chittagong border.",
        verificationUrl: "https://coo.dgft.gov.in"
      }
    ],

    regulations: {
      destination: "Bangladesh",
      authority: "Ministry of Agriculture Bangladesh & Chittagong Port Authority",
      keyConsiderations: [
        "Phytosanitary: Freedom from Pink Bollworm and cotton diseases",
        "Moisture Check: Strictly under 8.5% at port entry",
        "Bale Weight: Standard 170kg bales with uniform density",
        "SAFTA Compliance: Valid origin certificate matching invoice",
        "Fumigation: Mandatory methyl bromide treatment certificate"
      ],
      complianceNotes: "Bangladesh customs conducts mandatory weighbridge and moisture checks on incoming cotton trucks at Benapole.",
      warning: "Regulatory requirements may change. Verify current SAFTA rules with Texprocil / Bangladesh customs."
    },

    shipping: {
      originPorts: ["Petrapole Land Border, West Bengal", "Mundra Port, Gujarat", "Kolkata Port"],
      destinationPorts: ["Benapole Land Customs Station, Bangladesh", "Chittagong Port, Bangladesh"],
      containerOptions: "40ft High Cube Container (~100 Bales / 17.5 MT) or Covered 20-Ton Trucks",
      transitTime: "2 - 4 Days (Land border) / 5 - 7 Days (Sea)",
      logisticsComplexity: "Low",
      shippingTips: "Land border trucking via Petrapole provides the fastest turnaround for Bangladeshi spinning mills."
    },

    trustLayer: [
      {
        recommendation: "Utilize Petrapole land border for fast delivery of Shankar-6 bales to Dhaka spinning mills.",
        source: "Texprocil Trade Data & SAFTA Tariff Agreement",
        assumption: "Assumes bales are HVI tested with moisture <8.5% and SAFTA origin certificate attached.",
        verifyUrl: "https://www.texprocil.org"
      }
    ]
  },

  handicrafts: {
    id: "handicrafts",
    name: "Handicrafts",
    logoIcon: "🎨",
    logoBadgeUrl: "https://cdn-icons-png.flaticon.com/512/2643/2643522.png",
    hsCode: "9703.00 (Handcrafted Wooden & Metal Artware)",
    category: "Consumer Goods & Artisanal",
    epc: "EPCH (Export Promotion Council for Handicrafts)",
    epcUrl: "https://epch.in",
    description: "Handcrafted Brassware, Wooden Carvings, Artisanal Textiles, & Decorative Home Accents.",
    defaultOrigin: "India",
    defaultDestination: "USA",
    qualityGrades: ["Brass Artware (Moradabad)", "Sheesham Wood Carvings (Saharanpur)", "Hand-printed Textiles (Jaipur)", "Marble Inlay"],
    packaging: "Individual foam-cushioned gift boxes packed inside heavy corrugated master cartons",
    marketScore: 87,
    topMarket: "USA",

    keyMarkets: [
      {
        country: "USA",
        code: "US",
        flagCode: "us",
        flagUrl: "https://flagcdn.com/w40/us.png",
        opportunityScore: 87,
        demand: "High",
        logistics: "Medium",
        competition: "Medium",
        indicativePrice: "$8,000 - $18,000 / Container",
        duty: "0% - 3.2%",
        summary: "World's largest retail market for Indian artisanal home decor, furniture, and giftware.",
        whyMarket: {
          demandFactor: "Enormous retail appetite for unique, sustainable, and handcrafted artisan home furnishings.",
          priceRealization: "Highest retail markup potential for boutique home decor brands.",
          logisticsFactor: "Direct container shipping to US East Coast (New York / Savannah) and West Coast (LA).",
          dutyFactor: "Low 0% - 3.2% duty rates under GSP / MFN schedules.",
          regulatoryComplexity: "Lacey Act compliance for wooden items (timber sourcing proof) & CPSC safety rules.",
          accessibility: "Major buyer attendance at IHGF Delhi Fair and Atlanta / High Point Home Markets."
        }
      },
      {
        country: "UK",
        code: "GB",
        flagCode: "gb",
        flagUrl: "https://flagcdn.com/w40/gb.png",
        opportunityScore: 83,
        demand: "High",
        logistics: "Medium",
        competition: "Medium",
        indicativePrice: "$7,500 - $16,000 / Container",
        duty: "0%",
        summary: "Strong tradition of Indian artisanal craft appreciation and boutique interior retail.",
        whyMarket: {
          demandFactor: "High demand for eco-friendly handcrafted furniture and brass decorative items.",
          priceRealization: "Excellent margins in boutique furniture stores and department stores (Selfridges, John Lewis).",
          logisticsFactor: "18-22 days shipping to UK ports.",
          dutyFactor: "0% duty under UK Global Tariff for many artisanal craft codes.",
          regulatoryComplexity: "UK Timber Regulation (UKTR) & lead-free coating compliance.",
          accessibility: "Strong buyer presence in London design fairs."
        }
      },
      {
        country: "Germany",
        code: "DE",
        flagCode: "de",
        flagUrl: "https://flagcdn.com/w40/de.png",
        opportunityScore: 80,
        demand: "Medium-High",
        logistics: "Medium",
        competition: "High",
        indicativePrice: "$7,200 - $15,000 / Container",
        duty: "0%",
        summary: "Focus on sustainable certified wooden handicrafts, fair-trade, and minimalist home accents.",
        whyMarket: {
          demandFactor: "High demand for FSC-certified wooden crafts and fair-trade handmade textiles.",
          priceRealization: "Top European pricing for eco-certified sustainable artisan goods.",
          logisticsFactor: "18-22 days transit to Hamburg.",
          dutyFactor: "0% duty under EU MFN tariff.",
          regulatoryComplexity: "EU Timber Regulation (EUTR) & REACH chemical compliance for paints.",
          accessibility: "Frankfurt Ambiente trade fair is the premier European buyer event."
        }
      },
      {
        country: "France",
        code: "FR",
        flagCode: "fr",
        flagUrl: "https://flagcdn.com/w40/fr.png",
        opportunityScore: 77,
        demand: "Medium-High",
        logistics: "Medium",
        competition: "Medium",
        indicativePrice: "$7,000 - $14,500 / Container",
        duty: "0%",
        summary: "High-end interior design market seeking luxury brass artware and textile crafts.",
        whyMarket: {
          demandFactor: "Strong design appreciation for unique handcrafted luxury accents.",
          priceRealization: "High price per unit in Parisian design boutiques.",
          logisticsFactor: "Direct shipping to Le Havre and Marseille.",
          dutyFactor: "0% duty.",
          regulatoryComplexity: "EU chemical safety standards for dyes and metal plating.",
          accessibility: "Maison & Objet Paris fair attracts major French craft buyers."
        }
      }
    ],

    journeySteps: [
      {
        title: "Product Requirements",
        code: "01",
        description: "Specify material compliance, lead-free finish, and FSC wood certification.",
        details: [
          "Wood Sourcing: FSC (Forest Stewardship Council) certified Sheesham / Mango wood",
          "Metal Plating: Lead-free, Cadmium-free protective lacquer coating on brassware",
          "Lacey Act Declaration: Full botanical species name & harvest location for USA wood exports",
          "Drop Test Compliance: ISTA 1A packaging standard for fragile ceramic/glass/metal items",
          "Custom Barcoding & Labeling: Buyer UPCA / EAN barcode stickers on individual item boxes"
        ]
      },
      {
        title: "Documents",
        code: "02",
        description: "EPCH registration, VRIKSH timber certificate, and export docs.",
        details: [
          "EPCH (Export Promotion Council for Handicrafts) RCMC Membership",
          "VRIKSH Timber Legality Assessment Certificate (Mandatory for CITES wood species like Dalbergia sissoo)",
          "US Lacey Act Plant & Plant Product Declaration Form (for USA export)",
          "Commercial Invoice & Itemized Packing List specifying piece counts & CBM",
          "Shipping Bill filed under RoDTEP export incentive scheme"
        ]
      },
      {
        title: "Customs Clearance",
        code: "03",
        description: "Customs clearance procedure and EPCH NOC verification.",
        details: [
          "ICEGATE filing under HS Code 9703.00 / 4420.10 / 8306.29",
          "EPCH VRIKSH timber certificate verification on customs portal",
          "Physical container inspection to verify piece count and packaging integrity",
          "Let Export Order (LEO) generation",
          "Bill of Lading issuance with CBM volume & container seal numbers"
        ]
      },
      {
        title: "Destination Regulations",
        code: "04",
        description: "US CPSC safety rules, Lacey Act, and EU EUTR compliance.",
        details: [
          "US CPSC (Consumer Product Safety Commission) lead paint limits (<90 ppm)",
          "US Lacey Act due diligence for legal timber harvesting",
          "EU EUTR / UKTR timber legality verification",
          "REACH chemical compliance for textile dyes & metal lacquers",
          "Proposition 65 warning labels for California state deliveries if required"
        ]
      },
      {
        title: "Ports & Shipping",
        code: "05",
        description: "Ocean container shipping for high-volume handicraft consignments.",
        details: [
          "Origin Ports: Nhava Sheva (Mumbai), Mundra Port, or ICD Tughlakabad (Delhi NCR)",
          "Destination Ports: Port of Los Angeles, New York/New Jersey, Hamburg, London Gateway",
          "Container Specs: 40ft High Cube Dry Container (~55-65 CBM payload volume)",
          "Transit Time: 22 - 28 Days (USA East/West Coast) / 18 - 22 Days (Europe)",
          "Packaging: Double-wall corrugated cartons with corner protectors & bubble wrapping"
        ]
      },
      {
        title: "Market Intelligence",
        code: "06",
        description: "US market insights, buyer fairs, and pricing realization.",
        details: [
          "Top Opportunity Market: United States (Score: 87/100)",
          "Key Buyer Events: IHGF Delhi Fair, High Point Furniture Market, Atlanta Gift Fair",
          "Average Realization: $12,000 - $18,000 FOB revenue per 40ft HC container",
          "Top Selling Categories: Hand-carved wooden side tables, brass candle holders, artisan poufs"
        ]
      },
      {
        title: "Next Steps",
        code: "07",
        description: "Action plan for handicraft exporters to enter US & EU retail chains.",
        details: [
          "Register with EPCH and obtain VRIKSH Timber Legality Certification",
          "Exhibit at IHGF Delhi Fair or send sample catalogs to US home decor buyers",
          "Conduct ISTA package drop tests to ensure zero shipping breakage",
          "Finalize purchase order terms under 30% deposit & 70% against BL",
          "Book 40ft HC container from ICD Tughlakabad or Nhava Sheva"
        ]
      }
    ],

    documents: [
      {
        id: "doc-h1",
        name: "VRIKSH Timber Legality Certificate",
        category: "Environmental & CITES Clearance",
        purpose: "Official EPCH timber legality verification certifying wood was legally harvested from sustainable plantations.",
        whenRequired: "Mandatory when exporting wooden handicrafts made of Sheesham / Rosewood.",
        officialReference: "EPCH VRIKSH Standards / CITES Convention",
        whyNeeded: "Customs in US and EU confiscate uncertified Indian wooden furniture under CITES regulations.",
        verificationUrl: "https://epch.in"
      },
      {
        id: "doc-h2",
        name: "US Lacey Act Declaration",
        category: "US Statutory Document",
        purpose: "Declares scientific botanical species name, country of harvest, and quantity of wood.",
        whenRequired: "Mandatory for all plant/wood product imports entering the USA.",
        officialReference: "USDA Animal and Plant Health Inspection Service (APHIS)",
        whyNeeded: "US Customs and Border Protection fines importers who fail to file Lacey Act declarations.",
        verificationUrl: "https://www.aphis.usda.gov"
      }
    ],

    regulations: {
      destination: "United States",
      authority: "US CPSC & USDA APHIS",
      keyConsiderations: [
        "Lead Paint Limit: Maximum 90 ppm lead content in surface coatings",
        "Lacey Act: Strict illegal logging tracking for wooden items",
        "Flammability: CPSC 16 CFR 1610 standards for textile crafts",
        "Packaging: ISTA drop test compliance to withstand ocean transit",
        "Labeling: Country of Origin 'Made in India' permanently marked"
      ],
      complianceNotes: "US importers demand VRIKSH certificates and lead-free test reports before opening LCs.",
      warning: "Regulatory requirements may change. Verify current USDA/CPSC guidelines with EPCH."
    },

    shipping: {
      originPorts: ["Nhava Sheva, Mumbai", "ICD Tughlakabad, Delhi NCR", "Mundra Port"],
      destinationPorts: ["Port of Los Angeles, USA", "Port of NY/NJ, USA", "Hamburg, Germany"],
      containerOptions: "40ft High Cube Container (~60 CBM packed artware)",
      transitTime: "22 - 28 Days (USA)",
      logisticsComplexity: "Medium",
      shippingTips: "Maximizing cubic meter (CBM) space utilization is key to profitability in handicraft exports."
    },

    trustLayer: [
      {
        recommendation: "Obtain EPCH VRIKSH certificate for Sheesham wood items prior to shipping to USA.",
        source: "EPCH VRIKSH Timber Legality Portal & USDA APHIS Guidelines",
        assumption: "Assumes wooden items are legally harvested and surface coatings are lead-free (<90 ppm).",
        verifyUrl: "https://epch.in"
      }
    ]
  },

  pharma: {
    id: "pharma",
    name: "Pharmaceuticals",
    logoIcon: "💊",
    logoBadgeUrl: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
    hsCode: "3004.90 (Finished Formulations & Generic Medicines)",
    category: "Healthcare & Life Sciences",
    epc: "Pharmexcil (Pharmaceuticals Export Promotion Council)",
    epcUrl: "https://pharmexcil.com",
    description: "WHO-GMP Certified Generic Formulations, Active Pharmaceutical Ingredients (APIs), & Vaccines.",
    defaultOrigin: "India",
    defaultDestination: "USA",
    qualityGrades: ["WHO-GMP Grade Tablets", "US FDA Approved Abbreviated New Drug Applications (ANDA)", "EU-GMP Certified Injections"],
    packaging: "Cold-chain temperature-controlled insulated shippers / Blister foil packs in master cartons",
    marketScore: 92,
    topMarket: "USA",

    keyMarkets: [
      {
        country: "USA",
        code: "US",
        flagCode: "us",
        flagUrl: "https://flagcdn.com/w40/us.png",
        opportunityScore: 92,
        demand: "Very High",
        logistics: "High",
        competition: "High",
        indicativePrice: "High Realization (Contract specific)",
        duty: "0%",
        summary: "World's largest market for Indian generic pharmaceutical formulations and ANDA products.",
        whyMarket: {
          demandFactor: "Enormous demand for cost-effective US FDA approved generic prescription medications.",
          priceRealization: "Highest overall market value realization for US FDA registered manufacturing plants.",
          logisticsFactor: "Air freight for high-value formulations or temperature-monitored reefer containers.",
          dutyFactor: "0% duty under WTO Pharmaceutical Tariff Elimination Agreement.",
          regulatoryComplexity: "Extremely high — US FDA ANDA approval, cGMP compliance, and eCTD filings required.",
          accessibility: "Established relationships with US wholesale distributors (AmerisourceBergen, McKesson, Cardinal)."
        }
      },
      {
        country: "Germany",
        code: "DE",
        flagCode: "de",
        flagUrl: "https://flagcdn.com/w40/de.png",
        opportunityScore: 86,
        demand: "High",
        logistics: "Medium",
        competition: "High",
        indicativePrice: "High Realization",
        duty: "0%",
        summary: "Europe's leading generic drug market requiring EU-GMP plant certification.",
        whyMarket: {
          demandFactor: "High statutory health insurance demand for generic pharmaceuticals.",
          priceRealization: "Strong pricing for EU-GMP certified oral solids and sterile injectables.",
          logisticsFactor: "Direct air freight to Frankfurt Pharma Hub (10-12 hours) or temperature-controlled sea freight.",
          dutyFactor: "0% duty.",
          regulatoryComplexity: "EU-GMP inspection, BfArM registration, and Falsified Medicines Directive (FMD) serialization.",
          accessibility: "Direct supply to European generic pharmaceutical brand owners."
        }
      },
      {
        country: "UK",
        code: "GB",
        flagCode: "gb",
        flagUrl: "https://flagcdn.com/w40/gb.png",
        opportunityScore: 84,
        demand: "High",
        logistics: "Medium",
        competition: "Medium",
        indicativePrice: "High Realization",
        duty: "0%",
        summary: "NHS prescription demand for high-quality Indian generic medications.",
        whyMarket: {
          demandFactor: "National Health Service (NHS) relies heavily on cost-effective Indian generics.",
          priceRealization: "Consistent tender contracts with UK NHS supply chains.",
          logisticsFactor: "Direct air cargo to London Heathrow or temperature-controlled sea freight.",
          dutyFactor: "0% duty.",
          regulatoryComplexity: "UK MHRA approval and serialisation compliance.",
          accessibility: "Established UK pharmaceutical importers and parallel distributors."
        }
      },
      {
        country: "UAE",
        code: "AE",
        flagCode: "ae",
        flagUrl: "https://flagcdn.com/w40/ae.png",
        opportunityScore: 81,
        demand: "Medium-High",
        logistics: "Low",
        competition: "Medium",
        indicativePrice: "Medium-High Realization",
        duty: "0% (CEPA)",
        summary: "Fast-track registration hub for GCC pharmaceutical distribution.",
        whyMarket: {
          demandFactor: "High regional healthcare demand and regional re-export to MENA countries.",
          priceRealization: "Fast product approval timeline under UAE MOHAP fast-track framework.",
          logisticsFactor: "3-5 days sea freight or 4 hours direct air cargo to Dubai.",
          dutyFactor: "0% duty under CEPA.",
          regulatoryComplexity: "UAE MOHAP product registration and WHO-GMP audit.",
          accessibility: "Dubai Healthcare City and regional pharma distribution hubs."
        }
      }
    ],

    journeySteps: [
      {
        title: "Product Requirements",
        code: "01",
        description: "Specify pharmacopeial grade (USP / BP / IP), stability studies, and cGMP certification.",
        details: [
          "Manufacturing Plant Certification: US FDA / EU-GMP / WHO-GMP certified facility",
          "Pharmacopeial Standard: Adherence to USP (US Pharmacopeia) or BP (British Pharmacopoeia)",
          "Stability Testing: Zone IVb accelerated & long-term stability data (30°C / 75% RH)",
          "Batch Analytical Testing: Certificate of Analysis (CoA) for assay, dissolution, & impurities",
          "Serialization: GS1 DataMatrix 2D barcoding for track and trace compliance"
        ]
      },
      {
        title: "Documents",
        code: "02",
        description: "Pharmexcil RCMC, Certificate of Pharmaceutical Product (CoPP), and regulatory filings.",
        details: [
          "Pharmexcil RCMC (Registration cum Membership Certificate)",
          "Certificate of Pharmaceutical Product (CoPP) issued by CDSCO / State Licensing Authority",
          "Drug Master File (DMF) / Abbreviated New Drug Application (ANDA) reference",
          "Certificate of Analysis (CoA) signed by Qualified Person / QA Manager",
          "Commercial Invoice, Packing List showing batch numbers, manufacturing & expiry dates"
        ]
      },
      {
        title: "Customs Clearance",
        code: "03",
        description: "CDSCO ADC (Assistant Drug Controller) NOC and customs export clearance.",
        details: [
          "Filing Shipping Bill with CDSCO ADC NOC endorsement on ICEGATE",
          "Verification of Drug Export License (Form 25 / Form 28)",
          "Customs inspection of temperature-logger devices inside reefer containers",
          "Let Export Order (LEO) generation",
          "Airway Bill (Air Cargo) or Bill of Lading issuance with temperature logs"
        ]
      },
      {
        title: "Destination Regulations",
        code: "04",
        description: "US FDA FSMA / EU MHRA drug import verification and serialization.",
        details: [
          "US FDA Drug Registration and Listing (eDRLS filing)",
          "DSCSA (Drug Supply Chain Security Act) electronic interoperable tracking",
          "EU Falsified Medicines Directive (FMD) 2D DataMatrix verification",
          "Temperature logs verification (+15°C to +25°C or +2°C to +8°C cold chain)",
          "Package insert leaflet compliance in destination language"
        ]
      },
      {
        title: "Ports & Shipping",
        code: "05",
        description: "Air freight and cold-chain reefer shipping for pharmaceutical products.",
        details: [
          "Origin Cargo Hubs: Mumbai Airport (BOM), Hyderabad Airport (HYD), Delhi Airport (DEL)",
          "Destination Cargo Hubs: Frankfurt Airport (FRA), London Heathrow (LHR), Chicago O'Hare (ORD)",
          "Sea Transport Option: 20ft Reefer Container with active temperature control (+15°C to +25°C)",
          "Transit Time: 24 - 48 Hours (Air Cargo) / 18 - 24 Days (Reefer Sea Freight)",
          "Logistics Requirement: USB Data Logger placement inside every pallet"
        ]
      },
      {
        title: "Market Intelligence",
        code: "06",
        description: "US pharma market opportunity, ANDA filings, and distribution channels.",
        details: [
          "Top Opportunity Market: United States (Score: 92/100)",
          "Key Buyer Channels: US Generic Brand Owners, Wholesale Distributors, Hospital Networks",
          "Market Advantage: India supplies >40% of generic formulations consumed in the USA",
          "Regulatory Requirement: Valid ANDA approval or contract manufacturing authorization"
        ]
      },
      {
        title: "Next Steps",
        code: "07",
        description: "Action plan for pharma exporters to execute overseas drug supply.",
        details: [
          "Register with Pharmexcil and secure CDSCO Drug Manufacturing License",
          "File eCTD dossier / ANDA with target country health authority (US FDA / EMA / MHRA)",
          "Implement GS1 2D DataMatrix serialization on primary & secondary packaging",
          "Execute Supply Agreement with validated GDP (Good Distribution Practice) logistics partner",
          "Book GDP-certified cold-chain air cargo from Mumbai or Hyderabad Airport"
        ]
      }
    ],

    documents: [
      {
        id: "doc-p1",
        name: "Certificate of Pharmaceutical Product (CoPP)",
        category: "Regulatory Clearance",
        purpose: "WHO-format certificate issued by CDSCO certifying facility GMP and product authorization.",
        whenRequired: "Mandatory for registration and export of pharmaceutical formulations worldwide.",
        officialReference: "Central Drugs Standard Control Organization (CDSCO) / WHO",
        whyNeeded: "Overseas health authorities require CoPP to verify manufacturing quality and drug safety.",
        verificationUrl: "https://cdsco.gov.in"
      },
      {
        id: "doc-p2",
        name: "Pharmexcil RCMC Certificate",
        category: "Export Registration",
        purpose: "Official registration certificate issued by Pharmaceuticals Export Promotion Council of India.",
        whenRequired: "Mandatory for all pharmaceutical exports from India.",
        officialReference: "Pharmexcil / Ministry of Commerce",
        whyNeeded: "Customs requires Pharmexcil registration for filing pharmaceutical shipping bills.",
        verificationUrl: "https://pharmexcil.com"
      }
    ],

    regulations: {
      destination: "United States",
      authority: "US Food and Drug Administration (FDA)",
      keyConsiderations: [
        "ANDA Approval: Valid Abbreviated New Drug Application approval required",
        "cGMP Compliance: Current Good Manufacturing Practice certification",
        "DSCSA Serialization: Electronic 2D DataMatrix serial number on every unit",
        "Temperature Monitoring: Continuous data logger logs during transit",
        "Labeling: US FDA approved prescribing information and container labels"
      ],
      complianceNotes: "US FDA conducts unannounced physical inspections of overseas manufacturing plants.",
      warning: "Regulatory requirements may change. Verify current rules with CDSCO / US FDA before shipping."
    },

    shipping: {
      originPorts: ["Mumbai Airport Cargo (BOM)", "Hyderabad Airport (HYD)", "Nhava Sheva (Reefer)"],
      destinationPorts: ["Chicago O'Hare (ORD)", "Frankfurt Airport (FRA)", "London Heathrow (LHR)"],
      containerOptions: "Air Cargo Temp-Controlled Containers (Envirotainer) or 20ft Sea Reefer",
      transitTime: "1 - 2 Days (Air Freight) / 18 - 22 Days (Reefer Sea)",
      logisticsComplexity: "High",
      shippingTips: "Always use GDP certified air logistics providers with real-time GPS and temperature tracking."
    },

    trustLayer: [
      {
        recommendation: "Ensure cGMP and CDSCO CoPP certificates are current prior to submitting ANDA dossiers.",
        source: "CDSCO Export Portal & US FDA Orange Book",
        assumption: "Assumes drug batch meets USP specifications and stability testing parameters.",
        verifyUrl: "https://cdsco.gov.in"
      }
    ]
  }
};

window.OFFICIAL_SOURCES_LIST = [
  {
    name: "DGFT (Directorate General of Foreign Trade)",
    category: "Government Policy & Licensing",
    description: "Official portal for IEC registration, Foreign Trade Policy notifications, Export Schemes (RoDTEP/DBK), and trade statistics.",
    url: "https://www.dgft.gov.in",
    badge: "Official Govt Portal"
  },
  {
    name: "Trade Connect e-Platform",
    category: "Exporter Guidance",
    description: "Ministry of Commerce initiative connecting Indian exporters with overseas trade queries, market access, and embassy trade desks.",
    url: "https://trade.gov.in",
    badge: "Govt Initiative"
  },
  {
    name: "ICEGATE (Indian Customs EDI Gateway)",
    category: "Customs Clearance & E-Filing",
    description: "National customs portal for filing Shipping Bills, e-SANCHIT document upload, Duty Drawback tracking, and LEO approvals.",
    url: "https://www.icegate.gov.in",
    badge: "Customs Authority"
  },
  {
    name: "ITC Trade Map",
    category: "Market Intelligence & Data",
    description: "International Trade Centre database providing global export statistics, country market shares, tariffs, and buyer indicators.",
    url: "https://www.trademap.org",
    badge: "Global Trade Data"
  },
  {
    name: "APEDA (Agricultural Products Authority)",
    category: "Export Promotion Council",
    description: "Registration and trade facilitation for rice, fresh fruits, vegetables, processed foods, and organic agricultural products.",
    url: "https://apeda.gov.in",
    badge: "Agri Export Authority"
  },
  {
    name: "Spices Board of India",
    category: "Export Promotion Council",
    description: "Regulatory body for Indian spice exports, quality certification, EtO testing, e-NOC clearance, and international spice trade promotion.",
    url: "https://www.indianspices.com",
    badge: "Spice Authority"
  },
  {
    name: "Coffee Board of India",
    category: "Export Promotion Council",
    description: "Issuing authority for ICO Certificates of Origin, coffee export permits, grade standards, and technical assistance.",
    url: "https://www.indiacoffee.org",
    badge: "Coffee Authority"
  },
  {
    name: "Tea Board of India",
    category: "Export Promotion Council",
    description: "Regulatory council for Indian tea exports, Darjeeling GI tags, export licenses, and tea auction monitoring.",
    url: "https://www.teaboard.gov.in",
    badge: "Tea Authority"
  },
  {
    name: "Pharmexcil (Pharmaceuticals EPC)",
    category: "Export Promotion Council",
    description: "Official council for export facilitation of generic drugs, APIs, formulations, and CDSCO export clearance guidance.",
    url: "https://pharmexcil.com",
    badge: "Pharma Authority"
  },
  {
    name: "Texprocil (Cotton Textiles EPC)",
    category: "Export Promotion Council",
    description: "Export promotion council for raw cotton, yarn, woven fabrics, and cotton textile exports.",
    url: "https://www.texprocil.org",
    badge: "Textiles Authority"
  },
  {
    name: "EPCH (Handicrafts EPC)",
    category: "Export Promotion Council",
    description: "Council for handcrafted artware, wooden items, VRIKSH timber legality certification, and IHGF international trade fairs.",
    url: "https://epch.in",
    badge: "Handicrafts Authority"
  },
  {
    name: "EU Access2Markets Portal",
    category: "Destination Market Portal",
    description: "Official European Commission database for tariffs, MRL rules, import procedures, and product safety requirements.",
    url: "https://trade.ec.europa.eu/access-to-markets",
    badge: "EU Official Source"
  }
];

window.AI_SUGGESTED_QUESTIONS = [
  "What documents do I need?",
  "What are the customs requirements?",
  "What regulations apply?",
  "Which port should I consider?",
  "What should I do next?",
  "Which country is a better market?"
];
