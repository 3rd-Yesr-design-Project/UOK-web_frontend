import React from 'react';
import SuitCase from '../icons/suitCase';
import Hat from '../icons/hat';
import HomeAlt from '../icons/homeAlt';
import Pin from '../icons/pin';
import { connect } from 'react-redux';

const Introduction = ({ profile }) => {
  return (
    <div className='card'>
      <div className='shadow-fb rounded w-full bg-white p-4'>
        <div className='text-xl font-bold text-fBlack'>Intro</div>
        <div className='mt-4 flex items-center'>
          <SuitCase />
          <span className='ml-2'>{profile?.working_place}</span>
        </div>
        <div className='mt-4 flex items-center'>
          <Hat />
          <span className='ml-2'>{profile?.university}</span>
        </div>
        <div className='mt-4 flex items-center'>
          <Hat />
          <span className='ml-2'>{profile?.school} </span>
        </div>
        <div className='mt-4 flex items-center'>
          <HomeAlt />
          <span className='ml-2'>
            Lives in <b>{profile?.home_town}</b>
          </span>
        </div>
        <div className='mt-4 flex items-center'>
          <Pin />
          <span className='ml-2'>
            From <b>{profile?.current_city}</b>
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state?.profile?.userProfile?.profile
      ? state?.profile?.userProfile?.profile
      : state?.profile?.userProfile,
  };
};

export default connect(mapStateToProps)(Introduction);
