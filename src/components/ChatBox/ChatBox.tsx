import Image from "next/image";

export default function ChatBox() {
  const activePeople = Array.from(
    { length: 9 },
    (_, index) => `Person ${index + 1}`
  );

  return (
    <>
      <div className="mt-10 text-center">
        <h1 className="bg-green-600 rounded-md text-white">Chat Online</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {/* Grid layout for active people */}
        {activePeople.map((person) => (
          <div key={person} className="flex flex-col items-center">
            <div className="relative">
              <Image
                src={"/profilePicture.jpg"} // Path to the profile picture
                alt={person}
                width={50} // Adjust width as needed
                height={50} // Adjust height as needed
                className="w-12 h-12 rounded-full border-2 border-white" // Optional: Add border
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />{" "}
              {/* Green indicator */}
            </div>
            <p className="text-sm text-gray-600">{person}</p>{" "}
            {/* Display person's name */}
          </div>
        ))}
      </div>
    </>
  );
}
