import './SearchWidget.css';

const SearchWidget = () => {
  return (
    <div className='SearchWidget'>
      <div className='SearchWidget__input'>
        <input type='text' placeholder='Search here ...' />
      </div>
      <div className='SearchWidget__button'>
        <button></button>
      </div>
    </div>
  );
};

export default SearchWidget;
