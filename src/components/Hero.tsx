import React, { useState, useEffect } from 'react';
import { MessageCircle, Star, Users, TrendingUp, Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [currentMessage, setCurrentMessage] = useState(0);

  const chatExamples = [
    { user: "Plan a TikTok series about eco-fashion", ai: "Perfect! Here's your 7-part sustainability series with optimal hashtags..." },
    { user: "My Instagram engagement is dropping", ai: "I see the issue. Your posting time is off. Try 6-9pm EST with these content types..." },
    { user: "Need LinkedIn content for B2B SaaS", ai: "Got it! Here's a thought leadership strategy targeting decision-makers..." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % chatExamples.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToChat = () => {
    const element = document.getElementById('chat-demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 pt-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              <span>500+ Creators Trust Vyzier</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-dark leading-tight">
                Stop Prompting,<br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Start Performing
                </span>
              </h1>
              <p className="text-xl text-gray-600 font-inter leading-relaxed">
                Finally: An AI that speaks social media fluently. No more prompt engineering - just results.
                Built specifically for social media marketing professionals.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToChat}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start Free Chat - No Credit Card</span>
              </button>
              <button className="border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>See Demo Video</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <span className="text-sm text-gray-600">87% faster content planning</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-secondary" />
                <span className="text-sm text-gray-600">10k+ campaigns created</span>
              </div>
            </div>
          </div>

          {/* Right Column - Animated Chat Demo */}
          <div className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'} delay-300`}>
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-lg mx-auto">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark">Vyzier AI</h3>
                  <p className="text-sm text-green-500">● Online - Ready to help</p>
                </div>
              </div>

              <div className="space-y-4 h-64 overflow-hidden">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-primary text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                    <p className="text-sm">{chatExamples[currentMessage].user}</p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-bl-md max-w-xs">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                      <span className="text-xs text-gray-500">Analyzing your request...</span>
                    </div>
                    <p className="text-sm">{chatExamples[currentMessage].ai}</p>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-accent text-dark px-3 py-1 rounded-full text-xs font-medium animate-bounce-subtle">
                  Platform-Optimized ✨
                </div>
                <div className="absolute -bottom-4 -left-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium animate-bounce-subtle delay-500">
                  Strategy Ready 🚀
                </div>
              </div>

              {/* Input Area */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="bg-gray-50 rounded-full px-4 py-3 flex items-center space-x-2">
                  <input 
                    type="text" 
                    placeholder="Describe your marketing challenge..."
                    className="bg-transparent flex-1 outline-none text-sm text-gray-600"
                    disabled
                  />
                  <button className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 left-8 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -z-10 bottom-8 right-8 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;