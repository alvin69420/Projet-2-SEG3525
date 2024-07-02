import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const ContactUs = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="text-dark">
      <h2 className="text-center mt-3 display-2"><b>Contact Us</b></h2>
      <p className="text-center display-6 mt-3">Reach out to us using the form below! We'll be in touch within the next 2 business days.</p>
      <Form noValidate validated={validated} onSubmit={handleSubmit} action="/action_page.php" className="was-validated">
        <Form.Group controlId="name" className="mb-3 mt-3">
          <Form.Label><b>Enter Name Here:</b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            required
            className="w-25"
          />
          <Form.Control.Feedback type="invalid" className="text-dark">
            Please enter your name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="email" className="mt-3">
          <Form.Label><b>Enter Email Here:</b></Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            required
            className="w-25"
          />
          <Form.Control.Feedback type="invalid" className="text-dark">
            Please enter a valid email address
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="message" className="mt-3">
          <Form.Label><b>Enter Message Here:</b></Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="text"
            placeholder="Message"
            required
          />
          <Form.Control.Feedback type="invalid" className="text-dark">
            Please enter your message here
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="danger" className="mt-3">
          <h4>Submit Message</h4>
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;