"use client";
import useAuth from "@/hooks/useAuth";
import { loginSchema } from "@/lib/schemas/login.schemas";
import { LoginFormData } from "@/types/loginForm";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Login() {
  const { login, error: authError } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);
    } catch (error) {
      setError("root", { message: "Failed to login" });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-center items-center min-h-screen p-4">
      {/* Left side with logo and text */}
      <div className="max-w-md lg:max-w-lg text-center lg:text-left">
        <Image
          src="/linkifyLogo.png"
          alt="Linkify Logo"
          width={300}
          height={100}
          className="mx-auto lg:mx-0 mb-6"
        />
        <h1 className="text-3xl lg:text-4xl text-gray-200 font-bold mb-4">
          Happening now
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Join Linkify today and connect with your network.
        </p>
      </div>

      {/* Login form */}
      <div className="bg-white w-full max-w-md rounded-lg p-6 lg:p-10 text-gray-600">
        <h2 className="text-3xl font-bold text-blue-500 mb-6">Welcome Back!</h2>

        {authError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {authError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email field */}
          <div>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              className={`w-full rounded-full border-2 px-4 py-3 ${
                errors.email ? "border-red-500" : "border-gray-200"
              }`}
              type="email"
              placeholder="Email address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 ml-3">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password field */}
          <div>
            <input
              {...register("password", {
                required: "Password is required",
              })}
              className={`w-full rounded-full border-2 px-4 py-3 ${
                errors.password ? "border-red-500" : "border-gray-200"
              }`}
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1 ml-3">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember me and Forgot password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <Link
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-3 
                     disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>

          {/* Sign up link */}
          <p className="text-center">
            Don&apos;t have an account?{" "}
            <Link
              href="/pages/Register"
              className="text-blue-500 hover:underline"
            >
              Sign up
            </Link>
          </p>

          {/* Social login */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google login button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-white border-2 border-gray-200 
                     hover:bg-gray-50 text-gray-600 rounded-full px-4 py-3 transition-colors"
          >
            <Image
              src="/google.svg"
              alt="Google"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
}
