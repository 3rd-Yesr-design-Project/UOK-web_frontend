import React from 'react';
import SuitCase from '../icons/suitCase';
import Hat from '../icons/hat';
import { ImMobile } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';
const ContactInfo = (props) => {
  return (
    <div className='card'>
      <div className='shadow-fb rounded w-full bg-white p-4'>
        <div className='text-xl font-bold text-fBlack'>Contact Info</div>
        <div className='mt-2 flex items-center'>
          <ImMobile />
          <div className='ml-4'>
            <div>{props?.mobile}</div>
            <div className='text-xs text-gray-500 '>Mobile</div>
          </div>
        </div>
        <div className='mt-2 flex items-center'>
          <AiOutlineMail />
          <div className='ml-4'>
            <div>{props?.email}</div>
            <div className='text-xs text-gray-500 '>email</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
