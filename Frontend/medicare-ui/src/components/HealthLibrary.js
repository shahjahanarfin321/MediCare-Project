import React, { useState } from 'react';
import { Tabs, Tab, Container, Row, Col, Card } from 'react-bootstrap';
import '../css/style.css';

function HealthLibrary() {
    const [activeTab, setActiveTab] = useState('allAilments');

    return (
        <Container className="my-4">
            <h1 className="text-left">Health Library</h1>
            <Tabs activeKey={activeTab} onSelect={(key) => setActiveTab(key)} className="mt-4 tabs-container">
                <Tab eventKey="allAilments" title="All Ailments">
                    <Row className="tab-content">
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Post Title</Card.Title>
                                    <Card.Text>
                                        This is a short description of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Post Title</Card.Title>
                                    <Card.Text>
                                        This is a short description of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Post Title</Card.Title>
                                    <Card.Text>
                                        This is a short description of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="beautyFitness" title="Beauty & Fitness">
                    <Row className="tab-content">
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Post Title</Card.Title>
                                    <Card.Text>
                                        This is a short description of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Post Title</Card.Title>
                                    <Card.Text>
                                        This is a short description of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Post Title</Card.Title>
                                    <Card.Text>
                                        This is a short description of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Tab>

                <Tab eventKey="foodWellness" title="Food & Wellness">
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Post Title</Card.Title>
                                    <Card.Text>
                                        This is a short description of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Post Title</Card.Title>
                                    <Card.Text>
                                        This is a short description of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Post Title</Card.Title>
                                    <Card.Text>
                                        This is a short description of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="inTheNews" title="In The News">
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Post Title</Card.Title>
                                    <Card.Text>
                                        This is a short description of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Post Title</Card.Title>
                                    <Card.Text>
                                        This is a short description of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Post Title</Card.Title>
                                    <Card.Text>
                                        This is a short description of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="petCare" title="Pet Care">
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Post Title</Card.Title>
                                    <Card.Text>
                                        This is a short description of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Post Title</Card.Title>
                                    <Card.Text>
                                        This is a short description of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Post Title</Card.Title>
                                    <Card.Text>
                                        This is a short description of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </Container>
    );
}
export default HealthLibrary;
