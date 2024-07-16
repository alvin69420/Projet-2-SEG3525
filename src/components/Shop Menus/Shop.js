import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const Shop = ({ defaultActiveItem, allProducts, categories }) => {
    const [activeItem, setActiveItem] = useState(defaultActiveItem);
    const [products, setProducts] = useState(allProducts[defaultActiveItem] || []);

    const handleItemClick = (item) => {
        setActiveItem(item);
        setProducts(allProducts[item] || []);
    };

    useEffect(() => {
        setProducts(allProducts[defaultActiveItem] || []);
    }, [defaultActiveItem, allProducts]);

    return (
        <Container>
           <p className='display-2 text-center mt-5'><b>Shop for fitness products</b></p> 
           <Row className='mt-5'>
              <Col>
                <ListGroup>
                    {categories.map((category, index) => (
                        <ListGroup.Item
                            variant='light'
                            key={index}
                            action
                            href="#"
                            active={activeItem === category}
                            onClick={() => handleItemClick(category)}
                        >
                            {category}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
              </Col>
              
              {products.map((product, index) => (
                  <Col key={index}>
                    <Card style={{ width: 'auto' }}>
                        <Card.Img style={{maxWidth:'100%', height: '250px'}} className='mt-3' variant="top" src={product.image} alt='Product Image'/>
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                Price: {product.price} $
                            </Card.Text>
                            <Button variant="danger"><b>Add to cart</b></Button>
                        </Card.Body>
                    </Card>
                  </Col>
              ))}
            </Row>
        </Container>
    );
}

export default Shop;