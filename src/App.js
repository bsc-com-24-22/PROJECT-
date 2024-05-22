import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import "./index.css";
import Header from "./Components/Header/Header"
import Aboutus from './pages/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import NavBbar from './Components/navBbar';


function App() {
  return (
    <div className='flex flex-col'>
      <div  className = "flex flex-col w-full ">
    <BrowserRouter>
    <Routes>
    <Route path='/' elements={<Aboutus />} />

    </Routes>
    
    </BrowserRouter>
        </div>
        </div>
  );
}

export default App;
