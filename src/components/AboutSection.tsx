import React from 'react';
import { Flame, UtensilsCrossed, MapPin } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#FCFAF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D9531E] bg-[#FAF1E8] px-3 py-1 rounded-full border border-[#EBD6C3]">
            About Us
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-[#1F1915] tracking-tight">
            About Shahinshah Tikka House
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#524538] leading-relaxed">
            Shahinshah Tikka House is a dedicated Pakistani BBQ and tikka destination located at Stadium Food Street, Shamsabad, Rawalpindi. We specialize in authentic charcoal-grilled chicken tikka, succulent seekh kababs, and signature BBQ platters prepared with traditional spices and fresh cuts every evening.
          </p>
        </div>

        {/* 3 Simple, concise pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#EBE4D8] shadow-xs flex flex-col items-start">
            <div className="w-10 h-10 rounded-lg bg-[#FAF2EB] text-[#D9531E] flex items-center justify-center mb-4 border border-[#ECD7C2]">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#1F1915]">
              Live Charcoal Fire
            </h3>
            <p className="mt-2 text-sm text-[#665749] leading-relaxed">
              Every skewer is flame-kissed over live charcoal coals, delivering the authentic charred aroma and smoky tenderness of traditional Pakistani BBQ.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#EBE4D8] shadow-xs flex flex-col items-start">
            <div className="w-10 h-10 rounded-lg bg-[#FAF2EB] text-[#D9531E] flex items-center justify-center mb-4 border border-[#ECD7C2]">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#1F1915]">
              Traditional Marinades
            </h3>
            <p className="mt-2 text-sm text-[#665749] leading-relaxed">
              Carefully balanced Pakistani spice rubs and yogurt marinades that infuse deep flavor into each tender cut of chicken and beef.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#EBE4D8] shadow-xs flex flex-col items-start">
            <div className="w-10 h-10 rounded-lg bg-[#FAF2EB] text-[#D9531E] flex items-center justify-center mb-4 border border-[#ECD7C2]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#1F1915]">
              Stadium Food Street
            </h3>
            <p className="mt-2 text-sm text-[#665749] leading-relaxed">
              Conveniently situated in Shamsabad, Rawalpindi — offering vibrant outdoor food street dining as well as quick takeaway orders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
