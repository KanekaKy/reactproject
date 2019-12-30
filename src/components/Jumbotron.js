import React from 'react';
import { Jumbotron as Jumbo, Container, Form, Button, Modal, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import cover from '../assets/cover.jpeg';

const Styles = styled.div`
  .jumbo {
    background: url(${cover}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 250px;
    position: relative;
    z-index: -2;
    font-family: Arial black;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <Container>
      <div className="overlay"></div>
        <Row className="justify-content-md-center">
          <Col sm md={{ span: 7 }}>
        <h1>Welcome to DevMeet!</h1>
        <h4>Quickly Connect with Developers & Ask Questions</h4>
        </Col>
        <Col sm md={{ offset: 2}}>
        <Button variant="primary">Sign Up</Button>
        <Button variant="info">Log in</Button>
        </Col>
        </Row>
        </Container>
    </Jumbo>
  </Styles>
)

