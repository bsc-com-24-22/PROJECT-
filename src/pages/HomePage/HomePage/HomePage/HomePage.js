import React from "react";
import Header from "../../Components/Header";
import Footer from "../../../HomePage/HomePage/Footer";


export default function HomePage() {
  return (    
      <div>
      <Header />
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

        <br/>

         <h1 className=" font-bold">  We collect
         <p className="font-normal ">Priority depends on the urgency of the <br></br>
          Package and the type of goods, catering to <b></b>
          varying budgets</p>
         </h1>
         <br/>
        
         <h2 className=" font-bold text-black"> Derivery
         <p className="font-normal ">Our realible logistics network enables the<br></br>
         fastest and most dependable door-to-<br></br>door transit service in the industry.</p>
         </h2>


        </div>
        <br/>
        <h4>GET THE <span  className=" text-amber-600" >FASTEST</span><br></br>PRODUCT DELIVERY  </h4>
        <br/>
        <br/>
        <br/>
       <Footer/>
        </div>

   
   

  )
}