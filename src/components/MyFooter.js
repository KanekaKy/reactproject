import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Image, Card } from 'react-bootstrap';
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


export const MyFooter = () => (
  <Styles>
  <Card fixed="bottom" className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>

  </Styles >
)
