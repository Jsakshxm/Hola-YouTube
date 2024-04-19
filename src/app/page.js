"use client"
import Header from './components/Header'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'


const page = () => {
  return (
<Provider store={store}>   <div className=''><Header ></Header><Body></Body></div> </Provider>
  )
}

export default page