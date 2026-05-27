/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'strength' | 'cardio' | 'mind-body' | 'specialty';
  bgGradient: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TrainerItem {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string[];
  imageUrl: string;
  certification: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  interval: string;
  description: string;
  features: string[];
  isRecommended: boolean;
  ctaText: string;
  savings?: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  beforeImg?: string;
  afterImg?: string;
  comment: string;
  achievement: string;
  duration: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Interior' | 'Equipment' | 'Sessions' | 'Sauna';
  imageUrl: string;
}
