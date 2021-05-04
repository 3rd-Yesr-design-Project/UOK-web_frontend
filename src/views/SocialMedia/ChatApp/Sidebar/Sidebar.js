import React from 'react';
import { Menu } from 'semantic-ui-react';
import Channel from './Channels/Channel';
import "./sidebar.css";

export const SideBar = () => {
    return (
        <Menu vertical fixed="left" borderless size="large" className="side_bar">
           <Channel/> 
        </Menu>
    )
}