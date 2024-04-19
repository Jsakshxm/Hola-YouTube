"use client"
import Watchpage from '@/app/components/Watchpage'
import Header from '@/app/components/Header'
import Sidebar from '@/app/components/Sidebar'
import { Provider } from 'react-redux'
import store from '@/app/utils/store'
import LiveChat from '@/app/components/LiveChat'


const Body = ({params}) => {

  return (
    <Provider store={store}>
    <Header></Header>
    <div className='flex flex-wrap w-full'><Sidebar /><Watchpage params={params.videoId}/> <div className='w-[420px] p-2 pr-2 lg:w-[420px] sm:w-full md:w-full '><LiveChat className=""></LiveChat></div> </div></Provider>
  )
}

export default Body