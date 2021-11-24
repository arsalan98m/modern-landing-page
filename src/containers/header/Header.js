import peopleIcon from '../../assets/people.png';
import aiImage from '../../assets/ai.png';
import './Header.css';

const Header = () => {
  return (
    <div className='header' id='home'>
      <div className='section-center header__center'>
        {/* header left */}
        <div className='header__left'>
          <h1 className='gradient__text'>
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className='header__leftInput'>
            <input type='email' placeholder='Your email address' />
            <button type='button'>get started</button>
          </div>

          <div className='header__leftPeople'>
            <img src={peopleIcon} alt='people' />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>

        {/* header right */}
        <div className='header__right'>
          <img src={aiImage} alt='ai pic' />
        </div>
      </div>
    </div>
  );
};

export default Header;
