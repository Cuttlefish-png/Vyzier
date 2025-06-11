import React from 'react';
import { TrendingUp, Users, Clock, Target, BarChart3, Zap, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  const industryStats = [
    {
      icon: Users,
      stat: "73%",
      description: "of marketers say AI tools improved their content quality",
      source: "Content Marketing Institute 2024"
    },
    {
      icon: Clock,
      stat: "5.2hrs",
      description: "average time saved per day using AI for content creation",
      source: "Marketing AI Report 2024"
    },
    {
      icon: TrendingUp,
      stat: "340%",
      description: "average engagement increase with AI-optimized content",
      source: "Social Media Examiner 2024"
    },
    {
      icon: Target,
      stat: "89%",
      description: "of businesses plan to increase AI marketing spend",
      source: "HubSpot State of Marketing 2024"
    }
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: "Data-Driven Strategy",
      description: "AI analyzes millions of posts to identify what actually works for your audience and niche, removing guesswork from content planning."
    },
    {
      icon: Clock,
      title: "Scale Content Production",
      description: "Create weeks of content in hours, not days. AI handles ideation, optimization, and scheduling while you focus on strategy."
    },
    {
      icon: Target,
      title: "Platform Optimization",
      description: "Each platform has unique algorithms and audience behaviors. AI ensures your content is perfectly tailored for maximum reach."
    },
    {
      icon: TrendingUp,
      title: "Competitive Intelligence",
      description: "Stay ahead by understanding what's working in your industry. AI monitors trends and competitor strategies 24/7."
    }
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-4">
            The AI Revolution in Social Media Marketing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how AI is transforming the way creators and businesses approach social media strategy
          </p>
        </div>

        <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Trust Indicators */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white mb-16">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-white/80">Creators Trust Vyzier</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">87%</div>
                <div className="text-white/80">Faster Content Planning</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">10k+</div>
                <div className="text-white/80">Campaigns Created</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-white/80">AI Marketing Support</div>
              </div>
            </div>
          </div>

          {/* Industry Statistics */}
          <div className="mb-16">
            <h3 className="text-2xl font-montserrat font-bold text-center text-dark mb-12">
              Industry Research: AI's Impact on Marketing
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industryStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.stat}</div>
                    <p className="text-gray-700 mb-2 font-medium">{stat.description}</p>
                    <p className="text-sm text-gray-500">{stat.source}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* How AI SMM Helps */}
          <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-center text-dark mb-4">
              How AI Social Media Marketing Transforms Your Business
            </h3>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Whether you're a solo creator or managing a brand, AI-powered social media marketing delivers measurable results
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-montserrat font-bold text-dark mb-2">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Creator vs Business Benefits */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* For Creators */}
              <div className="bg-white rounded-xl p-6 border-l-4 border-secondary">
                <h4 className="font-montserrat font-bold text-dark mb-4 flex items-center">
                  <Users className="w-5 h-5 text-secondary mr-2" />
                  For Content Creators
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Generate endless content ideas that match your niche and audience</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Optimize posting times and hashtags for maximum organic reach</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Maintain consistent brand voice across all platforms</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Track what content performs best and replicate success</span>
                  </li>
                </ul>
              </div>

              {/* For Businesses */}
              <div className="bg-white rounded-xl p-6 border-l-4 border-primary">
                <h4 className="font-montserrat font-bold text-dark mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 text-primary mr-2" />
                  For Businesses
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Scale content production without hiring additional team members</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Maintain brand consistency across multiple social channels</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Generate data-driven insights for strategic decision making</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Reduce marketing costs while improving campaign performance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <button 
                onClick={() => {
                  const element = document.getElementById('chat-demo');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center space-x-2 mx-auto"
              >
                <Zap className="w-5 h-5" />
                <span>Experience AI Marketing Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;