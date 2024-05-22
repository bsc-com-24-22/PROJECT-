import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.css";
import Aboutus from './pages/AboutUs/AboutUs';


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
