import React from 'react';
import { Check, Star, ArrowRight, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { pricingTiers } from '../utils/mockData';

const Pricing: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section id="pricing" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-4">
            Choose Your Marketing Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          {pricingTiers.map((tier, index) => (
            <div 
              key={tier.name}
              className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                tier.isPopular 
                  ? 'border-primary shadow-primary/20 scale-105' 
                  : 'border-gray-100'
              }`}
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Tier Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-montserrat font-bold text-dark mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {tier.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-dark">
                    ${tier.price}
                  </span>
                  <span className="text-gray-500 ml-2">/{tier.period}</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      tier.isPopular ? 'text-primary' : 'text-secondary'
                    }`} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 px-6 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2 ${
                tier.isPopular
                  ? 'bg-primary hover:bg-primary/90 text-white shadow-lg'
                  : tier.name === 'Free'
                  ? 'bg-secondary hover:bg-secondary/90 text-white'
                  : 'bg-gray-900 hover:bg-gray-800 text-white'
              }`}>
                {tier.name === 'Enterprise' && <Zap className="w-5 h-5" />}
                <span>{tier.cta}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Special Notes */}
              <div className="mt-6 text-center text-sm text-gray-500">
                {tier.name === 'Free' && 'No credit card required'}
                {tier.name === 'Pro' && '14-day free trial'}
                {tier.name === 'Enterprise' && 'Custom pricing available'}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-montserrat font-bold text-center text-dark mb-12">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Can I change plans anytime?",
                answer: "Yes! Upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                question: "What happens to my data if I cancel?",
                answer: "Your conversation history and preferences are saved for 30 days after cancellation."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee for all paid plans, no questions asked."
              },
              {
                question: "Is there a team discount?",
                answer: "Yes! Contact us for custom pricing for teams of 5+ users."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h4 className="font-montserrat font-bold text-dark mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-6 py-3 rounded-full">
            <Check className="w-5 h-5" />
            <span className="font-semibold">30-Day Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;