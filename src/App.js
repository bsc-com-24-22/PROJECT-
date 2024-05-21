import React from 'react';
import './App.css';
import AboutusPage from './pages/AboutusPage.js';
import Header from './pages/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>
      <AboutusPage/>
    
    </div>
  );
}

export default App;
