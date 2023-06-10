import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './app.css';
import Classes from './pages/classes';
import About from './pages/about';
import Home from './pages/home';
import GetStarted from './pages/get-started';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className='outer-container'>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='classes' element={<Classes />} />
          <Route path='about' element={<About />} />
          <Route path='get-started' element={<GetStarted />} />
      </Routes>
    </div>
  )
}

export default App;
