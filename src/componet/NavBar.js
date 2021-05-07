import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import kelaniyaLogo from '../assets/Kelaniya.png';

const NavigationBar = () => {
  return (
    // <div className='bg-red-800'>
    //   <Navbar bg='red' expand='lg' style={{ zIndex: '120' }}>
    //     <span>
    //       <img src={homeLogo} />
    //     </span>
    //     <span style={{ padding: '5px' }}>
    //       <Link to='/'>Home</Link>
    //     </span>
    //     <span style={{ padding: '5px' }}>
    //       <Link to='/results/Login'>Result</Link>
    //     </span>
    //     <span style={{ padding: '5px' }}>
    //       <Link to='/social/login'>Chat</Link>
    //     </span>
    //   </Navbar>
    // </div>
    <Navbar bg='light' variant='light'>
      <Navbar.Brand href='#home'>
        <div className='flex mr-2'>
          <img src={kelaniyaLogo} width='40px' height='40px' />
          <span>University of kelaniya</span>
        </div>
      </Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link>
          <Link to='/'>Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to='/results/Login'>Result</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to='/social/login'>Chat</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
