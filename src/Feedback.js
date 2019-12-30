import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap';

export const Feedback = () => (
  <Form>
  <Form.Group>
  <Form.Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Form.Row>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput3">
    <Form.Label>Phone Numner</Form.Label>
    <Form.Control type="email" placeholder="0123456" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect5">
    <Form.Label>Rate Our page (1-5)</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Comment</Form.Label>
    <Form.Control as="textarea" rows="5" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit Feedback
  </Button>
</Form>
)
