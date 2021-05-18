import React from 'react';
import SocialLayout from '../../../layout/SocialLayout';
import HomeLayout from '../../../layout/HomeLayout';
import ProfileLayout from '../../../layout/ProfileLayout';
import { makeStyles } from '@material-ui/core/styles';
import Intro from '../profilehome/Introduction';
import Photos from './photos';
import PhotosList from './PhotosList';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));
const ShowPhotos = () => {
  return (
    <HomeLayout>
      <SocialLayout></SocialLayout>
      <ProfileLayout></ProfileLayout>
      <div>
        <div className='px-52 grid grid-cols-12 pt-4 gap-4 bg-fFill z-0 pb-56'>
          <div className='col-span-5 col-start-1 row-start-1 space-y-4'>
            <Intro />
          </div>
          <div className='flex-row row-start-1 col-span-7 col-start-6 space-y-4'>
            <Photos />
            <PhotosList />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default ShowPhotos;
