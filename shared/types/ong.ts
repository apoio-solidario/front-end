import type { Campaign } from "./campaign";
import type { Image } from "./image";
import type { Social } from "./social";

export interface ONG {
  id: number;
  name: string;
  description: string;
  website_url: string;
  email: string;
  phone: string;
  image_banner: string;
  image_profile: string;
  status: string;
  category: string;
  images: Image[];
  socials: Social[];
  campaigns: Campaign[];
  events: Event[];
  created_at: string;
  updated_at: string;
}
