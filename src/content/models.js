// The four models in the Sahara range. Specs marked TBC need sourcing from the
// Sahara team before launch; the UI is already designed to render around them.

export const models = [
  {
    slug: 'mirage',
    name: 'Sahara Mirage',
    type: 'On-Road',
    order: 1,
    tagline: 'Comfort and convenience on the open road.',
    description:
      'The Mirage is designed for travellers who value comfort and ease above all. A sleek, streamlined build makes it effortless to tow, while the fully equipped kitchenette and spacious interior feel like home long before you\'ve unpacked.',
    heroImage: '/images/models/mirage/hero.png',
    gallery: [
      '/images/models/mirage/gallery-1.png',
      '/images/models/mirage/gallery-2.png',
      '/images/models/mirage/gallery-3.png',
      '/images/models/mirage/gallery-4.png',
    ],
    features: [
      'Sleek, streamlined aerodynamic design',
      'Lightweight chassis — easy to tow',
      'Fully equipped kitchenette',
      'Spacious, light-filled interior',
      'Comfortable queen sleeping area',
    ],
    specs: {
      sleeps: 'Up to 6',
      length: 'TBC',
      tare: 'TBC',
      atm: 'TBC',
      suspension: 'Standard independent',
      water: 'TBC',
      warranty: 'TBC',
    },
    highlights: ['Toilet', 'Shower', 'Laundry', 'Kitchenette'],
    ctaLabel: 'Enquire about the Mirage',
  },
  {
    slug: 'x-master',
    name: 'Sahara X-Master',
    type: 'Off-Road',
    order: 2,
    tagline: 'Explore the wild without leaving comfort behind.',
    description:
      'The X-Master is your ultimate companion for off-grid adventures. Built to conquer rough terrain, it features a rugged, weather-resistant exterior and reinforced suspension for reliable performance in remote locations. Inside, you\'ll find all the modern comforts — from a fully equipped kitchenette to a warm, inviting sleeping area — so you can explore the wild without leaving comfort behind.',
    heroImage: '/images/models/x-master/hero.png',
    gallery: [
      '/images/models/x-master/hero.png',
      '/images/models/x-master/gallery-2.svg',
      '/images/models/x-master/gallery-3.svg',
      '/images/models/x-master/gallery-4.svg',
    ],
    features: [
      'Rugged, weather-resistant exterior',
      'Reinforced suspension for remote terrain',
      'Fully equipped kitchenette',
      'Warm, inviting sleeping area',
      'Built to conquer off-grid travel',
    ],
    specs: {
      sleeps: 'Up to 6',
      length: 'TBC',
      tare: 'TBC',
      atm: 'TBC',
      suspension: 'Heavy-duty independent coil',
      water: 'TBC',
      warranty: 'TBC',
    },
    highlights: ['Toilet', 'Shower', 'Laundry', 'Kitchenette', 'Off-Grid'],
    ctaLabel: 'Enquire about the X-Master',
  },
  {
    slug: 'dune',
    name: 'Sahara Dune',
    type: 'Semi-Off-Road',
    order: 3,
    tagline: 'Adventure and comfort in balance.',
    description:
      'The Dune is the versatile middle ground — a reinforced suspension soaks up the rougher roads, while the interior layout and ride feel just as at home on the highway. For travellers who want both sides of the country without committing to one.',
    heroImage: '/images/models/dune/hero.png',
    gallery: [
      '/images/models/dune/gallery-1.png',
      '/images/models/dune/gallery-2.png',
      '/images/models/dune/gallery-3.png',
      '/images/models/dune/gallery-4.png',
    ],
    features: [
      'Reinforced suspension for uneven terrain',
      'Smooth, stable ride on sealed roads',
      'Spacious interior with flexible layout',
      'Fully equipped kitchenette',
      'Comfortable sleeping quarters',
    ],
    specs: {
      sleeps: 'Up to 6',
      length: 'TBC',
      tare: 'TBC',
      atm: 'TBC',
      suspension: 'Reinforced independent',
      water: 'TBC',
      warranty: 'TBC',
    },
    highlights: ['Toilet', 'Shower', 'Laundry', 'Kitchenette'],
    ctaLabel: 'Enquire about the Dune',
  },
  {
    slug: 'horizon',
    name: 'Sahara Horizon',
    type: 'Family',
    order: 4,
    tagline: 'Making memories — wherever the road takes you.',
    description:
      'The Horizon is built with families in mind, offering the perfect mix of comfort, practicality, and adventure. With generous space for everyone, it features bunk beds for the kids, a cozy master bed, and a fully equipped kitchenette for easy mealtime prep — so every trip is one the whole family can enjoy.',
    heroImage: '/images/models/horizon/hero.png',
    gallery: [
      '/images/models/horizon/hero.png',
      '/images/models/horizon/gallery-2.svg',
      '/images/models/horizon/gallery-3.svg',
      '/images/models/horizon/gallery-4.svg',
    ],
    features: [
      'Dedicated bunk beds for the kids',
      'Cozy private master bed',
      'Fully equipped family kitchenette',
      'Generous space for up to six',
      'Practical, family-first layout',
    ],
    specs: {
      sleeps: 'Up to 6',
      length: 'TBC',
      tare: 'TBC',
      atm: 'TBC',
      suspension: 'Standard independent',
      water: 'TBC',
      warranty: 'TBC',
    },
    highlights: ['Toilet', 'Shower', 'Laundry', 'Kitchenette', 'Bunks'],
    ctaLabel: 'Enquire about the Horizon',
  },
]

export function getModelBySlug(slug) {
  return models.find((m) => m.slug === slug)
}
