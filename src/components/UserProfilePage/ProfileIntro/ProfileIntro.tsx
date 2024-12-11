"use client";
import {
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaUserAstronaut,
} from "react-icons/fa";

export default function ProfileIntro() {
  return (
    <div className="bg-gradient-to-br from-[#1F1B24]/90 to-[#2A2333]/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/5">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Profile Overview
        </h2>
        <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center">
          <span className="block w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        </div>
      </div>

      <div className="space-y-6">
        {/* Career Card */}
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FaUserAstronaut className="text-2xl text-purple-400" />
            </div>
            <div className="flex-grow">
              <h3 className="text-white font-semibold">Senior Developer</h3>
              <p className="text-purple-300/60 text-sm">Building the future</p>
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-purple-500/5 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Education Card */}
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <FaGraduationCap className="text-2xl text-blue-400" />
            </div>
            <div className="flex-grow">
              <h3 className="text-white font-semibold">Computer Science</h3>
              <p className="text-blue-300/60 text-sm">Masters Degree</p>
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-500/5 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Experience Card */}
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <FaBriefcase className="text-2xl text-emerald-400" />
            </div>
            <div className="flex-grow">
              <h3 className="text-white font-semibold">5+ Years</h3>
              <p className="text-emerald-300/60 text-sm">
                Professional Experience
              </p>
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-emerald-500/5 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Location Card */}
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center">
              <FaMapMarkerAlt className="text-2xl text-rose-400" />
            </div>
            <div className="flex-grow">
              <h3 className="text-white font-semibold">Remote First</h3>
              <p className="text-rose-300/60 text-sm">Digital Nomad</p>
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-rose-500/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>

      <button className="mt-8 w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl transition-all duration-300 font-medium shadow-lg shadow-purple-500/25">
        Update Profile
      </button>
    </div>
  );
}
