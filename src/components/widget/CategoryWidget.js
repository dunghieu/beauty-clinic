import Widget from '../UI/Widget';
import {Link} from 'react-router-dom';
import './CategoryWidget.css';

const DUMMY_CATEGORIES = [
  {
    id: 'cat1',
    title: 'Consultation',
  },
  {
    id: 'cat2',
    title: 'Beauty',
  },
  {
    id: 'cat3',
    title: 'Treatments',
  },
  {
    id: 'cat4',
    title: 'News',
  },
];

const CategoryWidget = () => {
  const categories = DUMMY_CATEGORIES.map((category) => (
    <li className='Category__item' key={category.id}>
      <Link to='/' className='Category__link'>
        <span className='Category__title'>{category.title}</span>
      </Link>
    </li>
  ));

  return (
    <Widget className='Category__content' widgetName='Categories'>
      <ul className='Category__list'>{categories}</ul>
    </Widget>
  );
};

export default CategoryWidget;
