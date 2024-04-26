import React from 'react'
import { user_icon } from '../utils/constant'

const ChatMessage = ({name , message}) => {
  return (
    <div className='flex items-center ml-2 shadow-md'><img
    src={user_icon}
    alt=""
    className="h-8"></img>
    <span className='inline-block'>{name}</span>
    <span className='m-2'>{message}</span>
    </div>
  )
}

export default ChatMessage