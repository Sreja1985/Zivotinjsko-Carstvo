import React from 'react'
import './Mascots.css';
import Mascots from './Mascots';
import Album1956 from '../Assets/Albums/1956.png';
import Album60 from '../Assets/Albums/60e.png';
import Album70 from '../Assets/Albums/70e.png';
import Album80 from '../Assets/Albums/80e.png';
import Album1994 from '../Assets/Albums/1994.png';
import Album2008 from '../Assets/Albums/2008.png';
import Album2016 from '../Assets/Albums/2016.png';


function AlbumList() {
  return (
    <section className='mascots'>
        <Mascots 
            cName= 'des'
            heading= '1956'
            text= 'započinje suradnja s nakladničkom kućom Stožer i izlazi prvi album Životinjskog carstav s prekrasnim ilustracijama životinja.'
            alt='1956'
            image={Album1956}        
        />
        <Mascots 
            cName= 'des-revers'
            heading= '60'
            text= 'Početkom 60-tih godina Kraš otkupljuje prava i postaje vlasnik Životninjskog carstava, koje svojom pretpoznatljivošću postaje okus koji spaja generacije.'
            alt='60-te'
            image={Album60}        
        />
        <Mascots 
            cName= 'des'
            heading= '70'
            text= 'Sličice s ilustracijama životinja zamjenjuju se s realnim fotografijama životinja i mijenja se koncept albuma tako da se prvo piše opsežniji opis životinje, a ispod njega se ostavlja prostor za sličicu.'
            alt='70-te'
            image={Album70}        
        />
        <Mascots 
            cName= 'des-revers'
            heading= '80'
            text= 'Sredinom 80-ih godina prošlog stoljeća ponovo se vraćaju sličice na kojima se nalaze ilustracije životinja i album se tiska u mekom uvezu.'
            alt='80-te'
            image={Album80}        
        />
        <Mascots 
            cName= 'des'
            heading= '1994'
            text= 'Značajniju promjenu izgleda Životinjsko carstvo bilježi 1994. godine kada na tržište izlazi album koji je ujedno i bojanka.'
            alt='1994'
            image={Album1994}        
        />
         <Mascots 
            cName= 'des-revers'
            heading= '2008'
            text= 'Nastaje novi album modernijeg dizajna s fotografijama životinja.'
            alt='2008'
            image={Album2008}        
        />
        <Mascots 
            cName= 'des'
            heading= '2016'
            text= 'Izlazi posljednja verzija albuma, kada se album vizualno osvježava i povećava se broj nagrada koji kolekcionari mogu osvojiti.'
            alt='2016'
            image={Album2016}        
        />
        

       
      
    </section>
  )
}

export default AlbumList
