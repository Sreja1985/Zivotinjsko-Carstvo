import React from 'react';
import Content from '../Components/Content';
import Hero from '../Components/Hero';
import HomeImg from '../Assets/ZC.jpg';
import LinkComponent from '../Components/LinkComponent';


function ErrorPage() {
  return (
    <section>
        <Hero 
        cName='hero'
        heroImg= {HomeImg}
        alt= 'Životinjsko carstvo'
        />
        <Content 
          cName= 'content'
          title= 'Sadržaj nije pronađen'          
        />
        <LinkComponent 
          url= '/'
          text='Povratak'
        />
    </section>
  )
}

export default ErrorPage