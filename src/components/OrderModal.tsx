import React from 'react';
import { X, Phone, MessageCircle, MapPin, Clock, Flame } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const whatsappNumber = '92514855015';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Assalamu Alaikum! I would like to place an order at Shahinshah Tikka House.'
  )}`;

  return (
    <div
      id="order-modal-backdrop"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative max-w-md w-full bg-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-[#EAE3D8] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="order-modal-close-btn"
          onClick={onClose}
          aria-label="Close order dialog"
          className="absolute top-4 right-4 p-2 rounded-full text-[#7A6B5D] hover:text-[#1F1915] hover:bg-[#F3ECE0] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-[#FAF0E6] text-[#D9531E] border border-[#ECD9C6] flex items-center justify-center">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-[#1F1915]">
              Order From Shahinshah
            </h3>
            <p className="text-xs text-[#7A6B5D]">Dine-in & Takeaway orders</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-[#504439] leading-relaxed">
          Our authentic chicken tikka, seekh kababs, and BBQ platters are prepared fresh upon order over live charcoal coals. Choose your preferred way to connect:
        </p>

        <div className="mt-6 space-y-3">
          {/* Direct Phone Call */}
          <a
            id="order-modal-call-btn"
            href={`tel:${BUSINESS_DATA.phone.replace(/[^0-9]/g, '')}`}
            className="flex items-center justify-between p-4 rounded-xl bg-[#FAF4ED] hover:bg-[#F3E7D9] border border-[#E9D7C4] text-[#1F1915] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#D9531E] text-white flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#8C340D]">Direct Phone Call</p>
                <p className="text-base font-bold text-[#1F1915]">{BUSINESS_DATA.phone}</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#D9531E] group-hover:underline">
              Call Now
            </span>
          </a>

          {/* WhatsApp Order */}
          <a
            id="order-modal-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-[#F0FAF3] hover:bg-[#E3F6E9] border border-[#CDEED6] text-[#1F1915] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#1C793C]">WhatsApp Inquiry</p>
                <p className="text-base font-bold text-[#1F1915]">{BUSINESS_DATA.phone}</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#1C793C] group-hover:underline">
              Message
            </span>
          </a>
        </div>

        <div className="mt-6 pt-5 border-t border-[#F0EAE1] space-y-2 text-xs text-[#6A5B4E]">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#D9531E] shrink-0" />
            <span>Stadium Food Street, Shamsabad, Rawalpindi</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#D9531E] shrink-0" />
            <span>Daily 5:00 PM – 1:00 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};
