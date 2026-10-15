/* --- AKANKSHA KOCHREKAR PROJECT REPOSITORY --- */

export const FLAGSHIP_PROJECTS = [
  {
    slug: "airlert",
    title: "AIRLERT",
    tagline: "Air-Quality Sensing Power Bank & Digital Ecosystem for Gig Delivery Riders",
    client: "frog Design (Product & UX Design Internship)",
    timeline: "20 Weeks • Individual Work",
    date: "2025",
    category: "Consumer Hardware & IoT",
    badge: "FROG DESIGN / HARDWARE + UX",
    thumbId: "airlert-thumb",
    heroId: "airlert-hero",
    heroAspectClass: "aspect-[16/9]",
    overview: "A dual physical-digital intervention designed to protect and empower millions of gig delivery riders navigating hazardous urban air in India. Integrating an air-monitoring power bank with the delivery rider app workflow.",
    heroMetrics: [
      { label: "Sensors Integrated", val: "PM2.5 + MQ9 (CO) + MQ135" },
      { label: "Power System", val: "10W Solar + Li-ion Cells" },
      { label: "Microcontroller", val: "ESP32 NodeMCU" },
      { label: "Research Base", val: "7 Overt & Covert Methods" }
    ],
    specs: {
      material: "High-impact PC casing with shock-absorbing silicone overmolding & durable gear clip",
      finish: "Space Grey, Obsidian Black & Off-White lifestyle aesthetics with high-visibility accent",
      tooling: "Dual-port Type-C, retractable charging cable, integrated solar panel backup, subtle LED status indicator",
      software: "SolidWorks 3D CAD, KeyShot Studio, MIT App Inventor, Arduino IDE, Tinkercad Simulation"
    },
    metaHeader: {
      timeline: "20 Weeks (Jan – Jun 2025)",
      client: "frog Design Internship / Zomato Ecosystem Study",
      focus: "Hardware Prototyping, CMF, Sensor Integration & Mobile UX"
    },
    deckBlocks: [
      {
        type: "text_top_image_bottom",
        tag: "01 // THE CONTEXT & PROBLEM",
        title: "The Invisible Hazard: 10+ Hours Daily in Polluted Traffic",
        desc: "Millions of gig delivery riders spend upwards of 10 hours every single day navigating high-density traffic corridors with AQI often exceeding 200–400. Toxic air makes riders sick; sickness demands medical expenditure; earning that money requires riding longer in the same toxic air—a vicious loop with zero real-time visibility.",
        imageId: "airlert-context",
        caption: "Field context: Delivery riders navigating severe air pollution across urban delivery routes",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_left_image_right",
        tag: "02 // IMMERSIVE FIELD RESEARCH",
        title: "Covert & Overt Research Across 7 Methodologies",
        desc: "To capture unfiltered rider habits, I used a hybrid research strategy: ordering as a regular customer, blending into rider hangouts, riding parallel along actual delivery runs, mapping rider gear, tracking order bottlenecks, and conducting in-depth field interviews with riders across Bangalore and Mumbai.",
        imageId: "airlert-research-methods",
        caption: "7 field research methods deployed during the frog Design engagement",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_right_image_left",
        tag: "03 // PARAPHERNALIA MAPPING",
        title: "Why the Power Bank Became the Anchor Solution",
        desc: "Observing rider gear before, during, and after shifts revealed that power banks are the non-negotiable lifeline for every gig worker—their phone is their map, dispatch manager, and wallet. Embedding calibrated air sensors directly into their daily power bank made continuous environmental tracking effortless with zero added baggage.",
        imageId: "airlert-paraphernalia",
        caption: "Paraphernalia mapping: identifying touchpoints and why power banks emerged as the primary vehicle",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_top_image_bottom",
        tag: "04 // HARDWARE ARCHITECTURE & INTERNALS",
        title: "Figuring out the Electronics & Sensor Package",
        desc: "The internal architecture consolidates an ESP32 NodeMCU, PMS5003 laser scattering particulate sensor, MQ-9 carbon monoxide sensor, and MQ-135 air quality sensor alongside a JX-887Y power bank circuit, AMS1117 regulator, TP4056 solar charge controller, and auxiliary 10W monocrystalline solar cell.",
        imageId: "airlert-internals",
        caption: "Wiring schematic and internal component packaging for the working prototype",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_left_image_right",
        tag: "05 // BACKEND TESTING & TELEMETRY",
        title: "Bench Calibration & MIT App Inventor Prototyping",
        desc: "Sensors were tested against controlled smoke and aerosol exposures to observe real-time curves on Serial Monitor. Using MIT App Inventor, live AQI data was streamed via Bluetooth/Wi-Fi to a functional mobile prototype, validating live threshold triggers and route warning algorithms.",
        imageId: "airlert-testing",
        caption: "Circuit simulation, Arduino firmware code upload, and mobile UI live telemetry testing",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_right_image_left",
        tag: "06 // FORM EXPLORATION & CMF",
        title: "Sleek, Rugged & Lifestyle-Ready Hardware",
        desc: "Explored slit, mesh, and perforated air inlets to balance air intake precision with dust shielding. Features include a heavy-duty clip for belts or motorcycle bags, dual Type-C fast-charging ports, retractable tangle-free cable, and intuitive four-LED fuel gauges plus halo status indicators.",
        imageId: "airlert-details-features",
        caption: "Product detailing: Air inlets, dual USB-C, solar backing, clip-on bracket, and retractable cord",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_top_image_bottom",
        tag: "07 // DIGITAL ECOSYSTEM & IN-APP UX",
        title: "Actionable Protection Embedded in the Rider App",
        desc: "The digital intervention connects to the delivery platform (e.g., Zomato Delivery Partner App). It surfaces live AQI heatmaps on delivery routes, sends timely nudges (e.g. 'Heavy traffic ahead! High PM2.5 detected—wear mask and visor'), tracks daily exposure logs, prompts pre-shift health checklists, and aggregates anonymized sensor data into a citywide real-time pollution map.",
        imageId: "airlert-app-screens",
        caption: "Mobile interface flows: Onboarding, live route protection, shift symptom logs, and health reward incentives",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_left_image_right",
        tag: "08 // STAKEHOLDER BENEFIT & IMPACT MODEL",
        title: "Aligning Rider Health with City Systems & Business Viability",
        desc: "By turning invisible air quality visible, the model creates value across the entire chain: delivery riders receive tangible health protection; employers reduce absenteeism and gain route safety data; and municipal pollution boards obtain hyper-local mobile sensor datasets for targeted civic policy.",
        imageId: "airlert-impact-model",
        caption: "Systemic stakeholder impact model connecting riders, platforms, and municipal environmental bodies",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      }
    ]
  },
  {
    slug: "invert",
    title: "INVERT",
    tagline: "Inclusive Liquid Medication Dispensing System for Visually Impaired",
    client: "National Institute of Design (Inclusive Design Studio)",
    timeline: "04 Weeks • Group Work",
    date: "2024",
    category: "Medical & Inclusive Design",
    badge: "INCLUSIVE DESIGN / HEALTHCARE",
    thumbId: "invert-thumb",
    heroId: "invert-hero",
    heroAspectClass: "aspect-[16/9]",
    overview: "A redesigned liquid syrup medication bottle that eliminates spillage, guesswork, and contamination for visually impaired (VI) individuals using a tactile pre-set chamber and invert-to-fill gravity siphon.",
    heroMetrics: [
      { label: "User Interviews", val: "17 Blind & Low-Vision Users" },
      { label: "Community Partners", val: "NAB & Blind Relief Assn" },
      { label: "Dosage Presets", val: "2.5ml / 5ml / 10ml" },
      { label: "Tactile Indexing", val: "3-Dot Braille System" }
    ],
    specs: {
      material: "Amber glass pharmaceutical body, medical-grade PP cap, food-safe silicone valve seals",
      tactile: "3-Dot tactile scale with high reference contrast, Braille embossed body sleeve, peel-off dosage indicators",
      mechanism: "Dual-chamber volumetric sliding valve with pre-set dose lock; invert-to-fill gravity siphon",
      tools: "SolidWorks, KeyShot, FDM 3D printing, sensory immersion tests with blindfolded user trials"
    },
    metaHeader: {
      timeline: "4 Weeks (2024)",
      client: "National Institute of Design (Design for Inclusion)",
      focus: "Tactile Semantics, Assistive Product Design & Rapid 3D Prototyping"
    },
    deckBlocks: [
      {
        type: "text_top_image_bottom",
        tag: "01 // THE CORE CHALLENGE",
        title: "Liquid Medication Without Visual Cues Is High Risk",
        desc: "Among tablets, syrups, drops, and ointments, liquid cough syrups present the highest risk of medication error for visually impaired users. Without visual cues, users struggle to gauge bottle tilt, spill liquid down the sides, cannot align measuring cups, and often resort to dipping unwashed fingers inside the cup to estimate levels.",
        imageId: "invert-pain-points",
        caption: "Documented pain points: spillage, guessing tilt angles, finger-dipping, and cap misalignment",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_left_image_right",
        tag: "02 // USER RESEARCH & IMMERSION",
        title: "17 Interviews at National Association for the Blind",
        desc: "Conducted 17 immersive interviews (13 completely blind, 4 low-vision) at the National Association for the Blind and Blind Relief Association in Bhopal. Observed participants measuring 5ml cough syrup into standard medicine cups and conducted self-immersion blindfolded dispensing drills.",
        imageId: "invert-aim",
        caption: "Field research, telephonic interviews, and blindfold self-immersion testing",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_right_image_left",
        tag: "03 // MECHANICAL IDEATION & TEST MOCKUPS",
        title: "Finding 'The Chosen One' Volumetric Valve",
        desc: "Iterated through paper, syringe, and acrylic mockups passing fine sand and water to find a dosing mechanism that could accurately isolate 2.5ml, 5ml, and 10ml doses solely through tactile and auditory clicks without allowing liquid leakage when closed.",
        imageId: "invert-ideation-chosen",
        caption: "Mockup testing of ideations A, B, and C leading to the chosen dual-chamber sliding valve",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_top_image_bottom",
        tag: "04 // TACTILE COMMUNICATIVE FEEDBACK",
        title: "3-Dot Tactile Notches & Braille Integration",
        desc: "Traditional medicine labels rely entirely on visual fine print. INVERT introduces a tactile 3-dot scale embossed on the neck adjustment cap, corresponding to prescribed dosage levels, backed by braille-embossed bottle wraps and peel-and-tear verification tabs.",
        imageId: "invert-tactile-testing",
        caption: "Tactile dosage testing and label layout featuring embossed Braille and tear-off indicators",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_left_image_right",
        tag: "05 // SYSTEM ANATOMY & FEATURES",
        title: "Pre-Set Measuring & Consumption Lid",
        desc: "The assembly consists of an adjustment cap with level extrusions, rubber stopper, calibrated measuring cap, closure neck cap, and clean consumption drinking lid. The pre-set measuring cap eliminates checking liquid levels in real-time, preventing spillage completely.",
        imageId: "invert-technical-features",
        caption: "Exploded engineering diagram of the INVERT dispensing bottle closure",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_top_image_bottom",
        tag: "06 // HOW IT WORKS",
        title: "Simple 7-Step Tactile Operation",
        desc: "1. Feel tactile dots on neck to identify dosage → 2. Twist adjustment cap to desired click → 3. Invert bottle upside down to let calibrated chamber fill (5 seconds) → 4. Twist cap back counter-clockwise to lock dose → 5. Return upright and pull off measured dose cap → 6. Drink cleanly without mess → 7. Wash cap and snap back.",
        imageId: "invert-how-it-works",
        caption: "Complete 7-step user sequence: Identify, Set, Invert, Dispense, Close, Retrieve, Consume & Clean",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_left_image_right",
        tag: "07 // USER TESTING & COMMUNITY VALIDATION",
        title: "Tested Directly with Visually Impaired Community Members",
        desc: "3D-printed working mockups were tested directly with Mr. Rajendra (music teacher at Blind Relief Association), Mr. Rohit Tiwar (co-founder, Arushi NGO), and Mr. Jaiprakash (Braille teacher at NAB Bhopal). Feedback directly improved protrusion grip textures, Braille sizing, and dosage visibility for sighted caregivers.",
        imageId: "invert-user-testing",
        caption: "User testing trials with blind educators and NGO founders validating tactile haptics",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      }
    ]
  },
  {
    slug: "ventra",
    title: "VENTRA",
    tagline: "Smart Solar-Powered Automotive Greenhouse Cooling System",
    client: "National Institute of Design (Interactive Design Studio)",
    timeline: "03 Weeks • Group Work",
    date: "2024",
    category: "Automotive Consumer Hardware",
    badge: "SOLAR HARDWARE / AUTOMATION",
    thumbId: "ventra-thumb",
    heroId: "ventra-hero",
    heroAspectClass: "aspect-[16/9]",
    overview: "A smart, solar-powered car cabin cooling unit that automatically detects extreme heat buildup when parked in direct sunlight and expels trapped hot air using high-flow dual exhaust fans—protecting cabin materials and battery life.",
    heroMetrics: [
      { label: "Target Reduction", val: "Mitigates 60-70°C Heat" },
      { label: "Thermal Sensor", val: "Automated Thermistor Probe" },
      { label: "Power Supply", val: "10W Solar + Battery" },
      { label: "Vehicle Fit", val: "Universal Tool-Free Window Mount" }
    ],
    specs: {
      material: "UV-stabilized heat-resistant ABS/PC chassis, extruded aluminum mesh vents, compliant EPDM rubber window gaskets",
      electronics: "Arduino Uno microcontroller, DS18B20 digital thermal sensor, dual 12V high-RPM DC exhaust fans, L298N motor driver",
      power: "High-efficiency 10W window-mounted monocrystalline solar array + auxiliary rechargeable Li-ion cells & USB-C port",
      testing: "Hairdryer box airflow benchmarking, breadboard temperature logic, vehicle window physical trials"
    },
    metaHeader: {
      timeline: "3 Weeks (2024)",
      client: "National Institute of Design (Interactive Hardware)",
      focus: "Fluid Airflow Dynamics, Solar Electronics & Automotive Tool-Free Fitment"
    },
    deckBlocks: [
      {
        type: "text_top_image_bottom",
        tag: "01 // THE GREENHOUSE PROBLEM",
        title: "60°C to 70°C Interior Heat in 30 Minutes",
        desc: "During summer heatwaves, car interiors act as heat traps. Sunlight enters through the windshield and windows; heat gets trapped inside, causing cabin air to rise 20°C–30°C above outside ambient temperatures. A Stanford University study proved that 80% of heat increase happens within the first 30 minutes, damaging dashboards, electronics, battery health, and creating unsafe toxic fumes.",
        imageId: "ventra-problem",
        caption: "The greenhouse effect inside parked vehicles reaching frying temperatures in 30 minutes",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_left_image_right",
        tag: "02 // OVERCOMING MAKESHIFT 'JUGAAD'",
        title: "Why Current DIY Workarounds Fall Short",
        desc: "Drivers currently resort to door flapping for minutes, rolling windows cracked (security risk), wet towels on dashboards, spray mists, or cumbersome heavy tarpaulin car covers. Ventra was conceived to replace these tedious hacks with an automated, set-and-forget cooling accessory.",
        imageId: "ventra-opportunity",
        caption: "Benchmarking makeshift car cooling hacks versus an automated active solution",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_right_image_left",
        tag: "03 // ACTIVE AIRFLOW ENGINEERING",
        title: "Exhaust Dynamics & Airflow Testing",
        desc: "To study forced convective ventilation, we benchmarked cooling pad blowers and tested airflow through variable-width chambers using a dryer. Results guided the integration of dual high-velocity exhaust fans drawing hot stagnant air from the upper roofline and ejecting it through aluminum mesh cooling louvres.",
        imageId: "ventra-airflow-study",
        caption: "Airflow wind-tunnel experiments testing intake/exhaust velocity gradients and fan mechanisms",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_top_image_bottom",
        tag: "04 // ELECTRONIC PACKAGING & SOLAR POWER",
        title: "Self-Sustaining Solar Power Architecture",
        desc: "The circuit integrates a 10W flexible monocrystalline solar panel, DS18B20 digital temperature probe, Arduino Uno controller, H-Bridge motor driver, and dual 12V DC fans with rechargeable Li-ion backup. Once temperature reaches a preset threshold, the exhaust automatically spools up without draining the car's starter battery.",
        imageId: "ventra-components",
        caption: "Wiring schematic, electrical components, and breadboard test harness",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_left_image_right",
        tag: "05 // SLEEK AUTOMOTIVE INTEGRATION",
        title: "Tool-Free Universal Fitment & Interior Elegance",
        desc: "Ventra mounts into the upper window channel with a resilient rubber fixture that creates a weather-tight seal when the window is rolled up. Its slim, curved form language blends unobtrusively into modern cabin interiors without obstructing driver sightlines or wing mirrors.",
        imageId: "ventra-car-interior",
        caption: "Vehicle cabin integration: Non-distracting placement above rear passenger door window",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      },
      {
        type: "text_right_image_left",
        tag: "06 // EXTERIOR SOLAR HARVESTING",
        title: "Rain-Resistant Weatherproof Solar Array",
        desc: "Mounted along the top exterior window visor, the low-profile solar panel absorbs direct overhead sun while remaining completely safe from rain and road vibrations. USB-C pass-through charging adds emergency utility on long trips.",
        imageId: "ventra-car-exterior",
        caption: "Exterior solar panel window mount under vehicle rain guard during real-world monsoon test",
        aspectClass: "aspect-[16/9]",
        fitMode: "object-cover"
      }
    ]
  }
];

export const ARCHIVE_PROJECTS = [
  {
    slug: "boxed",
    title: "BOXED",
    tagline: "Modular packaging-to-furniture disaster relief system.",
    client: "Humanitarian Design • Individual Work",
    timeline: "4 Weeks",
    date: "2024",
    category: "Furniture & Humanitarian",
    badge: "PATENT APP. 202421069517",
    thumbId: "boxed-thumb",
    heroId: "projects-showcase-slide",
    desc: "A self-assembly heavy-duty corrugated box that carries critical relief materials into disaster zones and subsequently converts into modular, dignifying furniture for displaced families in emergency shelters."
  },
  {
    slug: "toto",
    title: "TOTO",
    tagline: "Sustainable bamboo beach toys combating coastal plastics.",
    client: "Sustainable Craft & BDDC • Individual Work",
    timeline: "3 Weeks",
    date: "2024",
    category: "Sustainable Craft & Product",
    badge: "BAMBOO CRAFT / SUSTAINABLE",
    thumbId: "toto-thumb",
    heroId: "projects-showcase-slide",
    desc: "Biodegradable, non-toxic beach toys turned and shaped from natural bamboo. Provides a tactile, durable alternative to flimsy single-use plastic beach toys that break down into microplastics on shorelines."
  },
  {
    slug: "avian",
    title: "AVIAN",
    tagline: "Terracotta tea ritual set inspired by bird ergonomics.",
    client: "Form Exploration • Individual Work",
    timeline: "2 Weeks",
    date: "2023",
    category: "Ceramic & Form Semantics",
    badge: "DESIGN REG. 424649-001",
    thumbId: "avian-thumb",
    heroId: "projects-showcase-slide",
    desc: "A handcrafted terracotta teaset inspired by the posture and pouring semantics of birds, designed to elevate the quiet tactile ritual of afternoon tea in NID's open-air campus café."
  }
];

export const ALL_PROJECTS = [...FLAGSHIP_PROJECTS, ...ARCHIVE_PROJECTS];
