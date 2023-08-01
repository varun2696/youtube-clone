import React, { useContext, useEffect } from 'react'
import LeftNavMenu from './LeftNavMenu'
import { AppContext } from '../context/AppContext';
import VideoCard from './video/VideoCard';


const Home = () => {
  const { loading, searchResults } = useContext(AppContext);

  useEffect(() => {
    document.getElementById("root").classList.remove('custom-h')
  }, [])


  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNavMenu />
      <div className="grow w-[calc(100%-240px)] h-full bg-black overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-5">
          {!loading && searchResults &&
            searchResults?.map((item) => (
              <VideoCard
                key={item?.video?.videoId}
                video={item?.video}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home