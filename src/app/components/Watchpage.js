"use client"
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'

const Watchpage = ({params}) => {
  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  return (
    <div><iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+params} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
  )
}

export default Watchpage