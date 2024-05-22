import React from "react";
import SearchBox from "./SearchBox";

 export default function Tracking(){
  return (
    <div > <h1 className="text-1xl text-yellow-700">Parcel Tracking</h1>
      <div className='font-bold text-center text-4xl text-sky-900'>Parcel Tracking</div>
      <p className="font-bold">
        You can track your parcel delivery and find your item's current <br />
        whereabouts with the quick and simple our company.<br />
      </p>
      <p className="text-white">emptyspace</p>
      <div className='font-bold'>Enter your Tracking Reference:</div>

      <SearchBox />
      <footer className="footer bg-amber-900 text-white py-4 w-full fixed bottom-0 rounded-tl-[15px] rounded-tr-[15px]">
        <ul className="flex justify-center space-x-8 mb-4">
          <li className="hover:text-red-500 cursor-pointer">About Us</li>
          <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
        </ul>
        <p className="text-center">Copyright © 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}


