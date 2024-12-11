import { LoginFormData } from "./loginForm";
import { RegisterFormData } from "./registerForm";
import { User } from "./user";

export interface AuthContextType {
  user: User | null;
  error: string;
  loading: boolean;
  signUp: (data: RegisterFormData) => Promise<void>;
  login: (data: LoginFormData) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}
