import React from 'react';
import TimeLineHeader from '../socialMedia/profile/profilehome/TimeLineHeader';

const ProfileLayout = ({ children }) => {
  return (
    <div>
      <TimeLineHeader />
      {children}
    </div>
  );
};

export default ProfileLayout;
