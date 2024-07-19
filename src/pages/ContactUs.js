import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

const ContactUs = () => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      setValidated(true);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <Container className="text-dark">

      <h2 className="text-center mt-5 display-2"><b>Contact Us</b></h2>
      <p className="text-center display-6 mt-3">Reach out to us using the form below! We'll be in touch within the next 2 business days.</p>
      {showAlert && (
        <Alert variant="success" className="mt-2">
          Your message has been sent! We'll be in touch soon.
        </Alert>
      )}
      <Form validated={validated} onSubmit={handleSubmit} className="mt-3">
        <h3 className="mt-5">Contact Form</h3>
        <Form.Group controlId="formName" className="mt-3 w-25">
          <Form.Label><b>Name</b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid" className="text-dark">
            Please enter your name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formEmail" className="mt-3 w-25">
          <Form.Label><b>Email</b></Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid" className="text-dark">
            Please enter a valid email address
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formMessage" className="mt-3">
          <Form.Label><b>Message</b></Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid" className="text-dark">
            Please enter your message
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="danger" className="mt-3">
          <h4>Submit</h4>
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
