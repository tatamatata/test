export interface Coach {
  id: string;
  name: string;
  title: string;
  expertise: string[];
  rating: number;
  reviewCount: number;
  imageUrl: string;
  shortBio: string;
  hourlyRate: number;
  languages: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl: string;
  rating: number;
}