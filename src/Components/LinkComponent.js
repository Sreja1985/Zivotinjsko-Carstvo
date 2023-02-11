import React from 'react';
import './LinkComponent.css';

function LinkComponent(props) {
  return (
    <section className='notFound'>
        <a href= {props.url}>
            {props.text}
        </a>
    </section>
  )
}

export default LinkComponent
