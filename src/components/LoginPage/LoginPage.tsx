import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <Image
          src={"/linkifyLogo.png"}
          height={500}
          width={500}
          alt="LinkifyLogo"
        ></Image>
        <div className="text-left">
          <h1 className="text-7xl text-gray-400">Happening now</h1>
          <p className="text-4xl text-gray-400 mt-10">Join today.</p>
          <button className="bg-white text-black p-1 my-5 font-bold rounded-2xl w-full">
            Sign In With Google <FontAwesomeIcon icon={faGooglePlus} />
          </button>
          <hr />
          <p className="text-center text-4xl text-gray-400">or</p>
          <hr />
          {/* with hr tag */}
          <Link href={"/pages/Register"}>
            <button className="bg-white text-black rounded-2xl my-5 font-bold px-5 w-full">
              Create Account
            </button>
          </Link>
          <p className="text-gray-700 text-sm  my-5">
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </p>
          <h4 className="text-2xl">Already have an account?</h4>
          <button className="bg-white text-black rounded-2xl px-5 w-full my-5 font-bold">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}
