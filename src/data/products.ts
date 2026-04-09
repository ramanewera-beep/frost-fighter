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
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMbgRbCaokR8m-cyPZXxPMI1ZaksDzg8ub_oThTZ9zlLD2SU-cMK6zqCFY29Ka6vfhuMHT5FLzt7MiApekLCim8BVuWZjSkJK0vGfsTAkjG5f_Cx8QM-sxU2VVWcHNfHlGOLYDm7yksjhxU8PNJoDb4=w1408-h768-s-no-gm?authuser=0'
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
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOYk6-CKcCXxwwEWMWsmH8I9c6Xf44uBTk1gvKT9qbwJ4jImhiKWBXbtpMCBo7_tGwoBG0XQpsNkJikT5DZ2BjvoY3YQG0ZhdKy7f5fABWcQH9EmKQtHnqlMc_tfq4fzZ0zBVTBZctKaYb00QkgW1qd=w1408-h768-s-no-gm?authuser=0'
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
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOx0o1pIE9qv082JbJz5WvFviILQKeFLOharBBS7RaBPjYwYSrwjiHTgCciJenEIDPuZLaB-WyAy7SzWzP7rjnEPzfhTQoaVdj0bx2aRcjPjOTjiHeXIjpH2_qebot8ctJKaCOHfc24Uppvc6zj7Ucf=w1408-h768-s-no-gm?authuser=0'
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
    image: 'https://lh3.googleusercontent.com/pw/AP1GczNbt6XGWOVWM3GpFVyzvsG27AyIt3565Qpv3MjN87WnX3l1mNb9mXORbp8Oi7jSeFpZ2y4G46RX6srmkAbILV-Tk_xwqD7oYGajeSSeZEyDoYvTpuq0TFhRIlI82K5Nz7zYbe3fhScoStxzkZ-NC9mL=w1408-h768-s-no-gm?authuser=0'
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
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOQCptEmJOTt6KtN1UGKsFFkwTDgkJMRFtswkoF5KNTQAtAYhYJm1LNAJRyl9Ql3dsFYgxVzlAtOduT96m3H4bu_WnrnVdpQqrNa4WuhNTGNHSiRXtgJ1T3oQs_yt3e90ioNm9qMbK1CpNbmshAFO6N=w1408-h768-s-no-gm?authuser=0'
  }
];
