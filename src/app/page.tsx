"use client";

import LogoLoader from "@/components/Loaders/LogoLoader";
import LoginPage from "@/components/LoginPage/LoginPage";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import Feed from "./pages/feed/page";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // show loader on the first vist
      setShowLoader(true);
      localStorage.setItem("hasVisited", "true");
    } else {
      setShowLoader(false);
    }

    // clear flag on tab close
    const clearFlagOnClose = () => {
      localStorage.removeItem("hasVisited");
    };
    window.addEventListener("beforeunload", clearFlagOnClose);

    // cleanUp event listener
    return () => {
      window.removeEventListener("beforeunload", clearFlagOnClose);
    };
  }, []);

  // showloader false after some time
  useEffect(() => {
    if (showLoader) {
      const timer = setTimeout(() => setShowLoader(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showLoader]);
  const { user } = useAuth();
  return (
    <>
      {showLoader ? (
        <div>
          <LogoLoader />
        </div>
      ) : !user ? (
        <LoginPage />
      ) : (
        <Feed />
      )}
    </>
  );
}
