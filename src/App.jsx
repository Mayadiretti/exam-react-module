import { useState } from 'react'
import './App.css'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import SearchPage from './SearchPage'
import SearchBar from './SearchBar'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    <nav>
      <Link to="/HomePage" >HomePage</Link>
      <Link to="AboutPage">AboutPage</Link>
      <Link to="SearchPage">SearchPage</Link>
    </nav>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/search' element={<SearchPage/>}/>
        </Routes>

            <AboutPage/>
            <HomePage/>
            <SearchPage/>
            <SearchBar/>

      
    </>
  )
}

export default App
