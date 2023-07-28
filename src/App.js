import React from 'react'
import Navbar from './components/Navbar'
import AllRoutes from './components/AllRoutes'

const App = () => {

  return (
    <div className='flex flex-col h-full'>
      <Navbar/>
      <AllRoutes/>
    </div>
  )
}

export default App