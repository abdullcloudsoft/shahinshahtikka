import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Phone, MapPin, Clock, Utensils, Info } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';
import { ChatMessage } from '../types';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Assalamu Alaikum! Welcome to Shahinshah Tikka House. How can I help you today?',
      timestamp: 'Just now',
      quickActions: [
        { label: 'Menu', action: 'menu' },
        { label: 'Location', action: 'location' },
        { label: 'Contact', action: 'contact' },
        { label: 'Opening hours', action: 'hours' },
        { label: 'Ordering', action: 'ordering' }
      ]
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const getBotResponse = (query: string): { text: string; quickActions?: { label: string; action: string }[] } => {
    const q = query.toLowerCase();

    if (q.includes('menu') || q.includes('food') || q.includes('dish') || q.includes('tikka') || q.includes('kabab') || q.includes('price')) {
      return {
        text: 'We specialize in authentic charcoal-grilled Chicken Tikka, Seekh Kabab, and BBQ Platters prepared fresh over live coals. Because all cuts are prepared daily to order, please call us at 051-4855015 for today\'s available cuts and current pricing.',
        quickActions: [
          { label: 'Call 051-4855015', action: 'call_now' },
          { label: 'Ordering Info', action: 'ordering' }
        ]
      };
    }

    if (q.includes('location') || q.includes('address') || q.includes('where') || q.includes('map') || q.includes('shamsabad') || q.includes('stadium')) {
      return {
        text: `We are located at:\n${BUSINESS_DATA.name}\n${BUSINESS_DATA.plusCode}, ${BUSINESS_DATA.address}, ${BUSINESS_DATA.cityCountry}.`,
        quickActions: [
          { label: 'Open Google Maps', action: 'open_maps' },
          { label: 'Opening Hours', action: 'hours' }
        ]
      };
    }

    if (q.includes('contact') || q.includes('phone') || q.includes('number') || q.includes('email') || q.includes('whatsapp')) {
      return {
        text: `You can reach us at:\n• Phone: ${BUSINESS_DATA.phone}\n• Email: ${BUSINESS_DATA.email}\n• Stadium Food Street, Shamsabad, Rawalpindi.`,
        quickActions: [
          { label: 'Call 051-4855015', action: 'call_now' },
          { label: 'Facebook / Instagram', action: 'social' }
        ]
      };
    }

    if (q.includes('hour') || q.includes('time') || q.includes('open') || q.includes('timing') || q.includes('close')) {
      return {
        text: `Our opening hours are:\n${BUSINESS_DATA.hours}.\nFresh live charcoal grilling begins every evening at 5:00 PM.`,
        quickActions: [
          { label: 'Location', action: 'location' },
          { label: 'Ordering', action: 'ordering' }
        ]
      };
    }

    if (q.includes('order') || q.includes('delivery') || q.includes('takeaway') || q.includes('dine') || q.includes('book')) {
      return {
        text: `To place a takeaway or dine-in order, please call our order counter directly at ${BUSINESS_DATA.phone}. We prepare fresh BBQ to order.`,
        quickActions: [
          { label: 'Call Now', action: 'call_now' },
          { label: 'Location', action: 'location' }
        ]
      };
    }

    if (q.includes('social') || q.includes('facebook') || q.includes('instagram')) {
      return {
        text: `Follow our updates and photos:\n• Facebook: facebook.com/shahinshahtikkahouse\n• Instagram: instagram.com/shahinshahtikkahouse`,
        quickActions: [
          { label: 'Contact', action: 'contact' },
          { label: 'Menu', action: 'menu' }
        ]
      };
    }

    return {
      text: 'I can assist you with our Menu, Location, Contact, Opening hours, or Ordering details. Please select an option below or call us at 051-4855015.',
      quickActions: [
        { label: 'Menu', action: 'menu' },
        { label: 'Location', action: 'location' },
        { label: 'Contact', action: 'contact' },
        { label: 'Opening hours', action: 'hours' },
        { label: 'Ordering', action: 'ordering' }
      ]
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');

    setTimeout(() => {
      const response = getBotResponse(text);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.text,
        timestamp: 'Just now',
        quickActions: response.quickActions
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 300);
  };

  const handleActionClick = (action: string) => {
    if (action === 'call_now') {
      window.location.href = `tel:${BUSINESS_DATA.phone.replace(/[^0-9]/g, '')}`;
      return;
    }
    if (action === 'open_maps') {
      window.open(BUSINESS_DATA.googleMapsUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    if (action === 'social') {
      window.open(BUSINESS_DATA.facebook, '_blank', 'noopener,noreferrer');
      return;
    }

    const labelMap: Record<string, string> = {
      menu: 'Tell me about the Menu',
      location: 'What is your Location?',
      contact: 'How can I contact you?',
      hours: 'What are your Opening hours?',
      ordering: 'How do I place an Order?'
    };

    handleSend(labelMap[action] || action);
  };

  return (
    <div className="fixed bottom-5 right-4 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          id="chatbot-open-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open restaurant assistant"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#1F1915] hover:bg-[#382E26] text-white shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95 cursor-pointer border border-[#483B32]"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-[#E56837]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#3EA04F] ring-2 ring-[#1F1915]" />
          </div>
          <span className="text-xs font-bold tracking-wide">Assistant</span>
        </button>
      )}

      {/* Small, Non-Intrusive Chat Window */}
      {isOpen && (
        <div
          id="chatbot-window"
          role="dialog"
          aria-label="Restaurant Chatbot"
          className="w-[calc(100vw-2rem)] sm:w-88 h-[470px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-[#E8E1D7] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150"
        >
          {/* Header */}
          <div className="p-3.5 bg-[#FAF7F2] border-b border-[#EFE8DE] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FAF0E6] text-[#D9531E] border border-[#ECD9C6] flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-[#1F1915] leading-tight">
                  Shahinshah Assistant
                </h4>
                <p className="text-[11px] text-[#3EA04F] font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3EA04F]" />
                  Online • Stadium Food Street
                </p>
              </div>
            </div>
            <button
              id="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
              className="p-1.5 rounded-lg text-[#7A6B5D] hover:text-[#1F1915] hover:bg-[#EFE8DE] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#FCFAF7] text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-[#D9531E] text-white rounded-br-xs'
                      : 'bg-white text-[#2C241D] border border-[#EBE4D8] rounded-bl-xs shadow-2xs'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Quick Action Buttons */}
                {msg.quickActions && msg.quickActions.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5 max-w-[95%]">
                    {msg.quickActions.map((qa, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleActionClick(qa.action)}
                        className="px-2.5 py-1 rounded-full bg-[#FAF3EA] hover:bg-[#F2E4D2] text-[#8C340D] border border-[#E8D4C1] text-[11px] font-semibold transition-colors cursor-pointer"
                      >
                        {qa.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Categories Bar */}
          <div className="px-3 py-1.5 bg-[#FAF7F2] border-t border-[#F0EAE1] flex items-center gap-1 overflow-x-auto no-scrollbar text-[11px]">
            <button
              onClick={() => handleActionClick('menu')}
              className="px-2 py-0.5 rounded-md hover:bg-[#EFE8DE] text-[#635345] font-medium shrink-0 flex items-center gap-1 cursor-pointer"
            >
              <Utensils className="w-3 h-3 text-[#D9531E]" />
              Menu
            </button>
            <button
              onClick={() => handleActionClick('location')}
              className="px-2 py-0.5 rounded-md hover:bg-[#EFE8DE] text-[#635345] font-medium shrink-0 flex items-center gap-1 cursor-pointer"
            >
              <MapPin className="w-3 h-3 text-[#D9531E]" />
              Location
            </button>
            <button
              onClick={() => handleActionClick('hours')}
              className="px-2 py-0.5 rounded-md hover:bg-[#EFE8DE] text-[#635345] font-medium shrink-0 flex items-center gap-1 cursor-pointer"
            >
              <Clock className="w-3 h-3 text-[#D9531E]" />
              Hours
            </button>
            <button
              onClick={() => handleActionClick('contact')}
              className="px-2 py-0.5 rounded-md hover:bg-[#EFE8DE] text-[#635345] font-medium shrink-0 flex items-center gap-1 cursor-pointer"
            >
              <Phone className="w-3 h-3 text-[#D9531E]" />
              Contact
            </button>
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 bg-white border-t border-[#EFE8DE] flex items-center gap-2"
          >
            <input
              id="chatbot-input"
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask about menu, hours, location..."
              className="flex-1 text-xs px-3 py-2 rounded-lg bg-[#FAF8F5] border border-[#E5DDD2] text-[#241F1A] placeholder-[#9A8B7C] focus:outline-none focus:border-[#D9531E]"
            />
            <button
              id="chatbot-send-btn"
              type="submit"
              disabled={!inputVal.trim()}
              aria-label="Send message"
              className="p-2 rounded-lg bg-[#D9531E] hover:bg-[#BF4212] disabled:opacity-40 disabled:hover:bg-[#D9531E] text-white transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
