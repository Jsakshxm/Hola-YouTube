"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { UseSelector } from 'react-redux'

const Watchpage = ({params}) => {
  const dispatch= useDispatch()
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)

  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  return (
<div className={`w-screen absolute  overflow-x-hidden ${isMenuOpen ? ` opacity-5 bg-gradient-to-b from-black to-transparent z-0`:`z-10`}`} > {/* Aspect ratio container */}
      <iframe
        className="aspect-video w-[380px] p-2 m-2 shadow-lg md:w-[1080px] "
        src={`https://www.youtube.com/embed/${params}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Watchpage