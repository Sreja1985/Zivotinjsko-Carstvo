import React from 'react';
import Hero from '../Components/Hero';
import AnimalImg from '../Assets/Animals.jpg';
import AnimalList from '../Components/AnimalList';

function Animals() {
  return (
    <>
      <Hero
          cName='hero__mid'
          heroImg= {AnimalImg} 
          alt= 'Životinjsko carstvo'
        />
      <AnimalList />     
    
    </>
  )
}

export default Animals