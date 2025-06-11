import React, { useState } from 'react';
import { Target, TrendingUp, Hash, BarChart3, Calendar, Users, ArrowRight, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Features: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Target,
      title: 'Platform-Specific Optimization',
      description: 'Auto-adapts content for Instagram, TikTok, Twitter, and LinkedIn algorithms',
      example: 'Converts your idea into platform-perfect formats with optimal hashtags and timing',
      demo: 'Instagram: Square video + Stories\nTikTok: Vertical + trending sounds\nLinkedIn: Professional tone + industry hashtags',
      color: 'from-primary to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Competitor Analysis Engine',
      description: 'Analyzes top performers in your niche to inform strategy',
      example: 'Shows what content types are trending in eco-fashion this month',
      demo: 'Top performing formats:\n📈 Before/after transformations\n🔥 Behind-the-scenes content\n💡 Educational carousels',
      color: 'from-secondary to-green-600'
    },
    {
      icon: Hash,
      title: 'Smart Hashtag Strategy',
      description: 'Builds data-driven hashtag sets for maximum reach',
      example: 'Combines high-volume and niche tags for optimal discovery',
      demo: 'High-volume: #SustainableFashion (2M)\nMedium: #EcoFriendlyStyle (500K)\nNiche: #SlowFashionMovement (50K)',
      color: 'from-accent to-orange-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics Translator',
      description: 'Turns complex metrics into actionable insights',
      example: 'Explains why your engagement dropped and what to post next',
      demo: 'Issue: 40% engagement drop\nCause: Posting time shift\nSolution: Return to 6-8pm EST window',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Calendar,
      title: 'Content Calendar Magic',
      description: 'Creates cohesive posting schedules that tell your brand story',
      example: 'Plans themed weeks and campaign sequences automatically',
      demo: 'Week 1: Education theme\nWeek 2: Behind-the-scenes\nWeek 3: User-generated content\nWeek 4: Product showcase',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Audience Psychology',
      description: 'Understands what motivates your specific demographic',
      example: 'Crafts Gen Z content differently than Millennial messaging',
      demo: 'Gen Z: Quick, authentic, trend-driven\nMillennials: Value-focused, detailed\nBoomers: Clear, benefit-heavy',
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  return (
    <section id="features" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Powerful Marketing Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-4">
            Everything You Need to Dominate Social Media
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built-in expertise that would take years to develop, available instantly
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredFeature === index;
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Feature Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Feature Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-montserrat font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Example/Demo Toggle */}
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-primary/30 group-hover:border-primary transition-colors duration-300">
                      <div className="text-sm text-gray-500 mb-2">
                        {isHovered ? 'Live Demo:' : 'Example:'}
                      </div>
                      <div className="text-sm text-gray-700">
                        {isHovered ? (
                          <pre className="whitespace-pre-wrap font-inter">{feature.demo}</pre>
                        ) : (
                          feature.example
                        )}
                      </div>
                    </div>

                    {/* Try Feature Button */}
                    <button className="flex items-center space-x-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-200 group-hover:translate-x-1 transform">
                      <span>Try this feature</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-montserrat font-bold text-center text-dark mb-8">
            Vyzier vs Generic AI Tools
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-montserrat font-semibold text-dark">Feature</th>
                  <th className="text-center py-4 px-6 font-montserrat font-semibold text-primary">Vyzier</th>
                  <th className="text-center py-4 px-6 font-montserrat font-semibold text-gray-500">ChatGPT/Claude</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Built-in marketing knowledge', true, false],
                  ['Platform-specific optimization', true, false],
                  ['No prompt engineering required', true, false],
                  ['Competitor analysis', true, false],
                  ['Content scheduling', true, false],
                  ['Analytics insights', true, false]
                ].map(([feature, vyzier, generic], index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">{feature}</td>
                    <td className="py-4 px-6 text-center">
                      {vyzier ? (
                        <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-sm">✓</span>
                        </div>
                      ) : (
                        <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-sm">✗</span>
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {generic ? (
                        <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-sm">✓</span>
                        </div>
                      ) : (
                        <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-sm">✗</span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;