import React from 'react';
import NavigationBar from '../NavBar';

const HomeLayout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <div className='mt-20 mx-3'>{children}</div>
    </div>
  );
};

export default HomeLayout;
