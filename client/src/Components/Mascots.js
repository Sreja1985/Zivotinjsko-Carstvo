import React from 'react';
import './Mascots.css';

function Mascots(props) {
  return (
    <section className={props.cName}>
        <article className='description'>
            <h2>{props.heading}</h2>
            <p>{props.text}</p>            
        </article>

        <article className='image'>
            <img alt={props.alt} src={props.image} />
        </article>
    </section>
  )
}

export default Mascots
