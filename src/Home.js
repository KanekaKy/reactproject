import React from 'react'
import { Card, CardGroup} from 'react-bootstrap';
import styled from 'styled-components';
import coding from '../src/assets/coding.png';
import htmlimage from '../src/assets/htmlimage.jpg';
import robot from '../src/assets/robot.jpg';


const Styles = styled.div`

  .card-body {
 background-color:Aqua;
  }
  .card-footer {
    background-color:light grey;
     }
`;
export const Home = () => (
  <div>
    <Styles>
<CardGroup>
  <Card>
    <Card.Img variant="top" width={180}
    height={300} src= {coding} />
    <Card.Body>
      <Card.Title> Learn Coding</Card.Title>
      <Card.Text>
        learn coding everyday and everywhere anytime at your own convenience!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Motivation to code</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" width={180}
    height={300} src= {robot} />
    <Card.Body>
      <Card.Title>Receive Advice from Expert</Card.Title>
      <Card.Text>
        Ask questions and get answer quickly. Recieve daily posts about code and advice from experts.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Get Answers from Experts</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" width={180}
    height={300} src={htmlimage} />
    <Card.Body>
      <Card.Title>Options to choose </Card.Title>
      <Card.Text>
       You can subscribe to your favourite programming languages and skills you want to learn. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Options to choose</small>
    </Card.Footer>
  </Card>
</CardGroup>
</Styles>
  </div>
  
)
