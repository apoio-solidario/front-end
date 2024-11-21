import type { Feedback } from "./feedback";

export interface Event {
  id: number;
  title: string;
  description: string;
  start_data: string;
  end_data: string;
  feedbacks: Feedback[];
  created_at: string;
  updated_at: string;
}
