import React from 'react';
import './AnimalCard.css';
import AnimalCard from './AnimalCard';
import Animal1 from '../Assets/images/Hobotnica.jpg';
import Animal2 from '../Assets/images/ClownFish.jpg';
import Animal3 from '../Assets/images/Konj.jpg';

function AnimalList() {
  return (
    <main className='animals'>
        <section className='animal__cards'>
            <AnimalCard 
                image={Animal1}
                alt="hobotnica"
                number="25"
                name="Hobotnica"
                latin="smncpscksm"
            />

            <AnimalCard 
                image={Animal2}
                alt="clownfish"
                number="21"
                name="ClownFish"
                latin="smncpscksm"
            />

            <AnimalCard 
                image={Animal3}
                alt="konj"
                number="123"
                name="Konj"
                latin="smncpscksm"
            />
           
        </section>
      
    </main>
  )
}

export default AnimalList
