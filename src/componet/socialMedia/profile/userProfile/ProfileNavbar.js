import React, { useState } from 'react';
import DownArrow from '../icons/downArrow';
// import { Button, Modal } from '@material-ui/core';
import EditProfile from '../EditProfile';
import { Button } from 'react-bootstrap';

const ProfileNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='flex justify-between px-8'>
      <div className='flex items-center'>
        <div className='px-4 py-5 text-fBlue border-b-4 border-fBlue'>
          Posts
        </div>
        <div className='px-4 py-5 text-fGrey'>
          Friends <span className='text-sm ml-1'>458</span>
        </div>
        <div className='px-4 py-5 text-fGrey'>Photos</div>
        <div className='px-4 py-5 text-fGrey'>Videos</div>
        <div className='px-4 py-5 text-fGrey'>Check-Ins</div>
        <div className='px-4 flex items-center py-5 text-fGrey'>
          More
          <span className='ml-1'>
            <DownArrow borderColor='#606770' />
          </span>
        </div>
      </div>
      <div className='flex items-center space-x-2'>
        <Button variant='primary' onClick={handleShow}>
          EditProfile
        </Button>
        {/* <button className='w-12 h-9 bg-fButton rounded flex items-center justify-center focus:outline-none'>
            edit Profile
          </button>
          <button className='w-12 h-9 bg-fButton rounded flex items-center justify-center focus:outline-none'>
            <Friend />
          </button>
          <button className='w-12 h-9 bg-fButton rounded flex items-center justify-center focus:outline-none'>
            <More />
          </button> */}
      </div>
      <EditProfile show={show} handleClose={handleClose} />
    </div>
  );
};

export default ProfileNavbar;
