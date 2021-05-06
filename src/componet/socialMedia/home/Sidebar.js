import React, { useState } from 'react';
import { connect } from 'react-redux';

const SideBar = ({ users }) => {
  const [state] = useState([
    { id: 1, image: '/images/ellon.jpg', name: 'Flutter Development' },
    { id: 2, image: '/images/ellon.jpg', name: 'PHP Development' },
    { id: 3, image: '/images/ellon.jpg', name: 'React Native Development' },
    { id: 4, image: '/images/ellon.jpg', name: 'Node JS Development' },
    { id: 5, image: '/images/ellon.jpg', name: 'Vue JS Development' },
    { id: 6, image: '/images/ellon.jpg', name: 'React Development' },
    { id: 7, image: '/images/ellon.jpg', name: 'Flutter Development' },
    { id: 8, image: '/images/ellon.jpg', name: 'PHP Development' },
    { id: 9, image: '/images/ellon.jpg', name: 'React Native Development' },
    { id: 10, image: '/images/ellon.jpg', name: 'Node JS Development' },
    { id: 11, image: '/images/ellon.jpg', name: 'Vue JS Development' },
    { id: 12, image: '/images/ellon.jpg', name: 'Anjana' },
    { id: 12, image: '/images/ellon.jpg', name: 'Naan' },
    { id: 12, image: '/images/ellon.jpg', name: 'eeeeeeeeee' },
  ]);

  const selectFrined = () => {
    console.log('heeeeeeeeeeeee');
  };
  return (
    <div className='sidebar' style={{ marginTop: '70px' }}>
      <h3>Friends</h3>
      <div className='friends'>
        {' '}
        {state.map((info) => (
          <div
            className='sidebar__list'
            key={info.id}
            onClick={() => {
              selectFrined(info.id);
            }}
          >
            <div className='sidebar__list-img'>
              <img src={info.image} alt='groupimage' />
            </div>
            <div className='sidebar__list-name'>{info.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
  };
};

export default connect(mapStateToProps)(SideBar);
