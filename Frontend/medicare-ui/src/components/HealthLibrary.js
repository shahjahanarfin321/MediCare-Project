import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Col, Card } from 'react-bootstrap';
import '../css/style.css';
import staticImage from '../images/medicine.jpg';

function HealthLibrary() {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetchBlogs();
      }, []);
    
      const fetchBlogs = () => {
        axios.get(`http://localhost:9090/blog/get-all-blogs`)
          .then(response => {
            setBlogData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }

    const renderCards = (blogData) => {
        return blogData.map((blog) => {
            return (
                <Col md={4} className="mb-4" key={blog.id}>
                    <Card>
                        {/* <Card.Img variant="top" src={staticImage} /> */}
                        <img src={blog.imageLink} alt="car" />
                        <Card.Body>
                            <Card.Title>{blog.title}</Card.Title>
                            <Card.Text>
                                {blog.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            );
        });
    };

    return (
        <Container className="my-4">
            <h1 className="text-left">Health Library</h1>
            
            <Container className="mt-4">
                {renderCards(blogData)}
            </Container>
        </Container>
    );
}

export default HealthLibrary;