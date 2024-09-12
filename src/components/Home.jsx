import React, { useEffect, useState } from 'react'
import Video from './Video'
import axios from 'axios';
const Home = () => {
  const [videos , setVideos] = useState([]);

  useEffect(() => {
    axios
    .get('http://localhost:8000/api/v1/home')
    .then((res) => {
      console.log(res.data.message); // Check what the response data looks like
      if (Array.isArray(res.data.message)) {
        setVideos(res.data.message); // Only set videos if res.data is an array
      } else {
        console.error('Data received is not an array');
      }
    })
    .catch((err) => {
      console.error('Error fetching videos:', err);
    });
  },[])
  return (
    <>
    <div className='w-full min-h-screen flex flex-wrap gap-3 bg-[#000000] px-5 py-5 text-white'>
        {videos.map((video , key) => (
          <Video
          key={key}
          thumbnail={video.thumbnail}
          videoFile={video.videoFile}
          username={video.owner.username}
          avatar={video.owner.avatar}
          views={video.views}
          title={video.tittle}
          />
        ))}
    </div>
    </>
  )
}

export default Home