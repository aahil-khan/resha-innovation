// RESHA Network Data

export const NETWORK_NODES = [
  {
    id: 'delhi',
    name: 'Delhi Processing Center',
    lat: 28.7041,
    lng: 77.1025,
    city: 'New Delhi',
    type: 'processing',
    members: 45,
    devices_processed: 2800,
    co2_saved: 420,
  },
  {
    id: 'bangalore',
    name: 'Bangalore Hub',
    lat: 12.9716,
    lng: 77.5946,
    city: 'Bangalore',
    type: 'hub',
    members: 62,
    devices_processed: 4200,
    co2_saved: 630,
  },
  {
    id: 'mumbai',
    name: 'Mumbai Distribution',
    lat: 19.0760,
    lng: 72.8777,
    city: 'Mumbai',
    type: 'distribution',
    members: 38,
    devices_processed: 2100,
    co2_saved: 315,
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad Facility',
    lat: 17.3850,
    lng: 78.4867,
    city: 'Hyderabad',
    type: 'processing',
    members: 51,
    devices_processed: 3500,
    co2_saved: 525,
  },
  {
    id: 'chennai',
    name: 'Chennai Center',
    lat: 13.0827,
    lng: 80.2707,
    city: 'Chennai',
    type: 'hub',
    members: 44,
    devices_processed: 2600,
    co2_saved: 390,
  },
];

export const NETWORK_METRICS = [
  { label: 'Active Members', value: 240, icon: 'Users' },
  { label: 'Devices Processed', value: 15200, icon: 'Zap' },
  { label: 'CO₂ Saved (tons)', value: 2280, icon: 'Leaf' },
  { label: 'E-Waste Diverted (kg)', value: 127500, icon: 'Package' },
];

export const RECENT_ACTIVITIES = [
  {
    id: 1,
    institution: 'IIT Delhi',
    action: 'joined network',
    device_type: '50 laptops',
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    institution: 'NASSCOM Bangalore',
    action: 'processed batch',
    device_type: '120 smartphones',
    timestamp: '5 hours ago',
  },
  {
    id: 3,
    institution: 'TCS Mumbai',
    action: 'initiated collection',
    device_type: '200 monitors',
    timestamp: '1 day ago',
  },
  {
    id: 4,
    institution: 'Infosys Hyderabad',
    action: 'completed traceability',
    device_type: '85 tablets',
    timestamp: '2 days ago',
  },
  {
    id: 5,
    institution: 'HCL Chennai',
    action: 'joined network',
    device_type: '45 servers',
    timestamp: '3 days ago',
  },
];

export const PROCESSING_BATCHES = [
  {
    id: 'BATCH-2024-001',
    status: 'processing',
    device_count: 280,
    location: 'Delhi Processing Center',
    progress: 65,
    materials_extracted: 'Gold, Copper, Aluminum',
  },
  {
    id: 'BATCH-2024-002',
    status: 'completed',
    device_count: 150,
    location: 'Bangalore Hub',
    progress: 100,
    materials_extracted: 'Copper, Steel, Plastic',
  },
  {
    id: 'BATCH-2024-003',
    status: 'pending',
    device_count: 95,
    location: 'Mumbai Distribution',
    progress: 0,
    materials_extracted: 'Pending',
  },
  {
    id: 'BATCH-2024-004',
    status: 'processing',
    device_count: 320,
    location: 'Hyderabad Facility',
    progress: 42,
    materials_extracted: 'Gold, Silver, Copper',
  },
];

export const HOME_SECTIONS = {
  hero: {
    headline: 'Reshaping Electronics Supply Chain',
    subheadline: 'for Humanity & the Environment',
    cta_text: 'Join the Network',
    supporting_text: 'RESHA transforms e-waste into opportunity through a transparent, traceable circular economy network across India.',
  },
  problem: {
    title: 'The Challenge',
    description: 'India generates 3.23 million tonnes of e-waste annually. Current linear supply chains create environmental degradation, loss of valuable resources, and unsafe working conditions.',
    stats: [
      { number: '3.23M', label: 'Tonnes e-waste annually' },
      { number: '95%', label: 'Recoverable materials lost' },
      { number: '2.5M', label: 'Workers in unsafe conditions' },
    ],
  },
  solution: {
    title: 'The RESHA Solution',
    description: 'A transparent network connecting institutions, processors, and recyclers to create a traceable, sustainable circular economy for electronics.',
  },
  pipeline: {
    title: 'Collection → Processing → Recovery',
    steps: [
      {
        name: 'Collection',
        description: 'Institutions collect used electronics safely',
        icon: '📦',
      },
      {
        name: 'Aggregation',
        description: 'Materials are sorted and aggregated by type',
        icon: '🔄',
      },
      {
        name: 'Processing',
        description: 'Advanced extraction of valuable materials',
        icon: '⚙️',
      },
      {
        name: 'Recovery',
        description: 'Materials returned to manufacturers',
        icon: '♻️',
      },
    ],
  },
  moksha: {
    title: 'Meet MOKSHA',
    description: 'Our innovative shredding technology recovers 95% of valuable materials from electronic waste while maintaining environmental safety standards.',
    benefits: [
      'Recovers 95% of materials',
      'Zero hazardous emissions',
      'Automated precision processing',
      'Real-time batch tracking',
    ],
  },
  traceability: {
    title: 'Complete Traceability',
    description: 'Every device is tracked from collection to final recovery. Blockchain-verified provenance ensures transparency and accountability.',
  },
  metrics: {
    title: 'Our Impact',
    description: 'RESHA network statistics and environmental benefits',
  },
  network: {
    title: 'Join the RESHA Network',
    description: 'Be part of India\'s sustainable electronics future. Connect with institutions, processors, and innovators building a circular economy.',
    cta_text: 'Explore Network',
  },
  cta: {
    title: 'Ready to Transform Electronics?',
    description: 'Join RESHA today and be part of the circular economy revolution.',
    button_text: 'Get Started',
  },
};

export const ONBOARDING_FIELDS = [
  {
    name: 'institution_name',
    label: 'Institution/Organization Name',
    type: 'text',
    placeholder: 'Enter your organization name',
    required: true,
  },
  {
    name: 'contact_person',
    label: 'Contact Person',
    type: 'text',
    placeholder: 'Full name',
    required: true,
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'your@email.com',
    required: true,
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: '+91 XXXXX XXXXX',
    required: true,
  },
  {
    name: 'organization_type',
    label: 'Organization Type',
    type: 'select',
    options: [
      'Educational Institution',
      'Corporate',
      'NGO',
      'Processor',
      'Recycler',
      'Other',
    ],
    required: true,
  },
  {
    name: 'location',
    label: 'Primary Location',
    type: 'select',
    options: [
      'Delhi',
      'Bangalore',
      'Mumbai',
      'Hyderabad',
      'Chennai',
      'Other',
    ],
    required: true,
  },
  {
    name: 'devices_annually',
    label: 'Estimated Devices Annually',
    type: 'number',
    placeholder: '0',
    required: false,
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Tell us about your organization and interest in RESHA',
    required: false,
  },
];
