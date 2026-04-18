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
    heroImage: '/images/models/mirage/hero.svg',
    gallery: [
      '/images/models/mirage/gallery-1.svg',
      '/images/models/mirage/gallery-2.svg',
      '/images/models/mirage/gallery-3.svg',
      '/images/models/mirage/gallery-4.svg',
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
    accent: '#C67B3F',
  },
  {
    slug: 'x-master',
    name: 'Sahara X-Master',
    type: 'Off-Road',
    order: 2,
    tagline: 'Your companion for off-grid adventures.',
    description:
      'The X-Master is the rugged end of the range — built from the ground up for remote travel. A reinforced chassis, heavy-duty suspension, and weather-resistant exterior mean you go where the track takes you, with every modern comfort waiting inside.',
    heroImage: '/images/models/x-master/hero.svg',
    gallery: [
      '/images/models/x-master/gallery-1.svg',
      '/images/models/x-master/gallery-2.svg',
      '/images/models/x-master/gallery-3.svg',
      '/images/models/x-master/gallery-4.svg',
    ],
    features: [
      'Rugged, weather-resistant exterior',
      'Heavy-duty reinforced suspension',
      'Off-grid power and water systems',
      'Full interior comforts retained',
      'Built for remote, long-distance travel',
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
    accent: '#9C5E2E',
  },
  {
    slug: 'dune',
    name: 'Sahara Dune',
    type: 'Semi-Off-Road',
    order: 3,
    tagline: 'Adventure and comfort in balance.',
    description:
      'The Dune is the versatile middle ground — a reinforced suspension soaks up the rougher roads, while the interior layout and ride feel just as at home on the highway. For travellers who want both sides of the country without committing to one.',
    heroImage: '/images/models/dune/hero.svg',
    gallery: [
      '/images/models/dune/gallery-1.svg',
      '/images/models/dune/gallery-2.svg',
      '/images/models/dune/gallery-3.svg',
      '/images/models/dune/gallery-4.svg',
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
    accent: '#B8884A',
  },
  {
    slug: 'horizon',
    name: 'Sahara Horizon',
    type: 'Family',
    order: 4,
    tagline: 'Built for the family road trip.',
    description:
      'The Horizon puts family at the centre of every decision. Bunk beds for the kids, a private master for you, a kitchenette that works around mealtimes, and a layout that keeps everyone comfortable for the long haul.',
    heroImage: '/images/models/horizon/hero.svg',
    gallery: [
      '/images/models/horizon/gallery-1.svg',
      '/images/models/horizon/gallery-2.svg',
      '/images/models/horizon/gallery-3.svg',
      '/images/models/horizon/gallery-4.svg',
    ],
    features: [
      'Dedicated bunk beds for children',
      'Private master sleeping area',
      'Fully equipped family kitchenette',
      'Family-first spatial layout',
      'Designed for long road trips',
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
    accent: '#D99765',
  },
]

export function getModelBySlug(slug) {
  return models.find((m) => m.slug === slug)
}
