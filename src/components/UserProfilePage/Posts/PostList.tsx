"use client";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import { FaComment, FaEllipsisH, FaHeart, FaShare } from "react-icons/fa";

export default function PostList() {
  const { user } = useAuth();

  const posts = [
    {
      id: 1,
      content:
        "Exploring new frontiers in tech! 🚀 What's your take on the future of web development?",
      image: "/profile_card.jpg",
      likes: 234,
      comments: 56,
      shares: 12,
      timeAgo: "2 hours ago",
    },
    // Add more posts as needed
  ];

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-gradient-to-br from-[#1F1B24]/90 to-[#2A2333]/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/5"
        >
          {/* Post Header */}
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative">
                  <Image
                    src={user?.profilePicture || "/profilePicture.jpg"}
                    alt="Profile"
                    width={48}
                    height={48}
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  {user?.firstName} {user?.lastName}
                </h3>
                <p className="text-gray-400 text-sm">{post.timeAgo}</p>
              </div>
            </div>
            <button className="p-2 hover:bg-white/5 rounded-xl transition-colors">
              <FaEllipsisH className="text-gray-400" />
            </button>
          </div>

          {/* Post Content */}
          <div className="mt-4">
            <p className="text-gray-300 leading-relaxed">{post.content}</p>
            {post.image && (
              <div className="relative mt-4 rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={post.image}
                  alt="Post"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-xl transform group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            )}
          </div>

          {/* Post Stats */}
          <div className="flex justify-between items-center mt-4 py-4 border-t border-white/5">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-gray-300 hover:text-pink-500 transition-colors group">
                <div className="p-2 rounded-xl bg-white/5 group-hover:bg-pink-500/10 transition-colors">
                  <FaHeart className="text-lg group-hover:scale-110 transition-transform" />
                </div>
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors group">
                <div className="p-2 rounded-xl bg-white/5 group-hover:bg-blue-500/10 transition-colors">
                  <FaComment className="text-lg group-hover:scale-110 transition-transform" />
                </div>
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-300 hover:text-purple-500 transition-colors group">
                <div className="p-2 rounded-xl bg-white/5 group-hover:bg-purple-500/10 transition-colors">
                  <FaShare className="text-lg group-hover:scale-110 transition-transform" />
                </div>
                <span>{post.shares}</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
