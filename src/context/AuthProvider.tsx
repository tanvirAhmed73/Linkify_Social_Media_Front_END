"use client";

import { AuthContextType } from "@/types/authContextType";
import { ApiError } from "@/types/customError";
import { LoginFormData } from "@/types/loginForm";
import { RegisterFormData } from "@/types/registerForm";
import { User } from "@/types/user";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextType>({
  user: null,
  error: "",
  loading: false,
  signUp: async () => {},
  login: async () => {},
  logout: async () => {},
  checkAuth: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check User Logged in Or Not
  const checkAuth = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/auth/check-auth",
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        setUser(response.data.user);
        console.log(user?.userId);
      } else {
        setUser(null);
      }
    } catch (error: unknown) {
      const err = error as ApiError;
      if (err.response?.data?.shouldReLogin) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signUp = async (data: RegisterFormData) => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.post(
        "http://localhost:4000/auth/register",
        data
      );
      if (response.data.success) {
        router.push("/pages/login");
      }
    } catch (error: unknown) {
      const err = error as ApiError;
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const login = async (data: LoginFormData) => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.post(
        "http://localhost:4000/auth/login",
        data,
        { withCredentials: true }
      );
      if (response.data.success) {
        setUser(response.data.user);
        router.push("/");
      }
    } catch (error: unknown) {
      const err = error as ApiError;
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      console.log("logout function called");
      setLoading(true);
      const response = await axios.get("http://localhost:4000/auth/log-out", {
        withCredentials: true,
      });
      console.log(response);
      if (response.data.success) {
        console.log(response);
        setUser(null);
        router.push("/pages/login");
      }
    } catch (error: unknown) {
      const err = error as ApiError;
      setError(err.response?.data?.message || "Logout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        loading,
        login,
        signUp,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
