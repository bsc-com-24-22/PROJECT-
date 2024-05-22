import React from "react";
import './Tracking.css';

export default function Tracking() {
  return (
    <div>
      
      <h1>parcel Tracking</h1>
      <div className='flex'>Parcel Tracking
        <p className="text">You can track your parcel delivery and find your item's current <br />whereabouts with the quick and simple our company.<br /></p>
        <div className='trackingText'>Enter your Tracking Reference:</div>
        <div className="Search"><input className="srch" type="search" name=" " placeholder="e.g.P2G12345678" />
          <button className="btn">Enter</button>
          <footer className="footer">
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
            <p>Copyright © 2024. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
