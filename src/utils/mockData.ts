import { ChatMessage, Feature, Testimonial, PricingTier, ScheduledPost } from '../types';

export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    type: 'user',
    message: 'Plan a TikTok series about eco-fashion for Gen Z',
    timestamp: new Date(),
  },
  {
    id: '2',
    type: 'ai',
    message: 'Perfect! Let me create a comprehensive eco-fashion TikTok strategy. What\'s your main goal - brand awareness, product sales, or building community?',
    timestamp: new Date(),
  },
  {
    id: '3',
    type: 'user',
    message: 'Brand awareness for my sustainable clothing line',
    timestamp: new Date(),
  },
  {
    id: '4',
    type: 'ai',
    message: '🎯 Here\'s your 7-part TikTok series:\n\n1. "Fast Fashion Reality Check" - Behind-the-scenes of textile waste\n2. "Thrift Flip Challenge" - Transform old clothes\n3. "True Cost Breakdown" - Price comparison sustainable vs fast fashion\n4. "Meet Your Maker" - Introduce your ethical suppliers\n5. "Style Sustainability" - Trend pieces that last\n6. "Care Guide Hacks" - Make clothes last longer\n7. "Community Spotlight" - Feature customers\n\nOptimal posting: 3x/week, 6-9pm EST\nHashtags: #SustainableFashion #EcoFriendly #SlowFashion #ThriftFlip #GenZStyle\n\nWant me to write the scripts?',
    timestamp: new Date(),
  }
];

export const features: Feature[] = [
  {
    icon: 'Target',
    title: 'Platform-Specific Optimization',
    description: 'Auto-adapts content for Instagram, TikTok, Twitter, and LinkedIn algorithms',
    example: 'Converts your idea into platform-perfect formats with optimal hashtags and timing'
  },
  {
    icon: 'TrendingUp',
    title: 'Competitor Analysis Engine',
    description: 'Analyzes top performers in your niche to inform strategy',
    example: 'Shows what content types are trending in eco-fashion this month'
  },
  {
    icon: 'Hash',
    title: 'Smart Hashtag Strategy',
    description: 'Builds data-driven hashtag sets for maximum reach',
    example: 'Combines high-volume and niche tags for optimal discovery'
  },
  {
    icon: 'BarChart3',
    title: 'Analytics Translator',
    description: 'Turns complex metrics into actionable insights',
    example: 'Explains why your engagement dropped and what to post next'
  },
  {
    icon: 'Calendar',
    title: 'Content Calendar Magic',
    description: 'Creates cohesive posting schedules that tell your brand story',
    example: 'Plans themed weeks and campaign sequences automatically'
  },
  {
    icon: 'Users',
    title: 'Audience Psychology',
    description: 'Understands what motivates your specific demographic',
    example: 'Crafts Gen Z content differently than Millennial messaging'
  }
];

// Removed fake testimonials - replaced with industry insights in component

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    price: 0,
    period: 'month',
    description: 'Perfect for testing the waters',
    features: [
      '50 AI conversations per month',
      'Basic content suggestions',
      'Platform-specific formatting',
      'Community support'
    ],
    cta: 'Start Free Chat'
  },
  {
    name: 'Pro',
    price: 19,
    period: 'month',
    description: 'For serious content creators',
    features: [
      'Unlimited AI conversations',
      'Advanced competitor analysis',
      'Content calendar planning',
      'Hashtag strategy builder',
      'Analytics insights',
      'Priority support',
      'Custom brand voice training'
    ],
    isPopular: true,
    cta: 'Start Pro Trial'
  },
  {
    name: 'Enterprise',
    price: 99,
    period: 'month',
    description: 'For agencies and teams',
    features: [
      'Everything in Pro',
      'Team collaboration tools',
      'White-label options',
      'Custom AI model training',
      'Dedicated account manager',
      'Advanced reporting',
      'API access'
    ],
    cta: 'Contact Sales'
  }
];

export const scheduledPosts: ScheduledPost[] = [
  {
    platform: 'Instagram',
    content: 'Summer sustainable fashion trends that actually work 🌱',
    time: 'Today 6:00 PM',
    status: 'scheduled'
  },
  {
    platform: 'TikTok',
    content: 'Thrift flip transformation - $5 to runway ready!',
    time: 'Tomorrow 7:30 PM',
    status: 'scheduled'
  },
  {
    platform: 'Twitter',
    content: 'Thread: The real cost of fast fashion (you won\'t believe #3)',
    time: 'Jun 16 2:00 PM',
    status: 'draft'
  }
];