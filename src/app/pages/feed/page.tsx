import ChatBox from "@/components/ChatBox/ChatBox";
import CreatePost from "@/components/CreatePost/CreatePost";
import Followers from "@/components/Followers/Followers";
import FollowSuggestion from "@/components/FollowSuggestion/FollowSuggestion";
import Navbar from "@/components/Navbar/Navbar";
import NavNewsFeed from "@/components/NavNewsFeed/NavNewsFeed";
import PostContent from "@/components/PostContent/PostContent";

export default function Feed() {
  return (
    <div>
      <Navbar />
      <div className="flex gap-10 px-28 mt-8">
        <div className="w-1/5">
          <Followers />
          <NavNewsFeed />
          <ChatBox />
        </div>

        <div className="w-3/5">
          <CreatePost />
          <PostContent />
        </div>

        <div className="w.1/5">
          <FollowSuggestion />
        </div>
      </div>
    </div>
  );
}
