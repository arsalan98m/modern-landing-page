import { Feature } from '../../components';
import './Features.css';

const Features = () => {
  const featuresData = [
    {
      title: 'Improving end distrusts instantly',
      text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },

    {
      title: 'Become the tended active',
      text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },

    {
      title: 'Message or am nothing',
      text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },

    {
      title: 'Really boy law county',
      text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
  ];

  return (
    <section className='section features'>
      <div className='section-center features__center'>
        <div className='features__heading'>
          <h1 className='gradient__text'>
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <p>Request Early Access to Get Started</p>
        </div>

        <div className='features__container'>
          {featuresData.map((feature, index) => (
            <Feature {...feature} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
