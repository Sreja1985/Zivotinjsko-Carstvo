import React from 'react';
import './AnimalCard.css';

function AnimalCard(props) {
  return (
    <article className='card'>
        <figure className='animal__image'>
            <img alt={props.alt} src={props.image} />
            <figcaption className='details'>
                <div clasName='details__number'>{props.number}</div>
            </figcaption>
        </figure>
        <h4>{props.name}</h4>
        <p>{props.latin}</p>
    </article>
  )
}

export default AnimalCard
