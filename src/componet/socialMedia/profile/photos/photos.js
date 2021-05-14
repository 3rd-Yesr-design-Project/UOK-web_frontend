import React from 'react';
import Filter from '../icons/filter';

const Photos = () => {
  return (
    <div className='card'>
      <div className='p-4 bg-white shadow-fb rounded w-full'>
        <div className='flex justify-between items-center'>
          <div className='text-xl font-bold text-fBlack'>Photos</div>
          <button className='bg-fFill text-fBlack px-4 py-2.5 focus:outline-none rounded flex justify-center items-center'>
            <Filter /> <span className='ml-2'>Photos</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Photos;
