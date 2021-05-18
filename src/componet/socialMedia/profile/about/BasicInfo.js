import React from 'react';
import { FaBirthdayCake, FaPrayingHands } from 'react-icons/fa';
import { CgGenderFemale } from 'react-icons/cg';
import { AiOutlineMessage } from 'react-icons/ai';

const BasicInfo = (props) => {
  return (
    <div className='card'>
      <div className='shadow-fb rounded w-full bg-white p-4'>
        <div className='text-xl font-bold text-fBlack'>BasicInfo</div>
        <div className='mt-2 flex items-center'>
          <CgGenderFemale />
          <div className='ml-4'>
            <div>{props?.gender}</div>
            <div className='text-xs text-gray-500 '>Gender</div>
          </div>
        </div>
        <div className='mt-2 flex items-center'>
          <FaBirthdayCake />
          <div className='ml-4'>
            <div>{props?.birth_day}</div>
            <div className='text-xs text-gray-500 '>Birth Day</div>
          </div>
        </div>
        <div className='mt-2 flex items-center'>
          <AiOutlineMessage />
          <div className='ml-4'>
            <div>{props?.language}</div>
            <div className='text-xs text-gray-500 '>Language</div>
          </div>
        </div>
        <div className='mt-2 flex items-center'>
          <FaPrayingHands />
          <div className='ml-4'>
            <div>{props?.religioun}</div>
            <div className='text-xs text-gray-500 '>Religioun</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
