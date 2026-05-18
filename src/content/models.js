// The four models in the Sahara range. Each model carries a `buildTypes` list
// (Standard / Slide-Out) and a flat `floorPlans` list — one entry per
// (build, size, lounge, bed) combination. The ModelPage configurator derives
// its build / size / variant steps from `floorPlans`; galleries, features and
// specs live once per model.
export const SIZE_LABELS = {
  '16-6': "16'6",
  '17-6': "17'6",
  '18-6': "18'6",
  '19-6': "19'6",
  '20-6': "20'6",
  '21-6': "21'6",
  '22-6': "22'6",
}

// Per-size build sheets. Chassis, suspension, brakes, battery and solar
// genuinely change between sizes, so the model page looks these up by
// `activeSize` and falls back to the model-level `technicalSpecs` / `specs`
// for sizes that aren't covered (e.g. 16'6, and the X-Master Slide-Out's
// chassis package which sits outside the standard size grid).

// Standard inclusions baseline shared across Mirage, Dune and Horizon. The
// 16'6 body ships a wall-mount washer; 17'6 and above get a top loader. Pass
// the matching value via `washer`.
const commonBaseline = ({ washer = 'Top loader 3.2kg' } = {}) => ({
  solarPower: [
    { label: 'Solar Panels', value: '2 x 210W (with regulator)' },
    { label: 'Lithium Battery', value: '1 x 150Ah' },
    { label: 'Charger', value: 'Projecta PM335C' },
  ],
  electrical: [
    { label: 'LED Lighting Throughout', value: 'Included' },
    { label: 'LED Reading Lights', value: '2 — bedroom and bunks' },
    { label: 'TV', value: '24" flatscreen' },
    { label: 'Sound System', value: 'CD/DVD radio player' },
    { label: 'Wineguard TV Antenna', value: 'Included' },
    { label: 'Rooftop Digital Amplified TV Antenna', value: 'Included' },
    { label: 'Reversing Camera and Car Monitor Kit', value: 'Included' },
    { label: 'Double Powerpoints Throughout', value: 'Included' },
    { label: '12-Pin Flat Plug and Anderson Plug', value: 'Included' },
    { label: 'Break-Away Switch', value: 'Included' },
    { label: 'LED Side Markers, Clearance and Tail Lights', value: 'Included' },
    { label: 'Water Tank Gauges', value: 'Included' },
    { label: '240V Inlet/Outlet with Circuit Breaker', value: 'Included' },
  ],
  plumbing: [
    { label: 'Gas/Electric Hot Water System', value: 'Included' },
    { label: '12V Water Pump', value: '1' },
    { label: 'Thetford Cassette Toilet', value: 'Included' },
    { label: 'Kitchen Sink', value: 'Included' },
    { label: 'Ensuite Sink', value: 'Round or square' },
    { label: 'Flick Mix Tap in Ensuite', value: 'Included' },
    { label: 'Shower Rose', value: 'Included' },
    { label: 'Mains Pressure Inlet', value: 'Included' },
    { label: 'Tempering Valve', value: 'Included' },
    { label: 'Lockable Water Fillers', value: 'Included' },
    { label: 'External Gas Bayonet', value: 'Included' },
    { label: 'Fresh Water Tanks', value: '2 x 90L' },
    { label: 'Grey Water Tank', value: '1 x 90L' },
    { label: '12V Fan Hatch to Shower and Toilet', value: 'Included' },
  ],
  appliances: [
    { label: 'Fridge', value: 'Dometic RUA6408X — 180L 3-way' },
    { label: 'Cooktop', value: 'Swift mini grill — gas / electric' },
    { label: 'Microwave', value: 'Included' },
    { label: 'Air Conditioner', value: 'Dometic FreshJet Pro' },
    { label: '12V Rangehood', value: 'Included' },
    { label: 'Washing Machine', value: washer },
  ],
  external: [
    { label: 'Main Door', value: 'R/H black' },
    { label: 'Tunnel Boot', value: 'Front with 2 access doors' },
    { label: 'Tunnel Boot Light', value: '1 x LED' },
    { label: 'External Annexe Lights', value: '2 x LED' },
    { label: 'Work Lights', value: '2 — front and rear' },
    { label: 'External Speakers', value: '3' },
    { label: 'Picnic Table', value: 'Black' },
    { label: 'Premium Roll-Out Awning', value: 'Included' },
    { label: 'Double Glazed Windows', value: 'Included' },
    { label: 'Power Hatches', value: '2' },
    { label: 'Mini Hatches', value: '2' },
    { label: 'External Access Doors', value: 'Included' },
    { label: 'Premium Decals', value: 'Included' },
    { label: 'Security Mesh Locking Door', value: 'Included' },
    { label: 'Aluminium Wheel Spat', value: 'Included' },
    { label: 'Checker Plate', value: 'Front, rear and sides' },
    { label: 'Composite Cladding', value: 'Included' },
    { label: 'Full Insulation', value: 'Included' },
    { label: 'Grab Handle with Lights', value: 'Included' },
    { label: 'Pull-Out Aluminium Step', value: 'Included' },
    { label: 'One-Piece External Aluminium Roof', value: 'Included' },
    { label: 'Small Toolbox', value: 'Optional' },
  ],
  internal: [
    { label: 'Frame', value: 'Hybrid timber / PVC' },
    { label: 'Wall Panels', value: 'PVC waterproof ply' },
    { label: 'Flooring', value: 'Premium vinyl on honeycomb' },
    { label: 'Upholstery', value: 'Premium' },
    { label: 'Innerspring Mattress', value: 'Included' },
    { label: 'Lift-Up Slatted Bed Base', value: 'Included' },
    { label: 'Lift-Up Under-Bed Storage', value: 'Included' },
    { label: 'Cooktop with Laminex Lid', value: 'Included' },
    { label: 'Splashback in Kitchen and Ensuite', value: 'Included' },
    { label: 'Splashback and Laminate Benchtops', value: 'Included' },
    { label: 'Soft-Close Drawers', value: 'Included' },
    { label: 'Push/Pull Handles', value: 'Included' },
    { label: 'Latches with Soft-Open Gas Struts', value: 'Included' },
    { label: 'Struts to All Overhead Cupboards', value: 'Included' },
    { label: 'TV Bracket', value: 'Included' },
    { label: 'Internal Speakers', value: '2' },
    { label: 'Mirror in Ensuite', value: 'Included' },
    { label: 'Glass Door Shower', value: 'Included' },
    { label: 'Full-Height Fibreglass Shower', value: 'Included' },
    { label: 'Towel Rail', value: '1' },
    { label: 'Toilet Roll Holder', value: '1' },
    { label: 'Internal Grab Handle', value: 'Included' },
    { label: 'Smoke Detector', value: 'Included' },
    { label: 'Fire Extinguisher', value: 'Included' },
  ],
})

// X-Master inclusions baseline. Layered on `commonBaseline` with the X-Master
// specifics (heavier solar/battery, slide-out BBQ, 3-in-1 microwave/airfryer,
// woodbox / entertainment box / stone guard / high X-plate / external toolbox,
// AU Focus diesel heater, 12V fans + Sahara CaraFan).
const xMasterCommonBaseline = ({ washer = 'Top loader 3.2kg' } = {}) => {
  const base = commonBaseline({ washer })
  return {
    solarPower: [
      { label: 'Solar Panels', value: '4 x 210W (with regulator)' },
      { label: 'Lithium Batteries', value: '2 x 200Ah (400Ah total)' },
      { label: 'Inverter', value: '3000W' },
      { label: 'Charger', value: 'Projecta PM335C' },
    ],
    electrical: base.electrical,
    plumbing: [
      ...base.plumbing,
      { label: 'AU Focus Diesel Heater', value: 'Included' },
    ],
    appliances: [
      ...base.appliances,
      { label: 'Swift Slide-Out BBQ', value: 'Included' },
      { label: '3-in-1 Microwave / Airfryer', value: 'Included' },
    ],
    external: [
      ...base.external,
      { label: 'Stone Guard', value: 'Included' },
      { label: 'Woodbox', value: 'Included' },
      { label: 'Entertainment Box', value: 'Included' },
      { label: 'High X-Plate Checker Plate', value: 'Included' },
      { label: 'External Toolbox', value: 'Included' },
    ],
    internal: [
      ...base.internal,
      { label: '12V Fans', value: '2' },
      { label: 'Sahara CaraFan', value: 'Included' },
    ],
  }
}

// X-Master (off-road) — per-size specs.
const X_MASTER_SPECS_BY_SIZE = {
  '17-6': { length: "17'6", suspension: '3.0T independent coil-spring, single axle', water: '190L (2 x 95L)', warranty: '5 yr structural' },
  '18-6': { length: "18'6", suspension: '3.0T independent coil-spring, single axle', water: '190L (2 x 95L)', warranty: '5 yr structural' },
  '19-6': { length: "19'6", tare: '2720 kg', gtm: '3329 kg', atm: '3500 kg', suspension: '3.5T independent coil-spring, dual axle', water: '190L (2 x 95L)', warranty: '5 yr structural' },
  '20-6': { length: "20'6", suspension: '3.5T independent coil-spring, dual axle', water: '190L (2 x 95L)', warranty: '5 yr structural' },
  '22-6': { length: "22'6", suspension: '3.5T independent coil-spring, dual axle', water: '190L (2 x 95L)', warranty: '5 yr structural' },
}

// X-Master per-size build sheet. Chassis varies size-to-size (real
// suspension / drawbar / tank differences); the six non-chassis sections
// come from `xMasterCommonBaseline` so every size shows the same Excel
// inclusions list. Washing machine flips wall-mount on 16'6 and top-loader
// on 17'6 and above per the Excel note.
const xMasterTech = ({ chassis, washer = 'Top loader 3.2kg' }) => {
  const base = xMasterCommonBaseline({ washer })
  return [
    { id: 'chassis', label: 'Chassis', rows: chassis },
    { id: 'solar-power', label: 'Solar & Power', rows: base.solarPower },
    { id: 'electrical', label: 'Electrical', rows: base.electrical },
    { id: 'plumbing', label: 'Plumbing', rows: base.plumbing },
    { id: 'appliances', label: 'Appliances', rows: base.appliances },
    { id: 'external', label: 'External', rows: base.external },
    { id: 'internal', label: 'Internal', rows: base.internal },
  ]
}

// X-Master chassis rows. Suspension and jerry can count step up at 19'6
// ("196") and above per the manufacturer spec sheet — smaller sizes are
// 3.0T single-axle with one jerry can; 19'6 and up are 3.5T dual-axle with
// two. Everything else is uniform across sizes.
const xMasterChassis = ({ suspension, jerryCanHolders }) => [
  { label: 'Trailer Coupling', value: 'DO35 3.5T coupling' },
  { label: 'A-Frame', value: '6" with stone guard' },
  { label: 'Raiser', value: '2"' },
  { label: 'Main Chassis Frame', value: '3.2mm super-gal — Australian made, Australian steel' },
  { label: 'Suspension', value: suspension },
  { label: 'Brakes', value: '12" electric' },
  { label: 'Rims & Tyres', value: '15" — LT265/75R15' },
  { label: 'Wheel Arches', value: 'Galvanised' },
  { label: 'Water Tanks', value: '2 x 95L freshwater' },
  { label: 'Grey Water Tank', value: 'Included' },
  { label: 'Tank Protection', value: 'Galvanised sheet' },
  { label: 'Toolbox', value: 'On A-frame — with gas bottle storage' },
  { label: 'Gas Bottles', value: '2 x 9kg' },
  { label: 'Jerry Can Holders', value: jerryCanHolders },
  { label: 'Rear Bumper', value: '3-bar galvanised' },
  { label: 'Entry Step', value: 'Single alloy' },
  { label: 'Quick Drop Corner Stands', value: 'Included' },
]

const X_MASTER_CHASSIS_SINGLE_AXLE = xMasterChassis({
  suspension: '3.0T independent coil-spring, single axle',
  jerryCanHolders: '1',
})

const X_MASTER_CHASSIS_DUAL_AXLE = xMasterChassis({
  suspension: '3.5T independent coil-spring, dual axle',
  jerryCanHolders: '2',
})

const X_MASTER_CHASSIS_BY_SIZE = {
  '16-6': X_MASTER_CHASSIS_SINGLE_AXLE,
  '17-6': X_MASTER_CHASSIS_SINGLE_AXLE,
  '18-6': X_MASTER_CHASSIS_SINGLE_AXLE,
  '19-6': X_MASTER_CHASSIS_DUAL_AXLE,
  '20-6': X_MASTER_CHASSIS_DUAL_AXLE,
  '22-6': X_MASTER_CHASSIS_DUAL_AXLE,
}

const X_MASTER_TECH_SPECS_BY_SIZE = {
  '16-6': xMasterTech({ chassis: X_MASTER_CHASSIS_BY_SIZE['16-6'], washer: 'Wall mount' }),
  '17-6': xMasterTech({ chassis: X_MASTER_CHASSIS_BY_SIZE['17-6'] }),
  '18-6': xMasterTech({ chassis: X_MASTER_CHASSIS_BY_SIZE['18-6'] }),
  '19-6': xMasterTech({ chassis: X_MASTER_CHASSIS_BY_SIZE['19-6'] }),
  '20-6': xMasterTech({ chassis: X_MASTER_CHASSIS_BY_SIZE['20-6'] }),
  '22-6': xMasterTech({ chassis: X_MASTER_CHASSIS_BY_SIZE['22-6'] }),
}

// Mirage (on-road tourer) — per-size specs.
const MIRAGE_SPECS_BY_SIZE = {
  '18-6': { length: "18'6", suspension: 'Roller rocker', water: '190L (2 x 95L)', warranty: '5 yr structural' },
  '19-6': { length: "19'6", suspension: 'Roller rocker', water: '190L (2 x 95L)', warranty: '5 yr structural' },
  '20-6': { length: "20'6", suspension: 'Roller rocker', water: '190L (2 x 95L)', warranty: '5 yr structural' },
  '22-6': { length: "22'6", suspension: 'Roller rocker', water: '190L (2 x 95L)', warranty: '3 yr structural' },
}

// Mirage per-size build sheet. Chassis (with size-specific raiser) is kept
// as the only Mirage-specific block; the other six categories come from
// `commonBaseline`. Per-size internal/electrical extras layer on top for
// real layout variation (concertina door, slide-out, second TV, oven).
const mirageTech = ({ raiser, washer = 'Top loader 3.2kg', extraInternal = [], extraElectrical = [] }) => {
  const base = commonBaseline({ washer })
  return [
    {
      id: 'chassis',
      label: 'Chassis',
      rows: [
        { label: 'Trailer Coupling', value: '3.5T ball coupling' },
        { label: 'A-Frame', value: '6"' },
        { label: 'Raiser', value: raiser },
        { label: 'Main Chassis Frame', value: '3.2mm super-gal — Australian made, Australian steel' },
        { label: 'Cross Members', value: 'Box tube' },
        { label: 'Suspension', value: 'Roller rocker' },
        { label: 'Axles', value: 'Tandem' },
        { label: 'Brakes', value: '10" electric' },
        { label: 'Rims & Tyres', value: '15" — 235/75R15' },
        { label: 'Wheel Arches', value: 'Galvanised' },
        { label: 'Water Tanks', value: '2 x 95L freshwater' },
        { label: 'Tank Protection', value: 'Galvanised sheet' },
        { label: 'Gas Bottles', value: '2 x 9kg' },
        { label: 'Rear Bumper', value: '3-bar galvanised' },
        { label: 'Entry Step', value: 'Single alloy' },
        { label: 'Quick Drop Corner Stands', value: 'Included' },
        { label: 'Tap on Drawbar', value: 'Included' },
      ],
    },
    { id: 'solar-power', label: 'Solar & Power', rows: base.solarPower },
    { id: 'electrical', label: 'Electrical', rows: [...base.electrical, ...extraElectrical] },
    { id: 'plumbing', label: 'Plumbing', rows: base.plumbing },
    { id: 'appliances', label: 'Appliances', rows: base.appliances },
    { id: 'external', label: 'External', rows: base.external },
    { id: 'internal', label: 'Internal', rows: [...base.internal, ...extraInternal] },
  ]
}

const MIRAGE_TECH_SPECS_BY_SIZE = {
  '16-6': mirageTech({ raiser: '2"', washer: 'Wall mount' }),
  '17-6': mirageTech({ raiser: '2"' }),
  '18-6': mirageTech({ raiser: '2"' }),
  '19-6': mirageTech({ raiser: '2"' }),
  '20-6': mirageTech({
    raiser: '4"',
    extraInternal: [{ label: 'Concertina Door', value: 'Included' }],
    extraElectrical: [{ label: 'Second TV', value: '32" LCD' }],
  }),
  '22-6': mirageTech({
    raiser: '2"',
    extraInternal: [
      { label: 'Slide-Out', value: 'Electric — queen bedroom' },
      { label: 'Oven', value: 'Included' },
    ],
    extraElectrical: [{ label: 'Second TV', value: '30" LCD' }],
  }),
}

// Dune (semi-off-road) — per-size specs.
const DUNE_SPECS_BY_SIZE = {
  '18-6': { length: "18'6", suspension: '3.3T independent coil-spring, dual axle', water: '190L (2 x 95L)', warranty: '3 yr structural' },
  '19-6': { length: "19'6", suspension: '3.3T independent coil-spring, dual axle', water: '190L (2 x 95L)', warranty: '3 yr structural' },
  '20-6': { length: "20'6", suspension: '3.3T independent coil-spring, dual axle', water: '190L (2 x 95L)', warranty: '3 yr structural' },
  '22-6': { length: "22'6", suspension: '3.3T independent coil-spring, dual axle', water: '190L (2 x 95L)', warranty: '3 yr structural' },
}

// Dune per-size build sheet. Chassis stays Dune-specific (DO35 coupling,
// independent coil-spring suspension, jerry can holder); the six non-chassis
// sections come from `commonBaseline` so the Excel inclusions list shows on
// every size. Washer flips wall-mount on 16'6 and top-loader from 17'6 up.
const duneTech = ({ washer = 'Top loader 3.2kg' } = {}) => {
  const base = commonBaseline({ washer })
  return [
    {
      id: 'chassis',
      label: 'Chassis',
      rows: [
        { label: 'Trailer Coupling', value: 'DO35 3.5T coupling' },
        { label: 'A-Frame', value: '6"' },
        { label: 'Raiser', value: '4"' },
        { label: 'Main Chassis Frame', value: '3.2mm super-gal — Australian made, Australian steel' },
        { label: 'Suspension', value: '3.3T independent coil-spring, dual axle' },
        { label: 'Brakes', value: '10" electric' },
        { label: 'Rims & Tyres', value: '15" — 235/75R15' },
        { label: 'Wheel Arches', value: 'Galvanised' },
        { label: 'Water Tanks', value: '2 x 95L freshwater' },
        { label: 'Grey Water Tank', value: 'Included' },
        { label: 'Tank Protection', value: 'Galvanised sheet' },
        { label: 'Toolbox', value: 'Alloy, on A-frame — with gas bottle storage' },
        { label: 'Gas Bottles', value: '2 x 9kg' },
        { label: 'Jerry Can Holder', value: 'Included' },
        { label: 'Rear Bumper', value: '3-bar galvanised' },
        { label: 'Entry Step', value: 'Single alloy' },
      ],
    },
    { id: 'solar-power', label: 'Solar & Power', rows: base.solarPower },
    { id: 'electrical', label: 'Electrical', rows: base.electrical },
    { id: 'plumbing', label: 'Plumbing', rows: base.plumbing },
    { id: 'appliances', label: 'Appliances', rows: base.appliances },
    { id: 'external', label: 'External', rows: base.external },
    { id: 'internal', label: 'Internal', rows: base.internal },
  ]
}

const DUNE_TECH_SPECS_BY_SIZE = {
  '16-6': duneTech({ washer: 'Wall mount' }),
  '17-6': duneTech(),
  '18-6': duneTech(),
  '19-6': duneTech(),
  '20-6': duneTech(),
  '22-6': duneTech(),
}

// Shared "available upgrades" list shown on every production model page
// (X-Master, Mirage, Dune, Horizon). Custom builds page does not share this
// component and is intentionally excluded.
const AVAILABLE_UPGRADES = [
  'Additional solar panels',
  'Solar blanket connection',
  'Battery upgrade',
  'Compressor fridge with DC-DC charger',
  'Diesel heater',
  'Fridge upgrade to 220L',
  'Oven',
  'Front-loading washing machine',
  'Black Pack — black sinks, taps, shower',
  'Electronic sway control',
  'Annexe',
  'Anti-flap annexe bars',
  'Bike rack',
]

export const models = [
  {
    slug: 'x-master',
    name: 'Sahara X-Master',
    type: 'Off-Road',
    order: 1,
    tagline: 'Explore the wild without leaving comfort behind.',
    description:
      'The X-Master is your ultimate companion for off-grid adventures. Matte-black body, checker-plate armor, tandem off-road suspension and a fully stocked electrical bay mean you can head well past the blacktop and stay out for weeks. Pick between the compact Standard 196 single-body tourer or the 226 Slide-Out — where a roadside wall extrudes at camp to double the living space.',
    heroImage: '/images/hero/hero-xmaster.png',
    highlights: ['Toilet', 'Shower', 'Laundry', 'Kitchenette', 'Off-Grid'],
    ctaLabel: 'Enquire about the X-Master',
    inclusions: { addOns: AVAILABLE_UPGRADES },
    // Per-size pill values + full build sheets, keyed by the size the
    // configurator selects. Sizes not listed here fall back to the model-level
    // `technicalSpecs` and `specs`.
    specsBySize: X_MASTER_SPECS_BY_SIZE,
    technicalSpecsBySize: X_MASTER_TECH_SPECS_BY_SIZE,
    // Full manufacturer build sheet — used as the fallback when no per-size
    // data exists. Mirrors the 22'6 build with the Excel inclusions baseline.
    technicalSpecs: xMasterTech({ chassis: X_MASTER_CHASSIS_BY_SIZE['22-6'] }),
    specs: {
      sleeps: 'Up to 6',
      length: 'TBC',
      tare: 'TBC',
      atm: 'TBC',
      suspension: '3.0T independent coil-spring, single axle',
      water: 'TBC',
      warranty: 'TBC',
    },
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
    gallery: {
      exterior: [
        { src: '/images/models/x-master-standard/exterior-01.jpg', caption: 'Rear-quarter view — "X-Master 196" badge, tandem off-road suspension, low-profile stance.' },
        { src: '/images/models/x-master-standard/exterior-02.jpg', caption: 'Rear door panel — Sahara crest, LED tail cluster, full checker-plate underbody.' },
        { src: '/images/models/x-master-standard/exterior-03.jpg', caption: 'Roadside profile — awning rail, large tinted windows, burgundy accent graphics.' },
        { src: '/images/models/x-master-standard/exterior-04.jpg', caption: 'External slide-out kitchen shelf deployed — stainless sink and gas cooktop for cooking in camp.' },
        { src: '/images/models/x-master-standard/exterior-05.jpg', caption: 'Awning-side view — entry door, external speakers and reverse-camera housing.' },
        { src: '/images/models/x-master-standard/exterior-06.jpg', caption: 'Front-quarter — stone-guard nose, jerry-can mounts and external BBQ shelf.' },
        { src: '/images/models/x-master-standard/exterior-07.jpg', caption: 'Kitchen-shelf wide view — slide-out galley fully extended with the BBQ cover in place.' },
        { src: '/images/models/x-master-standard/exterior-09.jpg', caption: 'Electrical bay — Projecta PM335C DC-DC charger, TechWorld fuse board, hot-water and gas switches.' },
        { src: '/images/models/x-master-slideout/exterior-01.jpg', caption: 'Slide-Out roadside profile — "X-Master 226" badge, full matte-black finish with silver-grey accent panels.' },
        { src: '/images/models/x-master-slideout/exterior-02.jpg', caption: 'Slide-Out off-side rear quarter — tandem off-road wheels, full checker-plate armor, awning rail.' },
        { src: '/images/models/x-master-slideout/exterior-04.jpg', caption: 'Slide-Out rear view — Sahara crest lightbox, LED tail cluster, full-width reinforced bumper.' },
        { src: '/images/models/x-master-slideout/exterior-05.jpg', caption: 'Slide-Out front-quarter at the yard — twin gas-bottle hitch, drawbar and stone-guard nose.' },
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
        { src: '/images/models/x-master-standard/interior-11.jpg', caption: 'Dinette from the rear — fridge/microwave tower, Sahara-branded upholstery, panoramic window.' },
        { src: '/images/models/x-master-standard/interior-15.jpg', caption: 'Galley wide — gloss uppers, 4-burner cooktop with oven, black sink and mixer tap.' },
        { src: '/images/models/x-master-slideout/interior-06.jpg', caption: 'Slide-Out U-lounge with the slide deployed — big enough for four adults plus a slide-in table.' },
        { src: '/images/models/x-master-slideout/interior-07.jpg', caption: 'Slide-Out deployed lounge wide — wrap-around cushions, extra skylight and natural light from both sides.' },
        { src: '/images/models/x-master-slideout/interior-05.jpg', caption: 'Slide-Out front queen bedroom — mattress with the storage base lifted, bedside cabinets to either side.' },
        { src: '/images/models/x-master-slideout/interior-10.jpg', caption: 'Slide-Out lounge looking back to the bedroom — slide-out wall visible on the right, galley on the left.' },
      ],
    },
    buildTypes: [
      { key: 'standard', label: 'Standard', badge: '', blurb: 'Compact single-body off-road tourer — tandem axle, full ensuite, designed to go anywhere.', blueprint: '/images/blueprints/x-master-standard.webp', available: true },
      { key: 'slideout', label: 'Slide-Out', badge: "22'6 size only", blurb: 'Extended body with a roadside wall that extrudes at camp — markedly wider inside when deployed.', blueprint: '/images/blueprints/x-master-slideout.webp', available: true },
    ],
    // Floor plans are the single source of truth for the configurator. Each
    // entry is one (build, size, lounge, bed) combination; the picker derives
    // its build / size / variant options from this list. `lounge` and `bed`
    // are null where that size offers no such choice.
    floorPlans: [
      { build: 'standard', size: '17-6', lounge: null, bed: null, image: '/images/blueprints/x-master-standard-17-6.png' },
      { build: 'standard', size: '18-6', lounge: null, bed: null, image: '/images/blueprints/x-master-standard-18-6.png' },
      { build: 'standard', size: '19-6', lounge: null, bed: null, image: '/images/blueprints/x-master-standard-19-6.png' },
      { build: 'standard', size: '20-6', lounge: null, bed: null, image: '/images/blueprints/generic-20-6.png' },
      { build: 'standard', size: '21-6', lounge: null, bed: 'queen', image: '/images/blueprints/generic-21-6.png' },
      { build: 'standard', size: '21-6', lounge: null, bed: 'bunk', image: '/images/blueprints/generic-21-6.png' },
      { build: 'standard', size: '22-6', lounge: null, bed: 'queen', image: '/images/blueprints/generic-22-6.png' },
      { build: 'standard', size: '22-6', lounge: null, bed: 'bunk', image: '/images/blueprints/generic-22-6.png' },
      { build: 'slideout', size: '22-6', lounge: null, bed: null, image: '/images/blueprints/x-master-slideout-floorplan.png' },
    ],
  },
  {
    slug: 'mirage',
    name: 'Sahara Mirage',
    type: 'On-Road',
    order: 2,
    tagline: 'Comfort and convenience on the open road.',
    description:
      'The Mirage is designed for travellers who value comfort and ease above all. A sleek, streamlined build makes it effortless to tow, while the fully equipped kitchenette and spacious interior feel like home long before you\'ve unpacked. Four floor plans to choose from — two lounge-led layouts (cafe-style dinette or twin recliners) and two compact bedroom-led layouts (rear queen bed or twin singles) — so the Mirage can match the way you actually travel.',
    heroImage: '/images/hero/hero-mirage-outback.png',
    highlights: ['Toilet', 'Shower', 'Laundry', 'Kitchenette'],
    ctaLabel: 'Enquire about the Mirage',
    inclusions: { addOns: AVAILABLE_UPGRADES },
    // Per-size pill values + full build sheets, keyed by the size the
    // configurator selects. Lounge / bed layout choices share these per-size
    // chassis and power specs.
    specsBySize: MIRAGE_SPECS_BY_SIZE,
    technicalSpecsBySize: MIRAGE_TECH_SPECS_BY_SIZE,
    // Full manufacturer build sheet — used as the fallback when no per-size
    // data exists. Mirrors the 18'6 build with the Excel inclusions baseline.
    technicalSpecs: mirageTech({ raiser: '2"' }),
    specs: {
      sleeps: 'Up to 6',
      length: 'TBC',
      tare: 'TBC',
      atm: 'TBC',
      suspension: 'Roller rocker',
      water: 'TBC',
      warranty: 'TBC',
    },
    features: [
      'Fixed L-shaped cafe dinette or twin reclining lounge chairs',
      'Converts into an extra double bed for guests',
      'Gloss white upper cabinetry and dark gloss lower drawers',
      'Full kitchen — 4-burner cooktop with oven, stainless sink, stone-look bench',
      'Rear private queen bed or twin single beds with wrap-around storage',
      'Full ensuite with separate shower, cassette toilet and vanity',
      'Hexagon-tile ensuite floor with marble-look vanity top',
      'Dometic cassette air-conditioner and Sirocco ceiling fan',
      'Large panoramic windows — bright, light-filled interior',
    ],
    gallery: {
      exterior: [
        { src: '/images/models/mirage-cafe/exterior-01.jpg', caption: 'Mirage 206 front-quarter — twin gas-bottle hitch, off-road-ready drawbar, white body with charcoal and green graphics.' },
        { src: '/images/models/mirage-cafe/exterior-02.jpg', caption: 'Rear view — reflective tail strip, spare wheel mount, full checker-plate stone guard along the underbody.' },
        { src: '/images/models/mirage-cafe/exterior-03.jpg', caption: 'Mirage 186 front — twin gas bottles and off-road drawbar, Sahara Caravans branding in green and charcoal.' },
        { src: '/images/models/mirage-recliners/exterior-04.jpg', caption: 'Mirage 206 driver-side profile at sunset — tandem axles, large lounge window with green honeycomb graphic, full stone-guard along the lower flank.' },
      ],
      interior: [
        { src: '/images/models/mirage-cafe/interior-02.jpg', caption: 'Cafe dinette looking back to the bedroom — bench seats with a fixed stone-look table and a skylight over the lounge.' },
        { src: '/images/models/mirage-cafe/interior-04.jpg', caption: 'Dinette from the galley side — L-lounge with fixed table, fridge and microwave column on the right, skylight overhead.' },
        { src: '/images/models/mirage-cafe/interior-06.jpg', caption: 'Dinette wide angle — cafe seating on the right, galley on the left, skylight drawing daylight into the main living.' },
        { src: '/images/models/mirage-cafe/interior-07.jpg', caption: 'Galley wide — gloss white uppers, grey lower drawers, stone benchtop with under-bench oven and stainless sink.' },
        { src: '/images/models/mirage-cafe/interior-09.jpg', caption: 'Private queen bedroom — quilted mattress, overhead cabinetry, bedside shelves with reading lights on both sides.' },
        { src: '/images/models/mirage-cafe/interior-08.jpg', caption: 'Ensuite — cassette toilet, front-loading washer column, marble-look vanity with vessel basin and mirrored cabinets.' },
        { src: '/images/models/mirage-cafe/interior-03.jpg', caption: 'Separate shower stall — chrome hand-held, slide rail and slip-resistant base set in bright white wet-wall panels.' },
        { src: '/images/models/mirage-cafe/interior-11.jpg', caption: 'Kitchen from the rear — gloss uppers, stone benchtop, 4-burner cooktop with oven and a glimpse of the bed beyond.' },
        { src: '/images/models/mirage-recliners/interior-05.jpg', caption: 'Twin Recliner layout — black recliner chairs on the left, galley with fridge tower on the right, skylight overhead.' },
        { src: '/images/models/mirage-recliners/interior-07.jpg', caption: 'Twin recliner detail — black bucket seats, marble-look shared side-table and TV mount on the wall.' },
        { src: '/images/models/mirage-queenbed/interior-01.jpg', caption: 'Queen bed layout — quilted mattress, dark padded headboard, gloss white overhead cabinetry and reading lights on both sides.' },
        { src: '/images/models/mirage-singlebed/interior-01.jpg', caption: 'Twin single bed layout — quilted mattresses, central cabinet column with overhead shelves and skylight above.' },
      ],
    },
    buildTypes: [
      { key: 'standard', label: 'Standard', badge: '', blurb: 'The streamlined Mirage body — easy to tow and fully self-contained.', blueprint: '/images/blueprints/x-master-standard.webp', available: true },
      { key: 'slideout', label: 'Slide-Out', badge: "22'6 size only", blurb: 'A roadside wall that extrudes at camp for a markedly wider lounge.', blueprint: '/images/blueprints/x-master-slideout.webp', available: true },
    ],
    // Floor plans drive the configurator. The lounge toggle (Cafe vs Twin
    // Recliner) and the bed toggle (Queen vs Twin Single) only appear on the
    // sizes that list more than one option; smaller sizes carry a single plan.
    floorPlans: [
      { build: 'standard', size: '18-6', lounge: null, bed: null, image: '/images/blueprints/mirage-18-6.png' },
      { build: 'standard', size: '19-6', lounge: null, bed: null, image: '/images/blueprints/generic-19-6.png' },
      { build: 'standard', size: '20-6', lounge: 'cafe', bed: null, image: '/images/blueprints/mirage-20-6.png' },
      { build: 'standard', size: '20-6', lounge: 'recliner', bed: null, image: '/images/blueprints/mirage-recliners.png' },
      { build: 'standard', size: '21-6', lounge: 'cafe', bed: 'queen', image: '/images/blueprints/generic-21-6.png' },
      { build: 'standard', size: '21-6', lounge: 'cafe', bed: 'single', image: '/images/blueprints/generic-21-6.png' },
      { build: 'standard', size: '21-6', lounge: 'recliner', bed: 'queen', image: '/images/blueprints/mirage-recliners.png' },
      { build: 'standard', size: '21-6', lounge: 'recliner', bed: 'single', image: '/images/blueprints/mirage-recliners.png' },
      { build: 'standard', size: '22-6', lounge: 'cafe', bed: null, image: '/images/blueprints/generic-22-6.png' },
      { build: 'standard', size: '22-6', lounge: 'recliner', bed: null, image: '/images/blueprints/mirage-recliners.png' },
      { build: 'slideout', size: '22-6', lounge: null, bed: null, image: '/images/blueprints/generic-22-6.png' },
    ],
  },
  {
    slug: 'dune',
    name: 'Sahara Dune',
    type: 'Semi-Off-Road',
    order: 3,
    tagline: 'Adventure and comfort in balance.',
    description:
      'The Dune is a free-camping tourer built for the long way around. An Australian-made 3.2mm super-gal chassis sits over 3.3-tonne independent coil-spring trailing-arm suspension, 235/75R15 off-road rims and 10" electric brakes. 420W of solar feeds 270Ah of lithium, so you can stay out for weeks — and inside, a queen bed, café dinette and full ensuite with one-piece shower, toilet and gas/electric hot water keep things comfortable wherever you stop.',
    heroImage: '/images/hero/hero-dune.png',
    gallery: {
      exterior: [
        { src: '/images/models/dune/exterior-01.jpg', caption: 'Awning-side front-quarter — full-width "Sahara Caravans" wordmark across the nose-cone, "DUNE 1810" badge, awning rail and tandem off-road wheels.' },
        { src: '/images/models/dune/exterior-02.jpg', caption: 'Awning-side front-quarter, alternate angle — entry door with pull-out step, awning rail along the top edge and the large nose-cone wordmark.' },
        { src: '/images/models/dune/exterior-03.jpg', caption: 'Roadside profile — full panoramic living-area window, "DUNE 1810" badge on the checker-plate skirt and "SAHARA" wordmark below.' },
        { src: '/images/models/dune/exterior-04.jpg', caption: 'Off-side front-quarter — stone-guard-on-frame deployed at the front, twin gas bottles behind the mesh, tandem off-road wheels and full checker-plate skirt.' },
        { src: '/images/models/dune/exterior-05.jpg', caption: 'Front-on with the mesh stone-guard-on-frame fully deployed — twin 9 kg gas bottles, DO35-style coupling and galvanised drawbar visible through the mesh.' },
        { src: '/images/models/dune/exterior-06.jpg', caption: 'Rear view — Sahara crest, "DUNE 1810" badge on the black checker-plate panel, spare wheel mount with jerry-can holder and full-width galvanised bumper.' },
      ],
      interior: [
        { src: '/images/models/dune/interior-01.jpg', caption: 'Looking through the van from the entry — dinette on the left, galley on the right, ensuite mid-ship and the rear queen bed under twin 12V fans in the distance.' },
        { src: '/images/models/dune/interior-02.jpg', caption: 'Same view a step further in — gloss white uppers, dark gloss lowers, full-height splashback over the cooktop and the queen bed framed at the rear.' },
        { src: '/images/models/dune/interior-03.jpg', caption: 'Café dinette — cream leather-look L-lounge with a fixed timber-look table on a black post, large awning window and gloss white overhead cabinetry.' },
        { src: '/images/models/dune/interior-04.jpg', caption: 'Galley wide — gloss white uppers with built-in microwave, timber-look benchtop, big black single-bowl sink with black mixer tap and full-height splashback over the cooktop and oven.' },
        { src: '/images/models/dune/interior-05.jpg', caption: 'From the rear bed looking forward — galley on the left, dinette on the right, ensuite door mid-ship, with the battery monitor and stereo head unit set into the entry wall.' },
        { src: '/images/models/dune/interior-06.jpg', caption: 'Rear queen bedroom — quilted inner-spring mattress with pillow top, padded headboard, twin adjustable 12V fans, bedside cabinets with timber tops and an oversized roof skylight overhead.' },
        { src: '/images/models/dune/interior-07.jpg', caption: 'Ensuite — china-bowl toilet, gloss white overhead cabinetry, large wall mirror over the vanity and a black vessel sink on a timber-look benchtop.' },
        { src: '/images/models/dune/interior-08.jpg', caption: 'Ensuite alt angle — small awning window for ventilation, mirror-fronted cabinet, full-height grey storage column and toilet alongside the vanity.' },
        { src: '/images/models/dune/interior-09.jpg', caption: 'Separate one-piece shower stall — matte-black slide rail with hand-held, black mixer tap, white wet-wall panels and a low-step shower tray.' },
      ],
    },
    features: [
      '3.3-tonne independent coil-spring trailing-arm suspension',
      'DO35 off-road coupling with 6" A-frame and 4" raiser',
      '235/75R15 off-road rims and tyres with 10" electric brakes',
      'Australian-made 3.2mm super-gal chassis (Australian steel)',
      '3-bar rear bumper, jerry-can holder and A-frame toolbox',
      'Galvanised generator locker and tunnel boot',
      'Pro-Bond aluminium composite body with checker-plate front, rear and sides',
      'Double-glazed windows throughout',
      'Roll-out awning with centre support and twin awning lights',
      'Reverse camera plus front and rear work lights',
      '420W solar (2 x 210W) feeding 270Ah of lithium (2 x 135Ah)',
      'BMPro battery management system with MPPT solar regulator',
      'Twin 9kg gas bottles',
      '12V points at all bed sides',
      'Dometic 190L 3-way fridge',
      'Recessed cooktop with grill — 3 gas burners and 1 electric',
      'Microwave with full-height splashbacks',
      'Swift gas/electric hot water service — Australian-made stainless steel',
      'Water filter tap at sink',
      'One-piece shower and toilet',
      'Queen bed 6\'5" x 5\'2" — inner-spring mattress with pillow top',
      'Gas-strut lift bed for under-bed storage',
      'Café seating with folding table',
      'LED lighting throughout',
      '24" LCD/DVD TV with CD/Radio and Winegard antenna (Sensar FreeVision)',
      '2 x external speakers and a 240V picnic-table point',
      'Piano hinges and gas struts on all overhead cupboards',
      'Pullout alloy step',
    ],
    specs: {
      sleeps: 'Up to 4',
      length: '20\'6"',
      tare: 'TBC',
      atm: 'TBC',
      suspension: '3.3T independent coil-spring, dual axle',
      water: '190L (2 x 95L)',
      warranty: '3 years structural',
    },
    highlights: ['Toilet', 'Shower', 'Kitchenette', 'Off-Grid'],
    ctaLabel: 'Enquire about the Dune',
    inclusions: { addOns: AVAILABLE_UPGRADES },
    buildTypes: [
      { key: 'standard', label: 'Standard', badge: '', blurb: 'The free-camping Dune body on 3.3T independent coil-spring suspension.', blueprint: '/images/blueprints/x-master-standard.webp', available: true },
      { key: 'slideout', label: 'Slide-Out', badge: 'Coming soon', blurb: 'A wider living area at camp — in development for the Dune.', blueprint: '/images/blueprints/x-master-slideout.webp', available: false },
    ],
    floorPlans: [
      { build: 'standard', size: '18-6', lounge: null, bed: null, image: '/images/blueprints/generic-18-6.png' },
      { build: 'standard', size: '19-6', lounge: null, bed: 'queen', image: '/images/blueprints/generic-19-6.png' },
      { build: 'standard', size: '19-6', lounge: null, bed: 'bunk', image: '/images/blueprints/dune-19-6-bunk.png' },
      { build: 'standard', size: '20-6', lounge: 'cafe', bed: null, image: '/images/blueprints/dune-20-6.png' },
      { build: 'standard', size: '20-6', lounge: 'recliner', bed: null, image: '/images/blueprints/dune-recliners.png' },
      { build: 'standard', size: '21-6', lounge: null, bed: null, image: '/images/blueprints/generic-21-6.png' },
      { build: 'standard', size: '22-6', lounge: null, bed: 'queen', image: '/images/blueprints/generic-22-6.png' },
      { build: 'standard', size: '22-6', lounge: null, bed: 'bunk', image: '/images/blueprints/dune-22-6-bunk.png' },
    ],
    // Per-size pill values + full build sheets. Sizes that don't appear here
    // (16'6, 17'6) fall back to the model-level `specs` and `technicalSpecs`
    // below.
    specsBySize: DUNE_SPECS_BY_SIZE,
    technicalSpecsBySize: DUNE_TECH_SPECS_BY_SIZE,
    // Fallback build sheet — mirrors the 18'6 build with the Excel baseline.
    technicalSpecs: duneTech(),
  },
  {
    slug: 'horizon',
    name: 'Sahara Horizon',
    type: 'Family',
    order: 4,
    tagline: 'Making memories — wherever the road takes you.',
    description:
      'The Horizon is the family van — laid out to sleep six, with a private rear queen, four full-length bunks behind a concertina door and an L-lounge in the middle. The bunk bedroom comes standard on every Horizon size — 19\'6, 20\'6, 21\'6 and 22\'6 — so the kids\' room is part of the build no matter which length you pick. Built on a hybrid frame (Celuka front sheeting, Meranti elsewhere, honeycomb floor and a one-piece aluminium roof), it pairs a 200L Dometic 2-way fridge/freezer, top-load washing machine and reverse-cycle air-con with 420W of solar feeding 300Ah of lithium — set up for proper free camps without leaving any of the family comforts behind.',
    heroImage: '/images/hero/hero-horizon.png',
    gallery: {
      exterior: [
        { src: '/images/models/horizon/exterior-01.jpg', caption: 'Horizon 206 front-quarter at the hitch — twin 9kg gas bottles on the slide-out, 3.5T ball coupling and 6" A-frame on a tandem-axle chassis.' },
        { src: '/images/models/horizon/exterior-02.jpg', caption: 'Driver-side full profile — 22\'8" body in white with charcoal graphics, double-glazed bedroom and lounge windows, full checker-plate underbody.' },
        { src: '/images/models/horizon/exterior-03.jpg', caption: 'Side profile from the front — bunk and bedroom windows visible behind the Sahara badge, tandem load-sharing suspension on 15" black alloys.' },
        { src: '/images/models/horizon/exterior-04.jpg', caption: 'Rear-quarter view — 3-bar galvanised bumper, three round rear tail-lights, charcoal-and-grey honeycomb graphics across the lower flank.' },
        { src: '/images/models/horizon/exterior-05.jpg', caption: 'Close rear-quarter — Horizon 206 decal, three-light cluster on the bumper corner and the bunk window above.' },
        { src: '/images/models/horizon/exterior-06.jpg', caption: 'Straight-on rear with spare wheel mounted on the bumper, twin reverse lights and the Sahara Caravans badge across the rear panel.' },
      ],
      interior: [
        { src: '/images/models/horizon/interior-01.jpg', caption: 'Private rear queen — 6\'5" x 5\' inner-spring mattress with pillow top, full headboard, twin ceiling fans and reading lights, full-height robes either side.' },
        { src: '/images/models/horizon/interior-02.jpg', caption: 'Front-to-back open-plan view — L-lounge dinette on the left, marble-look galley on the right, the rear queen framed at the end and twin Dometic reverse-cycle units overhead.' },
        { src: '/images/models/horizon/interior-03.jpg', caption: 'L-lounge dinette — black leather seating, marble-look table on a single pole, Bluetooth/radio head unit and TV mount, twin skylight hatches above.' },
        { src: '/images/models/horizon/interior-04.jpg', caption: 'Looking back from the bedroom — galley with sink and oven on the left, L-lounge with adjustable-leg table on the right, bunk-room concertina door at the end.' },
        { src: '/images/models/horizon/interior-05.jpg', caption: 'Galley wall — gloss-grey uppers, marble-look benchtop with stainless sink, under-bench oven and microwave-and-fridge tower on the right.' },
        { src: '/images/models/horizon/interior-06.jpg', caption: 'Kitchen alternate angle — sink-cover panel propped up as a splashback extension, four-burner cooktop and oven, 200L Dometic 2-way fridge alongside.' },
        { src: '/images/models/horizon/interior-07.jpg', caption: 'Galley detail — stainless sink with filtered-water tap, ceramic cooktop and oven, soft-close drawers below and gloss-grey overhead cupboards.' },
        { src: '/images/models/horizon/interior-08.jpg', caption: 'Galley with the sink covered for extra bench space — full-height marble-look splashbacks and microwave above the fridge tower.' },
        { src: '/images/models/horizon/interior-09.jpg', caption: 'Ensuite full view — one-piece shower stall with chrome handheld, vessel-basin vanity on a marble-look top and china-bowl toilet alongside.' },
        { src: '/images/models/horizon/interior-10.jpg', caption: 'One-piece shower stall — chrome handheld on a slide rail, glass door and bright white wet-wall panels with a non-slip base.' },
        { src: '/images/models/horizon/interior-11.jpg', caption: 'Ensuite vanity and toilet — vessel basin on a marble-look top, framed mirror, gloss-grey overhead cabinets and a separate china-bowl toilet.' },
        { src: '/images/models/horizon/interior-12.jpg', caption: 'Bunk room — two of the four full-length 6\'2" bunks with reading lights, individual fans and storage cubbies on the side wall.' },
        { src: '/images/models/horizon/interior-13.jpg', caption: 'Bunks angled view — twin opening windows above each berth and a marble-look counter top alongside the bunk corridor.' },
        { src: '/images/models/horizon/interior-14.jpg', caption: 'Bunks straight-on — top and bottom berths with USB, USB-C and 240V points, opening hopper windows for cross-flow ventilation.' },
        { src: '/images/models/horizon/interior-15.jpg', caption: 'Top-load washing machine in the bunk corridor — concealed under a marble-look counter with a gloss-grey overhead cupboard above.' },
      ],
    },
    features: [
      'Hybrid frame — Celuka front sheeting, Meranti remaining frame, one-piece aluminium roof',
      'One-piece honeycomb floor',
      'Australian-made 3.2mm super-gal chassis (Australian steel)',
      'Load-sharing suspension with 2" chassis raiser',
      '15" rims with 235/75R15 tyres and 10" electric brakes',
      '3.5T ball coupling and 6" A-frame',
      '3-bar rear galvanised bumper and quick-drop corner stands',
      'Aluminium A-frame toolbox with 2 x 9kg gas bottles on slide-out',
      'Pro-Bond aluminium composite body with checker-plate front, rear and sides',
      'AllyTech double-glazed windows and 2 x skylight hatches',
      'Round-top entry door with alloy step',
      'Roll-out awning with centre support and twin awning lights',
      'Tunnel boot with internal lighting',
      'External entertainment hatch with TV point and 12V power',
      '2 x external speakers and external picnic table',
      'Reverse camera',
      '420W solar (2 x 210W) feeding a 300Ah lithium battery',
      'Projecta battery management system',
      'Dometic Fresh Jet Pro reverse-cycle air conditioner',
      'Dometic 200L 2-way fridge/freezer (12V/240V compressor)',
      'Microwave with full-height kitchen splashbacks',
      'Stainless steel sink with filtered drinking-water tap',
      'Swift gas/electric hot water service plus Suburban continuous hot water',
      'L-lounge with adjustable table leg',
      'One-piece shower and china-bowl toilet (separate)',
      'Top-load washing machine',
      'Private rear queen bed 6\'5" x 5\' — inner-spring mattress with pillow top',
      'Gas-strut posture slat bed base for under-bed storage',
      'Four full-length bunks (6\'2") with concertina door',
      '12V fan in bedroom and one in each bunk (4 in bunks)',
      'USB, USB-C and 240V points at bunks and in robe nooks',
      '24" LCD TV with Bluetooth/Radio audio and Winegard antenna (Sensar FreeVision)',
      'LED strip lighting in overhead cupboards and LED lighting throughout',
      'Piano hinges and gas struts on all overhead cupboards',
    ],
    specs: {
      sleeps: 'Up to 6',
      length: '22\'8"',
      tare: 'TBC',
      atm: 'TBC',
      suspension: 'Roller rocker',
      water: '190L (2 x 95L)',
      warranty: 'TBC',
    },
    highlights: ['Bunks', 'Toilet', 'Shower', 'Laundry', 'Kitchenette'],
    ctaLabel: 'Enquire about the Horizon',
    inclusions: { addOns: AVAILABLE_UPGRADES },
    buildTypes: [
      { key: 'standard', label: 'Standard', badge: '', blurb: 'The full Horizon family layout — rear queen plus four full-length bunks.', blueprint: '/images/blueprints/x-master-standard.webp', available: true },
      { key: 'slideout', label: 'Slide-Out', badge: 'Coming soon', blurb: 'A wider family lounge at camp — in development for the Horizon.', blueprint: '/images/blueprints/x-master-slideout.webp', available: false },
    ],
    floorPlans: [
      { build: 'standard', size: '19-6', lounge: null, bed: null, image: '/images/blueprints/horizon-19-6.png' },
      { build: 'standard', size: '20-6', lounge: null, bed: null, image: '/images/blueprints/horizon-20-6.png' },
      { build: 'standard', size: '21-6', lounge: null, bed: null, image: '/images/blueprints/horizon-21-6.png' },
      { build: 'standard', size: '22-6', lounge: null, bed: null, image: '/images/blueprints/horizon-22-6.png' },
    ],
    // Horizon ships in 19'6 and above only — washing machine is always
    // top-loader. Chassis stays Horizon-specific (load-sharing, 3.5T ball
    // coupling). The six non-chassis sections come from `commonBaseline`
    // with bunks added as Horizon's family-van internal extras.
    technicalSpecs: (() => {
      const base = commonBaseline()
      return [
        {
          id: 'chassis',
          label: 'Chassis',
          rows: [
            { label: 'Trailer Coupling', value: '3.5T ball coupling' },
            { label: 'A-Frame', value: '6"' },
            { label: 'Raiser', value: '2"' },
            { label: 'Main Chassis Frame', value: '3.2mm super-gal — Australian made, Australian steel' },
            { label: 'Cross Members', value: 'Box tube' },
            { label: 'Suspension', value: 'Roller rocker' },
            { label: 'Axles', value: 'Tandem' },
            { label: 'Brakes', value: '10" electric' },
            { label: 'Rims & Tyres', value: '15" — 235/75R15' },
            { label: 'Wheel Arches', value: 'Galvanised' },
            { label: 'Water Tanks', value: '2 x 95L freshwater' },
            { label: 'Tank Protection', value: 'Galvanised sheet' },
            { label: 'Toolbox', value: 'On A-frame — with gas bottle storage' },
            { label: 'Gas Bottles', value: '2 x 9kg' },
            { label: 'Rear Bumper', value: '3-bar galvanised' },
            { label: 'Entry Step', value: 'Alloy' },
            { label: 'Quick Drop Corner Stands', value: 'Included' },
            { label: 'Tap on Drawbar', value: 'Included' },
          ],
        },
        { id: 'solar-power', label: 'Solar & Power', rows: base.solarPower },
        { id: 'electrical', label: 'Electrical', rows: base.electrical },
        { id: 'plumbing', label: 'Plumbing', rows: base.plumbing },
        { id: 'appliances', label: 'Appliances', rows: base.appliances },
        { id: 'external', label: 'External', rows: base.external },
        {
          id: 'internal',
          label: 'Internal',
          rows: [
            ...base.internal,
            { label: 'Bunks', value: '4 x 6\'2" twin bunks with concertina door' },
            { label: 'Bunk Connectivity', value: 'USB, USB-C and 240V points' },
            { label: 'L-Lounge', value: 'With adjustable table leg' },
          ],
        },
      ]
    })(),
  },
]

export function getModelBySlug(slug) {
  return models.find((m) => m.slug === slug)
}

// Human-readable labels for the Step 3 variant toggles. The configurator
// reads option keys off the `floorPlans` list and looks the labels up here.
export const LOUNGE_LABELS = {
  cafe: 'Cafe Style Lounge',
  recliner: 'Twin Recliner Lounge',
}
export const BED_LABELS = {
  queen: 'Queen Bed',
  single: 'Twin Single Beds',
  bunk: 'Bunks',
}

// Canonical size ordering — used to sort the size pills regardless of the
// order floor plans happen to be listed in.
const SIZE_ORDER = ['16-6', '17-6', '18-6', '19-6', '20-6', '21-6', '22-6']

// The body lengths offered for a given build type, in size order.
export function getSizesForBuild(model, build) {
  const present = new Set(
    (model.floorPlans ?? []).filter((p) => p.build === build).map((p) => p.size),
  )
  return SIZE_ORDER.filter((s) => present.has(s))
}

// The distinct lounge / bed options available for a (build, size) pair.
// A dimension with 0 or 1 options means that toggle is not shown.
export function getVariantOptions(model, build, size) {
  const plans = (model.floorPlans ?? []).filter(
    (p) => p.build === build && p.size === size,
  )
  const lounges = [...new Set(plans.map((p) => p.lounge).filter(Boolean))]
  const beds = [...new Set(plans.map((p) => p.bed).filter(Boolean))]
  return { lounges, beds }
}

// Resolve the floor plan entry for a full selection. A plan with a null
// lounge/bed matches any selection on that dimension.
export function getFloorPlan(model, build, size, lounge, bed) {
  const plans = (model.floorPlans ?? []).filter(
    (p) => p.build === build && p.size === size,
  )
  return (
    plans.find(
      (p) =>
        (p.lounge == null || p.lounge === lounge) &&
        (p.bed == null || p.bed === bed),
    ) ?? plans[0] ?? null
  )
}

// Validate a (possibly partial or stale) selection against the model data and
// fill in defaults — used on first paint, on URL restore and after every
// change so build / size / variant stay mutually consistent.
export function resolveSelection(model, { build, size, lounge, bed } = {}) {
  const builds = model.buildTypes ?? []
  const isAvailable = (key) =>
    builds.some((b) => b.key === key && b.available !== false)
  const validBuild = isAvailable(build)
    ? build
    : builds.find((b) => b.available !== false)?.key ?? builds[0]?.key ?? null

  const sizes = getSizesForBuild(model, validBuild)
  const validSize = sizes.includes(size) ? size : sizes[0] ?? null

  const { lounges, beds } = getVariantOptions(model, validBuild, validSize)
  const validLounge = lounges.includes(lounge) ? lounge : lounges[0] ?? null
  const validBed = beds.includes(bed) ? bed : beds[0] ?? null

  return { build: validBuild, size: validSize, lounge: validLounge, bed: validBed }
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
