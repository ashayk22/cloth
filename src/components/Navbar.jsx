import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);

  return (
    <header className="w-full max-w-[1720px] mx-auto pt-4 sm:pt-5 pb-2 px-6 sm:px-12 lg:px-16 xl:px-20 flex items-center justify-between select-none">
      
      {/* Brand Logo */}
      <a href="#home" className="flex items-center transition-opacity hover:opacity-90">
        <img 
          src="/assets/brand/logo.png" 
          alt="bandhani" 
          className="h-[28px] sm:h-[30px] lg:h-[32px] w-auto object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
        />
      </a>

      {/* Centered Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[12.5px] lg:text-[13px] tracking-[0.02em] text-[#eae4dc] font-sans font-normal">
        
        {/* Collections Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setCollectionsOpen(true)}
          onMouseLeave={() => setCollectionsOpen(false)}
        >
          <button 
            className="flex items-center gap-1.5 hover:text-[#dfbd87] transition-colors cursor-pointer py-1"
            onClick={() => setCollectionsOpen(!collectionsOpen)}
          >
            <span>Collections</span>
            <ChevronDown className={`w-3.5 h-3.5 text-[#dfbd87] transition-transform duration-200 ${collectionsOpen ? 'rotate-180' : ''}`} />
          </button>

          {collectionsOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 py-2 bg-[#1b0a0e]/95 backdrop-blur-md border border-[#c59e66]/40 shadow-2xl z-50">
              <a href="#festive" className="block px-4 py-2 text-xs text-[#eae4dc] hover:text-[#dfbd87] hover:bg-[#2c1018] transition-colors">Festive Wear</a>
              <a href="#wedding" className="block px-4 py-2 text-xs text-[#eae4dc] hover:text-[#dfbd87] hover:bg-[#2c1018] transition-colors">Wedding Edit</a>
              <a href="#everyday" className="block px-4 py-2 text-xs text-[#eae4dc] hover:text-[#dfbd87] hover:bg-[#2c1018] transition-colors">Everyday Ethnic</a>
              <a href="#custom" className="block px-4 py-2 text-xs text-[#eae4dc] hover:text-[#dfbd87] hover:bg-[#2c1018] transition-colors">Custom Wear</a>
            </div>
          )}
        </div>

        <a href="#shop" className="hover:text-[#dfbd87] transition-colors py-1">Shop</a>
        <a href="#custom-wear" className="hover:text-[#dfbd87] transition-colors py-1">Custom Wear</a>
        <a href="#story" className="hover:text-[#dfbd87] transition-colors py-1">Our Story</a>
        <a href="#visit" className="hover:text-[#dfbd87] transition-colors py-1">Visit Us</a>
      </nav>

      {/* Right Utility Icons */}
      <div className="flex items-center gap-4 sm:gap-5 text-[#eae4dc]">
        <button aria-label="Search" className="hover:text-[#dfbd87] transition-colors p-1 cursor-pointer">
          <Search className="w-[17px] h-[17px] stroke-[1.6]" />
        </button>
        <button aria-label="Wishlist" className="hover:text-[#dfbd87] transition-colors p-1 cursor-pointer">
          <Heart className="w-[17px] h-[17px] stroke-[1.6]" />
        </button>
        <button aria-label="Shopping Bag" className="hover:text-[#dfbd87] transition-colors p-1 cursor-pointer">
          <ShoppingBag className="w-[17px] h-[17px] stroke-[1.6]" />
        </button>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden text-[#eae4dc] ml-1 p-1"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1b090e]/95 backdrop-blur-xl border-b border-[#c59e66]/30 px-6 py-4 flex flex-col gap-3 text-xs z-50">
          <a href="#collections" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#dfbd87]">Collections</a>
          <a href="#shop" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#dfbd87]">Shop</a>
          <a href="#custom-wear" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#dfbd87]">Custom Wear</a>
          <a href="#story" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#dfbd87]">Our Story</a>
          <a href="#visit" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#dfbd87]">Visit Us</a>
        </div>
      )}

    </header>
  );
}
