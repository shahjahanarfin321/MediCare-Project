import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";

const HealthConcerns = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchConcerns();
    }, []);

    const fetchConcerns = () => {
        axios.get('http://localhost:9090/healthconcern/get-all-concerns')
            .then(response => {
                setCards(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleCardClick = (title) => {
        setQuestion(`Can you help me with ${title.toLowerCase()}?`);
        setShowForm(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAnswer(`Your question "${question}" is being processed. Please wait for the answer.`);
        setQuestion("");
        setShowForm(false);
    };


    return (
        <div className="container my-5" style={{ padding: "20px" }}>
            <h2 className="text-left mb-4">Health Concerns</h2>
            <div
                className="d-flex justify-content-between flex-wrap"
                style={{ display: "flex", flexWrap: "wrap" }}
            >
                {cards.map((card) => (
                    <Card
                        className="mb-3"
                        key={card.title}
                        style={{ width: "25%", marginBottom: "20px" , marginLeft: "1px"}}
                        onClick={() => handleCardClick(card.title)}
                    >
                        <Card.Img variant="top" src={card.imageLink} style={{ height: '150px', objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>
                                Get answers to your questions related to {card.title.toLowerCase()}.
                            </Card.Text>
                            <Button variant="primary">Ask a question</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            {showForm && (
                <Form onSubmit={handleSubmit} className="mt-3">
                    <Form.Group controlId="formQuestion">
                        <Form.Label>Ask your question here: </Form.Label>
                        <Form.Control id="yourQuestion" type="text" placeholder="Enter your question" onChange={(e) => setQuestion(e.target.value)} />
                    </Form.Group>
                    <Button className="mt-1" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            )}
            {answer && <p className="mt-3" style={{color: "blue"}}>{answer}</p>}
        </div>
    );
};

export default HealthConcerns;