import React from 'react';
import {Button, Form, Col} from 'react-bootstrap';

const ContactPage = () => {
  return(
    <>
    <div id="contact-banner">Contact Us</div>
    <h2 class="centered">For any feedback or questions, please send us an e-mail with the form below!</h2>
    <div id="contact-form">
      <Form class="text-centered">

        <Form.Row>
          <Form.Group controlId="formFirstName" inline>
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" placeholder="First Name" />

          </Form.Group>

          <Form.Group controlId="formFirstName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" placeholder="Last Name"/>
          </Form.Group>

        </Form.Row>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group controlId="formInquery">
            <Form.Label>Inqury:</Form.Label>
            <Form.Control type="textarea" rows={10}/>
          </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>

      </Form>
    </div>
    </>
  );
}

export default ContactPage;
