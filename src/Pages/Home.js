import React from 'react';
import Hero from '../Components/Hero';
import HomeImg from '../Assets/ZC.jpg';

function Home() {
  return (
    <>
      <Hero 
        cName='hero'
        heroImg= {HomeImg}
        alt= 'Životinjsko carstvo'
      />

    </>
  )
}

export default Home