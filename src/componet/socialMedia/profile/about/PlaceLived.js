import React from 'react';
import SuitCase from '../icons/suitCase';
import Hat from '../icons/hat';
import HomeAlt from '../icons/homeAlt';
import Pin from '../icons/pin';
import RSS from '../icons/rss';
import { AiOutlineHome } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
const PlaceLived = (props) => {
  return (
    <div className='card'>
      <div className='shadow-fb rounded w-full bg-white p-4'>
        <div className='text-xl font-bold text-fBlack'>Places Lived</div>
        <div className='mt-2 flex items-center'>
          <AiOutlineHome />
          <div className='ml-4'>
            <div className='text-xs text-gray-500 '>{props?.current_city}</div>
          </div>
        </div>
        <div className='mt-2 flex items-center'>
          <GoLocation />
          <div className='ml-4'>
            <div className='text-xs text-gray-500 '>{props?.home_town}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceLived;
