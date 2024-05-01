
import './Footer.css';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Remember. You are not alone, we are not alone. Searching for help is okay.
        </p>
        <p className='footer-subscription-text'>
          Subscribe when you need, unsubscribe at any time.
        </p>
        <div className='footer-input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>Join the crew</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Forum</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Mental Health</Link>
            <Link to='/'>Professionals</Link>
          
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>X</Link>
          </div>
        </div>
      </div>
      <section className='footer-social-media'>
        <div className='footer-social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='footer-social-logo'>
              UN1VERSE
              
            </Link>
          </div>
          <small className='footer-website-rights'>UN1VERSE © 2024</small>
          <div className='footer-social-icons'>
            <Link
              className='footer-social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link
              className='footer-social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              className='footer-social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link
              className='footer-social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
            <Link
              className='footer-social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
