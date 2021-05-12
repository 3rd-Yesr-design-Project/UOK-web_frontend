import React from 'react';
import DownArrow from '../icons/downArrow';
import Phone from '../icons/phone';
import Friend from '../icons/friend';
import More from '../icons/more';
import { Button } from '@material-ui/core';
import ProfileNavbar from './ProfileNavbar';
import { connect } from 'react-redux';
import CoverImg from '../../../../assets/cover1.jpg';

const TimeLineHeader = ({ profile }) => {
  return (
    <div className='px-44 shadow  mb-5'>
      <div className='relative h-96 rounded-b flex justify-center'>
        <img
          src={CoverImg}
          className='object-cover w-full h-full rounded-b'
          alt='cover'
        />
        <div className='absolute -bottom-6'>
          <img
            src={profile?.profile?.profile_url}
            className='object-cover border-4 border-white w-40 h-40 rounded-full'
            alt='cover'
          />
        </div>
      </div>
      <div className='text-center mt-6 text-3xl font-bold text-fBlack'>
        {profile?.name}
      </div>
      <div className='border border-fGrey mt-6 border-opacity-10' />
      <ProfileNavbar />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile.userProfile,
  };
};

export default connect(mapStateToProps)(TimeLineHeader);
