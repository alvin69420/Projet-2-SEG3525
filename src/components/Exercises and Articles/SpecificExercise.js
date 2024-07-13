import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SpecificExercise = ({ title, description, instructions, videoUrl }) => {
    return (
        <Container className="text-dark">
            <Row>
                <Col>
                    <h2 className="text-center mt-3 display-3"><b>{title}</b></h2>
                    <h1 className='mt-4'>Overview</h1>
                    <p className="mt-3" id='exerciseOrArticleText'>{description}</p>
                    <h1 className='mt-3'>Instructions</h1>
                    <ol className='mt-3' id='exerciseOrArticleText'>
                        {instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                    <h1 className='mt-3'>Demonstration video</h1>
                    <div className="text-center mt-3">
                        <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
                            <iframe 
                                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                                src={videoUrl} 
                                title={title} 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SpecificExercise;