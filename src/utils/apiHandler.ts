import { mockChatApi } from './mockApi';
import { ChatRequest, ChatResponse } from '../types';

export const handleChatRequest = async (
  request: ChatRequest
): Promise<ChatResponse> => {
  // Use mock API during development
  if (import.meta.env.DEV) {
    return mockChatApi(request);
  }
  
  // Production API call
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    });
    
    return response.json();
  } catch (error) {
    console.error('API Error:', error);
    return { 
      response: "⚠️ Service temporarily unavailable. Please try again later." 
    };
  }
}; 