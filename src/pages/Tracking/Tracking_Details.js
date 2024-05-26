import React from "react";
import SearchBox from "../Tracking/SearchBox";
import { FaArrowRight } from "react-icons/fa";
import Cards from "../Tracking/Cards";
import NavBbar  from "../Tracking/navBbar";
import Header from "../HomePage/Components/Header";

export default function TrackingDetails(){
  return (
    <div>
       <Header /> 
         <NavBbar/>
      <div className='font-bold text-center text-4xl text-sky-900'>Parcel Tracking</div>
      <p className="font-bold">
        You can track your parcel delivery and find your item's current <br />
        whereabouts with the quick and simple our company.<br />
      </p>
       <br/>
      <div className='font-bold'>Enter your Tracking Reference:</div>
      <SearchBox />

       <br/>

      <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold">Recent Activity</h3>
          < div className=" flex flex-row justify-between mb-2 hover:scale-125 hover:text-red-950"> view all <FaArrowRight className="mx-1" /></div>
        </div>
        <div className="font-normal mb-4">
        Check status of recent and current order
        </div>
        <Cards/>
        </div>
  );
}

