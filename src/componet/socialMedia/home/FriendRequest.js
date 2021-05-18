import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import FriendService from '../../../services/FriendService';
import {
  addFriend,
  removeFriendRequest,
  getFriendRequest,
  getUOKFriends,
} from '../../../Action/friendAction';
const FriendRequest = ({
  friendRequest,
  addFriend,
  user,
  getFriendRequest,
  getUOKFriends,
}) => {
  const [localUser, setLocalUser] = useState({});

  useEffect(() => {
    fetchFriendRequest();
  }, []);

  const fetchFriendRequest = async () => {
    const result = await FriendService.getMyFriendRequest();
    if (result?.data?.data) {
      getFriendRequest(result?.data?.data);
    }
  };

  const fetchUOKFriends = async () => {
    try {
      const friends = await FriendService.fetchUOKFriends();
      console.log('xxxxxxxxxxxxxx', friends);
      getUOKFriends(friends?.data?.data);
      // getFriendRequest(friends?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const requestAccept = async (freq) => {
    console.log('yyyyyyyyy', freq);
    setLocalUser(freq);

    const body = {
      status: 'accept',
    };
    // const data = {
    //   ...freq,
    //   status: 'accept',
    // };
    try {
      const result = await FriendService.acceptFriendRequest(body, freq?.id);
      fetchFriendRequest();
      fetchUOKFriends();
    } catch (error) {
      console.log(error);
    }

    // if (result?.data?.message === 'Updated') {
    //   addFriend(data);
    // }
  };

  const rejectRequest = async (freq) => {
    const result = await FriendService.removeFriendRequest(freq?.id);
    fetchFriendRequest();
    // if (result?.data?.message === 'Deleted') {
    //   const body = {
    //     ...freq,
    //     status: 'reject',
    //   };
    //   removeFriendRequest(body);
    // }
  };

  return (
    <div
      className='card mr-0'
      style={{ width: '300px', height: 'auto', marginTop: '70px' }}
    >
      <h3 style={{ textAlign: 'center' }}>Friend Requests</h3>
      {friendRequest?.map((freq) => {
        return freq?.status === 'pending' && freq?.friend_id === user?.id ? (
          <div className='card m-2' style={{ width: '275px' }}>
            <div className='p-3'>
              <div className='flex items-center'>
                <Avatar />
                <span className='mx-2'>{freq?.user?.name}</span>
              </div>

              <div style={{ width: '200px', float: 'right' }}>
                <span className='p-2 pt-3'>
                  {' '}
                  <Button
                    variant='primary'
                    size='sm'
                    className='pt-1 pb-1'
                    onClick={() => requestAccept(freq)}
                  >
                    Accept
                  </Button>
                </span>
                <span className='p-1'>
                  <Button
                    variant='primary'
                    size='sm'
                    className='pt-1 pb-1'
                    onClick={() => rejectRequest(freq)}
                  >
                    Reject
                  </Button>
                </span>
              </div>
            </div>
          </div>
        ) : (
          <h1></h1>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    friendRequest: state.friendReq.friendsRequest,
    user: state?.user?.user,
  };
};

export default connect(mapStateToProps, {
  addFriend,
  getFriendRequest,
  getUOKFriends,
})(FriendRequest);
