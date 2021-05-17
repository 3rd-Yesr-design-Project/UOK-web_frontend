import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import FriendService from '../../../services/FriendService';
import { addFriend, removeFriendRequest } from '../../../Action/friendAction';
const FriendRequest = ({ friendRequest, addFriend }) => {
  const requestAccept = async (freq) => {
    const body = {
      status: 'accept',
    };
    const data = {
      ...freq,
      status: 'accept',
    };

    const result = await FriendService.acceptFriendRequest(body, freq?.id);

    if (result?.data?.message === 'Updated') {
      addFriend(data);
    }
  };

  const rejectRequest = async (freq) => {
    const result = await FriendService.removeFriendRequest(freq?.id);
    if (result?.data?.message === 'Deleted') {
      const body = {
        ...freq,
        status: 'reject',
      };
      removeFriendRequest(body);
    }

    console.log('result', result);
  };

  return (
    <div
      className='card mr-0'
      style={{ width: '300px', height: 'auto', marginTop: '70px' }}
    >
      <h3 style={{ textAlign: 'center' }}>Friend Requests</h3>
      {friendRequest?.map((freq) => {
        return (
          freq?.status === 'pending' && (
            <div className='card m-2' style={{ width: '300px' }}>
              <div className='mb-2 ml-1 '>
                <Avatar />
                <span className='mr-1'>{freq?.user?.name}</span>
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
          )
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    friendRequest: state.friendReq.friendsRequest,
  };
};

export default connect(mapStateToProps, { addFriend })(FriendRequest);
