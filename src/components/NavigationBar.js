import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
*{
  font-family: 'lato';
  list-style: none;
  text-decoration: none;
}
  .navbar {
    background-image: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);
  }
  .nav-item {
    border: 4px solid black; 
    border-collapse: separate;
    border-spacing: 15px;
    background-color: #ff6f61;
    border-radius: 10px;
    
  }

  .navbar-brand {
    font-family: impact, fantasy;
    color: black;
 font-size: 50px; 

  }


  a, .navbar-nav .nav-link {
    color: black;
    font-weight: bold;
    &:hover {
      color: purple;
    }
  }
`;


export const NavigationBar = () => (
  <Styles>
    <Navbar  bg="dark" variant="dark">
      <Navbar.Brand href="#home">DevMeet</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Item >
          <Nav.Link >
            <Link to="/">Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Cool Stuff" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link>
            <Link to="/about">Contact</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="info">Search</Button>
      </Form>
    </Navbar>
  </Styles >
)
