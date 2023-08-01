import React from 'react'
import LeftNavMenu from './LeftNavMenu'

const Home = () => {
  
  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNavMenu/>
      <div className="grow w-[calc(100%-240px)] h-full bg-black overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-5"></div>
      </div>
    </div>
  )
}

export default Home