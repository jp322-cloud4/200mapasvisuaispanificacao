export interface ActivityCard {
  id: string;
  title: string;
  description: string;
  accentColor: string;
  tag?: string;
}

export interface BenefitCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: string;
}

export interface BonusCard {
  id: string;
  title: string;
  description: string;
  badgeText: string;
  accentColor: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  isPopular?: boolean;
  popularBadge?: string;
  features: string[];
  ctaText: string;
  checkoutUrl: string;
}

export interface TestimonialPlaceholder {
  id: string;
  label: string;
  roleHint: string;
  placeholderText: string;
}
