import './BlogMain.css';
import useWindowDimensions from '../../hooks/useWindowDimentions';
import Articles from './Articles';
import SearchWidget from '../widget/SearchWidget';
import RecentPostsWidget from '../widget/RecentPostsWidget';
import CategoryWidget from '../widget/CategoryWidget';
import CloudTagsWidget from '../widget/CloudTagsWidget';
import SocialConnectWidget from '../widget/SocialConnectWidget';

const BlogMain = () => {
  const {width} = useWindowDimensions();

  return (
    <div className='Blog__main'>
      <div className='Blog__left'>
        {width < 768 && <SearchWidget />}
        <Articles />
      </div>
      <div className='Blog__right'>
        {width > 768 && <SearchWidget />}
        <RecentPostsWidget />
        <CategoryWidget />
        <CloudTagsWidget />
        <SocialConnectWidget />
      </div>
    </div>
  );
};

export default BlogMain;
