import Image from "next/image";

interface UserAvatarProps {
  src: string;
  size?: number;
  showStatus?: boolean;
}

export function UserAvatar({
  src,
  size = 48,
  showStatus = false,
}: UserAvatarProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
      <div className="relative">
        <Image
          src={src}
          alt="Profile"
          width={size}
          height={size}
          className="rounded-xl object-cover"
        />
        {showStatus && (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1F1B24]" />
        )}
      </div>
    </div>
  );
}
