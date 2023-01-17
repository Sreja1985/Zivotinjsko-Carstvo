import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
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
                <h4>Proizvodi</h4>
                <Link className='links' to='/'>Čokolada 15g</Link>
                <Link className='links' to='/'>Milksy keks 20g</Link>
                <Link className='links' to='/'>Lizli 15g</Link>
                <Link className='links' to='/'>Milksy Kraš Express 20g</Link>
		        <Link className='links' to='/'>Album</Link>
            </div>
            <div>
                <h4>Životinje</h4>
                <Link className='links' to='/zivotinje'>Sisavci</Link>
                <Link className='links' to='/zivotinje'>Ptice</Link>
                <Link className='links' to='/zivotinje'>Gmazovi</Link>
                <Link className='links' to='/zivotinje'>Ribe</Link>
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
            <span>Kraš</span>
        </section>
    </footer>
  )
}

export default Footer