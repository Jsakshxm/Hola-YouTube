import Link from "next/link";

const VideoCart = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title,} = snippet;
  const { viewCount, likeCount } = statistics;
  const {id}=info

  return (
    <div className='p-2 m-2 rounded-lg w-[19.5rem]'>
      <Link href={`/watch/${id}`}>
        
          <img src={thumbnails.medium.url} alt="video" className='rounded-md cursor-pointer' />
        
      </Link>
      <h1 className='font-bold'>{title}</h1>
      <ul>
        <li>{channelTitle}</li>
        <li>{viewCount} Views | ❤️ {likeCount}</li>
      </ul>
    </div>
  );
};

export default VideoCart;
