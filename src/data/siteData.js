export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Budget wheelz Harare",
    legalName: "Budget wheelz Harare",
    tagline: "Affordable Quality Vehicles in Harare",
    description: "Budget Wheelz proves you do not need to break the bank to drive a quality vehicle. We specialise in affordable, reliable cars that get you where you need to go without financial stress.",
    phone: "+263 78 892 2913",
    phoneRaw: "+263788922913",
    whatsappNumber: "263788922913",
    email: "info@budgetwheelz.co.zw",
    address: "12 Triscombe Rd, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.8,
    ratingRounded: 5,
    reviewCount: 4,
    established: "2019",
    yearsExperience: "5+",
    projectsCompleted: "800+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "9:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDguMCJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "budget-wheelz-harare-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Budget",
    logoLine2: "wheelz Harare",
  },

  hero: {
    badge: "Harare's Home of Affordable Quality Vehicles",
    titleParts: [
      { text: "QUALITY CARS" },
      { text: "BUDGET", highlight: true },
      { text: "PRICES." },
    ],
    subtitle: "Budget Wheelz proves you do not need to break the bank to drive a quality vehicle. We specialise in affordable, reliable cars that get you where you need to go without financial stress.",
    ctaPrimary: "View Stock",
    ctaSecondary: "Apply for Finance",
    trustBadge: "800+ Clients Served",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=85", alt: "Premium vehicle on open road" },
      { url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=85", alt: "Luxury car in showroom lighting" },
      { url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=1920&q=85", alt: "Sports car on display" },
    ],
  },

  stats: [
    { number: "800+", label: "Vehicles Sold" },
    { number: "5+", label: "Years in Business" },
    { number: "100%", label: "Inspection Pass Rate" },
    { number: "4.8", label: "Google Rating" },
  ],

  servicesPreview: [
    { title: "Vehicle Sales", desc: "Curated selection of quality pre-owned vehicles. Every car inspected, serviced, and sold with confidence.", icon: "Star" },
    { title: "Trade-In Programme", desc: "Upgrade your current vehicle with our hassle-free trade-in service. Fair valuations, instant offers.", icon: "Heart" },
    { title: "Vehicle Finance", desc: "Flexible financing options through our banking partners. Low deposits, competitive rates, quick approvals.", icon: "Briefcase" },
    { title: "After-Sales Service", desc: "Comprehensive warranty packages and post-purchase support to keep your vehicle running perfectly.", icon: "Buildings" },
    { title: "Vehicle Sourcing", desc: "Cannot find what you want? Tell us your dream car and we will source it from our network of suppliers.", icon: "Lightbulb" },
    { title: "Insurance Assistance", desc: "We connect you with trusted insurance providers for comprehensive cover at competitive premiums.", icon: "Leaf" },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Comprehensive solutions tailored to your needs.",
    items: [
      {
        title: "Vehicle Sales",
        slug: "vehicle-sales",
        desc: "Every vehicle on our forecourt has passed a rigorous multi-point inspection. We do not just sell cars -- we sell confidence. Our curated selection ranges from practical daily drivers to premium luxury vehicles, all priced fairly and presented honestly.",
        features: ["Multi-Point Inspection", "Full Service History", "Fair Market Pricing", "Test Drive Available", "Warranty Options", "Registration Assistance"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      },
      {
        title: "Trade-In Programme",
        slug: "trade-in-programme",
        desc: "Upgrading should be simple. Drive in with your current vehicle, get an honest valuation on the spot, and apply it directly to your next purchase. No pressure, no hidden deductions -- just a fair deal that makes upgrading effortless.",
        features: ["Free Valuation", "Instant Offers", "Fair Market Value", "Any Make/Model", "Same-Day Processing", "Settlement Handling"],
        image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
      },
      {
        title: "Vehicle Finance",
        slug: "vehicle-finance",
        desc: "We work with Zimbabwe's leading banks and micro-lenders to offer financing packages that fit your budget. From low-deposit options to flexible repayment terms, we make car ownership accessible.",
        features: ["Multiple Lenders", "Low Deposits", "Flexible Terms", "Quick Approval", "Self-Employed Friendly", "No Hidden Fees"],
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80",
      },
      {
        title: "After-Sales Service",
        slug: "after-sales-service",
        desc: "Our relationship does not end at the sale. We offer extended warranty packages, scheduled service reminders, and priority access to our service network to keep your vehicle in peak condition.",
        features: ["Extended Warranty", "Service Reminders", "Priority Booking", "Parts Supply", "Technical Support", "Roadside Cover"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      },
      {
        title: "Vehicle Sourcing",
        slug: "vehicle-sourcing",
        desc: "If your ideal vehicle is not on our lot, we will find it. Our sourcing network spans dealers, auctions, and private sellers across Zimbabwe and the region. Tell us what you want -- make, model, budget -- and we go to work.",
        features: ["National Network", "Auction Access", "Import Options", "Budget Matching", "Condition Reports", "Delivery Arranged"],
        image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
      },
      {
        title: "Insurance Assistance",
        slug: "insurance-assistance",
        desc: "Driving off our lot without insurance is not an option. We partner with reputable insurers to get you comprehensive cover before you turn the key, with competitive quotes and hassle-free claims support.",
        features: ["Multiple Quotes", "Comprehensive Cover", "Third Party Options", "Claims Assistance", "Renewal Reminders", "Fleet Discounts"],
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Portfolio",
    heroSubtitle: "A selection of our work that showcases our capabilities.",
    items: [
      {
        title: "Premium SUV Collection",
        slug: "premium-suv-collection",
        category: "Sales",
        location: "Harare, Zimbabwe",
        desc: "Sourced and sold 25 premium SUVs in Q4, including Land Cruisers, Fortuners, and Range Rovers.",
        client: "Various Clients",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80"],
      },
      {
        title: "Corporate Fleet Supply",
        slug: "corporate-fleet-supply",
        category: "Fleet",
        location: "Harare, Zimbabwe",
        desc: "Supplied 15 matching sedans for a corporate fleet, all inspected, registered, and delivered same week.",
        client: "Corporate Client",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", "https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80"],
      },
      {
        title: "First Car Programme",
        slug: "first-car-programme",
        category: "Finance",
        location: "Harare, Zimbabwe",
        desc: "Helped 50 first-time buyers secure vehicles with low-deposit financing through our banking partners.",
        client: "Individual Buyers",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80", "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"],
      },
      {
        title: "Trade-In Week Event",
        slug: "trade-in-week-event",
        category: "Promotion",
        location: "Harare, Zimbabwe",
        desc: "Week-long trade-in event that processed 40 trade-ins and sold 35 vehicles in 7 days.",
        client: "Marketing Campaign",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80"],
      },
      {
        title: "Import Clearance Service",
        slug: "import-clearance-service",
        category: "Sourcing",
        location: "Harare, Zimbabwe",
        desc: "Sourced and cleared 10 vehicles from Japan through Beira port with full customs handling.",
        client: "Import Clients",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", "https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80"],
      },
      {
        title: "Diplomatic Fleet Order",
        slug: "diplomatic-fleet-order",
        category: "Fleet",
        location: "Harare, Zimbabwe",
        desc: "Supplied and prepared 8 vehicles for a diplomatic mission, including armour assessment coordination.",
        client: "Embassy Client",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80", "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"],
      },
    ],
  },

  homeTestimonials: [
    { text: "Bought my first car from Budget wheelz Harare and the experience was incredible. No pressure, honest advice, and they helped me secure financing that fit my budget perfectly.", name: "Wellington Moyo", role: "First-Time Buyer", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "We purchased 8 vehicles for our company fleet and Budget wheelz Harare handled everything -- sourcing, inspection, registration, and delivery. Professional from start to finish.", name: "Chenai Dziva", role: "Fleet Procurement Manager", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "This is my third vehicle from Budget wheelz Harare. I keep coming back because they are honest, their cars are well-inspected, and the after-sales support is genuine.", name: "Tapiwa Gondo", role: "Returning Customer", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "Traded in my old car and drove away in an upgrade the same day. The valuation was fair, the process was quick, and the new car has been perfect.", name: "Martha Zvobgo", role: "Trade-In Client", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise, driven by results.",
    story: [
      "Budget Wheelz was founded in 2019 with a simple mission: make reliable transportation affordable for every Harare family. We believe quality and affordability are not mutually exclusive.",
      "Every vehicle we sell is mechanically inspected, honestly described, and priced to deliver genuine value. With flexible financing and a no-pressure approach, over 800 drivers have found their wheels with us.",
    ],
    values: [
      { title: "Quality First", desc: "We never compromise on the quality of our work. Every project receives our full attention and best effort." },
      { title: "Transparent Pricing", desc: "No hidden fees, no surprises. We quote honestly and invoice accurately." },
      { title: "Expert Team", desc: "Our team brings years of specialist experience to every project we undertake." },
      { title: "Client Focus", desc: "Your satisfaction is our measure of success. We listen, adapt, and deliver." },
    ],
    team: [
      { name: "Team Leader", role: "Director", bio: "Leading Budget wheelz Harare with expertise and vision.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Operations Manager", role: "Operations", bio: "Ensuring every project runs smoothly and on schedule.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Technical Lead", role: "Technical", bio: "Bringing specialist expertise to every engagement.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
    ],
  },

  reviews: {
    heroTitle: "Client Voices",
    heroSubtitle: "Hear from the people who trust us with their most important needs.",
    items: [
      { text: "Bought my first car from Budget wheelz Harare and the experience was incredible. No pressure, honest advice, and they helped me secure financing that fit my budget perfectly.", name: "Wellington Moyo", role: "First-Time Buyer", rating: 5 },
      { text: "We purchased 8 vehicles for our company fleet and Budget wheelz Harare handled everything -- sourcing, inspection, registration, and delivery. Professional from start to finish.", name: "Chenai Dziva", role: "Fleet Procurement Manager", rating: 5 },
      { text: "This is my third vehicle from Budget wheelz Harare. I keep coming back because they are honest, their cars are well-inspected, and the after-sales support is genuine.", name: "Tapiwa Gondo", role: "Returning Customer", rating: 5 },
      { text: "Traded in my old car and drove away in an upgrade the same day. The valuation was fair, the process was quick, and the new car has been perfect.", name: "Martha Zvobgo", role: "Trade-In Client", rating: 5 },
      { text: "The inspection report Budget wheelz Harare provided was more detailed than what I got from a dealership. Impressive transparency.", name: "Simba Karonga", role: "Careful Buyer", rating: 5 },
      { text: "Finance approval came through in 48 hours. Budget wheelz Harare made the entire process painless.", name: "Douglas Mhizha", role: "Finance Client", rating: 5 },
      { text: "Drove 3 hours from Mutare to buy from Budget wheelz Harare because their reputation is that good. Was not disappointed.", name: "Linda Masuku", role: "Out-of-Town Buyer", rating: 5 },
      { text: "Great selection and no high-pressure sales tactics. Budget wheelz Harare let me take my time and make the right decision.", name: "Patrick Makoni", role: "Browser Turned Buyer", rating: 5 },
      { text: "The after-sales follow-up from Budget wheelz Harare was a pleasant surprise. They genuinely care about customer satisfaction.", name: "Angela Mhembere", role: "Satisfied Customer", rating: 5 },
      { text: "Registration, insurance, and financing all handled by Budget wheelz Harare. I just signed and drove away. Incredible service.", name: "Brian Mutema", role: "Complete Package Client", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "We are always looking for talented people who share our passion for excellence.",
    positions: [],
  },

  contact: {
    heroTitle: "Get in Touch",
    heroSubtitle: "We would love to hear from you. Reach out and let us discuss how we can help.",
    branches: [
      { name: "Main Office", address: "12 Triscombe Rd, Harare, Zimbabwe", phone: "+263 78 892 2913", email: "info@budgetwheelz.co.zw" },
    ],
  },

  homeCta: {
    title: "AFFORDABLE, STARTS HERE",
    subtitle: "Budget Wheelz proves you do not need to break the bank to drive a quality vehicle. We specialise in affordable, reliable cars that get you where you need to go without financial stress.",
    ctaPrimary: "View Stock",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Budget Wheelz! I'm looking for an affordable vehicle.",
    backgroundImage: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=85",
  },

  footer: {
    description: "Budget Wheelz proves you do not need to break the bank to drive a quality vehicle. We specialise in affordable, reliable...",
    copyright: "Budget wheelz Harare",
  },
};

export default siteData;