import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return(

    <Navbar bg="info" variant="dark">
      <Navbar.Brand href="#home">The 302</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/articles-list">Articles</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        <Nav.Link href="/contact">Contact Us</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
