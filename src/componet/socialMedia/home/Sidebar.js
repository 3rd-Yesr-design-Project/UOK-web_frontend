import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FriendService from '../../../services/FriendService';
import { fetchFriend } from '../../../Action/friendAction';
import Avatar from '@material-ui/core/Avatar';

const SideBar = ({ users, user, fetchFriend, friends }) => {
  const fetchFriends = async (id) => {
    const result = await FriendService.getFriend(id);
    fetchFriend(result?.data?.data);
  };

  return (
    <div className='sidebar bg-gray-100' style={{ marginTop: '70px' }}>
      <h3 className='text-center'>Friends</h3>
      <div className='friends'>
        {friends?.map((frd) => {
          return user?.id !== frd?.friend_id && frd?.status === 'accept' ? (
            <Link to={`/social/profile/home/${frd?.friend_id}`}>
              <div
                className='sidebar__list border-b-2  hover:bg-gray-400'
                key={frd?.id}
                onClick={() => fetchFriends(frd?.friend_id)}
              >
                <div className='sidebar__list-img'>
                  {frd?.profile?.profile_url ? (
                    <img src={frd?.profile?.profile_url} alt='groupimage' />
                  ) : (
                    <Avatar src='/broken-image.jpg' />
                  )}
                </div>
                <div className='sidebar__list-name'>{frd?.friend?.name}</div>
              </div>
            </Link>
          ) : null;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    user: state.user.user,
    friends: state.friendReq.friends,
  };
};

export default connect(mapStateToProps, { fetchFriend })(SideBar);
