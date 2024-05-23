import React from 'react'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import MapComponent from './Map';
import NavBbar from './navBbar'
import MainContent from './MainContent';
 

export default function LocationAndContact () {
    return (
    <><div className="flex flex-col min-h-screen">
    
    <Header />
    <NavBbar />
    <MainContent />
    <main className="flex-grow">
      <div>
        <MapComponent />
      </div>
    </main>
  
    <Footer />

    </div>
    </>
        
    );
}