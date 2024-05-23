import React from "react";
import SearchBox from "./SearchBox";
import Footer from "../../Components/Footer/Footer";

 export default function Tracking(){
  return (
    <div > <h1 className="text-1xl text-yellow-700 hover: underline">Parcel Tracking</h1>
      <div className='font-bold text-center text-4xl text-sky-900'>Parcel Tracking</div>
      <p className="font-bold">
        You can track your parcel delivery and find your item's current <br />
        whereabouts with the quick and simple our company.<br />
      </p>
      <p className="text-white">emptyspace</p>
      <div className='font-bold'>Enter your Tracking Reference:</div>

      <SearchBox />
      <Footer />
    </div>
  );
}


