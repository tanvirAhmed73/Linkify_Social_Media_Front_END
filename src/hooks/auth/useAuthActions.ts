// import { authService } from "@/services/auth.service";
// import { ApiError } from "@/types/customError";
// import { LoginFormData } from "@/types/loginForm";
// import { RegisterFormData } from "@/types/registerForm";
// import { User } from "@/types/user";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export function useAuthActions() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleError = (error: unknown, defaultMessage: string) => {
//     const err = error as ApiError;
//     setError(err.response?.data?.message || defaultMessage);
//     setLoading(false);
//   };

//   const signUp = async (data: RegisterFormData) => {
//     try {
//       setLoading(true);
//       setError("");
//       const response = await authService.register(data);
//       if (response.success) {
//         router.push("/pages/login");
//       }
//     } catch (error) {
//       handleError(error, "Registration failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const login = async (data: LoginFormData, setUser: (user: User) => void) => {
//     try {
//       setLoading(true);
//       setError("");
//       const response = await authService.login(data);

//       if (response.success) {
//         setUser(response.user);
//         console.log("Login successful, redirecting...");
//         router.push("/");
//       }
//     } catch (error) {
//       handleError(error, "Invalid credentials");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const logout = async (setUser: (user: null) => void) => {
//     try {
//       setLoading(true);
//       const response = await authService.logout();
//       if (response.success) {
//         setUser(null);
//         router.push("/pages/login");
//       }
//     } catch (error) {
//       handleError(error, "Logout failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     loading,
//     error,
//     signUp,
//     login,
//     logout,
//   };
// }
