import React, { useState } from 'react';
import DownArrow from '../icons/downArrow';
// import { Button, Modal } from '@material-ui/core';
import EditProfile from '../EditProfile';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProfileNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className='flex justify-between px-8'>
        <div className='flex items-center'>
          <div className='px-4 py-5 text-fBlue border-b-4 border-fBlue'>
            <Link to='/social/profile/home'> Posts</Link>
          </div>
          <div className='px-4 py-5 text-fGrey'>
            <Link to='/social/profile/about'>About</Link>
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
      </div>
      <EditProfile show={show} handleClose={handleClose} />
    </div>
  );
};

export default ProfileNavbar;
