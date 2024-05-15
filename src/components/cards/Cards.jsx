
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Mental CHECK Newsletter</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='src\images\image5.jpg'
              text='Explore the hidden consecuences about depression'
              label='Gray Emotions'
              path='/learn-more/anxiety'
            />
            <CardItem
              src='src\images\image6.jpg'
              text='Feeling that you are out? It has a name and is BURNOUT'
              label='Work burnout'
              path='/learn-more/burnout'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='src\images\image7.jpg'
              text='"Sweet drems are made of this. WHO am I to disagree"'
              label='Technologies'
              //path='/'
            />
            <CardItem
              src='src\images\image8.jpg'
              text='Come and live a day by day in my life'
              label='first person'
              //path='/'
            />
            <CardItem
              src='src\images\image9.png'
              text='Look inside of you. Information about mental deseases and selfcare'
              label='self care'
              path='/learn-more/mental-health'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
