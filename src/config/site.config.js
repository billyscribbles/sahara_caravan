// Single source of truth for brand identity, nav, SEO, integrations.

export const site = {
  brand: {
    name: 'Sahara Caravans',
    logoText: 'SAHARA',
    tagline: 'Driven by Experience. Built for Adventure.',
    logoSrc: '/brand/logo-light.png',
  },

  nav: [
    { label: 'Our Range', to: '/range' },
    { label: 'The Build', to: '/build' },
    { label: 'Find a Dealer', to: '/dealers' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],

  cta: {
    label: 'Enquire Now',
    to: '/contact',
  },

  footer: {
    columns: [
      {
        title: 'Range',
        links: [
          { label: 'All Models', to: '/range' },
          { label: 'Sahara Mirage', to: '/models/mirage' },
          { label: 'Sahara X-Master', to: '/models/x-master' },
          { label: 'Sahara Dune', to: '/models/dune' },
          { label: 'Sahara Horizon', to: '/models/horizon' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', to: '/about' },
          { label: 'The Build', to: '/build' },
          { label: 'Find a Dealer', to: '/dealers' },
          { label: 'Become a Dealer', to: '/become-a-dealer' },
          { label: 'Contact', to: '/contact' },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Sahara Caravans. All rights reserved.`,
  },

  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
  },

  contact: {
    email: 'support@saharacaravans.com.au',
    phone: '0419 786 446',
    location: 'Campbellfield, Victoria, Australia',
    hours: 'Mon–Fri 9:00am – 5:00pm (AEST)',
  },

  seo: {
    defaultTitle: 'Sahara Caravans — Australian-Made Off-Road Caravans',
    titleTemplate: '%s · Sahara Caravans',
    description:
      'Family-owned Australian caravan manufacturer. 30+ years of experience building on-road, off-road, semi-off-road, and family caravans. Driven by experience, built for adventure.',
    siteUrl: import.meta.env.VITE_SITE_URL || 'https://saharacaravans.com.au',
    ogImage: '/brand/og-image.jpg',
    locale: 'en_AU',
  },

  integrations: {
    formspreeId: import.meta.env.VITE_FORMSPREE_ID || 'xeengkde',
    gaId: import.meta.env.VITE_GA_ID || '',
  },
}
