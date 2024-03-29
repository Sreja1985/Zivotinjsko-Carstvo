import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {

    const year = new Date().getFullYear();

  return (
    <footer className='footer'>
        <section className='top'>
            <div>
                <img className='footer__logo' alt='Kraš' src={require('../Assets/Kras-Logo.png')} />
            </div>
            <div>
                <Link to='/' target='_blank'>
                    <i className='fa-brands fa-facebook-square' />
                </Link>
                <Link to='/' target='_blank'>
                    <i className='fa-brands fa-twitter-square' />
                </Link>
                <Link to='/' target='_blank'>
                    <i className='fa-brands fa-youtube-square' />
                </Link>
                <Link to='/' target='_blank'>
                    <i className='fa-brands fa-instagram-square' />
                </Link>
            </div>
        </section>

        <section className='middle'>            
            <div>
                <h4>O nama</h4>
                <Link className='links' to='/'>Kraš grupa</Link>
                <Link className='links' to='/'>Povijest Kraša</Link>
                <Link className='links' to='/'>Misija i vizija</Link>
                <Link className='links' to='/'>Osnovni podaci</Link>
            </div>
            <div>
                <h4>Životinje</h4>
                <Link className='links' to='/zivotinje/beskraljeznaci'>Beskralježnjaci</Link>
                <Link className='links' to='/zivotinje/mekusci'>Mekušci</Link>
                <Link className='links' to='/zivotinje/clankonosci'>Člankonošci</Link>
                <Link className='links' to='/zivotinje/bodljikasi'>Bodljikaši</Link>
                <Link className='links' to='/zivotinje/ribe'>Ribe</Link>
                <Link className='links' to='/zivotinje/vodozemci'>Vodozemci</Link>
                <Link className='links' to='/zivotinje/gmazovi'>Gmazovi</Link>
                <Link className='links' to='/zivotinje/ptice'>Ptice</Link>
                <Link className='links' to='/zivotinje/sisavci'>Sisavci</Link>
            </div>
            <div>
                <h4>Kolekcije</h4>
                <Link className='links' to='/'>Životinjsko carstvo</Link>
                <Link className='links' to='/kolekcije'>Cro Army</Link>
                <Link className='links' to='/kolekcije'>Leteči medvjedići</Link>
                <Link className='links' to='/kolekcije'>Viteške priče</Link>
            </div>            
            <div>
                <h4>Kontakt</h4>
                <address>
                    <p>KRAŠ prehrambena industrija d.d.</p>
                    <p>Ravnice 48, 10000 Zagreb, Hrvatska</p>
                    <a className='links' href='tel:+385 1 2396 111'>+385 1 2396 111</a>
                    <a className='links' href='mailto:contact@kras.hr'>contact@kras.hr</a>
                </address>
            </div>

        </section>

        <section className='bottom'>
            <span>Copyright &copy; </span>
            <span>ŽC {year}</span>
        </section>
    </footer>
  )
}

export default Footer