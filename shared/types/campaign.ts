import type { Feedback } from "./feedback";

export interface Campaign {
  campaign_id: number;
  title: string;
  description: string;
  content: string;
  start_data?: string;
  end_data?: string;
  goal_amount: number;
  amount_raised: number;
  image_profile: string;
  image_banner: string;
  status: string;
  ong_id: string;
  feedbacks: Feedback[];
  created_at: string;
  updated_at: string;
}
