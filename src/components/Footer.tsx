import React from 'react';
import { Flame, Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF7F2] border-t border-[#EFE8DE] py-12 text-[#56493D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#EAE2D5]">
          {/* Brand Info */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FAF0E6] text-[#D9531E] border border-[#ECD9C6] flex items-center justify-center">
                <Flame className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-xl text-[#1F1915]">
                {BUSINESS_DATA.name}
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-[#706153] leading-relaxed">
              Authentic Pakistani BBQ & live charcoal grill. Serving hot, fresh chicken tikka, seekh kababs, and platters at Stadium Food Street, Shamsabad, Rawalpindi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 text-xs sm:text-sm font-semibold text-[#4A3F35]">
            <a href="#home" className="hover:text-[#D9531E] transition-colors">Home</a>
            <a href="#menu" className="hover:text-[#D9531E] transition-colors">Menu</a>
            <a href="#about" className="hover:text-[#D9531E] transition-colors">About</a>
            <a href="#gallery" className="hover:text-[#D9531E] transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-[#D9531E] transition-colors">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_DATA.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white border border-[#E8DFD3] text-xs font-bold text-[#1877F2] hover:bg-[#F4F8FE] transition-colors"
            >
              Facebook
            </a>
            <a
              href={BUSINESS_DATA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white border border-[#E8DFD3] text-xs font-bold text-[#E1306C] hover:bg-[#FEF5F8] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#857567]">
          <p>© {new Date().getFullYear()} Shahinshah Tikka House. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#D9531E]" />
              Stadium Food Street, Shamsabad
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#D9531E]" />
              {BUSINESS_DATA.phone}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
