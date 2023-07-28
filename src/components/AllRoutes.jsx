import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import SearchResult from './SearchResult'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/searchResult/:query' element={<SearchResult />} />
    </Routes>
  )
}

export default AllRoutes