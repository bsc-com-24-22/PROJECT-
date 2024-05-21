import React from 'react';
import './App.css';
import AboutusPage from './pages/AboutusPage.js';
import Header from './components/Header.js';
import NavBbar from './components/navBbar.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className='flex flex-col'>
    <div  className = "flex flex-col w-full ">
      <Header />
      <NavBbar />
      <AboutusPage/>
    </div>
    <Footer />
    </div>
  );
}

export default App;
