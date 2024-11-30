import Image from "next/image";

export default function PostContent() {
  return (
    <>
      <div className="bg-white p-10 mt-10 rounded-md text-black">
        <div className="flex gap-2">
          <Image
            className="rounded-full"
            src={"/profilePicture.jpg"}
            alt="userProfilePicture"
            width={50}
            height={50}
          ></Image>
          <div>
            <h1>Tanvir</h1>
            <h1>Friend icon</h1>
          </div>
        </div>

        <div className="p-10 bg-slate-100 mt-3 rounded-md mb-3">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
            magni praesentium ratione voluptatem ut doloremque. Ratione, cumque!
            Impedit eos tempora inventore optio odio repudiandae, dolore
            voluptatem totam iste nostrum sint!
          </p>
        </div>

        <hr />
        <div className="flex justify-around my-2">
          <button>Like</button>
          <button>Comment</button>
          <button>Repost</button>
        </div>
        <hr />

        <div className="flex relative gap-3  mt-5">
          <Image
            className="rounded-full "
            src={"/profilePicture.jpg"}
            alt="userProfilePicture"
            width={50}
            height={50}
          ></Image>

          <input
            className="pl-5 bg-slate-100 rounded-md w-full"
            type="text"
            placeholder="Comment as Current User"
          />

          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 rounded-md">
            Send
          </button>
        </div>
      </div>
    </>
  );
}
