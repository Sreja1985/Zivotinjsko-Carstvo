import React, { useState } from 'react';
import {MenuItems} from './MenuItems';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    const [clicked, setClicked] = useState(false);   

  return (
    <nav className='NavbarItems'>
        <Link to='/'>
            <img className='navbar__logo' alt='Životinjsko Carstvo' src={require('../Assets/logo.png')} />
        </Link>

        <div className='menu__icons' onClick={() => {
            setClicked(!clicked);
        }}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        

        <ul className={clicked ? 'nav__menu active' : 'nav__menu'}>
            {MenuItems.map((item, index) => {
                return(
                    <li key={index}>

                        <NavLink 
                            to={item.url} 
                            className={({isActive}) => 
                                'nav__links' + ( isActive ? " activated" : "")
                            }
                            onClick={() =>
                            {
                                setClicked(!clicked)
                            }}
                        >
                            {item.title}
                        </NavLink>

                    </li>
                )
            })}
        </ul>

    </nav>
  )
}

export default Navbar