export interface Product {
  id: string;
  name: string;
  model: 'Pro Series' | 'Compact' | 'Heavy Duty' | 'Eco Hybrid';
  color: string;
  colorHex: string;
  price: number;
  description: string;
  features: string[];
  image: string;
}

// NOTE: The images below are referenced as local files. 
// Please upload the corresponding .png files to the root of your project 
// via the file explorer for them to appear on the website.
export const products: Product[] = [
  {
    id: 'ff-compact-s-silver',
    name: 'Frost Fighter Compact S',
    model: 'Compact',
    color: 'Arctic Silver',
    colorHex: '#CBD5E1',
    price: 1499,
    description: 'Perfect for urban driveways and walkways. Lightweight yet powerful, the Compact S offers easy maneuverability without sacrificing performance.',
    features: [
      'High-torque electric motor',
      '22-inch clearing width',
      'Foldable handle for storage',
      'Quick-adjust chute',
      'Quiet operation'
    ],
    image: '/compact-s-1499.png'
  },
  {
    id: 'ff-eco-hybrid-white',
    name: 'Frost Fighter Eco Hybrid',
    model: 'Eco Hybrid',
    color: 'Frost White',
    colorHex: '#F8FAFC',
    price: 1999,
    description: 'Our most sustainable model yet. Optimized for energy efficiency with a high-density battery pack and regenerative braking system.',
    features: [
      'Eco-mode for extended runtime',
      '28-inch clearing width',
      'Regenerative braking',
      'Recycled material components',
      'Ultra-efficient LED lighting'
    ],
    image: '/eco-hybrid-1999.png'
  },
  {
    id: 'ff-pro-x1-white',
    name: 'Frost Fighter Pro X1',
    model: 'Pro Series',
    color: 'Frost White',
    colorHex: '#F8FAFC',
    price: 2999,
    description: 'The flagship hybrid snowblower designed for large driveways and heavy snowfall. Features a dual-motor system for maximum torque and efficiency.',
    features: [
      'Dual-motor hybrid system',
      '30-inch clearing width',
      'Self-propelled with variable speed',
      'LED headlights for night clearing',
      'Heated hand grips'
    ],
    image: '/pro-x1-2999.png'
  },
  {
    id: 'ff-pro-x2-gray',
    name: 'Frost Fighter Pro X2',
    model: 'Pro Series',
    color: 'Slate Gray',
    colorHex: '#475569',
    price: 3499,
    description: 'An upgraded version of our best-selling Pro X1. Includes smart navigation sensors and advanced traction control for icy surfaces.',
    features: [
      'Smart-track traction control',
      '32-inch clearing width',
      'Auto-adjusting auger speed',
      'Smartphone integration',
      'Premium weather cover included'
    ],
    image: '/pro-x2-3499.png'
  },
  {
    id: 'ff-hd-z-blue',
    name: 'Frost Fighter Heavy Duty Z',
    model: 'Heavy Duty',
    color: 'Midnight Blue',
    colorHex: '#1E3A8A',
    price: 3999,
    description: 'Built for the toughest winter conditions. The Heavy Duty Z features reinforced steel augers and a high-capacity discharge system.',
    features: [
      'Industrial-grade hybrid powertrain',
      '36-inch clearing width',
      'Zero-turn maneuverability',
      'Reinforced steel construction',
      'Extended battery life'
    ],
    image: '/heavy-duty-z-3999.png'
  }
];
