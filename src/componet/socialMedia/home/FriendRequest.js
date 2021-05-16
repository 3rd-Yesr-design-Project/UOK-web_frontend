import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
const FriendRequest = ({ friendRequest }) => {
  console.log('pending', friendRequest);
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
                <span className='mr-1'>{freq?.user?.name}</span>
                <div style={{ width: '200px', float: 'right' }}>
                  <span className='p-2 pt-3'>
                    {' '}
                    <Button variant='primary' size='sm' className='pt-1 pb-1'>
                      Accept
                    </Button>
                  </span>
                  <span className='p-1'>
                    <Button variant='primary' size='sm' className='pt-1 pb-1'>
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

export default connect(mapStateToProps)(FriendRequest);
