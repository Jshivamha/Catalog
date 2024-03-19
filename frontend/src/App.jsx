import React from 'react'
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar'
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          {/* <Route path='/login' element = {<Login/>}></Route> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
