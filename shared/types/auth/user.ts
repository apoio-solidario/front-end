type UserRole = "admin" | "ong";

export interface User {
  user_id: string;
  username: string;
  password: string;
  role: UserRole;
}
