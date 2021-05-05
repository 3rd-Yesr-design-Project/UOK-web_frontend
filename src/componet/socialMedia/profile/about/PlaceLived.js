import React from 'react';
import SuitCase from '../icons/suitCase';
import Hat from '../icons/hat';
import HomeAlt from '../icons/homeAlt';
import Pin from '../icons/pin';
import RSS from '../icons/rss';

const PlaceLived = () => {
  return (
    <div className='card'>
      <div className='shadow-fb rounded w-full bg-white p-4'>
        <div className='text-xl font-bold text-fBlack'>Places Lived</div>
        <div className='mt-2 flex items-center'>
          <SuitCase />
          <div className='ml-4'>
            <div>Matara</div>
            <div className='text-xs text-gray-500 '>Current City</div>
          </div>
        </div>
        <div className='mt-2 flex items-center'>
          <Hat />
          <div className='ml-4'>
            <div>Kelaniya</div>
            <div className='text-xs text-gray-500 '>Home town</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceLived;
