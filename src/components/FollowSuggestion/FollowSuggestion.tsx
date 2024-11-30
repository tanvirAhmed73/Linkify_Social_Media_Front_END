import Image from "next/image";

export default function FollowSuggestion() {
  return (
    <>
      <div>
        <h1 className="text-xl mb-5">Who to Follow </h1>

        <div className="flex gap-3 mb-2 mt-5">
          <Image
            src={"/profilePicture.jpg"}
            alt="UserProPicture"
            width={50}
            height={30}
            className="rounded-full"
          ></Image>
          <div className="">
            <h1>First Name</h1>
            <button className="text-blue-500">Add Friend</button>
          </div>
        </div>
        <hr />

        <div className="flex gap-3 mb-2 mt-5">
          <Image
            src={"/profilePicture.jpg"}
            alt="UserProPicture"
            width={50}
            height={30}
            className="rounded-full"
          ></Image>
          <div className="">
            <h1>First Name</h1>
            <button className="text-blue-500">Add Friend</button>
          </div>
        </div>
        <hr />

        <div className="flex gap-3 mb-2 mt-5">
          <Image
            src={"/profilePicture.jpg"}
            alt="UserProPicture"
            width={50}
            height={30}
            className="rounded-full"
          ></Image>
          <div className="">
            <h1>First Name</h1>
            <button className="text-blue-500">Add Friend</button>
          </div>
        </div>
        <hr />

        <div className="flex gap-3 mb-2 mt-5">
          <Image
            src={"/profilePicture.jpg"}
            alt="UserProPicture"
            width={50}
            height={30}
            className="rounded-full"
          ></Image>
          <div className="">
            <h1>First Name</h1>
            <button className="text-blue-500">Add Friend</button>
          </div>
        </div>
        <hr />

        <div className="flex gap-3 mb-2 mt-5">
          <Image
            src={"/profilePicture.jpg"}
            alt="UserProPicture"
            width={50}
            height={30}
            className="rounded-full"
          ></Image>
          <div className="">
            <h1>First Name</h1>
            <button className="text-blue-500">Add Friend</button>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
