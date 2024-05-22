import Tracking from './Pages/Tracking/Tracking';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.css";
import Aboutus from './pages/AboutUs/AboutUs';


function App() {
  return (
    <div className="App">
     <Tracking/>
    </div>
    <div className='flex flex-col'>
      <div  className = "flex flex-col w-full ">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Aboutus />} />

    </Routes>
    
    </BrowserRouter>
        </div>
        </div>
  );
}




export default App;
