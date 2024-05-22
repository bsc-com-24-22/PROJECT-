import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-custombrown text-white py-3 mt-auto border rounded-t-2xl">
    <div className="container mx-auto px-2">
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg font-semibold mb-2">About Us</h2>
          <p className="text-sm">Learn more about our company and values.</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p className="text-sm">Get in touch with us for more information.</p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()}   <span className="font-semibold">
              <span className="text-3xl">Delivery</span> <span className="text-teal-500">Express</span></span>. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;