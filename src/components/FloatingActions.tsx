import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const FloatingActions: React.FC = () => {
  // Pakistani WhatsApp format for 051-4855015: 92514855015
  const whatsappNumber = '92514855015';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Assalamu Alaikum! I would like to inquire about today\'s BBQ specials and orders at Shahinshah Tikka House.'
  )}`;

  return (
    <aside 
      aria-label="Quick contact shortcuts"
      className="fixed bottom-5 left-4 z-40 flex flex-col gap-2.5"
    >
      {/* WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shahinshah Tikka House on WhatsApp"
        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BE5B] text-white font-bold text-xs shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-semibold">WhatsApp</span>
      </a>

      {/* Call Button */}
      <a
        id="floating-call-btn"
        href={`tel:${BUSINESS_DATA.phone.replace(/[^0-9]/g, '')}`}
        aria-label={`Call Shahinshah Tikka House at ${BUSINESS_DATA.phone}`}
        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-[#D9531E] hover:bg-[#BF4212] text-white font-bold text-xs shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline font-semibold">Call {BUSINESS_DATA.phone}</span>
      </a>
    </aside>
  );
};
