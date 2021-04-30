import React from 'react';
import TimelineHeader from '../profile/userProfile/TimeLineHeader';
import Intro from '../profile/userProfile/Introduction';
import CreatePost from '../profile/userProfile/CreatePost';
import Posts from '../profile/userProfile/Post';
import MainPost from '../profile/userProfile/MainPost';
import Photos from '../profile/userProfile/Photos';
import './styles.css';
const UserProfile = () => {
  console.log('prrrrrifle');
  return (
    <div className='antialiased'>
      <TimelineHeader />

      <div className='px-52 grid grid-cols-12 pt-4 gap-4 bg-fFill z-0 pb-56'>
        <div className='col-span-5 col-start-1 row-start-1 space-y-4'>
          <Intro />
          <Photos />
        </div>
        <div className='flex-row row-start-1 col-span-7 col-start-6 space-y-4'>
          <CreatePost />
          <Posts />
          <MainPost />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
