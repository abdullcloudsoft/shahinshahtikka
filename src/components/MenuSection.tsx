import React from 'react';
import { Phone, MessageCircle, Clock, ShieldCheck, Flame } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface MenuSectionProps {
  onOrderClick: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOrderClick }) => {
  return (
    <section id="menu" className="py-16 sm:py-20 bg-[#FAF7F2] border-y border-[#EFE8DE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0E6] text-[#B84010] text-xs font-bold uppercase tracking-wider border border-[#EACBB0]">
            <Flame className="w-3.5 h-3.5" />
            Live Charcoal Grill
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-[#1F1915] tracking-tight">
            Menu & Fresh BBQ Orders
          </h2>
          <p className="mt-2 text-base text-[#615448]">
            Freshly marinated and grilled to order over live charcoal coals at Stadium Food Street, Rawalpindi.
          </p>
        </div>

        {/* Compact, Clean Menu Information Card */}
        <div className="mt-10 bg-white rounded-xl border border-[#E8E0D5] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#F0EAE1]">
            <div>
              <h3 className="font-display text-xl font-bold text-[#1F1915]">
                Daily Fresh Grill & Platters
              </h3>
              <p className="text-sm text-[#736354] mt-1">
                Chicken Tikka • Seekh Kabab • BBQ Platters • Grilled Meats • Fresh Tandoori Roti
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F9F5EE] border border-[#E5DACD] text-xs font-medium text-[#594B3D]">
              <Clock className="w-4 h-4 text-[#D9531E]" />
              <span>Served 5:00 PM – 1:00 AM</span>
            </div>
          </div>

          <div className="py-6 text-sm text-[#4E4135] leading-relaxed">
            <p>
              To ensure unmatched quality and freshness, all BBQ items are prepared fresh on the grill upon order.
              For daily specials, customized family platters, and current prices, please call our order counter directly.
            </p>
          </div>

          {/* Quick Order / Inquire Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              id="menu-call-hotline-btn"
              href={`tel:${BUSINESS_DATA.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-lg bg-[#D9531E] hover:bg-[#C24513] text-white font-bold text-sm shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call for Order: {BUSINESS_DATA.phone}</span>
            </a>

            <button
              id="menu-order-dialog-btn"
              onClick={onOrderClick}
              className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-lg bg-[#FAF3EA] hover:bg-[#F2E5D4] text-[#8C340D] border border-[#E4CEB8] font-bold text-sm transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order & Inquiry Details</span>
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#8A7969] bg-[#FDFBF7] py-2.5 px-4 rounded-lg border border-[#F2ECE3]">
            <ShieldCheck className="w-4 h-4 text-[#43884F]" />
            <span>100% Halal • Freshly butchered quality cuts • Dine-in & Takeaway available</span>
          </div>
        </div>
      </div>
    </section>
  );
};
