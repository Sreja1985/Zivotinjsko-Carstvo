import React from 'react';
import Hero from '../Components/Hero';
import HomeImg from '../Assets/ZC.jpg';
import Content from '../Components/Content';
import MascotsList from '../Components/MascotsList';

function Home() {
  return (
    <>
      <Hero 
        cName='hero'
        heroImg= {HomeImg}
        alt= 'Životinjsko carstvo'
      />

      <Content
        cName= 'content'
        title= 'Dobro došli !'
        subtitle = 'Upoznajte naše maskote'
       />

      <MascotsList />

    </>
  )
}

export default Home