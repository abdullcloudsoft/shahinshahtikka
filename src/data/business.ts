import { BusinessInfo, GalleryItem } from '../types';

export const BUSINESS_DATA: BusinessInfo = {
  name: 'Shahinshah Tikka House',
  tagline: 'Authentic Pakistani BBQ',
  address: 'Stadium Food Street, Shamsabad',
  area: 'Shamsabad',
  cityCountry: 'Rawalpindi, Pakistan',
  plusCode: 'M32G+MXR',
  phone: '051-4855015',
  email: 'Shahinshahtikka@gmail.com',
  facebook: 'https://www.facebook.com/shahinshahtikkahouse/',
  instagram: 'https://www.instagram.com/shahinshahtikkahouse/',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=M32G%2BMXR,+Stadium+Food+Street,+Shamsabad,+Rawalpindi,+Pakistan',
  hours: '5:00 PM – 1:00 AM (Monday to Sunday)'
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'tikka-1',
    title: 'Signature Chicken Tikka',
    category: 'Tikka',
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    alt: 'Freshly barbecued spiced chicken tikka with charred edges and lime'
  },
  {
    id: 'kabab-1',
    title: 'Traditional Seekh Kabab',
    category: 'Kababs',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    alt: 'Spiced Pakistani seekh kababs grilled over coals with mint chutney'
  },
  {
    id: 'platter-1',
    title: 'Special BBQ Platter',
    category: 'BBQ Platters',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    alt: 'Assorted hot Pakistani BBQ platter with grilled cuts'
  },
  {
    id: 'grill-1',
    title: 'Live Charcoal Tandoor & Grill',
    category: 'Grilled Food',
    imageUrl: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80',
    alt: 'Live charcoal barbecue embers grilling meat skewers'
  },
  {
    id: 'atmosphere-1',
    title: 'Food Street Dining Atmosphere',
    category: 'Restaurant Atmosphere',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    alt: 'Warm and welcoming dining atmosphere at Stadium Food Street'
  }
];
