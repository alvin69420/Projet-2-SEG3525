import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SpecificArticle = ({ title, content, imageUrl, author, date }) => {
    return (
        <Container className="text-dark">
            <Row>
                <Col>
                    <h2 className="text-center mt-3 display-3"><b>{title}</b></h2>
                    <Row className="mt-4">
                        <Col xs={12} md={6}>
                            <p className="" id='articleText'>Written by {author}</p>
                            <p className="" id='articleText'>{date}</p>
                        </Col>
                    </Row>
                    <div className="mt-3">
                        <img src={imageUrl} alt={title} className="img-fluid" style={{width: '100%'}}/>
                    </div>
                    <div className="mt-5">
                        <p id='exerciseOrArticleText'>{content}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SpecificArticle;