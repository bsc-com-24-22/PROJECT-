import Tracking from './Pages/Tracking/Tracking';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.css";
import Aboutus from './pages/AboutUs/AboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LocationAndContact from './pages/ContactAndLocation/ContactAndLocation';
import Signin from "./Pages/Signin";
import SignUp from './pages/SignUpPage/component/SignUp';

function App() {
  return (
    <div className="App">
     <Tracking/>
   
    <div className='flex flex-col'>
      <div  className = "flex flex-col w-full ">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Aboutus />} />

    </Routes>
    
    </BrowserRouter>
    <div className="flex flex-col min-h-screen">
      
      <BrowserRouter>
        <Routes>
          <Route path ='/' element= {<LocationAndContact />} />
        </Routes>
      </BrowserRouter>
      <div>
       <Signin/> 
      <SignUp />
    </div>
      
    </div>
        </div>
        </div>
        </div>
  );
}

export default App;

