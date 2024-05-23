import React from 'react';
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img6 from '../../Assets/img6.jpg.png'
import img8 from '../../Assets/img8.jpg'

import NavBbar from '../../Components/navBbar';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer';

export default function AboutusPage() {

    return (
        <div className='flex flex-col gap-5 bg-black-950 max-h-fit pl-5 w-full'>
            <div className='w-full'>
            <Header />
            </div>
            
            <div>
              <NavBbar />  
            </div>

            <div>
                  
    <div className='w-full flex justify-items-center'>
            

            <div className='text-xl'>
                <h1 className='font-extrabold sm:text-5xl text-customebrown'>ABOUT US</h1>
                <p className=" font-sans  font-bold first-letter:text-bold first-letter:text-2xl sm:text-preety">Welcome to delivery express!</p>
                <p className=" font-sans  font-bold first-letter:only: sm:text-preety">Established by seven innovative students From unima</p>
                <p className='font-sans  font-bold first-letter:only: sm:text-preety'>From unima we do express deriveries</p>
            </div>
            <img src={img6} alt="" className='  w-z h-96 '></img>
        </div>
      
        <h2 className='flex justify-center font-extrabold sm:text-5xl?'>MEET OUR TEAM</h2>
        <div className='flex gap-2 w-screen justify-evenly '>
            <img src={img1} alt=" "className='w-1/4'></img>
            <img src={img2} alt='' className='w-1/4'></img>
            <img src={img3} alt=""className=' w-1/4'></img>

        </div>
        <h3 className='flex justify-center font-extrabold sm:text-5xl?'>CUSTOMER FEEDBACK</h3>
        <div className='flex  justify-center mb-6'>
            <img src={img8} alt="" className=' w-1/4 z-0'></img>
        </div>
            </div>
            

            <div className='w-68'>
            <Footer />
            </div>
        </div>

    )
}
