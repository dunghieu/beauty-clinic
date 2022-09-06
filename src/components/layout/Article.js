import Info from '../UI/Info';
import Button from '../UI/Button';
import './Article.css';

const Article = (props) => {
  return (
    <div className='Article'>
      <div className='Article__img'>
        <img src={props.articleImg} alt='' />
      </div>
      <div className='Article__content'>
        <Info className='Article__content-info'>
          <span>{props.articleCategory}</span>
          <h2>{props.articleTitle}</h2>
          <p>{props.articleDescription}</p>
        </Info>
        <Button className='Article__content-button'>Read More</Button>
      </div>
    </div>
  );
};

export default Article;
