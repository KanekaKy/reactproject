import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Image, Card, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
*{
  font-family: 'lato';
  list-style: none;
  text-decoration: none;
}
.card-header{
  font-family: impact, fantasy;
  color: black;
font-size: 30px; 
}
.card-footer{
  font-family: impact, fantasy;
  background-color: white ;
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
  .card{
    margin-top: 100px;
  }
  h4{
    font-weight: bolder;
  }
  .navbar-brand {
    font-family: impact, fantasy;
    color: black;
 font-size: 50px; 

  }

`;


export const MyFooter = () => (
  <Styles>
    <Card sticky="bottom" className="text-center">
      <Card.Header>Want to know more about us?</Card.Header>
      <Card.Body>
        <Row> 
          <Col>
          <h4> Contact:</h4>
          <p> Email: DevMeet@gmail.com</p>
          <p> Tel: +90-3231231231</p>
          <br />
          <p> Address: 111 W. Charleston </p> 
          <p> Box 564, Disneyland USA </p>
          </Col>
        <Col>
        <h4> Follow Us:</h4>
        <Card.Text>
        𝕗𝕒𝕔𝕖𝕓𝕠𝕠𝕜
        </Card.Text>
        <Card.Text>
        𝕥𝕨𝕚𝕥𝕥𝕖𝕣
        </Card.Text>
        <Card.Text>
        𝕝𝕚𝕟𝕜𝕖𝕕𝕚𝕟
        </Card.Text>
        </Col>
        <Col>
        <Card.Text>
       Privacy Policy 
        </Card.Text>
        <Card.Text>
      Terms & Condition
  
        </Card.Text>
        <Card.Text>
        <Link to="/about">About</Link>
        </Card.Text>
        </Col>
        </Row>
      </Card.Body>
    </Card>
  </Styles >
)
