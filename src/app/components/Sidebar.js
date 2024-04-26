import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return isMenuOpen ? (
      <div className="h-screen max-w-xs font-black shadow-xl w-44">
          <Link href={"/"}>
              <h1 className="h-8 font-bold shadow-sm cursor-pointer">Home</h1>
          </Link>
          <h1 className="font-bold shadow-sm">Videos</h1>
          <h1 className="h-8 font-bold shadow-sm">Shorts</h1>
          <h1 className="h-8 font-bold shadow-sm">Live</h1>
          <ul className="pt-2">
              <h1 className="font-bold">Subscription</h1>
              <li className="font-medium ">News</li>
              <li className="font-medium ">Sports</li>
              <li className="font-medium ">Comedy</li>
              <li className="font-medium ">Gaming</li>
              <li className="font-medium ">Movies</li>
          </ul>
          <ul className="pt-2">
              <h1 className="font-bold">Watch Later</h1>
              <li className="font-medium ">News</li>
              <li className="font-medium ">Sports</li>
              <li className="font-medium ">Comedy</li>
              <li className="font-medium ">Gaming</li>
              <li className="font-medium ">Movies</li>
          </ul>
      </div>
  ) : null;
};

export default Sidebar;
