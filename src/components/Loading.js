import React from 'react';

import loadingImageGif from '../images/gif/loading-arrow.gif';

const Loading = () => {
  return (
    <div className='loading'>
      <h3>Loading...</h3>
      <img src={loadingImageGif} alt='Loading...' />
    </div>
  );
};

export default Loading;
