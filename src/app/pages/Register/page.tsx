"use client";
import useAuth from "@/hooks/useAuth";
import { registerSchema } from "@/lib/schemas/register.schema";
import { RegisterFormData } from "@/types/registerForm";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Register() {
  const { signUp, error: authError } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await signUp(data);
    } catch (error) {
      setError("root", { message: "Failed to create account" });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-center items-center min-h-screen p-4">
      {/* Title and description */}
      <div className="max-w-md lg:max-w-lg">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Build Your Network!!!
        </h1>
        <p className="text-gray-200 mb-6">
          Linkify is a modern social media platform designed to bring people
          closer. Share your thoughts, connect with like-minded individuals, and
          discover trending content in an intuitive, sleek, and user-friendly
          environment.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2 transition-colors">
          Learn More
        </button>
      </div>

      {/* Form */}
      <div className="bg-white w-full max-w-md rounded-lg p-6 lg:p-10 text-gray-600">
        <h1 className="text-3xl lg:text-4xl text-blue-500 font-bold mb-2">
          Register Now!
        </h1>
        <p className="font-medium mb-6">
          Be cool and join today. Meet millions
        </p>

        {authError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {authError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name fields */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                {...register("firstName")}
                type="text"
                placeholder="First name"
                className={`w-full rounded-full border-2 px-4 py-2 ${
                  errors.lastName ? "border-red-500" : "border-gray-200"
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1 ml-3">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <input
                {...register("lastName", {
                  required: "Last name is required",
                })}
                className={`w-full rounded-full border-2 px-4 py-2 ${
                  errors.lastName ? "border-red-500" : "border-gray-200"
                }`}
                type="text"
                placeholder="Last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1 ml-3">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email field */}
          <div>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              className={`w-full rounded-full border-2 px-4 py-2 ${
                errors.email ? "border-red-500" : "border-gray-200"
              }`}
              type="email"
              placeholder="Your Email"
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
              className={`w-full rounded-full border-2 px-4 py-2 ${
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

          {/* Date of Birth */}
          <div>
            <label className="font-bold block mb-2">Date of Birth</label>
            <div className="flex gap-4">
              <select
                {...register("day", { required: "Day is required" })}
                className={`flex-1 rounded-full border-2 px-4 py-2 ${
                  errors.day ? "border-red-500" : "border-gray-200"
                }`}
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                {...register("month", { required: "Month is required" })}
                className={`flex-1 rounded-full border-2 px-4 py-2 ${
                  errors.month ? "border-red-500" : "border-gray-200"
                }`}
              >
                <option value="">Month</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {new Date(0, i).toLocaleString("default", {
                      month: "long",
                    })}
                  </option>
                ))}
              </select>
              <select
                {...register("year", { required: "Year is required" })}
                className={`flex-1 rounded-full border-2 px-4 py-2 ${
                  errors.year ? "border-red-500" : "border-gray-200"
                }`}
              >
                <option value="">Year</option>
                {Array.from({ length: 100 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
            {(errors.day || errors.month || errors.year) && (
              <p className="text-red-500 text-sm mt-1 ml-3">
                Please select a valid date of birth
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="font-bold block mb-2">Gender</label>
            <div className="flex gap-6">
              <label className="inline-flex items-center">
                <input
                  {...register("gender", {
                    required: "Please select a gender",
                  })}
                  type="radio"
                  value="male"
                  className="mr-2"
                />
                Male
              </label>
              <label className="inline-flex items-center">
                <input
                  {...register("gender")}
                  type="radio"
                  value="female"
                  className="mr-2"
                />
                Female
              </label>
            </div>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1 ml-3">
                {errors.gender.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                {...register("city", { required: "City is required" })}
                className={`w-full rounded-full border-2 px-4 py-2 ${
                  errors.city ? "border-red-500" : "border-gray-200"
                }`}
                type="text"
                placeholder="Your City"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1 ml-3">
                  {errors.city.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <input
                {...register("country", { required: "Country is required" })}
                className={`w-full rounded-full border-2 px-4 py-2 ${
                  errors.country ? "border-red-500" : "border-gray-200"
                }`}
                type="text"
                placeholder="Country"
              />
              {errors.country && (
                <p className="text-red-500 text-sm mt-1 ml-3">
                  {errors.country.message}
                </p>
              )}
            </div>
          </div>

          <Link
            href="/pages/login"
            className="block text-blue-500 hover:underline text-center"
          >
            Already have an account?
          </Link>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-3 
                     disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Registering..." : "Register Now"}
          </button>
        </form>
      </div>
    </div>
  );
}
