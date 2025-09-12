// src/data/monasteries.ts
export interface Review {
  name: string;
  avatar?: string; // local path or external URL
  text: string;
  rating: number;
}
export interface Monastery {
  id: string;
  name: string;
  coords: [number, number]; // [lat, lng]
  description: string;
  established?: string;
  town?: string;
  travelTime?: string;
  highlights?: string[];
  features?: string[];
  rating?: number;
  reviews?: Review[];
  image?: string;
}

const monasteries: Monastery[] = [
  {
    id: 'rumtek',
    name: 'Rumtek Monastery',
    coords: [27.3256, 88.6115],
    description: 'Seat of the Karmapa, rich murals, golden stupa.',
    established: '1960s',
    town: 'Gangtok',
    travelTime: 'Approx. 1 hour from Gangtok',
    highlights: ['Golden Stupa', 'Tibetan Art', 'Karmapa Seat'],
    features: ['Daily prayers at dawn', 'Museum with rare artifacts', 'Cham dance festivals'],
    rating: 4.8,
    reviews: [
      { name: 'Anjali Sharma', avatar: '/avatars/anjali.jpg', text: 'Rumtek was breathtaking! The murals are vivid.', rating: 5 },
      { name: 'Tenzin Dorji', avatar: '/avatars/tenzin.jpg', text: 'Glad this project preserves our heritage.', rating: 4 }
    ],
    image: '/images/rumtek.jpg'
  },
  {
    id: 'pemayangtse',
    name: 'Pemayangtse Monastery',
    coords: [27.2814, 88.2389],
    description: '17th century monastery with sweeping Himalayan views.',
    town: 'Pelling',
    travelTime: '30–45 minutes from Pelling',
    highlights: ['Wooden art', 'Ancient statues'],
    rating: 4.6,
    reviews: [{ name: 'Michael Lee', avatar: '/avatars/michael.jpg', text: 'Beautiful sunrise views and calm gardens.', rating: 5 }],
    image: '/images/pemayangtse.jpg'
  },
  {
    id: 'tashiding',
    name: 'Tashiding Monastery',
    coords: [27.2168, 88.2398],
    description: 'Known for the Bumchu festival and tranquil setting.',
    town: 'West Sikkim',
    travelTime: 'Varies by route',
    highlights: ['Bumchu festival', 'Scenic views'],
    rating: 4.5,
    image: '/images/tashiding.jpg'
  },
  {
    id: 'enchey',
    name: 'Enchey Monastery',
    coords: [27.3333, 88.6067],
    description: 'Small monastery famous for mask dance festivals.',
    town: 'Gangtok',
    travelTime: 'Within Gangtok city',
    highlights: ['Mask dance', 'Local rituals'],
    rating: 4.3,
    image: '/images/enchey.jpg'
  },
  {
    id: 'ralang',
    name: 'Ralang Monastery',
    coords: [27.1000, 88.3667],
    description: 'Vibrant monastery complex with modern and traditional areas.',
    town: 'Ralang area',
    highlights: ['Festivals', 'Local crafts'],
    rating: 4.4,
    image: '/images/ralang.jpg'
  }
];

export default monasteries;
