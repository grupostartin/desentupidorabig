export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  isEmergency?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  title?: string;
  location: string;
  role?: string;
  rating: number;
  comment: string;
  initials: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface RegionZone {
  name: string;
  etaMinutes: number;
  availableVans: number;
  popularBairros: string[];
}
