import React, { useState } from 'react';
import { MessageCircle, Brain, Rocket, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HowItWorks: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: MessageCircle,
      title: "Describe Your Marketing Need",
      description: "Simply tell Vyzier what you want to accomplish in plain English",
      example: "Plan a TikTok series about eco-fashion for Gen Z",
      color: "from-primary to-purple-600"
    },
    {
      icon: Brain,
      title: "Vyzier Asks Smart Questions",
      description: "Our AI asks strategic follow-ups to understand your goals and audience",
      example: "What's your main goal - brand awareness, sales, or community building?",
      color: "from-secondary to-green-600"
    },
    {
      icon: Rocket,
      title: "Get Ready-to-Use Strategy",
      description: "Receive comprehensive content plans, scripts, and optimization tips",
      example: "7-part series with optimal posting times, hashtags, and engagement tactics",
      color: "from-accent to-orange-600"
    }
  ];

  return (
    <section id="how-it-works" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-4">
            How Vyzier Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to transform your social media marketing from struggle to success
          </p>
        </div>

        <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-300 transform translate-x-8 hidden lg:block">
                        <div className={`h-full bg-gradient-to-r ${step.color} transition-all duration-1000 ${
                          activeStep >= index ? 'w-full' : 'w-0'
                        }`}></div>
                      </div>
                    )}

                    <div className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                      activeStep === index ? 'border-primary shadow-primary/20 scale-105' : 'border-gray-100'
                    }`}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 mx-auto`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm font-semibold text-gray-500 mb-2">STEP {index + 1}</div>
                        <h3 className="text-xl font-montserrat font-bold text-dark mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {step.description}
                        </p>
                        
                        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-primary">
                          <div className="text-sm text-gray-500 mb-1">Example:</div>
                          <div className="text-sm text-gray-700 italic">"{step.example}"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-500 mb-1">STEP {index + 1}</div>
                    <h3 className="text-lg font-montserrat font-bold text-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    
                    <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-primary">
                      <div className="text-xs text-gray-500 mb-1">Example:</div>
                      <div className="text-sm text-gray-700 italic">"{step.example}"</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Demo Flow */}
          <div className="mt-16 bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-montserrat font-bold text-center text-dark mb-8">
              See It In Action
            </h3>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-6">
                {/* Chat Flow Simulation */}
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-primary text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                      <p className="text-sm">Plan a TikTok series about eco-fashion for Gen Z</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-bl-md max-w-xs">
                      <p className="text-sm">Perfect! Let me create a comprehensive eco-fashion TikTok strategy. What's your main goal - brand awareness, product sales, or building community?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-primary text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                      <p className="text-sm">Brand awareness for my sustainable clothing line</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-gradient-to-r from-secondary to-green-500 text-white px-4 py-2 rounded-2xl rounded-bl-md max-w-md">
                      <p className="text-sm">🎯 Here's your 7-part TikTok series:<br/><br/>
                        1. "Fast Fashion Reality Check"<br/>
                        2. "Thrift Flip Challenge"<br/>
                        3. "True Cost Breakdown"<br/>
                        <em>+ 4 more with hashtags & timing</em>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                  <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 mx-auto">
                    <span>Try This Conversation</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;