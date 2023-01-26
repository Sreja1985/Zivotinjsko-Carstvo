import React from 'react';
import {Link} from 'react-router-dom';

function ErrorPage() {
  return (
    <section>
        <h1>Stranica nije pronađena</h1>
        <p>
            <Link to='/'>Povratak</Link>
        </p>
    </section>
  )
}

export default ErrorPage