import React from 'react';
import SuitCase from '../icons/suitCase';
import Hat from '../icons/hat';
import HomeAlt from '../icons/homeAlt';
import Pin from '../icons/pin';
import RSS from '../icons/rss';

const WorkAndEducation = () => {
  return (
    <div className='card'>
      <div className='shadow-fb rounded w-full bg-white p-4'>
        <div className='text-xl font-bold text-fBlack'>Work and Education</div>
        <div className='text-xl font-bold text-fBlack mt-4'>Work</div>
        <div className='mt-2 flex items-center'>
          <SuitCase />
          <span className='ml-2'>
            Massa eros etiam diam massa gravida nullam urna{' '}
          </span>
        </div>
        <div className='text-xl font-bold text-fBlack mt-4'>College</div>
        <div className='mt-2 flex items-center'>
          <Hat />
          <span className='ml-2'>Gravida nullam urna</span>
        </div>
        <div className='text-xl font-bold text-fBlack mt-4'>School</div>
        <div className='mt-2 flex items-center'>
          <Hat />
          <span className='ml-2'>Etiam diam massa </span>
        </div>
      </div>
    </div>
  );
};

export default WorkAndEducation;
