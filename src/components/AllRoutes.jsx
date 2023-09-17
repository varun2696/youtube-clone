import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import SearchResult from './SearchResult'
import VideoDetail from './video/VideoDetail'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/searchResult/:query' element={<SearchResult />} />
      <Route path='/video/details/:id' element={<VideoDetail />} />
      <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}

export default AllRoutes