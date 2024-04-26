"use client"
import { Provider } from 'react-redux'
import Header from '../components/Header'
import store from '../utils/store'
import Sidebar from '../components/Sidebar'

const page = () => {
  return (
    <Provider store={store}><Header /><Sidebar /></Provider>
  )
}

export default page