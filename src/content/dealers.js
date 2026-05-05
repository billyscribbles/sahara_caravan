// Active dealers: VIC (Campbellfield head office) + WA (Busselton Caravans).
// Other states are kept here so the enquiry-form state dropdown stays complete;
// states with `dealers: []` are filtered out of the dealer-display surfaces.

export const dealers = {
  intro: {
    eyebrow: 'Dealer Network',
    heading: 'Find your nearest Sahara dealer.',
    sub: 'Our dealer partners carry the full range and know the vans inside out. Visit in person to see them up close — or reach out and we\'ll connect you directly.',
  },
  states: [
    {
      code: 'VIC',
      name: 'Victoria',
      dealers: [
        {
          name: 'Sahara Caravans — Head Office',
          address: 'Campbellfield, Victoria',
          phone: '0419 786 446',
          email: 'support@saharacaravans.com.au',
        },
      ],
    },
    {
      code: 'NSW',
      name: 'New South Wales',
      dealers: [],
    },
    {
      code: 'QLD',
      name: 'Queensland',
      dealers: [],
    },
    {
      code: 'SA',
      name: 'South Australia',
      dealers: [],
    },
    {
      code: 'WA',
      name: 'Western Australia',
      dealers: [
        {
          name: 'Busselton Caravans',
          address: '69 Cook Street Link, Busselton WA 6280',
          phone: '0437 791 141',
          email: 'bussvans@yahoo.com',
        },
      ],
    },
    {
      code: 'TAS',
      name: 'Tasmania',
      dealers: [],
    },
    {
      code: 'NT',
      name: 'Northern Territory',
      dealers: [],
    },
    {
      code: 'ACT',
      name: 'Australian Capital Territory',
      dealers: [],
    },
  ],
}
