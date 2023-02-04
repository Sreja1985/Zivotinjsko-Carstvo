import React from 'react';
import './Content.css';

function Content(props) {
  return (
    <section className={props.cName}>
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <p>{props.text}</p>
      
    </section>
  )
}

export default Content

