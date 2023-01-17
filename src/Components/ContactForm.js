import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <section className='form__container'>
        
        <h1>Pošaljite upit</h1>
        <form action='https://httpbin.org/get' method='get'>
            <input placeholder='Ime' type='text' name='name' id='name' required />
            <input placeholder='Email' type='email' name='email' id='email' required />
            <input placeholder='Upit...' type='text' name='subject' id='subject' required />
            <textarea placeholder='Poruka...' type='text' name='message' rows='5' required ></textarea>
            <button type='submit'>Pošalji</button>
        </form>
    </section>
  )
}

export default ContactForm