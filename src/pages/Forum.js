// pages/ForumPage.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import ForumPost from '../components/ForumPost';

const ForumPage = () => {
    const [posts, setPosts] = useState([
        {
            title: "My First Week of Training",
            author: "John Doe",
            date: "7/1/2024",
            content: "I started my fitness journey this week and it's been amazing. I've been consistent with my workouts and I'm already feeling stronger."
        },
        {
            title: "Hitting a New Personal Record",
            author: "Jane Smith",
            date: "7/2/2024",
            content: "Today I hit a new personal record on my bench press! It felt incredible to see my progress paying off."
        },
        {
            title: "Staying Motivated During Tough Times",
            author: "Michael Johnson",
            date: "7/3/2024",
            content: "There were days when I didn't feel like working out, but I pushed through and I'm proud of my commitment."
        }
    ]);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && author && content) {
            const newPost = {
                title,
                author,
                date: new Date().toLocaleDateString(),
                content
            };
            setPosts([...posts, newPost]);
            setShowAlert(true);
            setTitle('');
            setAuthor('');
            setContent('');
            setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
        }
    };

    return (
        <Container>
            <h1 className="display-4 text-center mt-5"><b>Forum</b></h1>
            <p className="text-center display-6">Share your fitness journey, progress, and tips with the community!</p>
            <div className="mt-5">
                {showAlert && (
                    <Alert variant="success" className="mt-3">
                        Your post has been sent!
                    </Alert>
                )}
                {posts.map((post, index) => (
                    <ForumPost
                        key={index}
                        title={post.title}
                        author={post.author}
                        date={post.date}
                        content={post.content}
                    />
                ))}
            </div>
            <Form onSubmit={handleSubmit}>
                    <h3 className="mt-5">Create a New Post</h3>
                    <Form.Group controlId="formTitle" className='mt-3'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter post title" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required 
                        />
                    </Form.Group>
                    <Form.Group controlId="formAuthor" className="mt-3">
                        <Form.Label>Author</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter your name" 
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required 
                        />
                    </Form.Group>
                    <Form.Group controlId="formContent" className="mt-3">
                        <Form.Label>Content</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            placeholder="Enter your post content" 
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required 
                        />
                    </Form.Group>
                    <Button variant="danger" type="submit" className="mt-3">
                        <h5>Post</h5>
                    </Button>
                </Form>
        </Container>
    );
};

export default ForumPage;
