export type UserRole = "ADMIN" | "ONG";

export interface User {
  user_id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  role: UserRole;
}
