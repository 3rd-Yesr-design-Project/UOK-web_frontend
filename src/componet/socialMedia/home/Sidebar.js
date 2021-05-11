import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = ({ users, user }) => {
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

  return (
    <div className='sidebar bg-gray-100' style={{ marginTop: '70px' }}>
      <h3 className='text-center'>Friends</h3>
      <div className='friends'>
        {' '}
        {users?.map((frd) => (
          <Link to={`/social/profile/home/${frd.id}`}>
            {user.id !== frd.id && (
              <div
                className='sidebar__list border-b-2  hover:bg-gray-400'
                key={frd?.id}
              >
                <div className='sidebar__list-img'>
                  <img src={frd?.profile?.profile_url} alt='groupimage' />
                </div>
                <div className='sidebar__list-name'>{frd?.name}</div>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(SideBar);
