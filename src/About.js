import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import firstPhoto from '../src/assets/firstPhoto.png';
import secondPhoto from '../src/assets/secondPhoto.jpg';
import thirdPhoto from '../src/assets/thirdPhoto.jpg';
import myrobot from '../src/assets/myrobot.png';
import { Row, Col, Media} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.carousel{
  margin-top: 70px;
}
h5{
  text-align: justify;
  text-justify: inter-word;
}
p{
color: black;
font-weight: bold;
font-size: 30px;
  text-justify: inter-word;
}
.media{
  margin-left: -150px;
}
.carousel-caption:{
  color:black;
}
`;

export const About = () => (
  <Styles>
    <Row>
<Media>
  <img
    width={200}
    height= {200}
    className="mr-3"
    src= {myrobot}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h1>Who We Are? </h1>
    <h5>Stare at ceiling lay on arms while you're using the keyboard so this human feeds me, i should be a god wack the mini furry mouse but all of a sudden cat goes crazy get suspicious of own shadow then go play with toilette paper. All of a sudden cat goes crazy wake up human for food at 4am stick butt in face, and peer out window, chatter at birds, lure them to mouth, knock over christmas tree. Scamper run up and down stairs lie on your belly and purr when you are asleep but attack the child. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats hiding behind the couch until lured out by a feathery toy leave hair everywhere have secret plans so meow meow, i tell my human, so bite the neighbor's bratty kid find empty spot in cupboard and sleep all day. Need to chase tail wake up human for food at 4am. Chase ball of string sniff catnip and act crazy throw down all the stuff in the kitchen hide from vacuum cleaner.</h5>
  </Media.Body>
</Media>
    </Row>

  <Row>
    <Col sm={8}>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={firstPhoto}
      alt="First slide"
    />
    <Carousel.Caption>
      <p>Keep coding everyday to improve the knowledge</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={secondPhoto}
      alt="Second slide"
    />

    <Carousel.Caption>
      <p>Code from anytime and get answers in your native language.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={thirdPhoto}
      alt="Third slide"
    />
    <Carousel.Caption>
      <p>Create your personal coding club and connect with experts in your favourite languages</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> <br /> <br />
<h4> What are you waiting for? Join us today.</h4>
</Col>
</Row>

    </Styles>
)
