import { Button } from '../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons/faPlayCircle';
import './HeaderSection.css';

function HeaderSection() {
  return (
    <div className='header-container'>
      <video src='..\videos\Video2.mp4' autoPlay loop muted />
      <h1>Take one moment, one breath</h1>
      <p>How are you feeling?</p>
      <div className='header-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          
        >
          FEEL THE UNIVERSE <FontAwesomeIcon icon={faPlayCircle} />
        </Button>
      </div>
    </div>
  );
}

export default HeaderSection;