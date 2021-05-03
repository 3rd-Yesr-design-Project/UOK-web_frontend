import React, { useState } from 'react';

// import SideBar from '../views/userprofile/Sidebar';
// import ChatBar from '../views/userprofile/ChatBar';
// import Posts from '../views/userprofile/Posts';
// import ChatBox from '../views/userprofile/ChatBox';
import SideBar from '../../../componet/socialMedia/home/Sidebar';
import ChatBar from '../../../componet/socialMedia/home/ChatBar';
import Posts from '../../../componet/socialMedia/home/Posts';
import ChatBox from '../../../componet/socialMedia/home/ChatBox';
import SocialLayout from '../../../componet/layout/SocialLayout';

const SocialHome = () => {
  const [state, setState] = useState(false);
  const [current, setCurrent] = useState({});

  const openChat = (user) => {
    setState(true);
    setCurrent(user);
  };
  const closeChat = () => {
    setState(false);
  };

  return (
    <div>
      <SocialLayout>
        <div className='facebook'>
          <SideBar />
          <Posts />
          <ChatBar openChat={openChat} />
          <ChatBox state={state} current={current} closeChat={closeChat} />
        </div>
      </SocialLayout>
    </div>
  );
};

export default SocialHome;
