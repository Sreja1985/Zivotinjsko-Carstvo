import React from 'react';
import Hero from '../Components/Hero';
import LogInImg from '../Assets/ZCContact.jpg';

function Login() {
  return (
        <Hero
          cName='hero__mid'
          heroImg= {LogInImg} 
          alt= 'Životinjsko carstvo'
        />
  )
}

export default Login