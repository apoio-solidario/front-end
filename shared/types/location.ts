export interface Location {
  id: number;
  street_name: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  latitude: number;
  longitude: number;
  events: Event[];
  created_at: string;
  updated_at: string;
}
