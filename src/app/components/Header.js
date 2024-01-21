"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const[img,SetImg]=useState([])

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  const searchApi = async () => {
    
    try {
      const response = await fetch(`${YOUTUBE_SEARCH_API}&q=${search}`);
      const data = await response.json();
  
      // Extract suggestion titles from the items array
      const suggestionTitles = data.items ? data.items.map((item) => item.snippet.title) : [];
      const suggestedIMG = data.items ? data.items.map(item => (item.snippet && item.snippet.thumbnails && item.snippet.thumbnails.default.url) || null) : [];

      SetImg(suggestedIMG);
      setSuggestions(suggestionTitles);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  

  useEffect(() => {
    searchApi();
  }, [search]);

  console.log(suggestions)

  return (
    <>
    <div className="relative grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=512"
          className="h-8 col-span-1 cursor-pointer"
          onClick={handleToggle}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
          alt=""
          className="h-8 ml-5"
        />
      </div>
      <div className="relative flex col-span-10 px-4">
        <input
          type="text"
          className="w-1/2 h-8 px-2 ml-10 border border-gray-200 rounded-l-full"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <img
            src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
            alt=""
            className="w-8 h-8 bg-transparent border border-gray-200 rounded-r-full"
          />
        </button>

        
      </div>
      <div className="col-span-1">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
          alt=""
          className="h-8 col-span-1"
        />
      </div>
      {/* <div className="pt-3"> */}
    
    </div>   
    {search.length >= 1 && (
          <ul className="absolute bg-white border border-gray-300 rounded ml-80">
            {suggestions.map((suggestion, index) => (
             <> <li key={index} className="p-2 cursor-pointer">
                {suggestion}
              </li> </>
            ))}
          </ul>)}
         </>
  );
};

export default Header;
