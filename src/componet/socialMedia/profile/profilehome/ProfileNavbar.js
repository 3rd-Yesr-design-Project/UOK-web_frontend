import React, { useState, useEffect } from 'react';
import EditProfile from '../EditProfile';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import ProfileService from '../../../../services/ProfileService';
import FriendService from '../../../../services/FriendService';
import { getProfileByUserId } from '../../../../Action/profileAction';
import {
  addFriend,
  removeFriendRequest,
  getFriend,
} from '../../../../Action/friendAction';
import { connect } from 'react-redux';

const ProfileNavbar = ({
  getProfileByUserId,
  user,
  profile,
  friend,
  getFriend,
}) => {
  const { userId } = useParams();
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchProfileByUserId();
    fetchFriend();
  }, [userId]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchProfileByUserId = async () => {
    try {
      const profile = await ProfileService.fetchProfileByUserId(userId);

      if (profile && profile?.data?.data) {
        const mail = profile?.data?.data?.email;
        const userName = profile?.data?.data?.name;
        const data = {
          ...profile.data.data.profile,
          email: mail,
          name: userName,
        };

        getProfileByUserId(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFriend = async () => {
    try {
      const friend = await FriendService.fetchFriend(userId);
      getFriend(friend.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const sendRequest = async () => {
    const body = {
      friendId: userId,
    };
    await FriendService.addFriend(body);
    fetchFriend(userId);
  };

  const removeFreindRequest = async () => {
    await FriendService.removeFriendRequest(friend?.friend_id);
    fetchFriend(userId);
  };

  return (
    <div>
      <div className='flex justify-between px-8'>
        <div className='flex items-center'>
          <div className='px-4 py-5 text-fBlue border-b-4 border-fBlue'>
            <Link to={`/social/profile/home/${userId}`}> Posts</Link>
          </div>
          <div className='px-4 py-5 text-fGrey'>
            <Link to={`/social/profile/about/${userId}`}>About</Link>
          </div>
          <div className='px-4 py-5 text-fGrey'>
            <Link to={`/social/profile/photoes/${userId}`}>Photos</Link>
          </div>
        </div>
        {user?.id == userId ? (
          <div className='flex items-center space-x-2'>
            <Button variant='primary' onClick={handleShow}>
              Edit Profile
            </Button>
          </div>
        ) : friend?.status === 'pending' ? (
          <div className='flex items-center space-x-2'>
            <Button variant='primary' onClick={() => removeFreindRequest()}>
              Cancel Request
            </Button>
          </div>
        ) : friend?.status === 'accept' ? (
          <div className='flex items-center space-x-2'>
            <Button variant='primary' onClick={() => removeFreindRequest()}>
              UnFriend
            </Button>
          </div>
        ) : (
          <div className='flex items-center space-x-2'>
            <Button variant='primary' onClick={() => sendRequest()}>
              Add Friend
            </Button>
          </div>
        )}
      </div>
      <EditProfile show={show} handleClose={handleClose} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    profile: state.profile.userProfile,
    friend: state.friendReq.friend,
  };
};

export default connect(mapStateToProps, {
  getProfileByUserId,
  addFriend,
  removeFriendRequest,
  getFriend,
})(ProfileNavbar);
