export interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  message: string;
  timestamp: Date;
  isTyping?: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  example: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  message: string;
  avatar: string;
  platform: string;
}

export interface PricingTier {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
}

export interface ScheduledPost {
  platform: string;
  content: string;
  time: string;
  status: 'scheduled' | 'posted' | 'draft';
}