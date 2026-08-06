export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[]; // Content blocks/paragraphs
  image: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'art-of-table-settings',
    title: 'The Art of Curating Luxury Table Settings',
    excerpt: 'Discover the critical details that transform a dinner table into a high-end sensory experience, from custom Charger Plates to fine floral art.',
    content: [
      'In the realm of high-end event production, the dining table is not merely a place where guests sit; it is a canvas for visual storytelling. Curating a luxury table setting is an art form that blends textures, lighting, custom floral designs, and premium tableware into a harmonious sensory experience.',
      'A true masterpiece table starts with the foundation: the linens. At Blanco\'s Events, we source custom-woven, high-thread-count fabrics that feel luxurious to the touch. From heavy damask to crisp, textured linen blends, the foundation sets the tone—be it romantic, dramatic, or sleekly modern.',
      'Next is the curation of the chargers and plates. Layering is key here. We pair custom gold-rimmed charger plates with delicate porcelain dinnerware. Every glass—from crystal water goblets to fine champagne flutes—is positioned to capture the ambient candlelight.',
      'Floral arrangements are the crown jewels of the table. Instead of standard high centerpieces that block conversation, we prefer curated, organic floral runners that cascade down the edges, combined with variable-height candles to create movement and depth. A touch of personalized stationery, such as calligraphed menus on handmade deckle-edge paper, adds the ultimate bespoke finish.',
    ],
    image: '/portfolio-images/Elegant Table Settings.webp',
    date: 'August 3, 2026',
    category: 'DESIGN & STYLING',
    author: 'Blanca',
    readTime: '4 min read',
  },
  {
    slug: 'dubai-destination-weddings',
    title: 'Planning a Luxury Destination Wedding in Dubai',
    excerpt: 'From sandy beaches to grand deserts, our master planner shares insider tips on coordination, venue selection, and luxury staging.',
    content: [
      'Dubai is globally recognized as a premier destination for luxury. With its futuristic skyline, five-star resort beachfronts, and majestic desert dunes, it offers an array of breathtaking backdrops for couples seeking a truly grand wedding experience.',
      'However, planning an international celebration from afar requires detailed local knowledge, elite vendor networks, and meticulous coordination. The first critical decision is selecting the right venue. Whether it is a beach resort like FIVE Palm Jumeirah or an exclusive desert resort, understanding guest capacity, permit requirements, and sound limits is essential.',
      'Staging and structural design are crucial for outdoor desert weddings. Constructing custom staging decks that align flush with the natural sand topography, installing heavy-duty power generators, and creating temperature-controlled VIP tents are all parts of the technical production process managed by our specialists.',
      'Timing is everything. We advise couples to plan their celebrations between November and March when the weather is absolutely perfect. Designing guest travel itineraries, arranging bespoke transport, and preparing personalized welcome gifts make the journey seamless and unforgettable for your overseas guests.',
    ],
    image: '/blancosevents-image-home/wedding.webp',
    date: 'July 28, 2026',
    category: 'WEDDING PLANNING',
    author: 'Blanca',
    readTime: '6 min read',
  },
  {
    slug: 'corporate-brand-activations',
    title: 'Elevating Corporate Brand Activations',
    excerpt: 'How to merge brand identity with sensory luxury to create immersive launch experiences that keep guests talking.',
    content: [
      'Corporate brand activations have moved far beyond logo-printed banners and simple registration desks. In today\'s competitive landscape, brands must engage their audience through high-end, immersive, and visually stunning real-world experiences.',
      'The secret to a successful launch lies in combining brand identity with sensory design. When designing a product launch, we construct bespoke entrance tunnels, media-optimized photo zones, and custom-lit stage backdrops that serve as a natural frame for high-quality photos and videos.',
      'Lighting and acoustic design are powerful tools to guide guest emotion. We utilize smart LED mapping, custom gobos projecting abstract brand motifs, and ambient soundscapes to build anticipation before the grand product reveal.',
      'Ultimately, details matter. Seamless check-in terminals, bespoke signature beverages matching the brand\'s color palette, and curated gifts coordinate to deliver a premium narrative. A brand activation should feel like an exclusive party, leaving a lasting impact on influencers and VIP clients alike.',
    ],
    image: '/portfolio-images/Corporate Events.webp',
    date: 'June 15, 2026',
    category: 'CORPORATE EVENTS',
    author: 'Blanca',
    readTime: '5 min read',
  },
  {
    slug: 'floral-architecture-venues',
    title: 'The Magic of Floral Architecture in Modern Venues',
    excerpt: 'How to use structural floral installations to transform raw industrial spaces or hotel ballrooms into breathtaking garden sanctuaries.',
    content: [
      'Floral design has evolved from tabletop vases into massive structural architecture. Today, the world\'s most luxurious events use floor-to-ceiling floral structures to redefine space, create paths, and sculpt unforgettable guest entries.',
      'Constructing these hanging masterpieces requires a mix of structural engineering and floristry expertise. Our design specialists build custom aluminum truss support grids concealed within the ceiling, allowing us to suspend cascading wisteria, fresh eucalyptus, and thousands of premium roses above the dining tables.',
      'Color theory is essential. Rather than using an overwhelming blend of colors, we select curated palettes—like shades of cream, ivory, and soft champagne, accented by golden leaves. This creates a timeless, high-fashion atmosphere that feels clean and luxurious.',
      'Whether you are looking to cover a grand hotel ballroom ceiling or soften an industrial loft space, structural flowers offer a magnificent solution that completely changes the venue\'s scale and leaves a lasting impact on everyone present.',
    ],
    image: '/portfolio-images/hotel.webp',
    date: 'May 20, 2026',
    category: 'FLORAL DESIGN',
    author: 'Blanca',
    readTime: '5 min read',
  },
  {
    slug: 'secrets-private-celebrations',
    title: 'Secrets of High-End Private Celebrations',
    excerpt: 'Mastering the details for intimate milestone birthdays and romantic proposals in exclusive luxury settings.',
    content: [
      'Intimate private celebrations hold a distinct charm. Unlike grand weddings, private milestone birthdays and surprise proposal setups offer the creative freedom to construct highly personalized, detailed, and themed guest environments.',
      'For birthday celebrations, custom tabletop decors tell a personal story. We pair custom chargers and monogrammed linens with variable-height crystal candleholders. Dynamic micro-lighting profiles—like warm pinpoint spotlights hitting each table centerpiece—ensure a cozy, premium dinner vibe.',
      'Surprise proposals call for absolute cinematic staging. Whether constructed on private yachts, desert sands, or penthouse terraces, we build custom neon-accented arches, floral walkways, and path lighting structures to highlight the couple in their special moment.',
      'Curating specialized entertainment acts, private mixologists, and bespoke menus completes the luxury experience, transforming a standard family gathering into a historic occasion.',
    ],
    image: '/portfolio-images/birthday.webp',
    date: 'April 11, 2026',
    category: 'PRIVATE PARTIES',
    author: 'Blanca',
    readTime: '4 min read',
  },
];
