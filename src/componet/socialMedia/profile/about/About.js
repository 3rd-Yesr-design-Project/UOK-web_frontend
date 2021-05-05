import React from 'react';
import ProfileLayout from '../../../layout/ProfileLayout';
import SocialLayout from '../../../layout/SocialLayout';
import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';
import Overview from './Overview';
import PlaceLived from './PlaceLived';
import WorkAndEducation from './WorkAndEducation';

const About = () => {
  return (
    <div>
      <SocialLayout>
        <ProfileLayout>
          <div className='container m-auto mt-5'>
            <Overview />
          </div>
          <div className='px-52 grid grid-cols-12 pt-4 gap-4 bg-fFill z-0 pb-56'>
            <div className='col-span-5 col-start-1 row-start-1 space-y-4'>
              <WorkAndEducation />
              <ContactInfo />
            </div>
            <div className='flex-row row-start-1 col-span-7 col-start-6 space-y-4'>
              <PlaceLived />
              <BasicInfo />
            </div>
          </div>
        </ProfileLayout>
      </SocialLayout>
    </div>
  );
};

export default About;
