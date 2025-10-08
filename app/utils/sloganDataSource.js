// utils/sloganDataSource.js

export const sloganDataSource = {
  // =================== DỮ LIỆU CHUNG ===================
  general: {
    metaTitle: 'Free Slogan & Tagline Generator - Create Catchy Slogans Online',
    metaDescription: 'Use our free slogan maker to instantly generate hundreds of catchy taglines for your business or brand. Fast, easy, and no sign-up required.',
    h1: 'Free Slogan <span class="gradient-text">Generator</span>',
    name: 'General / All Purpose',
    wordlists: {
      adjective: ["Powerful", "Modern", "Classic", "Innovative", "Authentic", "Elegant", "Bold", "Versatile", "Practical", "Sleek", "Minimal", "All-in-One", "Sustainable", "Accessible", "Efficient", "Remarkable", "Next-Gen", "Game-changing", "Adaptive", "Human-centered", "Transformative"],
      verb: ["Unlock", "Discover", "Master", "Create", "Experience", "Transform", "Elevate", "Imagine", "Achieve", "Reinvent", "Ignite", "Amplify", "Supercharge", "Optimize", "Empower", "Win", "Monetize", "Unleash", "Inspire", "Grow"],
      benefit: ["a new beginning", "quality you can feel", "the future", "your potential", "lasting success", "pure results", "creative freedom", "breakthrough moments", "real impact"],
      audience: ["innovators", "high-performers", "doers", "pioneers", "the best", "everyone", "indie hackers", "solo founders", "busy teams", "marketers", "product leaders", "creators", "agencies", "bootstrappers", "the next generation"],
      intensifier: ["Truly", "Seriously", "Ridiculously", "Insanely", "Wildly", "Unbelievably", "Remarkably", "Shockingly", "Surprisingly", "Refreshingly", "Perfectly", "Genuinely"],
      problem: ["endless meetings", "manual work", "customer churn", "missed deadlines", "low conversions", "confusing data", "creative burnout", "scaling bottlenecks", "wasted spend"],
      positiveState: ["effortless growth", "total clarity", "predictable revenue", "deep focus", "a loyal customer base", "flawless execution"],
      adjective_quality: ["Professional", "Best-in-class", "Premium", "Strategic", "Robust", "High-impact", "Enterprise-grade", "Flawless", "Meticulous", "Superior", "Exceptional"],
      adjective_speed: ["Fast", "Accelerated", "On-demand", "Instant", "Lightning-fast", "Blazing-fast", "Real-time", "Rapid", "Swift"],
      adjective_simplicity: ["Simple", "Effortless", "Intuitive", "Uncomplicated", "Seamless", "No-nonsense", "Stress-free", "User-friendly", "Clean"],
      adjective_trust: ["Trusted", "Reliable", "Proven", "Secure", "Battle-tested", "Resilient", "Official", "Guaranteed", "Dependable", "Certified"],
      benefit_growth: ["predictable success", "a partnership for growth", "lasting value", "a competitive advantage", "scalable results", "compounding ROI", "sustainable expansion", "market leadership"],
      benefit_clarity: ["total clarity", "a single source of truth", "actionable insights", "data-backed decisions", "zero fluff", "confidence in every step", "a clear path forward"],
      verb_create: ["Create", "Craft", "Build", "Design", "Engineer", "Invent", "Forge", "Formulate", "Originate", "Compose"],
      verb_grow: ["Grow", "Scale", "Accelerate", "Expand", "Amplify", "Dominate", "Multiply", "Elevate", "Advance"],
      metaphor_noun: ["a Swiss Army knife", "an autopilot", "a command center", "a blueprint", "an engine", "a compass", "a secret weapon", "a launchpad"],
    },
    templates: [
      "The {intensifier} {adjective} way to {verb} your {keyword}.", "{keyword}: {benefit}, made {intensifier} simple.", "Make {keyword} your unfair advantage.", "Tired of {problem}? It's time for {keyword}.", "{keyword}: From {problem} to {positiveState}.", "The {adjective_trust} partner for {benefit_growth}.", "{keyword}: It's like a {metaphor_noun} for your {problem}.", "Experience {adjective_speed} results with {adjective_simplicity} software.", "{verb_grow} your business, not your workload.", "The {adjective_quality} choice for {audience}."
    ]
  },
  // =================== DỮ LIỆU NGÁCH (ĐÃ BỔ SUNG ĐẦY ĐỦ) ===================
  niches: {
    'real-estate': {
      name: 'Real Estate',
      metaTitle: 'Slogan Generator for Real Estate | Free Taglines for Agents & Agencies',
      h1: 'Real Estate Slogan <span class="gradient-text">Generator</span> for Agents & Agencies',
      metaDescription: 'Generate catchy and professional slogans for your real estate business. Attract more clients with the perfect tagline for agents, brokers, and developers.',
      wordlists: {
        verb: ["Find", "Secure", "Invest in", "Discover", "List", "Close", "Stage", "Tour", "Unlock", "Showcase"],
        benefit: ["your dream home", "a solid investment", "your forever home", "a place to call home", "the perfect property", "a seamless transition", "your next chapter"],
        adjective: ["Spacious", "Cozy", "Luxurious", "Prime", "Serene", "Welcoming", "Turnkey", "Move-in Ready", "Sunlit", "Exclusive"],
        adjective_quality: ["Exclusive", "Luxurious", "Impeccable", "Breathtaking", "Meticulously-maintained", "Premier", "Signature"],
        adjective_trust: ["Trusted", "Dedicated", "Experienced", "Local", "Expert", "Reliable"],
        benefit_growth: ["a solid investment", "a legacy of ownership", "lasting value", "appreciating assets", "your future portfolio"],
        metaphor_noun: ["a sanctuary", "a foundation", "a canvas", "the key to the city", "your future"],
      },
      templates: [
        "{keyword}: Your next chapter starts here.", "The key to your new beginning.", "Come home to {benefit}.", "The {adjective_quality} path to your dream home.", "From listing to 'welcome home'.", "Your {adjective_trust} guide on the journey home.", "Sell faster, buy smarter.", "Opening doors to {benefit_growth}.", "The art of living, perfected by {keyword}.", "Your property, our priority.", "{keyword}: It's like {metaphor_noun}.", "Guiding you home, every step of the way."
      ]
    },
    campaign: {
      name: 'Campaign',
      metaTitle: 'Campaign Slogan Generator | Catchy Taglines for Marketing & Ads',
      h1: 'Campaign Slogan <span class="gradient-text">Generator</span>',
      metaDescription: 'Instantly create powerful slogans for your marketing, political, or social campaigns. Generate taglines that resonate and inspire action.',
      wordlists: {
        verb: ["Believe in", "Join", "Support", "Act on", "Drive", "Demand", "Unite for", "Champion", "Choose", "Vote for"],
        benefit: ["a better future", "real change", "a clear choice", "a voice for everyone", "progress we can see", "a stronger community"],
        adjective: ["Clear", "Bold", "Strong", "United", "Decisive", "Hopeful", "Effective", "Proven"],
        adjective_quality: ["Decisive", "Proven", "Effective", "Principled", "Unwavering", "Clear-cut"],
        adjective_trust: ["Honest", "Consistent", "People-powered", "Community-backed"],
        benefit_growth: ["real change", "a stronger community", "a better future", "progress for all", "a new direction"],
        metaphor_noun: ["a megaphone", "a banner", "a turning point", "a clear choice", "a movement"],
      },
      templates: [
        "{keyword}: It's time for {benefit_growth}.", "Your voice. Your vote. Your {keyword}.", "{verb} {metaphor_noun}.", "The {adjective_quality} choice for {benefit}.", "Don't just hope for change, vote for it.", "{keyword}: A {adjective_trust} vision for all.", "For our community. For our future.", "Bringing people together.", "A new day, a new way.", "The message is {adjective}.", "{keyword}: {benefit}, for everyone.", "More action, less talk."
      ]
    },
    restaurant: {
      name: 'Restaurant',
      metaTitle: 'Restaurant Slogan Generator | Taglines for Cafes, Bars & Eateries',
      h1: 'Restaurant Slogan <span class="gradient-text">Generator</span>',
      metaDescription: 'Create delicious slogans for your restaurant, cafe, or bar. Generate taglines that capture your unique flavor and attract hungry customers.',
      wordlists: {
        verb: ["Savor", "Taste", "Enjoy", "Share", "Crave", "Gather for", "Indulge in", "Feast on", "Experience"],
        benefit: ["unforgettable flavors", "a taste of tradition", "memories on a plate", "a culinary journey", "love at first bite", "the perfect bite"],
        adjective: ["Authentic", "Fresh", "Handcrafted", "Locally-sourced", "Delicious", "Flavorful", "Artisanal", "Traditional"],
        adjective_quality: ["Authentic", "Artisanal", "Farm-to-table", "Unforgettable", "Exquisite", "Chef-crafted"],
        adjective_simplicity: ["Simply delicious", "Purely fresh", "Honestly good"],
        benefit_clarity: ["A taste of tradition", "The true flavor of home", "Simple ingredients, perfect meals"],
        metaphor_noun: ["a culinary journey", "a melting pot", "a celebration on a plate", "a feast for the senses"],
      },
      templates: [
        "{keyword}: Where every meal is a memory.", "{verb} the {adjective_quality} difference.", "Crave it. Share it. Love it.", "From our kitchen to your heart.", "{keyword}: It's like {metaphor_noun}.", "The taste that brings you back.", "Life is short. Eat {adjective} food.", "Gather for {benefit}.", "Experience {benefit}, one plate at a time.", "{keyword}: {adjective_simplicity}.", "The soul of the city, on a plate.", "Where flavor and community meet."
      ]
    },
    business: {
      name: 'Business',
      metaTitle: 'Business Slogan Generator | Create Professional Corporate Taglines',
      h1: 'Business Slogan <span class="gradient-text">Generator</span>',
      metaDescription: 'Generate professional slogans and taglines for your business or company. Find the perfect phrase to define your brand identity and mission.',
      wordlists: {
        verb: ["Partner for", "Achieve", "Drive", "Build", "Innovate", "Lead in", "Engineer", "Accelerate", "Define", "Master"],
        benefit: ["predictable success", "a partnership for growth", "excellence in everything", "lasting value", "a competitive advantage", "smarter solutions"],
        adjective: ["Professional", "Strategic", "Trusted", "Results-driven", "Innovative", "Comprehensive", "Reliable", "Global"],
        adjective_quality: ["Strategic", "Best-in-class", "Enterprise-grade", "Results-driven", "Meticulous", "Superior"],
        adjective_trust: ["Trusted", "Reliable", "Proven", "Secure", "Guaranteed", "Dependable"],
        benefit_growth: ["predictable success", "scalable results", "a competitive advantage", "market leadership", "compounding ROI"],
        metaphor_noun: ["an engine", "a blueprint", "a launchpad", "a command center", "a partner"],
      },
      templates: [
        "{keyword}: Your {adjective_trust} partner for {benefit_growth}.", "Building the future, together.", "The {adjective_quality} choice for serious results.", "Results, not excuses.", "Driving innovation, delivering value.", "{keyword}: Excellence, integrity, results.", "Your success is our business.", "The art of the smart solution.", "{verb} {benefit}, with confidence.", "Complexity, simplified.", "{keyword}: It's {metaphor_noun} for your growth.", "Rethink what's possible."
      ]
    }
  }
};
