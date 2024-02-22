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
    <div className='flex w-full'><Sidebar /><Watchpage params={params.videoId}/> <div className='w-full'><LiveChat></LiveChat></div> </div></Provider>
  )
}

export default Body