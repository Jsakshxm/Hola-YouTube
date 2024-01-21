"use client"
import Watchpage from '@/app/components/Watchpage'
import Header from '@/app/components/Header'
import Sidebar from '@/app/components/Sidebar'
import { Provider } from 'react-redux'
import store from '@/app/utils/store'
import ChannelInfo from '@/app/components/ChannelInfo'


const Body = ({params}) => {

  return (
    <Provider store={store}>
    <Header></Header>
    <div className='flex'><Sidebar /><Watchpage params={params.videoId}/> </div><div><ChannelInfo  /> </div> </Provider>
  )
}

export default Body