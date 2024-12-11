import useAuth from "@/hooks/useAuth";
import axios from "axios";
import Image from "next/image"; // Ensure Image is imported
import { FaCamera } from "react-icons/fa"; // Ensure FaCamera is imported

export default function CoverImage() {
  const { user, checkAuth } = useAuth();
  console.log(user);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      console.error("No File Selected!");
      return;
    }
    if (file.size > 5242880) {
      // 5MB limit
      console.error("File size exceeds 5MB");
      return;
    }
    if (!file.type.startsWith("image/")) {
      console.error("File is not an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=2b8186cf1104ff2ae3e1c6d5b9f4d087`,
        formData
      );
      const displayUrl = response.data.data.display_url;
      const deleteUrl = response.data.data.delete_url;
      const userId = user?.userId;
      const data = { userId, displayUrl, deleteUrl };
      if (data) {
        await axios.post("http://localhost:4000/picture/coverImage", data, {
          withCredentials: true,
        });
        checkAuth();
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  return (
    <div className="relative w-full h-[350px] bg-gradient-to-b from-gray-800 to-gray-900 group">
      {user?.coverPicture ? (
        <div>
          <Image
            src={user?.coverPicture}
            alt="Cover Picture"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div>
            <label
              htmlFor="fileInput"
              className="absolute z-30 hidden group-hover:flex items-center gap-2 bottom-4 right-4 bg-white px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-all"
            >
              <FaCamera className="text-lg" />
              <span>Edit Cover Photo</span>
            </label>
            {/* Hidden file input */}
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
              accept="image/*" // Ensures only images can be selected
            />
          </div>
        </div>
      ) : (
        // default a blur image where a upload button is shown in the center
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <label
              htmlFor="fileInput"
              className="bg-white flex items-center gap-2 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
            >
              <FaCamera className="text-lg" />
              <span>Upload Cover Photo</span>
            </label>
            {/* Hidden file input */}
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
              accept="image/*" // Ensures only images can be selected
            />
          </div>
        </div>
      )}
    </div>
  );
}
