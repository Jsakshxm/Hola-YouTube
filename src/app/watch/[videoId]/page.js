"use client"
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/app/utils/store';
import Header from '@/app/components/Header';
import Sidebar from '@/app/components/Sidebar';
import Watchpage from '@/app/components/Watchpage';
import LiveChat from '@/app/components/LiveChat';

const Body = ({ params }) => {
  return (
    <Provider store={store}>
      <Header />
      <div className={`flex flex-wrap w-screen md:grid md:grid-cols-12 overflow-hidden` } >
        <Sidebar className="absolute z-10 " />
        <Watchpage params={params.videoId} className="md:col-span-7" />
        <div className='absolute p-2 pr-2 md:col-span-5 top-72 md:top-0'>
          <LiveChat />
        </div>
      </div>
    </Provider>
  );
}

export default Body;
