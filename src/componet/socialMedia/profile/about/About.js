import React from 'react';
import ProfileLayout from '../../../layout/ProfileLayout';
import SocialLayout from '../../../layout/SocialLayout';
import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';
import Overview from './Overview';
import PlaceLived from './PlaceLived';
import WorkAndEducation from './WorkAndEducation';
import { connect } from 'react-redux';

import { getProfileByUserId } from '../../../../Action/profileAction';
import HomeLayout from '../../../layout/HomeLayout';

const About = ({ profile }) => {
  return (
    <div>
      <HomeLayout>
        <SocialLayout>
          <ProfileLayout>
            <div className='container m-auto mt-5'>
              <Overview
                work={profile?.working_place}
                university={profile?.university}
                school={profile?.school}
                current_city={profile?.current_city}
                home_town={profile?.home_town}
              />
            </div>
            <div className='px-52 grid grid-cols-12 pt-4 gap-4 bg-fFill z-0 pb-56'>
              <div className='col-span-5 col-start-1 row-start-1 space-y-4'>
                <WorkAndEducation
                  work={profile?.working_place}
                  university={profile?.university}
                  school={profile?.school}
                />
                <ContactInfo mobile={profile?.mobile} email={profile?.email} />
              </div>
              <div className='flex-row row-start-1 col-span-7 col-start-6 space-y-4'>
                <PlaceLived
                  current_city={profile?.current_city}
                  home_town={profile?.home_town}
                />
                <BasicInfo
                  birth_day={profile?.birthday}
                  gender={profile?.gender}
                  language={profile?.language}
                  religioun={profile?.religioun}
                />
              </div>
            </div>
          </ProfileLayout>
        </SocialLayout>
      </HomeLayout>
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

export default connect(mapStateToProps, { getProfileByUserId })(About);
