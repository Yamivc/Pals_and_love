import { useState, useEffect } from 'react';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const showButton = () => {
      setClick(window.innerWidth <= 960 ? false : true);
    };

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
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
              to='/learn more'
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
