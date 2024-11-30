import Link from "next/link";

export default function Register() {
  return (
    <>
      <div className="flex gap-4 justify-center items-center min-h-screen">
        {/* Title and description */}
        <div className="max-w-md">
          <h1 className="text-4xl">Build Your Network!!!</h1>
          <p className="my-5">
            Linkify is a modern social media platform designed to bring people
            closer. Share your thoughts, connect with like-minded individuals,
            and discover trending content in an intuitive, sleek, and
            user-friendly environment. Stay engaged, express yourself, and make
            meaningful connections—all in one place.
          </p>
          <p>Why are you waiting for? Buy it now.</p>
          <button className="bg-blue-500 rounded-full px-5 py-2 mt-4">
            Learn More
          </button>
        </div>

        {/* form */}
        <div className="bg-white max-w-md rounded-lg p-10 text-gray-400">
          <h1 className="text-4xl text-blue-500">Register Now!</h1>
          <p className="font-bold">Be cool and join today.Meet millions</p>
          <form action="">
            <div className="my-2 flex gap-4 justify-between w-full">
              <input
                className="rounded-full border-2 px-4 py-2 w-full"
                type="text"
                placeholder="First name"
              />
              <input
                className="rounded-full border-2 px-4 py-2 w-full"
                type="text"
                placeholder="Last name"
              />
            </div>

            <input
              className="w-full my-2 rounded-full border-2 px-4 py-2"
              type="text"
              placeholder="Your Email"
            />
            <input
              className="w-full my-2 rounded-full border-2 px-4 py-2"
              type="text w-full"
              placeholder="Password"
            />

            {/* date of birth */}
            <label className="font-bold" htmlFor="">
              Date of Birth
            </label>
            <br />
            <div className="flex gap-5  justify-between">
              {/* days */}
              <select
                className="rounded-full w-full border-2  px-2 py-2 "
                id="days"
                name="day"
                required
              >
                <option value="">Day</option>
                {/* Generate day options */}
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              {/* Month */}
              <select
                className="rounded-full w-full border-2  px-2 py-2 "
                id="months"
                name="month"
                required
              >
                <option value="">Month</option>
                {/* Generate month options */}
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {new Date(0, i).toLocaleString("default", {
                      month: "long",
                    })}
                  </option>
                ))}
              </select>
              {/* years */}
              <select
                className="rounded-full border-2 w-full px-2 py-2"
                id="years"
                name="year"
                required
              >
                <option value="">Year</option>
                {/* Generate year options for the last 100 years */}
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={2023 - i} value={2023 - i}>
                    {2023 - i}
                  </option>
                ))}
              </select>
            </div>

            {/* gender Options */}
            <div className="my-4 flex gap-4">
              <label htmlFor="">
                <input type="radio" name="male" id="" />
                Male
              </label>

              <label htmlFor="">
                <input type="radio" name="female" id="" />
                Female
              </label>
            </div>

            <div className="flex gap-4">
              <input
                className="w-full my-2 rounded-full border-2 px-4 py-2"
                type="text"
                placeholder="Your City"
              />
              <input
                className="w-full my-2 rounded-full border-2 px-4 py-2"
                type="text"
                placeholder="Country"
              />
            </div>

            <Link href={"/pages/login/"}>Already have an account?</Link>
            <hr />
            <button className="bg-blue-500 text-white rounded-full px-4 py-3 mt-3">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
