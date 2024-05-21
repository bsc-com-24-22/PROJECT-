import React from "react";
import Footer from "../../Components/Footer";
import icon from "./icon.jpg";
export default function HomePage() {

  return (
    
      <div>
        <div >
          <h2 class="">Your Packages Will Be</h2>
        </div>
        <h3 class=" font-bold text-left">IN SAFE HANDS</h3>

        <div class="flex text-left">
          <button class=" bg-yellow-700 rounded-lg font-bold py-2 px-4 rounded">Enquire Now</button>
        </div>

        <div class="flex items-center justify-center mb-6">
          <h4 class="text-lg font-bold">FOLLOW SIMPLE STEPS</h4>
        </div>
        <div className=" font-bold "> Fill the Form
        <p className="font-normal " >We spacialize in the rapid,cost-effective and realiable<br></br>
        delivery of couriers across different locations.</p>

        <p className="text-white">EmptySpace</p>

         <h1 className=" font-bold">  We collect
         <p className="font-normal ">Priority depends on the urgency of the <br></br>
          Package and the type of goods, catering to <b></b>
          varying budgets</p>
         </h1>
         <p className="text-white">EmptySpace</p>
        
         <h2 className=" font-bold"> Derivery
         <p className="font-normal ">Our realible logistics network enables the<br></br>
         fastest and most dependable door-to-<br></br>door transit service in the industry.</p>
         </h2>


        </div>
        <p className="text-white">EmptySpace</p>
        <h4>GET THE FASTEST<br></br>PRODUCT DELIVERY  </h4>

        <footer className="footer bg-amber-900 text-white py-4 w-full fixed bottom-0 rounded-tl-[15px] rounded-tr-[15px]">
        <ul className="flex justify-center space-x-10 mb-5">
          <li className="hover:text-red-500 cursor-pointer">About Us</li>
          <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
        </ul>
        <p className="text-center">Copyright © 2024. All rights reserved.</p>
      </footer>


        </div>

   
   

  )
}