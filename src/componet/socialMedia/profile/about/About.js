import React from 'react';
import ProfileLayout from '../../../layout/ProfileLayout';
import SocialLayout from '../../../layout/SocialLayout';
import Overview from './Overview';

const About = () => {
  return (
    <div>
      <SocialLayout>
        <ProfileLayout>
          <div className='container m-auto mt-5'>
            <Overview />
          </div>
        </ProfileLayout>
      </SocialLayout>
    </div>
  );
};

export default About;
