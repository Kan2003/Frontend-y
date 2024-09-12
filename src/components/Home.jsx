import React, { useContext, useEffect, useState } from 'react'
import Video from './Video'
import axios from 'axios';
import { SearchContext } from './Layout/Layout';
const Home = () => {
  const [videos , setVideos] = useState([]);
  const {searchTerm, setSearchTerm } = useContext(SearchContext)
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

  const filteredVideos = searchTerm
    ? videos.filter((video) =>
        video.tittle.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : videos;
  
  return (
    <>
    <div className='w-full min-h-screen flex flex-wrap gap-3 bg-[#000000] px-5 py-5 text-white'>
    {filteredVideos.length > 0 ? (
        filteredVideos.map((video, key) => (
          <Video
            key={key}
            thumbnail={video.thumbnail}
            videoFile={video.videoFile}
            username={video.owner?.username}
            avatar={video.owner?.avatar}
            views={video.views}
            title={video.tittle}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No videos found</p>
      )}
    </div>
    </>
  )
}

export default Home