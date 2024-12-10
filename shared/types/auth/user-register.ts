import type { UserRole } from "./user";

export interface UserRegister {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  role: UserRole;
}
