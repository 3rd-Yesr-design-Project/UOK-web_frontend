import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = () => {
  return (
    <div className='flex justify-center mt-24'>
      <CircularProgress disableShrink />
    </div>
  );
};

export default Spinner;
