import { Article } from '../../components';
import image1 from '../../assets/blog01.png';
import image2 from '../../assets/blog02.png';
import image3 from '../../assets/blog03.png';
import image4 from '../../assets/blog04.png';
import './Blog.css';

const Blog = () => {
  return (
    <section className='section blog'>
      <div className='section-center blog__center'>
        <div className='blog__heading'>
          <h1 className='gradient__text'>
            A lot is happening we are blogging about it
          </h1>
        </div>

        <div className='blog__container'>
          <div className='blog__containerLeft'>
            <Article
              imgUrl={image1}
              date='Nov, 24 2021'
              title='GPT-3 and Open AI is the future. Let us explore how it is?
'
            />
          </div>
          <div className='blog__containerRight'>
            <Article
              imgUrl={image1}
              date='Nov, 24 2021'
              title='GPT-3 and Open AI is the future. Let us explore how it is?
'
            />
            <Article
              imgUrl={image2}
              date='Nov, 24 2021'
              title='GPT-3 and Open AI is the future. Let us explore how it is?
'
            />
            <Article
              imgUrl={image3}
              date='Nov, 24 2021'
              title='GPT-3 and Open AI is the future. Let us explore how it is?
'
            />
            <Article
              imgUrl={image4}
              date='Nov, 24 2021'
              title='GPT-3 and Open AI is the future. Let us explore how it is?
'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
