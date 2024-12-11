"use client";
import { UserAvatar } from "@/components/ui/UserAvatar";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { FaImage, FaPoll, FaVideo } from "react-icons/fa";
import { CreatePostModal } from "./CreatePostModal";

export default function CreatePost() {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postContent, setPostContent] = useState("");

  const handleSubmit = async () => {
    // Handle post submission
    console.log("Submitting post:", postContent);
    setIsModalOpen(false);
    setPostContent("");
  };

  return (
    <>
      <div className="bg-gradient-to-br from-[#1F1B24]/90 to-[#2A2333]/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/5">
        <div className="flex gap-6">
          <UserAvatar
            src={user?.profilePicture || "/profilePicture.jpg"}
            size={56}
            showStatus
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 bg-white/5 hover:bg-white/10 rounded-xl px-6 text-left text-gray-400 transition-all duration-300 relative group overflow-hidden"
          >
            <span className="relative z-10">Share your thoughts...</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
          </button>
        </div>

        <PostActions />
      </div>

      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={user}
        content={postContent}
        onContentChange={setPostContent}
        onSubmit={handleSubmit}
      />
    </>
  );
}

function PostActions() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      <ActionButton
        icon={<FaVideo className="text-2xl text-rose-400" />}
        label="Go Live"
        gradient="from-rose-500/10 to-orange-500/10"
      />
      <ActionButton
        icon={<FaImage className="text-2xl text-emerald-400" />}
        label="Gallery"
        gradient="from-emerald-500/10 to-teal-500/10"
      />
      <ActionButton
        icon={<FaPoll className="text-2xl text-amber-400" />}
        label="Create Poll"
        gradient="from-amber-500/10 to-orange-500/10"
      />
    </div>
  );
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  gradient: string;
}

function ActionButton({ icon, label, gradient }: ActionButtonProps) {
  return (
    <button className="flex flex-col items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group relative overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300`}
      />
      <div className="relative z-10 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-gray-300 text-sm relative z-10">{label}</span>
    </button>
  );
}
