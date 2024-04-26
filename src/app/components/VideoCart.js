import Link from "next/link";
import { useSelector } from "react-redux";


const VideoCart = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title,} = snippet;
  const { viewCount, likeCount } = statistics;
  const {id}=info
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={`p-2 m-1 rounded-lg w-[21rem] md:w-[20rem] ${isMenuOpen&& "w-[17.7rem] md:w-[20rem]"}`}>
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
