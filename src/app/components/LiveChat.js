import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/chatslice";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);
  const randomName = require('random-indian-name');
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(
        addmessage({
          name: randomName({ random: Math.random, female: true }),
          message: "Happy Valentine's day Saksham ❤️",
        })
      );
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);

  const handleSendMessage = () => {
    if (text.trim() !== "") {
      dispatch(
        addmessage({
          name: "Saksham",
          message: text,
        })
      );
      setText(""); // Clear the input after sending the message
    }
  };

  return (
    <div className={`flex flex-col-reverse border-2 border-black rounded-lg bg-slate-100 md:w-[22rem] w-[23.4rem]  items-center ${isMenuOpen ? 'md:w-[23rem] opacity-5' : 'w-[23rem]'} md:absolute md:left-[1080px]`}>
      <div className={`overflow-y-scroll ${isMenuOpen ? 'md:h-[550px]' : 'h-[700px]'} md:h-[550px]`}>
        {chatMessages.map((chat, index) => (
          <ChatMessage
            name={chat.name}
            message={chat.message}
            key={index}
          />
        ))}
      </div>
      <div className="p-2">
        <div className="flex items-center space-x-2">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
            alt="Profile Icon"
            className="h-8"
          />
          <span>Saksham Jain</span>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="text"
            className="flex-1 h-10 p-2 border border-gray-300 rounded-md"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="button"
            className="p-2 ml-2 text-white bg-blue-500 rounded-md"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
