import './BlogMain.css';
import Articles from './Articles';
import SearchWidget from './SearchWidget';

const BlogMain = () => {
  return (
    <div className='Blog__main'>
      <div className='Blog__left'>
        <Articles />
      </div>
      <div className='Blog__right'>
        <SearchWidget />
      </div>
    </div>
  );
};

export default BlogMain;
