import React, { useState, useEffect } from 'react';
import DownArrow from '../icons/downArrow';
// import { Button, Modal } from '@material-ui/core';
import EditProfile from '../EditProfile';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import ProfileService from '../../../../services/ProfileService';
import { getProfileByUserId } from '../../../../Action/profileAction';
import { connect } from 'react-redux';

const ProfileNavbar = ({ getProfileByUserId, user, profile }) => {
  const { userId } = useParams();
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchProfileByUserId();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchProfileByUserId = async () => {
    try {
      const profile = await ProfileService.fetchProfileByUserId(userId);

      if (profile?.data?.data) {
        const mail = profile?.data?.data?.email;
        const userName = profile?.data?.data?.name;
        const data = {
          ...profile.data.data.profile,
          email: mail,
          name: userName,
        };
        getProfileByUserId(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='flex justify-between px-8'>
        <div className='flex items-center'>
          <div className='px-4 py-5 text-fBlue border-b-4 border-fBlue'>
            <Link to={`/social/profile/home/${userId}`}> Posts</Link>
          </div>
          <div className='px-4 py-5 text-fGrey'>
            <Link to={`/social/profile/about/${userId}`}>About</Link>
          </div>
          <div className='px-4 py-5 text-fGrey'>
            <Link to={`/social/profile/photoes/${userId}`}>Photos</Link>
          </div>
          {/* <div className='px-4 py-5 text-fGrey'>Videos</div>
          <div className='px-4 py-5 text-fGrey'>Check-Ins</div>
          <div className='px-4 flex items-center py-5 text-fGrey'>
            More
            <span className='ml-1'>
              <DownArrow borderColor='#606770' />
            </span>
          </div> */}
        </div>
        {user?.id == profile?.id && (
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
        )}
      </div>
      <EditProfile show={show} handleClose={handleClose} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    profile: state.profile.userProfile,
  };
};

export default connect(mapStateToProps, { getProfileByUserId })(ProfileNavbar);
