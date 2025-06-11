import { ChatMessage } from '../types';

// Mock API responses for local development
export const mockApiCall = async (endpoint: string, data?: any): Promise<any> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
  
  switch (endpoint) {
    case '/chat':
      return generateMockChatResponse(data.message);
    case '/analytics':
      return {
        messageCount: parseInt(localStorage.getItem('vyzier_message_count') || '0'),
        lastActive: new Date().toISOString(),
        engagement: Math.floor(Math.random() * 100) + 200
      };
    default:
      return { success: true };
  }
};

const generateMockChatResponse = (userMessage: string): ChatMessage => {
  const responses = [
    "Great question! Let me help you create content that resonates with your audience. What platform are you focusing on?",
    "I can see you're looking to boost engagement. Here are 3 proven strategies that work for your niche...",
    "Perfect! Let me create a content calendar for you. What's your posting frequency goal?",
    "That's a smart approach. Here's how we can optimize this for maximum reach and conversion...",
    "Excellent choice! I'll analyze your competitor landscape and suggest 5 content gaps you can fill."
  ];
  
  return {
    id: Date.now().toString(),
    type: 'ai',
    message: responses[Math.floor(Math.random() * responses.length)],
    timestamp: new Date()
  };
};

export const saveChatHistory = (messages: ChatMessage[]) => {
  localStorage.setItem('vyzier_chat_history', JSON.stringify(messages));
  localStorage.setItem('vyzier_message_count', messages.length.toString());
};

export const loadChatHistory = (): ChatMessage[] => {
  const saved = localStorage.getItem('vyzier_chat_history');
  if (!saved) return [];
  
  const parsed = JSON.parse(saved);
  // Convert timestamp strings back to Date objects
  return parsed.map((message: any) => ({
    ...message,
    timestamp: new Date(message.timestamp)
  }));
};