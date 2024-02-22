"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/chatslice";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [Text, setText] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);
  const randomName = require('random-indian-name');

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
    if (Text.trim() !== "") {
      dispatch(
        addmessage({
          name: "Saksham",
          message: Text,
        })
      );
      setText(""); // Clear the input after sending the message
    }
  };

  return (
    <>
      <div className="ml-2 border-2 h-[600px] w-full border-black bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse">
        Live Chat
        {chatMessages.map((chat, index) => (
          <ChatMessage
            name={chat.name}
            message={chat.message}
            key={index}
          />
        ))}
        <div className="border border-black rounded-md">
          {/* Additional UI elements can be added here if needed */}
        </div>
        <div className="flex w-full border">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
            alt=""
            className="h-8 mr-2"
          />
          Saksham Jain
        </div>
        <div className="flex">
          <input
            type="text"
            className="h-10 w-72"
            placeholder="Chat"
            value={Text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <img
            src="https://e7.pngegg.com/pngimages/891/367/png-clipart-computer-icons-symbol-send-email-button-miscellaneous-blue-thumbnail.png"
            alt=""
            className="ml-[100px] size-8"
            onClick={handleSendMessage}
          />
        </div>
      </div>
    </>
  );
};

export default LiveChat;
