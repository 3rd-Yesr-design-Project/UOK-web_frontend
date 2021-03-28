import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavigationBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <span style={{ padding: '5px' }}>
        <Link to='/'>Home</Link>
      </span>
      <span style={{ padding: '5px' }}>
        <Link to='/results/Login'>Result</Link>
      </span>
      <span style={{ padding: '5px' }}>
        <Link to='/social/login'>Chat</Link>
      </span>
    </Navbar>
  );
};

export default NavigationBar;
