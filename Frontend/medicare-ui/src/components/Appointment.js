import { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function AppointmentCard({ appointmentName, consultantCharge, timings }) {
  const [showSubList, setShowSubList] = useState(false);
  const [selectedSublist, setSelectedSublist] = useState(null);

  const handleSubListClick = () => {
    setShowSubList(!showSubList);
  };

  const handleSubListItemClick = (index) => {
    setSelectedSublist(index);
  }

  const isConfirmButtonDisabled = selectedSublist === null;

  return (
    <Col md={3} className="mb-4">
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/200x200" />
        <Card.Body>
          <Card.Title>{appointmentName}</Card.Title>
          <Card.Text className="mb-2 text-success">
            {timings.join(', ')}
          </Card.Text>
          <Card.Text>${consultantCharge}</Card.Text>
          <Button variant="primary" onClick={handleSubListClick}>
            Book Now
          </Button>
        </Card.Body>
        {showSubList && (
          <ul className="list-group list-group-flush">
            {[1, 2, 3, 4].map((index) => (
              <li className={`list-group-item ${selectedSublist === index ? 'active' : ''}`} 
                key={index}
                onClick={() => handleSubListItemClick(index)}
              >
                <div className="d-flex justify-content-between">
                  <div>Medical Treatment {index}</div>
                  <div>10:00 AM</div>
                </div>
              </li>
            ))}
            <li className="list-group-item">
              <Button variant="primary" block disabled={isConfirmButtonDisabled}>
                Confirm Booking
              </Button>
            </li>
          </ul>
        )}
      </Card>
    </Col>
  );
}

function Appointment() {
  return (
    <Container className="my-5">
      <h1>Appointments with Doctors</h1>
      <Row>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <AppointmentCard
            key={index}
            appointmentName={`Appointment ${index}`}
            consultantCharge={50 + index * 10}
            timings={['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM']}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Appointment;