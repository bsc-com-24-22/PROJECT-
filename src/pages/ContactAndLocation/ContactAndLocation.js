import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MapComponent from './Map';
import NavBbar from './navBbar'
 

export default function LocationAndContact () {
    return (
    <><div className="flex flex-col min-h-screen">
    
    <Header />
    <NavBbar />
    <main className="flex-grow">
      <div className="h-full">
        <MapComponent />
      </div>
    </main>
  
    <Footer />

    </div>
    </>
        
    );
}