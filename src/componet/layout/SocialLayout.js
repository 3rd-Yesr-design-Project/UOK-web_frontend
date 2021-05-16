import React from 'react';
import SocialNavbar from '../../views/SocialMedia/socialNavbar/SocialNavbar';

const SocialLayout = ({ children }) => {
  return (
    <div style={{minWidth:1200}}>
      <SocialNavbar />
      {children}
      {/* <p>anjana</p> */}
    </div>
  );
};

export default SocialLayout;
