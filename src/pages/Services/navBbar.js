import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";


export default function NavBbar () {
    return(
        <div>
        <div className=" text-darkgoldenrod p-4 pt-0 !flex flex-row items-center justify-start">
         <span className="mr-2 text-6px"><IoHomeOutline /></span>
        <FaAngleRight className="text-black bg-white p-1 rounded-full w-10 h-10" />
        <span className="text-customcolor bg-green font-bold"> Services</span>
      </div>
      <div>
        <p className="p-4 pt-0 h-6 flex-row font-bold"></p>
      </div>
      <div grid grid-cols-2>
        <div className="cols-span-1" color='red'>

        </div>
        <div className="cols-span-1">
            <p></p>
            <p></p>

        </div>

      </div>


      </div>
       
    );

       // ) npm install react-icons --save
}
