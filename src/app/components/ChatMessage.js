import React from 'react'

const ChatMessage = ({name , message}) => {
  return (
    <div className='flex items-center ml-2 shadow-md'><img
    src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
    alt=""
    className="h-8"></img>
    <span className='inline-block inline'>{name}</span>
    <span className='m-2'>{message}</span>
    </div>
  )
}

export default ChatMessage