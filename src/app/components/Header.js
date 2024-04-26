"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { search_icon, menu_icon, youtube_icon, user_icon } from "../utils/constant";


const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const [img, SetImg] = useState([]);

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

  return (
    <>
      <div className="relative grid grid-cols-12 gap-2 p-2 m-2 shadow-lg md:grid-cols-12">
        <div className="flex justify-center col-span-1 md:col-span-1 md:justify-start">
          <img
            src={menu_icon}
            className="h-8 cursor-pointer"
            onClick={handleToggle}
          />
        </div>
        <div className="flex justify-start col-span-2 md:justify-start md:col-span-1">
          <img
            src={youtube_icon}
            alt=""
            className="w-16 md:h-8"
          />
        </div>
        <div className="flex justify-center col-span-9 md:col-span-9 md:justify-center">
          <input
            type="text"
            className="w-full h-8 px-2 border border-gray-200 rounded-l-full md:w-1/2"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <img
              src={search_icon}
              alt=""
              className="w-8 h-8 bg-transparent border border-gray-200 rounded-r-full"
            />
          </button>
        </div>
        <div className="justify-center hidden md:col-span-1 md:justify-end md:inline-block">
          <img
            src={user_icon}
            alt=""
            className="h-8"
          />
        </div>
      </div>
      {search.length >= 1 && (
        <ul className="absolute bg-white border border-gray-300 rounded ml-80">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="p-2 cursor-pointer">
              🔍{suggestion}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Header;
