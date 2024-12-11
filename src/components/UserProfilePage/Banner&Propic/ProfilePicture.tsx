"use client";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";

export default function ProfilePicture() {
  const { user } = useAuth();

  return (
    <div className="relative group">
      <div className="w-[168px] h-[168px] rounded-full border-4 border-white bg-white overflow-hidden relative">
        <Image
          src={user?.profilePicture || "/profilePicture.jpg"}
          alt="Profile Picture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 hidden group-hover:flex items-center justify-center cursor-pointer">
          <FaCamera className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
}
