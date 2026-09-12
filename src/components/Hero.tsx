import React from 'react';

interface HeroProps {
  onOrderClick: () => void;
  onViewMenuClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick, onViewMenuClick }) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[580px] sm:min-h-[640px] md:min-h-[720px] lg:min-h-[780px] flex items-center justify-center overflow-hidden"
    >
      {/* 
        Single HD Hero Image: Edge-to-edge authentic Pakistani BBQ feast
        NO sheet, NO white/cream card, NO translucent box, NO heavy dark overlay
      */}
      <img
        src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2160&q=85"
        alt="Authentic Pakistani charcoal grilled chicken tikka and seekh kabab BBQ"
        fetchPriority="high"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-center select-none"
      />

      {/* 
        Minimal natural vignette strictly to ensure text legibility while keeping the BBQ food 
        vibrant, crisp and 100% visible edge-to-edge. Absolutely NO sheets, cards, or glass panels.
      */}
      <div 
        className="absolute inset-0 bg-black/25 pointer-events-none"
        aria-hidden="true" 
      />

      {/* Hero Content: Simple, natural, and clean */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white py-16">
        <h1 
          id="hero-heading"
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]"
        >
          Shahinshah Tikka House
        </h1>

        <p 
          id="hero-tagline"
          className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-medium tracking-wide text-[#FDEBD0] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
        >
          Authentic Pakistani BBQ
        </p>

        {/* Buttons: Clean, high-contrast, easy to tap on mobile */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            id="hero-view-menu-btn"
            onClick={onViewMenuClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white/95 hover:bg-white text-[#1F1915] font-bold text-base shadow-lg hover:shadow-xl transition-all duration-150 active:scale-95 cursor-pointer"
          >
            View Menu
          </button>
          
          <button
            id="hero-order-now-btn"
            onClick={onOrderClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#D9531E] hover:bg-[#C24513] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-150 active:scale-95 cursor-pointer border border-[#E06536]"
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};
