import React from 'react';
import SocialNavbar from '../../views/SocialMedia/socialNavbar/SocialNavbar';

const SocialLayout = ({ children }) => {
  return (
    <div>
      <SocialNavbar />
      {children}
      {/* <p>anjana</p> */}
    </div>
  );
};

export default SocialLayout;
