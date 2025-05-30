import React from 'react';
//logo
import LogoWhite from "../assets/img/logo-white.svg"


const Footer = () => {
  return <footer className='bg-primary py-12'>
    <div className='container mx-auto text-white flex justify-between'>
      {/* Logo */}
      <a href='/'>
         <img  src={LogoWhite} atl=""/>
      </a>
      
      Copyright &copy; 2025. All rights reserved.
    </div>
  </footer>;
};

export default Footer;
