"use client";
import useAuth from "@/hooks/useAuth";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faComment,
  faGear,
  faQuestionCircle,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/dist/client/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const logoutHandler = () => {
    logout();
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle mobile menu
  };

  return (
    <div className="navbar sticky top-0 z-50 bg-[#1F1B24]">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          {" "}
          {/* Show only on mobile */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-8 6h16"
              />
            </svg>
          </div>
          {isMenuOpen && ( // Show menu when toggled
            <ul className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>Video</p>
              </li>
              <li>
                <p>Groups</p>
              </li>
              <li>
                <p>Games</p>
              </li>
            </ul>
          )}
        </div>
        <Image
          src={"/linkifyLogo.png"}
          width={100}
          height={100}
          alt="website_logo"
        />
        <input
          className="border-2 pl-3 rounded-md hidden lg:block" // Hide on mobile
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Video</p>
          </li>
          <li>
            <p>Groups</p>
          </li>
          <li>
            <p>Games</p>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <ul className="flex gap-3">
          <li>
            <FontAwesomeIcon
              icon={faFacebookMessenger}
              className="text-white"
            />
          </li>
          <li>
            <FontAwesomeIcon icon={faBell} className="text-white" />
          </li>
          <li>
            {user ? (
              <div className="dropdown dropdown-end relative">
                <Image
                  className="rounded-full"
                  src={user.profilePicture || "/profilePicture.jpg"}
                  width={30}
                  height={30}
                  alt="profile_picture"
                  onClick={toggleDropdown}
                />
                {isDropdownOpen && (
                  <ul className="p-4 shadow-white flex flex-col gap-6 absolute w-[270px] rounded-lg  mb-2 right-2 top-6 bg-white text-black shadow-lg">
                    <li className="p-2 shadow-md rounded-md">
                      <Link href="/pages/profile">
                        <div className="flex items-center gap-2">
                          <Image
                            src={user.profilePicture || "/profilePicture.jpg"}
                            width={30}
                            height={30}
                            alt="profile_picture"
                          />
                          <p>{user.firstName + " " + user.lastName}</p>
                        </div>
                      </Link>
                    </li>
                    <li className="w-full">
                      <button className="flex items-center justify-between hover:bg-gray-200 p-2 rounded-md w-full">
                        <div className="flex items-center gap-4">
                          <FontAwesomeIcon icon={faGear} />
                          <p>Settings & privacy</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center justify-between hover:bg-gray-200 p-2 rounded-md w-full">
                        <div className="flex items-center gap-4">
                          <FontAwesomeIcon icon={faQuestionCircle} />
                          <p>Help & support</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </li>
                    <li className="w-full">
                      <button className="flex items-center justify-between hover:bg-gray-200 p-2 rounded-md w-full">
                        <div className="flex items-center gap-4">
                          <FontAwesomeIcon icon={faGear} />
                          <p>Display & accessibility</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </li>
                    <li className="w-full">
                      <button className="flex items-center gap-4 hover:bg-gray-200 p-2 rounded-md w-full">
                        <FontAwesomeIcon icon={faComment} />
                        <p>Give feedback</p>
                      </button>
                    </li>
                    <li className="w-full">
                      <button
                        className="flex items-center gap-4 hover:bg-gray-200 p-2 rounded-md w-full"
                        onClick={logoutHandler}
                      >
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <Link href="/pages/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
