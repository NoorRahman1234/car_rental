import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './compunents/Navbar'
import Home from './compunents/Home';
import Home1 from './Pages/Home1'
import Home2 from './Details/Home2'
import Home3 from './About us/Home3'
import Home4 from './Contact_us/Home4'
import Footer from './compunents/Footer'

function App(){
  return(
    <>
      <BrowserRouter>

      <Navbar />
        <Routes>
          {/* Correction: 'Path' ko 'path' se replace kiya gaya hai */}
          <Route path="/" element={<Home />} /> 
          <Route path="/vehicles" element={<Home1 />} />
          <Route path="/details" element={<Home2 />} />
          <Route path="/about" element={<Home3 />} />
          <Route path="/contact" element={<Home4 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App