import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './app.css';
import Classes from './pages/classes';
import About from './pages/about';
import Home from './pages/home';
import GetStarted from './pages/get-started';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/privacy-policy';



function App() {
  return (
    <>
      <div className='outer-container'>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='classes' element={<Classes />} />
            <Route path='about' element={<About />} />
            <Route path='get-started' element={<GetStarted />} />
            <Route path='privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
