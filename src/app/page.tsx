"use client";

import LogoLoader from "@/components/Loaders/LogoLoader";
import { useEffect, useState } from "react";

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // show loader on the first vist
      setShowLoader(true);
      localStorage.setItem("hasVisited", "true");
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

  return (
    <>
      {showLoader ? (
        <div>
          <LogoLoader />
        </div>
      ) : (
        <div>
          <p className="text-white">Hello World</p>
        </div>
      )}
    </>
  );
}
