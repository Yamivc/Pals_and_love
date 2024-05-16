
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
              placeholder='Enter Email'
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
            <Link to='/forum'>Forum</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <a href='/rss/rss.xml'>Rss</a>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/learn-more'>Mental Health</Link>
            <Link to='/'>Professionals</Link>
          
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com'>Instagram</Link>
            <Link to='https://www.facebook.com'>Facebook</Link>
            <Link to='https://www.youtube.com'>Youtube</Link>
            <Link to='https://twitter.com '>X</Link>
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
              to='https://www.facebook.com'
              target='_blank'
              aria-label='Facebook'
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link
              className='footer-social-icon-link instagram'
              to='https://www.instagram.com'
              target='_blank'
              aria-label='Instagram'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              className='footer-social-icon-link youtube'
              to='https://www.youtube.com'
              target='_blank'
              aria-label='Youtube'
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link
              className='footer-social-icon-link twitter'
              to='https://twitter.com '
              target='_blank'
              aria-label='Twitter'
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
            <Link
              className='footer-social-icon-link linkedin'
              to='https://es.linkedin.com'
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
