import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import {NavLink} from 'react-router-dom';


export default function NavBbar () {
    return(
        <div>
        <div className=" text-black p-4 pt-0 !flex flex-row items-center justify-start">
        <span className="mr-2"><NavLink to="/"><IoHomeOutline className="transition-transform transform hover: scale-80 duration-300 ease-in-out" /></NavLink></span>
        <FaAngleRight className="text-black bg-white p-1 rounded-full w-6 h-6" />
        <span className="text-custombrown font-semibold hover:underline"> LocationAndContact</span>
      </div>
      <div>
        <p className="p-4 pt-0 h-6 flex-row font-bold">CONTACT US</p>
      </div>
     
      </div>
       
    ) 
}
