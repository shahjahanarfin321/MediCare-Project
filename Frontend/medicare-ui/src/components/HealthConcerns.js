import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";

const HealthConcerns = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const cardData = [
            {
                title: "Lungs Care",
                endpoint: "https://example.com/lungs-care",
            },
            {
                title: "Weight Care",
                endpoint: "https://example.com/weight-care",
            },
            {
                title: "Women's Care",
                endpoint: "https://example.com/womens-care",
            },
            {
                title: "Bone and Joint Pain",
                endpoint: "https://example.com/bone-and-joint-pain",
            },
            {
                title: "Cold and Fever",
                endpoint: "https://example.com/cold-and-fever",
            },
        ];

        setCards(cardData);
    }, []);

    const handleCardClick = (title, endpoint) => {
        setQuestion(`Can you help me with ${title.toLowerCase()}?`);
        setShowForm(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://example.com/api/ask", {
                method: "POST",
                body: JSON.stringify({ question }),
            });

            const data = await response.json();

            setAnswer(data.answer);
            setQuestion("");
            setShowForm(false);
        } catch (error) {
            console.error(error);
        }
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
                        key={card.title}
                        style={{ width: "25%", marginBottom: "20px" }}
                        onClick={() => handleCardClick(card.title, card.endpoint)}
                    >
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
                <div className="my-5">
                    <h3>{question}</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicQuestion">
                            <Form.Label>Question</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder={"Ask your Question here"} onChange={(e) => setQuestion(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            )}
            {answer && (
                <div className="my-5">
                    <h3>Your answer:</h3>
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export default HealthConcerns;



// import React, { useState } from "react";
// import { Card, Button, Form } from "react-bootstrap";

// const HealthConcerns = () => {
//     const [question, setQuestion] = useState("");
//     const [answer, setAnswer] = useState("");
//     const [showForm, setShowForm] = useState(false);

//     const handleCardClick = (title) => {
//         setQuestion(`Can you help me with ${title.toLowerCase()}?`);
//         setShowForm(true);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Here you can send the question to a backend API for processing
//         // and set the answer received from the API in the "answer" state
//         setAnswer(
//             `Your question "${question}" is being processed. Please wait for the answer.`
//         );
//         setQuestion("");
//         setShowForm(false);
//     };

//     return (
//         <div className="container my-5">
//             <h2 className="text-center mb-4">Health Concerns</h2>
//             <div
//                 className="d-flex justify-content-between flex-wrap"
//                 style={{ display: "flex", flexWrap: "wrap" }}
//             >
//                 <Card
//                     style={{ width: "25%", marginBottom: "20px" }}
//                     onClick={() => handleCardClick("Lungs Care")}
//                 >
//                     <Card.Body>
//                         <Card.Title>Lungs Care</Card.Title>
//                         <Card.Text>
//                             Get answers to your questions related to lung health and care.
//                         </Card.Text>
//                         <Button variant="primary">Ask a question</Button>
//                     </Card.Body>
//                 </Card>
//                 <Card
//                     style={{ width: "25%", marginBottom: "20px" }}
//                     onClick={() => handleCardClick("Weight Care")}
//                 >
//                     <Card.Body>
//                         <Card.Title>Weight Care</Card.Title>
//                         <Card.Text>
//                             Get answers to your questions related to weight management and care.
//                         </Card.Text>
//                         <Button variant="primary">Ask a question</Button>
//                     </Card.Body>
//                 </Card>
//                 <Card
//                     style={{ width: "25%", marginBottom: "20px" }}
//                     onClick={() => handleCardClick("Women's Care")}
//                 >
//                     <Card.Body>
//                         <Card.Title>Women's Care</Card.Title>
//                         <Card.Text>
//                             Get answers to your questions related to women's health and care.
//                         </Card.Text>
//                         <Button variant="primary">Ask a question</Button>
//                     </Card.Body>
//                 </Card>
//                 <Card
//                     style={{ width: "25%", marginBottom: "20px" }}
//                     onClick={() => handleCardClick("Bone and Joint Pain")}
//                 >
//                     <Card.Body>
//                         <Card.Title>Bone and Joint Pain</Card.Title>
//                         <Card.Text>
//                             Get answers to your questions related to bone and joint pain management
//                             and care.
//                         </Card.Text>
//                         <Button variant="primary">Ask a question</Button>
//                     </Card.Body>
//                 </Card>
//                 <Card
//                     style={{ width: "25%", marginBottom: "20px" }}
//                     onClick={() => handleCardClick("Cold and Fever")}
//                 >
//                     <Card.Body>
//                         <Card.Title>Cold and Fever</Card.Title>
//                         <Card.Text>
//                             Get answers to your questions related to cold and fever management and
//                             care.
//                         </Card.Text>
//                         <Button variant="primary">Ask a question</Button>
//                     </Card.Body>
//                 </Card>
//             </div>
//             {showForm && (
//                 <div className="my-5">
//                     <h3>{question}</h3>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group controlId="formBasicEmail">
//                             <Form.Label>Email address</Form.Label>
//                             <Form.Control type="email" placeholder="Enter email" />
//                             <Form.Text className="text-muted">
//                                 We'll never share your email with anyone else.
//                             </Form.Text>
//                         </Form.Group>

//                         <Form.Group controlId="formBasicQuestion">
//                             <Form.Label>Question</Form.Label>
//                             <Form.Control as="textarea" rows={3} />
//                         </Form.Group>

//                         <Button variant="primary" type="submit">
//                             Submit
//                         </Button>
//                     </Form>
//                 </div>
//             )}

//             {answer && (
//                 <div className="my-5">
//                     <h3>Answer:</h3>
//                     <p>{answer}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default HealthConcerns;



// import React, { useState } from "react";
// import { Card, Button, Form } from "react-bootstrap";

// const HealthConcerns = () => {
//     const [question, setQuestion] = useState("");
//     const [answer, setAnswer] = useState("");
//     const [showForm, setShowForm] = useState(false);

//     const handleCardClick = (title) => {
//         setQuestion(`Can you help me with ${title.toLowerCase()}?`);
//         setShowForm(true);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Here you can send the question to a backend API for processing
//         // and set the answer received from the API in the "answer" state
//         setAnswer(
//             `Your question "${question}" is being processed. Please wait for the answer.`
//         );
//         setQuestion("");
//         setShowForm(false);
//     };

//     return (
//         <div className="container my-5">
//             <h2 className="text-center mb-4">Health Concerns</h2>
//             <div className="d-flex justify-content-between flex-wrap">
//                 <Card
//                     style={{ width: "18rem" }}
//                     className="m-2"
//                     onClick={() => handleCardClick("Lungs Care")}
//                 >
//                     <Card.Body>
//                         <Card.Title>Lungs Care</Card.Title>
//                         <Card.Text>
//                             Get answers to your questions related to lung health and care.
//                         </Card.Text>
//                         <Button variant="primary">Ask a question</Button>
//                     </Card.Body>
//                 </Card>
//                 <Card
//                     style={{ width: "18rem" }}
//                     className="m-2"
//                     onClick={() => handleCardClick("Weight Care")}
//                 >
//                     <Card.Body>
//                         <Card.Title>Weight Care</Card.Title>
//                         <Card.Text>
//                             Get answers to your questions related to weight management and
//                             care.
//                         </Card.Text>
//                         <Button variant="primary">Ask a question</Button>
//                     </Card.Body>
//                 </Card>
//                 <Card
//                     style={{ width: "18rem" }}
//                     className="m-2"
//                     onClick={() => handleCardClick("Women's Care")}
//                 >
//                     <Card.Body>
//                         <Card.Title>Women's Care</Card.Title>
//                         <Card.Text>
//                             Get answers to your questions related to women's health and care.
//                         </Card.Text>
//                         <Button variant="primary">Ask a question</Button>
//                     </Card.Body>
//                 </Card>
//                 <Card
//                     style={{ width: "18rem" }}
//                     className="m-2"
//                     onClick={() => handleCardClick("Bone and Joint Pain")}
//                 >
//                     <Card.Body>
//                         <Card.Title>Bone and Joint Pain</Card.Title>
//                         <Card.Text>
//                             Get answers to your questions related to bone and joint pain
//                             management and care.
//                         </Card.Text>
//                         <Button variant="primary">Ask a question</Button>
//                     </Card.Body>
//                 </Card>
//                 <Card
//                     style={{ width: "18rem" }}
//                     className="m-2"
//                     onClick={() => handleCardClick("Cold and Fever")}
//                 >
//                     <Card.Body>
//                         <Card.Title>Cold and Fever</Card.Title>
//                         <Card.Text>
//                             Get answers to your questions related to cold and fever management
//                             and care.
//                         </Card.Text>
//                         <Button variant="primary">Ask a question</Button>
//                     </Card.Body>
//                 </Card>
//             </div>
//             {showForm && (
//                 <Form onSubmit={handleSubmit} className="mt-3">
//                     <Form.Group controlId="formQuestion">
//                         <Form.Control type="text"
//                             placeholder="Enter your question"
//                             value={question}
//                             onChange={(e) => setQuestion(e.target.value)}
//                         />
//                     </Form.Group>
//                     <Button variant="primary" type="submit">
//                         Submit
//                     </Button>
//                 </Form>
//             )}

//             {answer && (
//                 <div className="mt-3">
//                     <h5>Your question:</h5>
//                     <p>{question}</p>
//                     <h5>Answer:</h5>
//                     <p>{answer}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default HealthConcerns;



// import React, { useState } from "react";
// import { Card, Button, Form } from "react-bootstrap";

// const HealthConcerns = () => {
//     const [question, setQuestion] = useState("");
//     const [answer, setAnswer] = useState("");
//     const [showForm, setShowForm] = useState(false);

//     const handleCardClick = (title) => {
//         setQuestion(`Can you help me with ${title.toLowerCase()}?`);
//         setShowForm(true);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Here you can send the question to a backend API for processing
//         // and set the answer received from the API in the "answer" state
//         setAnswer(`Your question "${question}" is being processed. Please wait for the answer.`);
//         setQuestion("");
//         setShowForm(false);
//     };

//     return (
//         <div>
//             <h2>Health Concerns</h2>
//             <div className="d-flex justify-content-between flex-wrap">
//                 <Card style={{ width: '18rem' }} className="m-2" onClick={() => handleCardClick("Lungs Care")}>
//                     <Card.Body>
//                         <Card.Title>Lungs Care</Card.Title>
//                         <Card.Text>
//                             Get answers to your questions related to lung health and care.
//                         </Card.Text>
//                         <Button variant="primary">Ask a question</Button>
//                     </Card.Body>
//                 </Card>
//                 <Card style={{ width: '18rem' }} className="m-2" onClick={() => handleCardClick("Weight Care")}>
//                     <Card.Body>
//                         <Card.Title>Weight Care</Card.Title>
//                         <Card.Text>
//                             Get answers to your questions related to weight management and care.
//                         </Card.Text>
//                         <Button variant="primary">Ask a question</Button>
//                     </Card.Body>
//                 </Card>
//                 <Card style={{ width: '18rem' }} className="m-2" onClick={() => handleCardClick("Women's Care")}>
//                     <Card.Body>
//                         <Card.Title>Women's Care</Card.Title>
//                         <Card.Text>
//                             Get answers to your questions related to women's health and care.
//                         </Card.Text>
//                         <Button variant="primary">Ask a question</Button>
//                     </Card.Body>
//                 </Card>
//                 <Card style={{ width: '18rem' }} className="m-2" onClick={() => handleCardClick("Bone and Joint Pain")}>
//                     <Card.Body>
//                         <Card.Title>Bone and Joint Pain</Card.Title>
//                         <Card.Text>
//                             Get answers to your questions related to bone and joint pain management and care.
//                         </Card.Text>
//                         <Button variant="primary">Ask a question</Button>
//                     </Card.Body>
//                 </Card>
//                 <Card style={{ width: '18rem' }} className="m-2" onClick={() => handleCardClick("Cold and Fever")}>
//                     <Card.Body>
//                         <Card.Title>Cold and Fever</Card.Title>
//                         <Card.Text>
//                             Get answers to your questions related to cold and fever management and care.
//                         </Card.Text>
//                         <Button variant="primary">Ask a question</Button>
//                     </Card.Body>
//                 </Card>
//             </div>
//             {showForm && (
//                 <Form onSubmit={handleSubmit} className="mt-3">
//                     <Form.Group controlId="formQuestion">
//                         <Form.Label>Ask a question:</Form.Label>
//                         <Form.Control type="text" placeholder="Enter your question" value={question} onChange={(e) => setQuestion(e.target.value)} />
//                     </Form.Group>
//                     <Button variant="primary" type="submit">
//                         Submit
//                     </Button>
//                 </Form>
//             )}
//             {answer && <p className="mt-3">{answer}</p>}
//         </div>
//     );
// };

// export default HealthConcerns;



// import React, { useState } from "react";

// const HealthConcerns = () => {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can send the question to a backend API for processing
//     // and set the answer received from the API in the "answer" state
//     setAnswer(`Your question "${question}" is being processed. Please wait for the answer.`);
//     setQuestion("");
//   };

//   return (
//     <div>
//       <h2>Health Concerns</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="question">Ask a health concern question:</label>
//         <br />
//         <input type="text" id="question" value={question} onChange={(e) => setQuestion(e.target.value)} />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       {answer && <p>{answer}</p>}
//     </div>
//   );
// };

// export default HealthConcerns;