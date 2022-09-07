import './SliderPlus.css';
import sliderPlayBtn from '../../img/SliderPlusPlayBtn.png';

const SliderPlus = () => {
  return (
    <section className="SliderPlus">
      <div className="SliderPlus__wrapper">
        <div className="SliderPlus__left">
          <div className="SliderPlus__info">
            <h2>Your beauty center place</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque
              arcu fusce et magna consequat neque vitae lobortis.
            </p>
          </div>
          <div className="SliderPlus__btn">
            <button>More Details</button>
          </div>
        </div>
        <div className="SliderPlus__right">
          <div className="SliderPlus__play">
            <img src={sliderPlayBtn} alt="" />
            <span>Tour Video</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderPlus;
