export interface Feedback {
  id: number;
  username: string;
  email: string;
  content: string;
  rating: number;
  event_id?: number;
  campaign_id?: number;
}
