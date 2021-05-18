import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import kelaniyaLogo from '../assets/Kelaniya.png';

const NavigationBar = () => {
  return (
    <Navbar bg='light' variant='light'>
      <Navbar.Brand href='#home'>
        <div className='flex mr-2'>
          <img src={kelaniyaLogo} width='40px' height='40px' />
          <span>University of kelaniya</span>
        </div>
      </Navbar.Brand>
      <Nav className='mr-auto' activeKey='/home'>
        <Nav.Link>
          <Link to='/'>Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to='/results/Login'>Result</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to='/social/login'>UChat</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
