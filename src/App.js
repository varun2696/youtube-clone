import React from 'react'
import Navbar from './components/Navbar'
import AllRoutes from './components/AllRoutes'
import LeftNavMenu from './components/LeftNavMenu'

const App = () => {

  return (
    <div className='flex flex-col h-full'>
      <Navbar/>
      {/* <LeftNavMenu/> */}
      <AllRoutes/>
    </div>
  )
}

export default App