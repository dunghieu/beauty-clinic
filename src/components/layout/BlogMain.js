import './BlogMain.css';
import Articles from './Articles';
import SearchWidget from '../widget/SearchWidget';
import RecentPostsWidget from '../widget/RecentPostsWidget';
import CategoryWidget from '../widget/CategoryWidget';
import CloudTagsWidget from '../widget/CloudTagsWidget';
import SocialConnectWidget from '../widget/SocialConnectWidget';

const BlogMain = () => {
  return (
    <div className='Blog__main'>
      <div className='Blog__left'>
        <Articles />
      </div>
      <div className='Blog__right'>
        <SearchWidget />
        <RecentPostsWidget />
        <CategoryWidget />
        <CloudTagsWidget />
        <SocialConnectWidget />
      </div>
    </div>
  );
};

export default BlogMain;
