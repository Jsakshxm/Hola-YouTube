"use client"
import React, { useEffect } from 'react';
import { YOUTUBE_API } from '../utils/constant';
import { useState } from 'react';
import VideoCart from './VideoCart';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { updateData } from '../utils/dataSlice';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();

      setVideos(json.items || []); // Set the state first, ensure it's an array or use an empty array
      dispatch(updateData({ json: json })); // Dispatch the videos from API response
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  return (
    <div className='flex flex-wrap'>
      {videos && videos.map((video) => (
        <Link key={video.id} href={`/watch/${video.id}`}>
          <VideoCart info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
