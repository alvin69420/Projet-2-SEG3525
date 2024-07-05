import { Card } from 'react-bootstrap';

const ForumPost = ({ title, author, date, content }) => {
    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">By {author} on {date}</Card.Subtitle>
                <Card.Text>{content}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ForumPost;
