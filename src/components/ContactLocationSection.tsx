import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation, Copy, Check } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const ContactLocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(
      `${BUSINESS_DATA.name}, ${BUSINESS_DATA.plusCode}, ${BUSINESS_DATA.address}, ${BUSINESS_DATA.cityCountry}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#FCFAF7] border-t border-[#EFE8DE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D9531E] bg-[#FAF1E8] px-3 py-1 rounded-full border border-[#EBD6C3]">
            Location & Inquiries
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-[#1F1915] tracking-tight">
            Find & Contact Us
          </h2>
          <p className="mt-2 text-base text-[#615448]">
            Visit us at Stadium Food Street, Shamsabad, Rawalpindi for dinner or call ahead for takeaway.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Details Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-xl border border-[#ECE5DC] p-6 sm:p-8 shadow-xs">
              <h3 className="font-display font-bold text-2xl text-[#1F1915]">
                {BUSINESS_DATA.name}
              </h3>
              <p className="text-sm font-medium text-[#D9531E] mt-0.5">
                {BUSINESS_DATA.tagline}
              </p>

              <div className="mt-6 space-y-5">
                {/* Address & Plus Code */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF2EB] text-[#D9531E] flex items-center justify-center shrink-0 border border-[#ECD7C2]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#7E6F62]">
                      Address & Plus Code
                    </h4>
                    <p className="mt-1 text-base font-semibold text-[#1F1915]">
                      {BUSINESS_DATA.plusCode}, {BUSINESS_DATA.address}
                    </p>
                    <p className="text-sm text-[#665749]">
                      {BUSINESS_DATA.cityCountry}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={copyAddress}
                        className="inline-flex items-center gap-1.5 text-xs text-[#8C340D] hover:text-[#D9531E] font-medium bg-[#FAF3EA] px-2.5 py-1 rounded-md border border-[#E8D4C1] transition-colors cursor-pointer"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#32773E]" />
                            <span>Address Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Address</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF2EB] text-[#D9531E] flex items-center justify-center shrink-0 border border-[#ECD7C2]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#7E6F62]">
                      Phone
                    </h4>
                    <a
                      id="contact-phone-link"
                      href={`tel:${BUSINESS_DATA.phone.replace(/[^0-9]/g, '')}`}
                      className="mt-1 inline-block text-lg font-bold text-[#1F1915] hover:text-[#D9531E] transition-colors"
                    >
                      {BUSINESS_DATA.phone}
                    </a>
                    <p className="text-xs text-[#7A6B5D]">
                      Available for orders, reservations & inquiries
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF2EB] text-[#D9531E] flex items-center justify-center shrink-0 border border-[#ECD7C2]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#7E6F62]">
                      Email
                    </h4>
                    <a
                      id="contact-email-link"
                      href={`mailto:${BUSINESS_DATA.email}`}
                      className="mt-1 inline-block text-sm font-semibold text-[#1F1915] hover:text-[#D9531E] transition-colors break-all"
                    >
                      {BUSINESS_DATA.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF2EB] text-[#D9531E] flex items-center justify-center shrink-0 border border-[#ECD7C2]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#7E6F62]">
                      Opening Hours
                    </h4>
                    <p className="mt-1 text-sm font-semibold text-[#1F1915]">
                      {BUSINESS_DATA.hours}
                    </p>
                    <p className="text-xs text-[#7A6B5D]">
                      Fresh live grill starts every evening at 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#F0EAE1] flex flex-col sm:flex-row items-center gap-3">
                <a
                  id="google-maps-btn"
                  href={BUSINESS_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-[#D9531E] hover:bg-[#C24513] text-white font-bold text-sm shadow-xs transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  id="contact-direct-call-btn"
                  href={`tel:${BUSINESS_DATA.phone.replace(/[^0-9]/g, '')}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-[#FAF3EA] hover:bg-[#F3E5D4] text-[#8C340D] border border-[#E5CEB9] font-bold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_DATA.phone}</span>
                </a>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white rounded-xl border border-[#ECE5DC] p-6 shadow-xs">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#574B40] mb-3">
                Connect With Us On Social Media
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  id="facebook-link"
                  href={BUSINESS_DATA.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg border border-[#EFE8DE] hover:border-[#1877F2] bg-[#FDFBF9] hover:bg-[#F3F7FD] group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center font-bold text-sm">
                      f
                    </div>
                    <div>
                      <p className="text-xs text-[#7A6B5D]">Facebook Page</p>
                      <p className="text-sm font-bold text-[#1F1915] group-hover:text-[#1877F2]">
                        Shahinshah Tikka House
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#8C7C6D] group-hover:text-[#1877F2]" />
                </a>

                <a
                  id="instagram-link"
                  href={BUSINESS_DATA.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg border border-[#EFE8DE] hover:border-[#E1306C] bg-[#FDFBF9] hover:bg-[#FDF3F6] group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center font-bold text-xs">
                      IG
                    </div>
                    <div>
                      <p className="text-xs text-[#7A6B5D]">Instagram</p>
                      <p className="text-sm font-bold text-[#1F1915] group-hover:text-[#E1306C]">
                        @shahinshahtikkahouse
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#8C7C6D] group-hover:text-[#E1306C]" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map Visual Column */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-xl border border-[#ECE5DC] overflow-hidden shadow-xs">
              <div className="p-4 sm:p-5 border-b border-[#F0EAE1] flex items-center justify-between bg-[#FDFBF7]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3EA04F] animate-pulse"></span>
                  <span className="text-xs font-bold text-[#4D3F33] uppercase tracking-wider">
                    Stadium Food Street Location
                  </span>
                </div>
                <a
                  href={BUSINESS_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#D9531E] hover:underline inline-flex items-center gap-1"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Google Map iframe using Shamsabad Stadium Food Street Rawalpindi query */}
              <div className="relative aspect-4/3 sm:aspect-16/11 w-full bg-[#EFEBE4]">
                <iframe
                  title="Shahinshah Tikka House Location Map"
                  src="https://maps.google.com/maps?q=M32G%2BMXR,+Stadium+Food+Street,+Shamsabad,+Rawalpindi,+Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="p-4 sm:p-5 bg-white text-xs text-[#6B5C4E] flex items-center justify-between border-t border-[#F0EAE1]">
                <div>
                  <span className="font-bold text-[#1F1915]">Plus Code:</span> {BUSINESS_DATA.plusCode}
                </div>
                <div className="text-right">
                  Shamsabad, Rawalpindi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
