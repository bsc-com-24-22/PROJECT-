import React from "react";
import SearchBox from "..Tracking/SearchBox";
import { FaArrowRight } from "react-icons/fa";


export default function TrackingDetails(){
  return (
    <div>

      <h1 className="text-1xl text-yellow-700">Parcel Tracking</h1>
      
      <div className='font-bold text-center text-4xl text-sky-900'>Parcel Tracking</div>
      <p className="font-bold">
        You can track your parcel delivery and find your item's current <br />
        whereabouts with the quick and simple our company.<br />
      </p>
      <p className="text-white">emptyspace</p>
      <div className='font-bold'>Enter your Tracking Reference:</div>
      <SearchBox />

      <p className="text-white">emptyspace</p>

      <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold">Recent Activity</h3>
          < div className=" flex flex-row justify-between mb-2 "> view all <FaArrowRight className="mx-1" /></div>
        </div>
        <div className="font-normal mb-4">
        Check status of recent and current order
        </div>
        </div>
  );
}

