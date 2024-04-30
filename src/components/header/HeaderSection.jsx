
import { Button } from '../button/Button';
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
          onClick={console.log('hey')}
        >
          FEEL THE UNIVERSE <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeaderSection;
