import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dummyproject from './navbar/navbar.jsx';
import CarouselHome from './pages/Home';
import Aboutus from './pages/Aboutme.jsx';
import Photography from './pages/photograpy.jsx';



function App() {
 

  return (
    <>
      <Router>
      <Dummyproject />
      <Routes>
        <Route path="/home" element={<CarouselHome />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
        <Route path="/photography" element={<Photography />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
    </Router>
       
    </>
  )
}

export default App
