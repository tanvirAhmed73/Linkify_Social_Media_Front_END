import { LoginFormData } from "@/types/loginForm";
import { RegisterFormData } from "@/types/registerForm";
import axios from "axios";

const API_URL = "http://localhost:4000/auth";

const authService = {
  async checkAuth() {
    const response = await axios.get(`${API_URL}/check-auth`, {
      withCredentials: true,
    });
    return response.data;
  },

  async register(data: RegisterFormData) {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  },

  async login(data: LoginFormData) {
    const response = await axios.post(`${API_URL}/login`, data, {
      withCredentials: true,
    });
    return response.data;
  },

  async logout() {
    const response = await axios.get(`${API_URL}/log-out`, {
      withCredentials: true,
    });
    return response.data;
  },
};
