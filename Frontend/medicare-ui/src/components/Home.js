import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function WelcomeScreen() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };
  return (
    <div className="text-center" style={{ color: 'white' }}>
      <h1>Welcome to our Medi-Care</h1>
      <Row className="mt-5">
        <Col sm={4}>
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title>Shop for Medicine</Card.Title>
              <Card.Text style={{ fontSize: '1.25rem', lineHeight: '1.5' }}>
                Browse our wide selection of prescription and over-the-counter medications.
              </Card.Text>
              <Button variant="primary" onClick={handleLogin}>Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title>Create Appointment with Doctor</Card.Title>
              <Card.Text style={{ fontSize: '1.25rem', lineHeight: '1.5' }}>
                Schedule an appointment with one of our experienced doctors for a consultation.
              </Card.Text>
              <Button variant="primary" onClick={handleLogin}>Book Appointment</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title>Take Appointment for Lab Test</Card.Title>
              <Card.Text className='pb-4' style={{ fontSize: '1.25rem', lineHeight: '1.5' }}>
                Schedule an appointment for a lab test with one of our partner labs.
              </Card.Text>
              
              <Button variant="primary" onClick={handleLogin}>Book Appointment</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

function Home() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <Container fluid className="p-0">
            <WelcomeScreen />
          </Container>
        </div>
      </div>
    </>
  );
}

export default Home;
