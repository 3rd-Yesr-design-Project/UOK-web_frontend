import React from 'react';
import emptyIcon from '../../assets/empty.png';
const Empty = () => {
  return (
    <div className='flex justify-center mt-10'>
      <img src={emptyIcon} />
    </div>
  );
};

export default Empty;
