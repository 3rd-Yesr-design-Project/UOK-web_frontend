import React from 'react';
import SuitCase from '../icons/suitCase';
import Hat from '../icons/hat';

const ContactInfo = () => {
  return (
    <div className='card'>
      <div className='shadow-fb rounded w-full bg-white p-4'>
        <div className='text-xl font-bold text-fBlack'>Places Lived</div>
        <div className='mt-2 flex items-center'>
          <SuitCase />
          <div className='ml-4'>
            <div>0712045447</div>
            <div className='text-xs text-gray-500 '>Mobile</div>
          </div>
        </div>
        <div className='mt-2 flex items-center'>
          <Hat />
          <div className='ml-4'>
            <div>anjana@gmail.com</div>
            <div className='text-xs text-gray-500 '>email</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
