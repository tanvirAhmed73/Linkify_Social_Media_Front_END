import { Modal } from "@/components/ui/Modal";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { User } from "@/types/user";
import {
  FaGlobe,
  FaImage,
  FaSmile,
  FaTimes,
  FaUserTag,
  FaVideo,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  content: string;
  onContentChange: (content: string) => void;
  onSubmit: () => void;
}

export function CreatePostModal({
  isOpen,
  onClose,
  user,
  content,
  onContentChange,
  onSubmit,
}: CreatePostModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Modal Header */}
      <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-4">
        <h2 className="text-xl font-semibold text-white text-center w-full">
          Create Post
        </h2>
        <button
          onClick={onClose}
          className="absolute right-6 top-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          <FaTimes className="text-gray-400" />
        </button>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 mb-4">
        <UserAvatar
          src={user?.profilePicture || "/profilePicture.jpg"}
          size={40}
        />
        <div>
          <h3 className="font-semibold text-white">
            {user?.firstName} {user?.lastName}
          </h3>
          <button className="flex items-center gap-2 text-sm bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-md mt-1 transition-colors">
            <FaGlobe className="text-gray-400" />
            <span className="text-gray-300">Public</span>
          </button>
        </div>
      </div>

      {/* Post Content */}
      <div className="min-h-[150px] mb-4">
        <textarea
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          placeholder={`What's on your mind, ${user?.firstName}?`}
          className="w-full min-h-[150px] bg-transparent border-none focus:ring-0 text-gray-100 text-xl resize-none placeholder-gray-500"
          autoFocus
        />
      </div>

      {/* Add to Post */}
      <div className="border border-gray-700 rounded-lg p-3 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-white font-semibold">Add to your post</span>
          <div className="flex gap-2">
            <ActionButton
              icon={<FaImage className="text-green-500" />}
              tooltip="Photo/Video"
            />
            <ActionButton
              icon={<FaUserTag className="text-blue-500" />}
              tooltip="Tag People"
            />
            <ActionButton
              icon={<FaSmile className="text-yellow-500" />}
              tooltip="Feeling/Activity"
            />
            <ActionButton
              icon={<MdLocationOn className="text-red-500" />}
              tooltip="Location"
            />
            <ActionButton
              icon={<FaVideo className="text-purple-500" />}
              tooltip="Live Video"
            />
          </div>
        </div>
      </div>

      {/* Post Button */}
      <button
        onClick={onSubmit}
        disabled={!content.trim()}
        className="w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 
                 disabled:cursor-not-allowed text-white font-semibold transition-colors"
      >
        Post
      </button>
    </Modal>
  );
}

interface ActionButtonProps {
  icon: React.ReactNode;
  tooltip: string;
}

function ActionButton({ icon, tooltip }: ActionButtonProps) {
  return (
    <button
      className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-800 
                 transition-colors group relative"
      title={tooltip}
    >
      {icon}
      <span
        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs 
                     py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
      >
        {tooltip}
      </span>
    </button>
  );
}
