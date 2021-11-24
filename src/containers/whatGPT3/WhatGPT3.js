import { Feature } from '../../components';
import './WhatGPT3.css';

const WhatGPT3 = () => {
  return (
    <section className='whatgpt3' id='whatgpt3'>
      <div className='section-center whatgpt3__center'>
        <Feature
          big
          title='What is GPT-3'
          text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
        />

        <div className='whatgpt__heading'>
          <h1 className='gradient__text'>
            The possibilities are beyond your imagination
          </h1>

          <p>Explore The Library</p>
        </div>

        <div className='whatgpt3__container'>
          <Feature
            title='Chatbots'
            text='We so opinion friends me message as delight. Whole front do of plate heard oh ought.'
          />
          <Feature
            title='Knowledgebase'
            text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments'
          />
          <Feature
            title='Education'
            text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments'
          />
        </div>
      </div>
    </section>
  );
};

export default WhatGPT3;
