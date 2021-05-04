import React from 'react';
import DownArrow from '../icons/downArrow';
import Phone from '../icons/phone';
import Friend from '../icons/friend';
import More from '../icons/more';
import { Button } from '@material-ui/core';
import ProfileNavbar from './ProfileNavbar';

const TimeLineHeader = () => {
  return (
    <div className='px-44 shadow  mb-5'>
      <div className='relative h-96 rounded-b flex justify-center'>
        <img
          src='https://picsum.photos/id/1018/3000'
          className='object-cover w-full h-full rounded-b'
          alt='cover'
        />
        <div className='absolute -bottom-6'>
          <img
            src='https://picsum.photos/id/1005/1000'
            className='object-cover border-4 border-white w-40 h-40 rounded-full'
            alt='cover'
          />
        </div>
      </div>
      <div className='text-center mt-6 text-3xl font-bold text-fBlack'>
        Ronald Oliver
      </div>
      <div className='border border-fGrey mt-6 border-opacity-10' />
      <ProfileNavbar />
    </div>
  );
};

export default TimeLineHeader;
