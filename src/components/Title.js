import React from 'react';

const Title = ({ title }) => {
  return (
    <>
      <h3 className='title_component'>{title}</h3>
      <div className='title_underline'></div>
    </>
  );
};

export default Title;
