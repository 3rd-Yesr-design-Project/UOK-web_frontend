import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FriendService from '../../../services/FriendService';
import { fetchFriend } from '../../../Action/friendAction';
import Avatar from '@material-ui/core/Avatar';

const SideBar = ({ users, user, fetchFriend, friends }) => {
  console.log('accept friends', friends);
  // const [state] = useState([
  //   { id: 1, image: '/images/ellon.jpg', name: 'Flutter Development' },
  //   { id: 2, image: '/images/ellon.jpg', name: 'PHP Development' },
  //   { id: 3, image: '/images/ellon.jpg', name: 'React Native Development' },
  //   { id: 4, image: '/images/ellon.jpg', name: 'Node JS Development' },
  //   { id: 5, image: '/images/ellon.jpg', name: 'Vue JS Development' },
  //   { id: 6, image: '/images/ellon.jpg', name: 'React Development' },
  //   { id: 7, image: '/images/ellon.jpg', name: 'Flutter Development' },
  //   { id: 8, image: '/images/ellon.jpg', name: 'PHP Development' },
  //   { id: 9, image: '/images/ellon.jpg', name: 'React Native Development' },
  //   { id: 10, image: '/images/ellon.jpg', name: 'Node JS Development' },
  //   { id: 11, image: '/images/ellon.jpg', name: 'Vue JS Development' },
  //   { id: 12, image: '/images/ellon.jpg', name: 'Anjana' },
  //   { id: 12, image: '/images/ellon.jpg', name: 'Naan' },
  //   { id: 12, image: '/images/ellon.jpg', name: 'eeeeeeeeee' },
  // ]);

  const fetchFriends = async (id) => {
    const result = await FriendService.getFriend(id);
    fetchFriend(result?.data?.data);
    console.log('fetchFriend', result);
  };

  return (
    <div className='sidebar bg-gray-100' style={{ marginTop: '70px' }}>
      <h3 className='text-center'>Friends</h3>
      <div className='friends'>
        {friends?.map((frd) => {
          console.log(user?.id !== frd?.friend_id, frd?.status === 'accept');
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
                <div className='sidebar__list-name'>{frd?.user?.name}</div>
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
    friends: state.friendReq.friendsRequest,
  };
};

export default connect(mapStateToProps, { fetchFriend })(SideBar);
