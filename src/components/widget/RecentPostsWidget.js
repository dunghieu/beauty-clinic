import Widget from '../UI/Widget';
import {Link} from 'react-router-dom';
import './RecentPostsWidget.css';
import recentPostsImg1 from '../../img/RecentPostImg1.png';
import recentPostsImg2 from '../../img/RecentPostImg2.png';
import recentPostsImg3 from '../../img/RecentPostImg3.png';

const DUMMY_POSTS = [
  {
    id: 'p1',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    date: 'May 10, 2021',
    img: recentPostsImg1,
  },
  {
    id: 'p2',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    date: 'May 10, 2021',
    img: recentPostsImg2,
  },
  {
    id: 'p3',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    date: 'May 10, 2021',
    img: recentPostsImg3,
  },
];

const RecentPostsWidget = () => {
  const recentPosts = DUMMY_POSTS.map((post) => (
    <li className='RecentPosts__item' key={post.id}>
      <Link to='/' className='RecentPosts__link'>
        <div className='RecentPosts__img'>
          <img src={post.img} alt='' />
        </div>
        <div className='RecentPosts__info'>
          <span className='RecentPosts__date'>{post.date}</span>
          <span className='RecentPosts__title'>{post.title}</span>
        </div>
      </Link>
    </li>
  ));

  return (
    <Widget className='RecentPosts__content' widgetName='Recent Posts'>
      <ul className='RecentPosts__list'>{recentPosts}</ul>
    </Widget>
  );
};

export default RecentPostsWidget;
