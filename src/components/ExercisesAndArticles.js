import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ExercisesAndArticles = ({PageTitle, Name1, Name2, Name3, Description1, Description2, Description3, ExerciseOrArticle}) => {

  return (
        <Container>
           <p className='display-2 text-center mt-5'><b>{PageTitle}</b></p> 
           <Row className='mt-5'>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" alt='Image of exercise or article'/>
                    <Card.Body>
                        <Card.Title className='text-center mt-3'>{Name1}</Card.Title>
                        <Card.Text className='mt-3'>
                            {Description1}
                        </Card.Text>
                        <Button variant="danger">{ExerciseOrArticle === 'Exercise' ? 'View Exercise' : 'View Article'}</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" alt='Image of exercise or article'/>
                    <Card.Body>
                        <Card.Title className='text-center mt-3'>{Name2}</Card.Title>
                        <Card.Text className='mt-3'>
                            {Description2}
                        </Card.Text>
                        <Button variant="danger">{ExerciseOrArticle === 'Exercise' ? 'View Exercise' : 'View Article'}</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" alt='Image of exercise or article'/>
                    <Card.Body>
                        <Card.Title className='text-center mt-3'>{Name3}</Card.Title>
                        <Card.Text className='mt-3'>
                            {Description3}
                        </Card.Text>
                        <Button variant="danger">{ExerciseOrArticle === 'Exercise' ? 'View Exercise' : 'View Article'}</Button>
                    </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
  );
}

export default ExercisesAndArticles;