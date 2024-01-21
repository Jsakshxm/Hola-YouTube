import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const Sidebar = () => {

    const isMenuOpen= useSelector((store)=>store.app.isMenuOpen)
    

  return isMenuOpen?(
    <div className="w-48 shadow-lg ">
     <Link href={"/"}>   <h1 className="font-bold">Home</h1> </Link>
        <h1 className="font-bold">Videos</h1>
        <h1 className="font-bold">Shorts</h1>
        <h1 className="font-bold">Live</h1>
      <ul className="pt-2"><h1 className="font-bold">Subscription</h1>
        <li>News</li>
        <li>Sports</li>
        <li>Comedy</li>
        <li>Gaming</li>
        <li>Movies</li>
        
      </ul>
      <ul className="pt-2"><h1 className="font-bold">Watch Later </h1>
        <li>News</li>
        <li>Sports</li>
        <li>Comedy</li>
        <li>Gaming</li>
        
      </ul>
    </div>
  ) :  null
};

export default Sidebar;
