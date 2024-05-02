import { useState, useEffect } from 'react';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  const [clickOnNavbar, setClickOnNavbar] = useState(false);

  const handleClick = () => setClickOnNavbar(!clickOnNavbar);
  const closeMobileMenu = () => setClickOnNavbar(false);

  useEffect(() => {
    const showButton = () => {
      setClickOnNavbar(window.innerWidth <= 960 ? false : true);
    };
    /* la función showButton se define dentro del hook useEffect. Esta función comprueba el ancho de la ventana (window.innerWidth) y 
    establece el estado clickOnNavbar en true o false dependiendo de si el ancho de la ventana es menor o igual a 960 píxeles. +info en navbar.txt*/
    window.addEventListener('resize', showButton);

    return () => {
      window.removeEventListener('resize', showButton);
    };


  }, []);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          UN1VERSE
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={clickOnNavbar ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/forum'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Forum
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/learn-more'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Learn more
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button buttonStyle='btn--outline'>SIGN UP</Button>
      </div>
    </nav>
  );
}

export default Navbar;
