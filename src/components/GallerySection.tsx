import React, { useState } from 'react';
import { X, ZoomIn, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/business';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#EFE8DE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D9531E] bg-[#FAF1E8] px-3 py-1 rounded-full border border-[#EBD6C3]">
            Visuals
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-[#1F1915] tracking-tight">
            Our BBQ Gallery
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#665749]">
            A glimpse of our signature tikkas, seekh kababs, platters, and vibrant Stadium Food Street dining.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              onClick={() => setSelectedItem(item)}
              className="group relative bg-white rounded-xl overflow-hidden border border-[#ECE5DC] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#F0EBE3]">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2 rounded-full bg-white/90 text-[#1F1915] shadow-md">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[#8C340D] font-bold text-xs shadow-xs border border-white/60">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-[#1F1915]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#7A6B5D] mt-0.5">{item.alt}</p>
                </div>
                <span className="text-[#D9531E] group-hover:translate-x-1 transition-transform">
                  <Eye className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          id="gallery-lightbox-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#EBE4D8] animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 sm:aspect-16/9 bg-[#1F1915] overflow-hidden">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <button
                id="gallery-modal-close-btn"
                onClick={() => setSelectedItem(null)}
                aria-label="Close image preview"
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 sm:p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-[#F0EAE1]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D9531E]">
                  {selectedItem.category}
                </span>
                <h3 className="font-display font-bold text-lg text-[#1F1915]">
                  {selectedItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#665749] mt-0.5">
                  {selectedItem.alt}
                </p>
              </div>
              <button
                id="gallery-modal-done-btn"
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 text-xs font-bold rounded-lg bg-[#FAF3EA] text-[#8C340D] hover:bg-[#F2E5D4] transition-colors self-end sm:self-center cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
