import React from 'react';
import { AlertTriangle, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProblemSolution: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-4">
            Why Vyzier Beats ChatGPT for Marketing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop wrestling with generic AI. Get a marketing specialist that understands your world.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Problem Side */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <AlertTriangle className="w-4 h-4" />
                <span>The Generic AI Problem</span>
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-dark mb-4">
                Frustrated with ChatGPT?
              </h3>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Requires expert prompt engineering just to get decent results</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Gives generic advice that doesn't understand platform nuances</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">No built-in marketing knowledge or industry insights</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Wastes hours explaining basic marketing concepts</p>
                </div>
              </div>
            </div>

            {/* Mock frustrated user interface */}
            <div className="bg-gray-100 rounded-lg p-4 border-l-4 border-red-400">
              <div className="text-sm text-gray-600 mb-2">Typical ChatGPT experience:</div>
              <div className="bg-white rounded p-3 text-sm">
                <p className="text-gray-500 mb-2"><strong>You:</strong> "Help me with Instagram marketing"</p>
                <p className="text-gray-700"><strong>ChatGPT:</strong> "Here are some general social media tips... [500 words of basic advice]"</p>
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <CheckCircle className="w-4 h-4" />
                <span>The Vyzier Solution</span>
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-dark mb-4">
                Built for Marketing Professionals
              </h3>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 shadow-sm border border-primary/20">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Built-in marketing expertise - no prompt engineering needed</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Platform-specific optimization for Instagram, TikTok, LinkedIn</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Advanced competitor analysis and trend identification</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Content calendar and analytics insights included</p>
                </div>
              </div>
            </div>

            {/* Mock Vyzier interface */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-4 text-white">
              <div className="text-sm text-white/80 mb-2">Vyzier experience:</div>
              <div className="bg-white/10 backdrop-blur rounded p-3 text-sm">
                <p className="text-white/90 mb-2"><strong>You:</strong> "Help me with Instagram marketing"</p>
                <p className="text-white"><strong>Vyzier:</strong> "What's your niche and follower count? I'll create a custom strategy with optimal posting times, hashtag sets, and content themes that work for your audience."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Arrow */}
        <div className="flex justify-center mt-12 mb-8">
          <div className="bg-white rounded-full p-4 shadow-lg border-2 border-primary/20">
            <ArrowRight className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Results Comparison */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-montserrat font-bold text-center mb-8 text-dark">
            The Results Speak for Themselves
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">87%</div>
              <p className="text-gray-600">Faster Content Planning</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">340%</div>
              <p className="text-gray-600">Engagement Increase</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">5hrs</div>
              <p className="text-gray-600">Daily Time Saved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;