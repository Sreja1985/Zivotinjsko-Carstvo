import React from 'react';
import './AnimalDetails.css';
import Animal1 from '../Assets/images/Hobotnica.jpg';

function AnimalDetails() {
  return (
    <section className="wrapper">
        
        <article className="animal__img">
            <img src={Animal1} alt="Hobotnica"/>
        </article>
        <article className="animal__data">Tablica</article>  
        <article className="animal__text">
            <h2>Hobotnica</h2>
            <p>
              Hobotnica je vrsta mekušca iz porodice Octopodidae. 
              Ima 8 krakova s kojima može dostići duljinu i do 3 metra. 
              Hobotnica je odlično prilagođena životu lovca, ali i plijena, jer ima tajno oružje.
              U tjelesnim naborima krije vrećicu s crnilom koje ispušta kad želi zbuniti svoje neprijatelje
            </p>
        </article>
    </section>
  )
}

export default AnimalDetails
