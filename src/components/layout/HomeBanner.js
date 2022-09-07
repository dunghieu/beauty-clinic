import './HomeBanner.css';

const HomeBanner = () => {
  return (
    <section className="HomeBanner">
      <div className="HomeBanner__wrapper">
        <div className="HomeBanner__left">
          <h2 className="HomeBanner__title">Why choosing us?</h2>
          <p className="HomeBanner__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
            luctus venenatis.
          </p>
        </div>
        <div className="HomeBanner__right">
          <div className="HomeBanner__item">
            <div className="HomeBanner__icon">
              <img src="" alt="" />
            </div>
            <div className="HomeBanner__content">
              <h3 className="HomeBanner__subtitle">100%</h3>
              <p className="HomeBanner__text">asd</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
