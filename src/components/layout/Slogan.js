import React from 'react';

const Slogan = (props) => {
  return (
    <section className='Slogan'>
      <div
        className='Slogan__wrapper'
        style={{backgroundImg: `url(${props.slogan})`}}
      >
        <span>{props.sloganName}</span>
        <h2>{props.sloganTitle}</h2>
        <p>{props.sloganDescription}</p>
      </div>
    </section>
  );
};

export default Slogan;
