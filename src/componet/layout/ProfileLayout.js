import React from 'react';
import TimeLineHeader from '../socialMedia/profile/profilehome/TimeLineHeader';

const ProfileLayout = ({ children }) => {
  return (
    <div style={{minWidth:1200}}>
      <TimeLineHeader />
      {children}
    </div>
  );
};

export default ProfileLayout;
