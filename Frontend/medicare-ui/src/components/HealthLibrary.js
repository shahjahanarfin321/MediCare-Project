import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Col, Card, Row } from 'react-bootstrap';
import '../css/style.css';
import staticImage from '../images/medicine.jpg';

function HealthLibrary() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axios
      .get(`http://localhost:9090/blog/get-all-blogs`)
      .then((response) => {
        setBlogData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderCards = (blogData) => {
    return blogData.map((blog) => {
      return (
        <Col md={4} className="mb-4" key={blog.id}>
          <Card className="h-100">
            <Card.Img variant="top" src={blog.imageLink} alt="car" className="img-fluid" />
            <Card.Body>
              <Card.Title>{blog.title}</Card.Title>
              <Card.Text>{blog.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };

  const renderCardRows = () => {
    const cardRows = [];
    const numCardsPerRow = 3;
    for (let i = 0; i < blogData.length; i += numCardsPerRow) {
      const cardRow = (
        <Row md={4} className="mt-4" key={i}>
          {renderCards(blogData.slice(i, i + numCardsPerRow))}
        </Row>
      );
      cardRows.push(cardRow);
    }
    return cardRows;
  };

  return (
    <Container className="my-4">
      <h1 className="text-left">Health Library</h1>

      <Container fluid className="mt-4">
        {renderCardRows()}
      </Container>
    </Container>
  );
}

export default HealthLibrary;
