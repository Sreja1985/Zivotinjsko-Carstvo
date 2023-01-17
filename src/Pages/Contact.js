import React from 'react';
import Hero from '../Components/Hero';
import ContactImg from '../Assets/ZCContact.jpg';
import ContactForm from '../Components/ContactForm';


function Contact() {
  return (
    <>
        <Hero
          cName='hero__mid'
          heroImg= {ContactImg} 
          alt= 'Životinjsko carstvo'
        />

        <ContactForm />
    </>
  )
}

export default Contact