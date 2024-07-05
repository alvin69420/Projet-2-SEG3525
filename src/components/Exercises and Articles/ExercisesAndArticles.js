import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SeatedDumbbellPressGuide from '../../pages/Exercise Pages/Specific Exercise Pages/SeatedDumbbellPressGuide';
import DumbbellLateralRaiseGuide from '../../pages/Exercise Pages/Specific Exercise Pages/DumbbellLateralRaiseGuide';
import SeatedBarbellShoulderPressGuide from '../../pages/Exercise Pages/Specific Exercise Pages/SeatedBarbellShoulderPress';
import BeginnerFitnessGuide from '../../pages/Learn Pages/Specific Article Pages/BeginnerFitnessGuide';

const ExercisesAndArticles = ({ PageTitle, arr, ExerciseOrArticle }) => {
    const [activeItem, setActiveItem] = useState('');

    const SpecificExercisesAndArticles = {
        'Seated Dumbbell Press': <SeatedDumbbellPressGuide />,
        'Dumbbell Lateral Raise': <DumbbellLateralRaiseGuide />,
        'Seated Barbell Shoulder Press': <SeatedBarbellShoulderPressGuide />,
        'A Beginner\'s Guide to Starting Your Fitness Journey': <BeginnerFitnessGuide />,
    };

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        !activeItem ? (
            <Container>
                <p className='display-2 text-center mt-5'><b>{PageTitle}</b></p>
                <Row className='mt-5'>
                    {arr.map((item, index) => (
                        <Col key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.Img} alt='Image of exercise or article' />
                                <Card.Body>
                                    <Card.Title className='text-center mt-3'>{item.Name}</Card.Title>
                                    <Card.Text className='mt-3'>
                                        {item.Description}
                                    </Card.Text>
                                    <Button variant="danger" onClick={() => handleItemClick(item.Name)}>
                                        {ExerciseOrArticle === 'Exercise' ? 'View Exercise' : 'View Article'}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        ) : (
            <div className='content'>
                {SpecificExercisesAndArticles[activeItem]}
            </div>
        )
    );
};

export default ExercisesAndArticles;