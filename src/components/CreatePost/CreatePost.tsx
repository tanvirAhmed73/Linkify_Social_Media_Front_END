import {
  faFaceSmile,
  faPhotoFilm,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function CreatePost() {
  return (
    <>
      <div className="bg-white rounded-md p-10 ">
        <div className="flex gap-4 mb-5">
          <Image
            className="rounded-full"
            src={"/profilePicture.jpg"}
            alt="ProilePicture"
            width={50}
            height={50}
          ></Image>
          <input
            className=" w-full border-2 p-2 rounded-md"
            type="text"
            placeholder="What's on your mind, username?"
          />
        </div>
        <hr />
        <div className="flex justify-around mt-5 text-black">
          <h1 className="flex items-center">
            <FontAwesomeIcon
              icon={faVideo}
              className="text-red-500 text-xl mr-1"
            />
            Live Video
          </h1>
          <h1 className="flex items-center">
            {" "}
            <FontAwesomeIcon
              icon={faPhotoFilm}
              className="text-green-500 text-xl mr-1"
            />
            Photo/video
          </h1>
          <h1 className="flex items-center">
            {" "}
            <FontAwesomeIcon
              icon={faFaceSmile}
              className="text-yellow-500 text-xl mr-1"
            />
            Feeling/activity
          </h1>
        </div>
      </div>
    </>
  );
}
