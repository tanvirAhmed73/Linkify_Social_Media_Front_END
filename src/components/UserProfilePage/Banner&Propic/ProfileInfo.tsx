"use client";
import useAuth from "@/hooks/useAuth";
import { FaCog, FaUserEdit } from "react-icons/fa";

export default function ProfileInfo() {
  const { user } = useAuth();

  return (
    <div className="flex-1 relative">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between backdrop-blur-sm bg-black/30 p-6 rounded-xl">
        <div className="mt-10 z-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {user ? `${user?.firstName} ${user?.lastName}` : "Tanvir Ahmed"}
          </h1>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-gray-300 text-sm bg-white/10 px-3 py-1 rounded-full">
              1.5K Connections
            </span>
            <span className="text-gray-300 text-sm bg-white/10 px-3 py-1 rounded-full">
              500+ Posts
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-4 lg:mt-4">
          <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
            <FaUserEdit className="text-lg" />
            <span>Customize Profile</span>
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl transition-all duration-300">
            <FaCog className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
