import React, { useState } from 'react';
import { Phone, Menu as MenuIcon, X, Flame } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface NavbarProps {
  onOrderClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FCFAF7]/95 backdrop-blur-md border-b border-[#EFE9E0] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9531E]"
          >
            <div className="w-10 h-10 rounded-full bg-[#FAF3EC] border border-[#ECD9C6] flex items-center justify-center text-[#D9531E] shadow-xs group-hover:bg-[#D9531E] group-hover:text-white transition-colors duration-200">
              <Flame className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-[#1F1915] leading-tight group-hover:text-[#D9531E] transition-colors">
                Shahinshah Tikka House
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C6D53]">
                Stadium Food Street, Rawalpindi
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-semibold text-[#4A3F35] hover:text-[#D9531E] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D9531E] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call / Order Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="desktop-phone-button"
              href={`tel:${BUSINESS_DATA.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#5A4D40] hover:text-[#D9531E] px-3 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D9531E]" />
              <span>{BUSINESS_DATA.phone}</span>
            </a>
            <button
              id="desktop-order-btn"
              onClick={onOrderClick}
              className="inline-flex items-center gap-2 bg-[#D9531E] hover:bg-[#C24513] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-xs hover:shadow-md transition-all active:scale-95"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              id="mobile-quick-call-btn"
              href={`tel:${BUSINESS_DATA.phone.replace(/[^0-9]/g, '')}`}
              aria-label="Call Shahinshah Tikka House"
              className="p-2.5 rounded-lg bg-[#FAF3EC] text-[#D9531E] hover:bg-[#F3E5D6] transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#4A3F35] hover:bg-[#F5EFE6] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EFE9E0] bg-[#FCFAF7] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-3 text-base font-semibold text-[#3D332B] hover:text-[#D9531E] hover:bg-[#F7EFE4] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2 border-t border-[#EFE9E0]">
            <a
              id="mobile-drawer-call-btn"
              href={`tel:${BUSINESS_DATA.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg border border-[#D9C4AF] bg-white text-[#3D332B] font-semibold text-sm hover:bg-[#FAF6F0]"
            >
              <Phone className="w-4 h-4 text-[#D9531E]" />
              <span>Call: {BUSINESS_DATA.phone}</span>
            </a>
            <button
              id="mobile-drawer-order-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOrderClick();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#D9531E] text-white font-bold text-sm hover:bg-[#C24513] shadow-xs active:scale-98"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
