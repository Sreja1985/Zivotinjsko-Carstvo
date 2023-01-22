import React from 'react';
import Hero from '../Components/Hero';
import AnimalImg from '../Assets/Animals.jpg';

function Animals() {
  return (
    <>
      <Hero
          cName='hero__mid'
          heroImg= {AnimalImg} 
          alt= 'Životinjsko carstvo'
        />
    
    </>
  )
}

export default Animals