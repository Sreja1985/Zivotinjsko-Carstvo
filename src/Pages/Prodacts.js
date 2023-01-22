import React from 'react';
import Hero from '../Components/Hero';
import ContactImg from '../Assets/ZCContact.jpg';

function Prodacts() {
  return (
    <>
      <Hero
          cName='hero__mid'
          heroImg= {ContactImg} 
          alt= 'Životinjsko carstvo'
        />
    </>
  )
}

export default Prodacts