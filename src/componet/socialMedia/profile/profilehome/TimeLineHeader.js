import React from 'react';
import ProfileNavbar from './ProfileNavbar';
import { connect } from 'react-redux';
import CoverImg from '../../../../assets/cover1.jpg';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
}));
const TimeLineHeader = ({ profile }) => {
  const classes = useStyles();

  return (
    <div className='px-44 shadow  mb-5'>
      <div className='relative h-96 rounded-b flex justify-center'>
        <img
          src={CoverImg}
          className='object-cover w-full h-full rounded-b'
          alt='cover'
        />
        <div className='absolute -bottom-6'>
          {profile?.profile_url ? (
            <img
              src={profile?.profile_url}
              className='object-cover border-4 border-white w-40 h-40 rounded-full'
              alt='cover'
            />
          ) : (
            <Avatar src='/broken-image.jpg' className={classes.large} />
          )}
        </div>
      </div>
      <div className='text-center mt-6 text-3xl font-bold text-fBlack'>
        {profile?.name}
      </div>
      <div className='border border-fGrey mt-6 border-opacity-10' />
      <ProfileNavbar />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile.userProfile,
  };
};

export default connect(mapStateToProps)(TimeLineHeader);
