import possibilityImage from '../../assets/possibility.png';
import './Possibility.css';

const Possibility = () => {
  return (
    <section className='section possibility' id='possibility'>
      <div className='section-center possibility__center'>
        <article className='possibility__left'>
          <img src={possibilityImage} alt='possibility pic' />
        </article>

        <article className='possibility__right'>
          <h4>Request Early Access to Get Started</h4>
          <h1 className='gradient__text'>
            The possibilities are beyond your imagination
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <h4>Request Early Access to Get Started</h4>
        </article>
      </div>
    </section>
  );
};

export default Possibility;
