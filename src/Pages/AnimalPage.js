import React from 'react';
import Hero from '../Components/Hero';
import AnimalHero from '../Assets/Animals.jpg';
import AnimalDetails from '../Components/AnimalDetails';

function AnimalPage() {
  return (
    <>
        <Hero
          cName='hero__mid'
          heroImg= {AnimalHero} 
          alt= 'Životinjsko carstvo'
        />

        <AnimalDetails />
    </>
  )
}

export default AnimalPage
