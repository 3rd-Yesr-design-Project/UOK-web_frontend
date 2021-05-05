import React from 'react';
import SuitCase from '../icons/suitCase';
import Hat from '../icons/hat';
import HomeAlt from '../icons/homeAlt';
import Pin from '../icons/pin';
import RSS from '../icons/rss';

const BasicInfo = () => {
  return (
    <div className='card'>
      <div className='shadow-fb rounded w-full bg-white p-4'>
        <div className='text-xl font-bold text-fBlack'>BasicInfo</div>
        <div className='mt-2 flex items-center'>
          <SuitCase />
          <div className='ml-4'>
            <div>Male</div>
            <div className='text-xs text-gray-500 '>Gender</div>
          </div>
        </div>
        <div className='mt-2 flex items-center'>
          <Hat />
          <div className='ml-4'>
            <div>1995 octomber 18</div>
            <div className='text-xs text-gray-500 '>Birth Day</div>
          </div>
        </div>
        <div className='mt-2 flex items-center'>
          <Hat />
          <div className='ml-4'>
            <div>Singhala Language</div>
            <div className='text-xs text-gray-500 '>Language</div>
          </div>
        </div>
        <div className='mt-2 flex items-center'>
          <Hat />
          <div className='ml-4'>
            <div>Buddhists</div>
            <div className='text-xs text-gray-500 '>Religioun</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
