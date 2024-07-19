import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';

const FAQ = () => {
return (
    <Container className="mt-5">

        <h2 className="text-center mt-5 display-2"><b>Frequently Asked Questions</b></h2>
        
        <Accordion className='mt-5' alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h5><b>What does Fitness Fusion do?</b></h5>
                </Accordion.Header>
                <Accordion.Body className="AnswerText">
                Fitness Fusion is a fitness website that sells fitness equipment, offers exercise guides, articles to learn about the fitness world, and allows users to create their own personalized training plan.
                </Accordion.Body>  
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    <h5><b>Do I need to create an account?</b></h5>
                </Accordion.Header>
                <Accordion.Body className="AnswerText">
                    No, you do not need to create an account.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>
                    <h5><b>Are the exercise guides and articles suitable for beginners?</b></h5>
                </Accordion.Header>
                <Accordion.Body className="AnswerText">
                    Yes, the exercise guides and articles are suitable for beginners.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>
                    <h5><b>Where can I find the exercise guides and articles?</b></h5>
                </Accordion.Header>
                <Accordion.Body className="AnswerText">
                    You can find the exercise guides and articles in the navbar menu, in the respective menu sections. 
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>
                    <h5><b>What is the return policy for the equipment?</b></h5>
                </Accordion.Header>
                <Accordion.Body className="AnswerText">
                    There is a 30 day return policy. If you are not satisfied with the equipment, you can return it within 30 days of purchase.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                <Accordion.Header>
                    <h5><b>Is there a cost for creating a personalized training plan?</b></h5>
                </Accordion.Header>
                <Accordion.Body className="AnswerText">
                    No, creating a personalized training plan is free of cost.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </Container>
);
};

export default FAQ;
