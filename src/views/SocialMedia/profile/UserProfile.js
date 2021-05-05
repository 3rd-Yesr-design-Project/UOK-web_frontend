import React from 'react';
import TimelineHeader from '../../../componet/socialMedia/profile/profilehome/TimeLineHeader';
import Intro from '../../../componet/socialMedia/profile/profilehome/Introduction';
import Posts from '../../../componet/socialMedia/profile/profilehome/Post';
import MainPost from '../../../componet/socialMedia/profile/profilehome/MainPost';
import Photos from '../../../componet/socialMedia/profile/profilehome/Photos';
import './styles.css';
import SocialLayout from '../../../componet/layout/SocialLayout';
import ProfileLayout from '../../../componet/layout/ProfileLayout';
const UserProfile = () => {
  return (
    <SocialLayout>
      <ProfileLayout>
        <div>
          {/* <TimelineHeader /> */}

          <div className='px-52 grid grid-cols-12 pt-4 gap-4 bg-fFill z-0 pb-56'>
            <div className='col-span-5 col-start-1 row-start-1 space-y-4'>
              <Intro />
              <Photos />
            </div>
            <div className='flex-row row-start-1 col-span-7 col-start-6 space-y-4'>
              {/* <CreatePost /> */}
              <Posts />
              <MainPost />
            </div>
          </div>
        </div>
      </ProfileLayout>
    </SocialLayout>
  );
};

export default UserProfile;
