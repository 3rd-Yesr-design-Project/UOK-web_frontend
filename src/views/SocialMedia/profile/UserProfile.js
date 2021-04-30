import React from 'react';
import UOK from '../../../assets/uok.jpg';
import ellon from '../../../assets/ellon.jpg';
import './styles.css';
const UserProfile = () => {
  console.log('prrrrrifle');
  return (
    <div className='mt-5 container'>
      <img src={UOK} alt='cover photo' className='mt-3 cover-photo' />
      <div className='profile-photo'>
        <img src={ellon} alt='profile photo' />
      </div>
      <p>sdfffffffffffffffffffffffffffffffff</p>
      <p>sdffffffff sdfsjdfs</p>
    </div>
  );
};

export default UserProfile;
