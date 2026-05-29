/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ServiceItem, 
  BenefitItem, 
  TrainerItem, 
  MembershipPlan, 
  TestimonialItem, 
  GalleryItem 
} from './types';

import heroImage from './assets/images/tiger_fitness_hero_1779860357115.png';
import saunaImage from './assets/images/tiger_fitness_sauna_1779860377719.png';

// Export path to the actual generated hero image asset
export const HERO_IMAGE = heroImage;
// Export path to the actual generated sauna image asset
export const SAUNA_IMAGE = saunaImage;

export const BUSINESS_INFO = {
  name: 'GLOBAL GYM',
  rating: 4.5,
  reviewsCount: 751,
  address: 'Road Number 13A, Bazaar Samiti Rd, near Shiv-Kali Mandir, Bahadurpur, Patna, Bihar 800016',
  phone: '099555 42052',
  phoneFormatted: '+91 99555 42052',
  whatsappUrl: 'https://wa.me/919955542052?text=Hi%20Global%20Gym%2C%20I%20am%20interested%20in%20joining%20the%20gym.%20Please%20share%20membership%20details!',
  hours: [
    { day: 'Monday - Saturday', time: '05:00 AM - 10:00 PM' },
    { day: 'Sunday', time: '06:00 AM - 12:00 PM (Special Cardio)' }
  ],
  socials: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
    google: '#'
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'aerobics',
    title: 'Aerobics',
    description: 'Energetic group workouts combining rhythmic aerobic exercises with body-weight resistance routines.',
    iconName: 'Zap',
    category: 'cardio',
    bgGradient: 'from-violet-500/20 to-red-500/20'
  },
  {
    id: 'child-care',
    title: 'Child Care Services',
    description: 'Secure, professional, and engaging supervised play zones for your little ones while you focus entirely on your premium workouts.',
    iconName: 'Heart',
    category: 'specialty',
    bgGradient: 'from-pink-500/20 to-blue-500/20'
  },
  {
    id: 'crossfit',
    title: 'CrossFit',
    description: 'Forge elite functional fitness with multi-disciplinary tasks, Olympic lifts, and high-intensity structural challenges.',
    iconName: 'Dumbbell',
    category: 'strength',
    bgGradient: 'from-red-600/20 to-orange-600/20'
  },
  {
    id: 'cycling',
    title: 'Cycling Studio',
    description: 'Pedal through intense climbs and sprints. Improvised heavy background beats align with structured RPM and heart-rate tracking.',
    iconName: 'Bike',
    category: 'cardio',
    bgGradient: 'from-cyan-500/20 to-indigo-500/20'
  },
  {
    id: 'dance-fitness',
    title: 'Dance Fitness Classes',
    description: 'Energetic and upbeat fitness programs that blend lively choreography and high-tempo music for an engaging, full-body cardiovascular sweat sessions.',
    iconName: 'Music',
    category: 'cardio',
    bgGradient: 'from-amber-500/20 to-pink-500/20'
  },
  {
    id: 'nutrition-consulting',
    title: 'Nutrition Consulting',
    description: 'Transform your body from the inside out. Receive weekly calorie targets, meal structures, supplementation advice, and habit audits.',
    iconName: 'Apple',
    category: 'specialty',
    bgGradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    description: '1-on-1 private guidance with Patna’s leading master coaches. Custom workouts, biomechanical form audits, and constant tracking.',
    iconName: 'Award',
    category: 'specialty',
    bgGradient: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    id: 'weight-training',
    title: 'Weight Training',
    description: 'Unleash raw strength. Target hypertrophy, muscle symmetry, power development, and safety-guided structural bone density builds.',
    iconName: 'Activity',
    category: 'strength',
    bgGradient: 'from-amber-600/20 to-red-600/20'
  },
  {
    id: 'yoga-classes',
    title: 'Yoga Classes',
    description: 'Rebalance mind and body. Improve flexibility, physical alignment, posture, and release core mental stress with expert Yogis.',
    iconName: 'Sparkles',
    category: 'mind-body',
    bgGradient: 'from-blue-500/20 to-indigo-500/20'
  },
  {
    id: 'youth-classes',
    title: 'Youth Classes',
    description: 'Supervised active classes tailored to foster coordination, athleticism, motor skills, and functional mobility in youngsters.',
    iconName: 'Users',
    category: 'specialty',
    bgGradient: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    id: 'youth-sports',
    title: 'Youth Sports Training',
    description: 'Foundational strength, safety techniques, teamwork drills, and endurance conditioning designed specially for young sports enthusiasts.',
    iconName: 'Trophy',
    category: 'strength',
    bgGradient: 'from-violet-500/20 to-indigo-500/20'
  },
  {
    id: 'zumba',
    title: 'Zumba Classes',
    description: 'Fuse international high-energy beats with professional choreography for an engaging, calorie-burning absolute dance party.',
    iconName: 'Flame',
    category: 'cardio',
    bgGradient: 'from-pink-500/20 to-orange-500/20'
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    id: 'certified-trainers',
    title: 'Certified Trainers',
    description: 'Fully certified specialists with certified master degree coaches in bodybuilding, CrossFit and athletic conditioning.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'sauna',
    title: 'Premium Sauna Facility',
    description: 'Decompress, flush systemic toxins, and enhance post-workout muscle restoration within our high-end luxury, wood sauna.',
    iconName: 'Waves'
  },
  {
    id: 'online-classes',
    title: 'Live Online Coaching',
    description: 'Stay committed from anywhere. Access real-time feedback, hybrid training journals, and HD class broadcasts.',
    iconName: 'Tv'
  },
  {
    id: 'personalized-workout',
    title: 'Customized Workout Plans',
    description: 'No generic cards. Workouts perfectly curated around your level, joint limits, postural audits, and absolute schedule.',
    iconName: 'Notebook'
  },
  {
    id: 'modern-equipment',
    title: 'Biomechanical Equipment',
    description: 'State-of-the-art imported premium pulleys, safety cages, free-weights, and smart commercial treads.',
    iconName: 'Cpu'
  },
  {
    id: 'affordable-plans',
    title: 'Affordable Membership',
    description: 'Exceptional international luxury vibes provided at reasonable investment tiers with zero hidden maintenance expenses.',
    iconName: 'Coins'
  },
  {
    id: 'transformation-support',
    title: 'Transformation Support',
    description: 'Dedicated support group, biometric assessment checks every 15 days, and direct emergency coach WhatsApp triggers.',
    iconName: 'TrendingUp'
  },
  {
    id: 'hygiene-safety',
    title: 'Medical Grade Sanitization',
    description: 'Continuous fresh air ventilation, hourly machine wipe-downs, UV filtered air flow systems for supreme protection.',
    iconName: 'Sparkles'
  }
];

export const TRAINERS: TrainerItem[] = [
  {
    id: 'rahul',
    name: 'Coach Rahul Singh',
    role: 'Head Body Transformation Coach',
    experience: '8+ Years',
    specialization: ['Competitive Bodybuilding', 'Powerlifting', 'Injury Rehabilitation'],
    imageUrl: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop',
    certification: 'IFBB Certified & Gold Medalist bodybuilding champion'
  },
  {
    id: 'priya',
    name: 'Priya Sharma',
    role: 'Yoga & Pilates Lead Trainer',
    experience: '5+ Years',
    specialization: ['Vinyasa Yoga', 'Core Conditioning', 'Flexibility & Breathing'],
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
    certification: 'RYS 500 Certified Yoga Alliance Trainer'
  },
  {
    id: 'amit',
    name: 'Amit Kumar',
    role: 'CrossFit & HIIT Specialist',
    experience: '6+ Years',
    specialization: ['Olympic Weightlifting', 'Functional Agility', 'Fat-burning Circuits'],
    imageUrl: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop',
    certification: 'CrossFit L2 Certified Coach'
  },
  {
    id: 'sneha',
    name: 'Sneha Patel',
    role: 'Zumba & Aerobics Director',
    experience: '4+ Years',
    specialization: ['Zumba Fitness', 'Group Cardio Programming', 'Nutrition Consulting'],
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop',
    certification: 'ZIN™ Member & Licensed Zumba Professional'
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'basic',
    name: 'Basic Access Plan',
    price: '₹1,499',
    interval: 'month',
    description: 'Perfect for standard self-guided trainers wanting premium equipment access.',
    features: [
      'Full Gym Floor & Equipment access',
      'Cardio Zone & Heavy Lifting space',
      'Locker room & Shower facility',
      'Initial Workout Path Guidance',
      'Mobile App Progress Tracking',
      'Safety and hygienic sanitized environment'
    ],
    isRecommended: false,
    ctaText: 'Access Floor'
  },
  {
    id: 'premium',
    name: 'Premium Transformation',
    price: '₹2,499',
    interval: 'month',
    badge: 'Best Value',
    description: 'Patna’s favorite plan. Combines floor access with premium group sessions and sauna perks.',
    features: [
      'Everything in Basic floor plan',
      'FREE Unlimited Gym Sauna Access',
      'Access to Aerobics & Zumba classes',
      'Customized Monthly Diet Blueprint',
      'Periodic 15-day Biometric Audits',
      'Live Stream Coaching Broadcasts Support',
      '1 Trial Session with Lead Personal Trainer'
    ],
    isRecommended: true,
    ctaText: 'Unlock Premium'
  },
  {
    id: 'elite',
    name: 'Elite Personal Coaching',
    price: '₹5,999',
    interval: 'month',
    badge: 'VIP Status',
    description: 'Extreme physical revamp programs. Dedicated individual trainer, complete posture repair, supreme guidance.',
    features: [
      'Everything in Premium Plan',
      'Dedicated Professional Trainer (12 Sessions/mo)',
      '1-on-1 Continuous Floor Supervision',
      'Daily Macro & Micro Nutritional Logs Audit',
      'Prioritized Private Sauna Bookings',
      'Free Supplementation Advice Protocol',
      'Direct 24/7 personal WhatsApp connection',
      'Guaranteed Body Transformation results'
    ],
    isRecommended: false,
    ctaText: 'Join VIP Elite'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'succ-1',
    name: 'Vikash Yadav',
    role: 'Software Engineer',
    rating: 5,
    beforeImg: 'https://images.unsplash.com/photo-1517438327276-14e5300c3a48?q=80&w=150', // abstract or icon representation
    comment: 'GLOBAL GYM completely turned my health around. From being over 95 kg with chronic backache, the expert guidance of Coach Rahul helped me melt 18 kg fat and gain solid strength in 6 months.',
    achievement: 'Lost 18 kg & Regained Core Lumbar Strength',
    duration: '6 Month Transformation'
  },
  {
    id: 'succ-2',
    name: 'Anjali Gupta',
    role: 'State Badminton Player',
    rating: 5,
    comment: 'The environment here is so friendly and clean. Safety and hygiene are maintained premiumly. I specifically love the wood sauna facility after my heavy power endurance routine!',
    achievement: 'Boosted Court Speed & Clean Muscular Stamina',
    duration: '4 Month Program'
  },
  {
    id: 'succ-3',
    name: 'Ravi Raj',
    role: 'Business Owner',
    rating: 5,
    comment: ' Patna definitely needed an international standard space like GLOBAL GYM! The imported biomechanical biomechanical pulley machines are exceptionally easy on joints, letting me pull heavy numbers without injury risks.',
    achievement: 'Hypertrophy Boost & Gained 5kg Clean Muscle',
    duration: '12 Weeks Result'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Elite Power Rack Zone',
    category: 'Equipment',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'g-2',
    title: 'Cardio Core Lineup',
    category: 'Equipment',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'g-3',
    title: 'Zumba Core Event Room',
    category: 'Sessions',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'g-4',
    title: 'Commercial Squat Cages',
    category: 'Interior',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'g-5',
    title: 'Wooden Decompression Sauna',
    category: 'Sauna',
    imageUrl: SAUNA_IMAGE
  },
  {
    id: 'g-6',
    title: 'Intensity Training Camp',
    category: 'Sessions',
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop'
  }
];
