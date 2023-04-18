import React from 'react';
import './Hero.css';

function Hero(props) {
  return (
    <header className={props.cName}>
        <img alt={props.alt} src={props.heroImg} />
    </header>
  )
}

export default Hero