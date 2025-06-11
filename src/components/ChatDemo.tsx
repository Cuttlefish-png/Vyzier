import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, Sparkles, Calendar, Hash, BarChart3 } from 'lucide-react';
import { ChatMessage } from '../types';
import { mockApiCall, saveChatHistory, loadChatHistory } from '../utils/mockApi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ChatDemo: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load chat history from localStorage
    const savedMessages = loadChatHistory();
    if (savedMessages.length > 0) {
      setMessages(savedMessages);
    } else {
      // Initialize with welcome message
      const welcomeMessage: ChatMessage = {
        id: '1',
        type: 'ai',
        message: "👋 Hi! I'm Vyzier, your AI marketing specialist. I can help you create content strategies, analyze competitors, optimize for different platforms, and much more. What marketing challenge can I help you solve today?",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      message: inputMessage.trim(),
      timestamp: new Date()
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputMessage('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      // Simulate typing delay
      await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 2000));
      
      const aiResponse = await mockApiCall('/chat', { message: inputMessage });
      const aiMessage: ChatMessage = {
        ...aiResponse,
        id: (Date.now() + 1).toString(),
        timestamp: new Date()
      };

      const finalMessages = [...newMessages, aiMessage];
      setMessages(finalMessages);
      saveChatHistory(finalMessages);
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestedPrompts = [
    "Plan a TikTok series for my eco-fashion brand",
    "My Instagram engagement is dropping, help!",
    "Create a LinkedIn content strategy for B2B SaaS",
    "Analyze my competitor's social media strategy"
  ];

  return (
    <section id="chat-demo" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            <span>Try Vyzier Now</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-4">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chat with Vyzier and see why it's built specifically for social media marketing
          </p>
        </div>

        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          {/* Chat Interface */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-bold">Vyzier AI Marketing Specialist</h3>
                  <p className="text-white/80 text-sm">Ready to transform your social media strategy</p>
                </div>
                <div className="ml-auto flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Online</span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-primary text-white rounded-br-md'
                        : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.message}</p>
                    <div className={`text-xs mt-2 ${
                      message.type === 'user' ? 'text-white/70' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                      <span className="text-sm text-gray-500">Vyzier is thinking...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-gray-100">
              <div className="flex space-x-4">
                <div className="flex-1 relative">
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Describe your marketing challenge or goal..."
                    className="w-full p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    rows={2}
                    disabled={isLoading}
                  />
                  <div className="absolute bottom-2 right-2 flex items-center space-x-2">
                    <span className="text-xs text-gray-400">Press Enter to send</span>
                  </div>
                </div>
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="bg-primary hover:bg-primary/90 disabled:bg-gray-300 text-white p-4 rounded-xl transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>

              {/* Suggested Prompts */}
              {messages.length <= 1 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-3">Try these examples:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {suggestedPrompts.map((prompt, index) => (
                      <button
                        key={index}
                        onClick={() => setInputMessage(prompt)}
                        className="text-left p-3 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors duration-200 text-sm"
                      >
                        "{prompt}"
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-purple-50 rounded-xl">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-dark mb-2">Content Planning</h4>
              <p className="text-sm text-gray-600">Get complete content calendars with optimal timing</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-secondary/5 to-green-50 rounded-xl">
              <Hash className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h4 className="font-semibold text-dark mb-2">Smart Hashtags</h4>
              <p className="text-sm text-gray-600">Data-driven hashtag strategies for maximum reach</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-accent/5 to-orange-50 rounded-xl">
              <BarChart3 className="w-8 h-8 text-accent mx-auto mb-4" />
              <h4 className="font-semibold text-dark mb-2">Analytics Insights</h4>
              <p className="text-sm text-gray-600">Turn complex metrics into actionable strategies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;