"use client";
import CreatePost from "@/components/CreatePost/CreatePost";
import PostList from "../Posts/PostList";
import ProfileIntro from "../ProfileIntro/ProfileIntro";
import CoverImage from "./CoverImage";
import ProfileInfo from "./ProfileInfo";
import ProfileNavigation from "./ProfileNavigation";
import ProfilePicture from "./ProfilePicture";

export default function BannerWithProPic() {
  return (
    <div className="min-h-screen">
      {/* Cover Picture */}
      <div className="relative">
        <CoverImage />

        {/* Profile Content */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-end lg:items-center gap-4 -mt-8 lg:-mt-16 relative z-10">
            <ProfilePicture />
            <ProfileInfo />
          </div>
          <ProfileNavigation />

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            {/* Left Column */}
            <div className="lg:col-span-1">
              <ProfileIntro />
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-4">
              <CreatePost />
              <PostList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
