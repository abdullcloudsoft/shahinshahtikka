export interface BusinessInfo {
  name: string;
  tagline: string;
  address: string;
  area: string;
  cityCountry: string;
  plusCode: string;
  phone: string;
  email: string;
  facebook: string;
  instagram: string;
  googleMapsUrl: string;
  hours: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  alt: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  quickActions?: { label: string; action: string }[];
}
