import Image from "next/image";

export default function Followers() {
  return (
    <div className="relative">
      <Image
        src={"/profile_card.jpg"}
        alt="profile_card"
        width={300}
        height={100}
        className="rounded-lg "
      />
      <div className="absolute -top-10 -left-10 flex flex-col items-center justify-center w-full h-full text-white">
        <Image
          src={"/profilePicture.jpg"} // Add the correct path for the profile picture
          alt="profile_Picture"
          width={50}
          height={50}
          className="rounded-full border-4 border-white" // Optional: Add border and rounded shape
        />
      </div>
      <div className="absolute bottom-5 right-10 text-white">
        {" "}
        {/* Positioning for name and followers */}
        <h1 className="text-lg font-bold">Name</h1>
        <p>Followers</p>
      </div>
    </div>
  );
}
