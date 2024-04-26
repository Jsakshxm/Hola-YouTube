"use client";
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const Body = () => {
  return (
    <div className='flex w-screen overflow-x-hidden'>
      <Sidebar />
      <MainContainer />
    </div>
  )
}

export default Body;

