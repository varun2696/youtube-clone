import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import SearchResult from './SearchResult'
import VideoDetail from './video/VideoDetail'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/searchResult/:query' element={<SearchResult />} />
      <Route path='/video/details/:id' element={<VideoDetail/>} />
    </Routes>
  )
}

export default AllRoutes