// The four models in the Sahara range. The Mirage and X-Master each ship with
// two variants the visitor can switch between on the detail page without a
// route change. Dune and Horizon stay single-variant; the ModelPage falls back
// to the top-level fields when `variants` is absent.

export const models = [
  {
    slug: 'mirage',
    name: 'Sahara Mirage',
    type: 'On-Road',
    order: 1,
    tagline: 'Comfort and convenience on the open road.',
    description:
      'The Mirage is designed for travellers who value comfort and ease above all. A sleek, streamlined build makes it effortless to tow, while the fully equipped kitchenette and spacious interior feel like home long before you\'ve unpacked. Pick between two lounge layouts — a fixed cafe-style dinette for long family meals, or twin individual recliners for relaxed evenings on the road.',
    heroImage: '/images/models/mirage-cafe/exterior-03.jpg',
    highlights: ['Toilet', 'Shower', 'Laundry', 'Kitchenette'],
    ctaLabel: 'Enquire about the Mirage',
    variants: [
      {
        key: 'cafe',
        label: 'Cafe Style',
        shortLabel: 'Cafe',
        badge: 'Mirage · Cafe Lounge',
        blurb: 'Fixed L-shaped cafe dinette with pedestal table — seats the whole family for meals and folds out for an extra bed.',
        blueprint: '/images/blueprints/mirage-cafe.svg',
        heroImage: '/images/models/mirage-cafe/exterior-03.jpg',
        description:
          'The Cafe-style Mirage keeps things classic. A fixed L-shaped dinette with a solid pedestal table gives you a proper spot for meals, laptops, card games and long cups of tea on a rainy afternoon. Gloss white upper cabinetry, stone-look benchtops and a hex-tile ensuite give the whole space a bright, premium feel — while the rear queen bedroom stays tucked away for an easy night.',
        features: [
          'Fixed L-shaped cafe dinette with solid pedestal table',
          'Converts into an extra double bed for guests',
          'Gloss white upper cabinetry and dark gloss lower drawers',
          'Full kitchen — 4-burner cooktop with oven, stainless sink, stone-look bench',
          'Rear private queen bed with wrap-around storage',
          'Full ensuite with separate shower, cassette toilet and vanity',
          'Hexagon-tile ensuite floor with marble-look vanity top',
          'Dometic cassette air-conditioner and Sirocco ceiling fan',
          'Large panoramic windows — bright, light-filled interior',
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
        gallery: {
          exterior: [
            {
              src: '/images/models/mirage-cafe/exterior-01.jpg',
              caption: 'Mirage 206 front-quarter — twin gas-bottle hitch, off-road-ready drawbar, white body with charcoal and green graphics.',
            },
            {
              src: '/images/models/mirage-cafe/exterior-02.jpg',
              caption: 'Rear view — reflective tail strip, spare wheel mount, full checker-plate stone guard along the underbody.',
            },
            {
              src: '/images/models/mirage-cafe/exterior-03.jpg',
              caption: 'Mirage 186 front — twin gas bottles and off-road drawbar, Sahara Caravans branding in green and charcoal.',
            },
          ],
          interior: [
            { src: '/images/models/mirage-cafe/interior-01.jpg', caption: 'Ensuite corner — gloss white cabinetry, hex-tile floor and the edge of the separate shower stall.' },
            { src: '/images/models/mirage-cafe/interior-02.jpg', caption: 'Cafe dinette looking back to the bedroom — bench seats with a fixed stone-look table and a skylight over the lounge.' },
            { src: '/images/models/mirage-cafe/interior-03.jpg', caption: 'Separate shower stall — chrome hand-held, slide rail and slip-resistant base set in bright white wet-wall panels.' },
            { src: '/images/models/mirage-cafe/interior-04.jpg', caption: 'Dinette from the galley side — L-lounge with fixed table, fridge and microwave column on the right, skylight overhead.' },
            { src: '/images/models/mirage-cafe/interior-05.jpg', caption: 'Cafe dinette from the kitchen — cushioned bench seats, fixed table, fridge column and entry door alongside.' },
            { src: '/images/models/mirage-cafe/interior-06.jpg', caption: 'Dinette wide angle — cafe seating on the right, galley on the left, skylight drawing daylight into the main living.' },
            { src: '/images/models/mirage-cafe/interior-07.jpg', caption: 'Galley wide — gloss white uppers, grey lower drawers, stone benchtop with under-bench oven and stainless sink.' },
            { src: '/images/models/mirage-cafe/interior-08.jpg', caption: 'Ensuite — cassette toilet, front-loading washer column, marble-look vanity with vessel basin and mirrored cabinets.' },
            { src: '/images/models/mirage-cafe/interior-09.jpg', caption: 'Private queen bedroom — quilted mattress, overhead cabinetry, bedside shelves with reading lights on both sides.' },
            { src: '/images/models/mirage-cafe/interior-10.jpg', caption: 'Cafe dinette in detail — fixed stone-look table between padded bench seats, fridge column and entry door on the right.' },
            { src: '/images/models/mirage-cafe/interior-11.jpg', caption: 'Kitchen from the rear — gloss uppers, stone benchtop, 4-burner cooktop with oven and a glimpse of the bed beyond.' },
            { src: '/images/models/mirage-cafe/interior-12.jpg', caption: 'Ensuite detail — front-loading washer, marble-look vanity with vessel sink, mirror-fronted overhead cabinet.' },
          ],
        },
      },
      {
        key: 'recliners',
        label: 'Twin Recliners',
        shortLabel: 'Recliners',
        badge: 'Mirage · Recliner Lounge',
        blurb: 'Two individual reclining chairs with a shared side table — the relaxed evenings-in layout for couples.',
        blueprint: '/images/blueprints/mirage-recliners.svg',
        heroImage: '/images/models/mirage-recliners/hero.jpg',
        description:
          'The Recliner-layout Mirage swaps the fixed dinette for two individual reclining lounge chairs with a small shared side table. It\'s the evenings-in, movie-night layout — everyone gets their own seat, and there\'s nothing hard to knock a knee on. Everything else is the same Mirage you know: full galley, ensuite with laundry and a private rear queen bedroom.',
        features: [
          'Twin individual reclining lounge chairs with side table',
          'Relaxed, living-room feel — no shared bench seat',
          'Full kitchen — 4-burner cooktop with oven, stainless sink, stone-look bench',
          'Rear private queen bed with wrap-around storage',
          'Full ensuite with separate shower, cassette toilet and vanity',
          'Marble-look vanity top with matte black tapware',
          'Gloss white upper cabinetry and dark gloss lower drawers',
          'Dometic cassette air-conditioner and ceiling ventilation',
          'Twin gas-bottle mount, off-road-ready hitch and drawbar',
        ],
        specs: {
          sleeps: 'Up to 4',
          length: 'TBC',
          tare: 'TBC',
          atm: 'TBC',
          suspension: 'Standard independent',
          water: 'TBC',
          warranty: 'TBC',
        },
        gallery: {
          exterior: [
            { src: '/images/models/mirage-recliners/exterior-01.jpg', caption: 'Mirage 206 front — twin gas-bottle hitch, off-road drawbar, aerodynamic nose cone.' },
            { src: '/images/models/mirage-recliners/exterior-02.jpg', caption: 'Full side profile — single-axle on-road build, white body with charcoal and green graphics.' },
            { src: '/images/models/mirage-recliners/exterior-03.jpg', caption: 'Rear view — spare wheel, reflective tail strip, full stone-guard underbody.' },
          ],
          interior: [
            { src: '/images/models/mirage-recliners/interior-01.jpg', caption: 'Fridge / microwave column beside the ensuite entry — black appliances, gloss white cabinetry, wood-look flooring.' },
            { src: '/images/models/mirage-recliners/interior-02.jpg', caption: 'Galley looking into the lounge — Dometic cassette air-con overhead, gloss white uppers, dark drawers, a recliner chair just catching the edge of frame.' },
            { src: '/images/models/mirage-recliners/interior-03.jpg', caption: 'Twin recliner chairs with shared side-table — bucket seats, tall headrests, fridge tower and galley on the right.' },
          ],
        },
      },
    ],
  },
  {
    slug: 'x-master',
    name: 'Sahara X-Master',
    type: 'Off-Road',
    order: 2,
    tagline: 'Explore the wild without leaving comfort behind.',
    description:
      'The X-Master is your ultimate companion for off-grid adventures. Matte-black body, checker-plate armor, tandem off-road suspension and a fully stocked electrical bay mean you can head well past the blacktop and stay out for weeks. Pick between the compact Standard 196 single-body tourer or the 226 Slide-Out — where a roadside wall extrudes at camp to double the living space.',
    heroImage: '/images/models/x-master-slideout/hero.jpg',
    highlights: ['Toilet', 'Shower', 'Laundry', 'Kitchenette', 'Off-Grid'],
    ctaLabel: 'Enquire about the X-Master',
    variants: [
      {
        key: 'standard',
        label: 'Standard',
        shortLabel: 'Standard',
        badge: 'X-Master 196',
        blurb: 'Compact single-body off-road tourer — tandem axle, full ensuite, designed to go anywhere.',
        blueprint: '/images/blueprints/x-master-standard.svg',
        heroImage: '/images/models/x-master-standard/hero.jpg',
        description:
          'The X-Master 196 Standard is the tight, trail-ready version of the range. A single-body off-road tourer on a tandem off-road chassis, with every serious go-anywhere feature you\'d expect — DO35-style hitch, stone-guard nose, checker-plate armor along the underbody, reinforced coil suspension and a full external electrical bay. Inside it\'s every bit as finished as the on-road vans: cafe dinette, 4-burner cooktop with oven, full rear ensuite with laundry, and a private queen bed at the back.',
        features: [
          'Matte-black body with deep-red and burgundy graphics',
          'Tandem off-road suspension with coil + shocks',
          'DO35-style off-road hitch and stone-guard nose cone',
          'Full checker-plate armor along the underbody',
          'External electrical bay — Projecta PM335C DC-DC charger, TechWorld fuse board',
          'Dometic cassette air-conditioner and Sirocco ceiling fan',
          'Cafe-style L-dinette with fixed table — converts for an extra sleep',
          'Full galley — 4-burner gas cooktop with oven, stainless sink, stone benchtop',
          'Rear private queen bedroom with wrap-around overhead storage',
          'Full ensuite with separate shower, cassette toilet and marble-look vanity',
          'External slide-out kitchen shelf for cooking in camp',
          '"Leak Tight RVs Tested" certified — water-sealed for long trips',
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
        gallery: {
          exterior: [
            { src: '/images/models/x-master-standard/exterior-01.jpg', caption: 'Rear-quarter view — "X-Master 196" badge, tandem off-road suspension, low-profile stance.' },
            { src: '/images/models/x-master-standard/exterior-02.jpg', caption: 'Rear door panel — Sahara crest, LED tail cluster, full checker-plate underbody.' },
            { src: '/images/models/x-master-standard/exterior-03.jpg', caption: 'Roadside profile — awning rail, large tinted windows, burgundy accent graphics.' },
            { src: '/images/models/x-master-standard/exterior-04.jpg', caption: 'External slide-out kitchen shelf deployed — stainless sink and gas cooktop for cooking in camp.' },
            { src: '/images/models/x-master-standard/exterior-05.jpg', caption: 'Awning-side view — entry door, external speakers and reverse-camera housing.' },
            { src: '/images/models/x-master-standard/exterior-06.jpg', caption: 'Front-quarter — stone-guard nose, jerry-can mounts and external BBQ shelf.' },
            { src: '/images/models/x-master-standard/exterior-07.jpg', caption: 'Kitchen-shelf wide view — slide-out galley fully extended with the BBQ cover in place.' },
            { src: '/images/models/x-master-standard/exterior-08.jpg', caption: 'Off-road hitch and drawbar — DO35-style coupling with dropped spare-wheel mount.' },
            { src: '/images/models/x-master-standard/exterior-09.jpg', caption: 'Electrical bay — Projecta PM335C DC-DC charger, TechWorld fuse board, hot-water and gas switches.' },
          ],
          interior: [
            { src: '/images/models/x-master-standard/interior-01.jpg', caption: 'Galley detail — gloss light-grey uppers, dark gloss drawers, stone benchtop with under-bench oven.' },
            { src: '/images/models/x-master-standard/interior-02.jpg', caption: 'Cafe dinette looking back to the bedroom — Sahara-branded leather-look cushions and a stone-look tabletop.' },
            { src: '/images/models/x-master-standard/interior-03.jpg', caption: 'Rear queen bedroom — padded headboard, overhead storage, bedside shelves with reading lights.' },
            { src: '/images/models/x-master-standard/interior-04.jpg', caption: 'Looking through from the bed — galley left, cafe dinette right, entry door to the rear.' },
            { src: '/images/models/x-master-standard/interior-05.jpg', caption: 'Galley looking toward the bedroom — 4-burner cooktop with oven, large stainless sink, skylight overhead.' },
            { src: '/images/models/x-master-standard/interior-06.jpg', caption: 'Bedroom from the galley — privacy door to the ensuite, external window, quilted mattress.' },
            { src: '/images/models/x-master-standard/interior-07.jpg', caption: 'Ensuite — cassette toilet, marble-look vanity with black vessel sink and drawer storage.' },
            { src: '/images/models/x-master-standard/interior-08.jpg', caption: 'Ensuite wide — stone-look wall tiles, overhead mirror cabinets and a privacy window.' },
            { src: '/images/models/x-master-standard/interior-09.jpg', caption: 'Separate shower stall — matte-black slide rail, chrome riser and low-step shower tray.' },
            { src: '/images/models/x-master-standard/interior-10.jpg', caption: 'Shower looking in — frosted glass privacy panel with a matching matte-black frame.' },
            { src: '/images/models/x-master-standard/interior-11.jpg', caption: 'Dinette from the rear — fridge/microwave tower, Sahara-branded upholstery, panoramic window.' },
            { src: '/images/models/x-master-standard/interior-12.jpg', caption: 'Ensuite rear view — mirror-fronted upper cabinetry and marble-look benchtop with vessel sink.' },
            { src: '/images/models/x-master-standard/interior-13.jpg', caption: 'Fridge / microwave column with entry door — black appliances against bright white cabinetry.' },
            { src: '/images/models/x-master-standard/interior-14.jpg', caption: 'Kitchen rear view — full bench, drawer stack, window over the sink.' },
            { src: '/images/models/x-master-standard/interior-15.jpg', caption: 'Galley wide — gloss uppers, 4-burner cooktop with oven, black sink and mixer tap.' },
          ],
        },
      },
      {
        key: 'slideout',
        label: 'Slide-Out',
        shortLabel: 'Slide-Out',
        badge: 'X-Master 226',
        blurb: 'Extended 226 body with a side wall that extrudes at camp — markedly wider inside when the slide is deployed.',
        blueprint: '/images/blueprints/x-master-slideout.svg',
        heroImage: '/images/models/x-master-slideout/hero.jpg',
        description:
          'The X-Master 226 Slide-Out is the room-to-breathe version of the same off-road tourer. A roadside wall section extrudes at camp to markedly widen the living area — a larger U-lounge with a slide-back table, more floor space for dressing, and the galley no longer sharing a walkway. The same off-road chassis, the same fit-out quality, the same electrical grunt — just a bigger footprint when you\'re settled in.',
        features: [
          'Extending slide-out wall — markedly wider interior when deployed',
          'Larger U-shaped lounge with slide-in dining table',
          'Stealth black-on-black matte exterior with silver-grey accents',
          'Tandem off-road suspension with coil + shocks',
          'DO35-style off-road hitch and stone-guard nose cone',
          'External electrical bay with lithium-capable DC-DC charger',
          'Full galley — 4-burner cooktop with oven, stone benchtop, large sink',
          'Front private queen bedroom with wardrobe column',
          'Mid-ship full ensuite with separate shower, cassette toilet and vanity',
          'Marble-look vanity, black vessel sink and matte-black tapware',
          'Twin Dometic cassette air-con zones — front cabin and main living',
          'Large pop-top skylights over the bed and main lounge',
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
        gallery: {
          exterior: [
            { src: '/images/models/x-master-slideout/exterior-01.jpg', caption: 'Roadside profile — "X-Master 226" badge, full matte-black finish with silver-grey accent panels.' },
            { src: '/images/models/x-master-slideout/exterior-02.jpg', caption: 'Off-side rear quarter — tandem off-road wheels, full checker-plate armor, awning rail.' },
            { src: '/images/models/x-master-slideout/exterior-03.jpg', caption: 'Roadside front view — entry door, pull-out step, external storage hatches.' },
            { src: '/images/models/x-master-slideout/exterior-04.jpg', caption: 'Rear view — Sahara crest lightbox, LED tail cluster, full-width reinforced bumper.' },
            { src: '/images/models/x-master-slideout/exterior-05.jpg', caption: 'Front-quarter at the yard — twin gas-bottle hitch, drawbar and stone-guard nose.' },
            { src: '/images/models/x-master-slideout/exterior-06.jpg', caption: 'Parked alongside the Sahara blue workshop van — the 226 silhouette in context.' },
          ],
          interior: [
            { src: '/images/models/x-master-slideout/interior-01.jpg', caption: 'Mid-ship ensuite — cassette toilet, drawer storage, marble-look vanity with vessel sink.' },
            { src: '/images/models/x-master-slideout/interior-02.jpg', caption: 'Ensuite wide — full-height mirror, matte-black mixer tap, privacy window.' },
            { src: '/images/models/x-master-slideout/interior-03.jpg', caption: 'Separate shower stall — chrome slide rail, wet-wall panels, ambient overhead light.' },
            { src: '/images/models/x-master-slideout/interior-04.jpg', caption: 'Wardrobe / cabinet column beside the bed — plenty of hanging space and deep drawer storage.' },
            { src: '/images/models/x-master-slideout/interior-05.jpg', caption: 'Front queen bedroom — mattress with the storage base lifted, bedside cabinets to either side.' },
            { src: '/images/models/x-master-slideout/interior-06.jpg', caption: 'U-lounge with the slide deployed — big enough for four adults plus a slide-in table.' },
            { src: '/images/models/x-master-slideout/interior-07.jpg', caption: 'Deployed lounge wide — wrap-around cushions, extra skylight and natural light from both sides.' },
            { src: '/images/models/x-master-slideout/interior-08.jpg', caption: 'Bedroom from the foot of the bed — extra headroom through the pop-top skylight.' },
            { src: '/images/models/x-master-slideout/interior-09.jpg', caption: 'Galley detail — matte-grey uppers, dark gloss lowers, stone benchtop with under-bench oven.' },
            { src: '/images/models/x-master-slideout/interior-10.jpg', caption: 'Lounge looking back to the bedroom — slide-out wall visible on the right, galley on the left.' },
            { src: '/images/models/x-master-slideout/interior-11.jpg', caption: 'Galley looking toward the bedroom — long bench run, big sink, oven and cooktop.' },
            { src: '/images/models/x-master-slideout/interior-12.jpg', caption: 'Lounge corner — Sahara-branded leather-look cushions, slide-in table, panoramic window.' },
            { src: '/images/models/x-master-slideout/interior-13.jpg', caption: 'Ensuite looking in — vanity, toilet and shower aligned along a single wall for easy use.' },
            { src: '/images/models/x-master-slideout/interior-14.jpg', caption: 'Bedroom showing the ensuite doorway — mid-ship placement keeps the walkway short.' },
            { src: '/images/models/x-master-slideout/interior-15.jpg', caption: 'Kitchen from the lounge — fridge/microwave tower, entry door, wood-look flooring.' },
            { src: '/images/models/x-master-slideout/interior-16.jpg', caption: 'Bedroom from the hall — privacy sliding door, large wall mirror and built-in wardrobe.' },
            { src: '/images/models/x-master-slideout/interior-17.jpg', caption: 'Ensuite detail — marble-look vanity, stone-look wall tiles, chrome and matte-black fittings.' },
            { src: '/images/models/x-master-slideout/interior-18.jpg', caption: 'Bedroom under the pop-top — oversized skylight floods the space with natural light.' },
            { src: '/images/models/x-master-slideout/interior-19.jpg', caption: 'Vanity close-up — vessel sink, mixer tap, drawer stack and shelving to either side.' },
          ],
        },
      },
    ],
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

export function getPrimaryVariant(model) {
  return model?.variants?.[0] ?? null
}

export function getVariantByKey(model, key) {
  if (!model?.variants) return null
  return model.variants.find((v) => v.key === key) ?? model.variants[0]
}

// Normalise a single-variant model's legacy `gallery: string[]` into the
// variant-aware `{ exterior, interior }` shape so the ModelPage only needs one
// rendering path.
export function normaliseGallery(model) {
  if (!model) return { exterior: [], interior: [] }
  if (Array.isArray(model.gallery)) {
    return {
      exterior: [],
      interior: model.gallery.map((src) => ({ src, caption: '' })),
    }
  }
  return model.gallery ?? { exterior: [], interior: [] }
}
