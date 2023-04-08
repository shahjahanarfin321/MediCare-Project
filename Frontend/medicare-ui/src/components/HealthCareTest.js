import axios from 'axios';
import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaHeartbeat, FaFlask, FaDiagnoses, FaFileMedicalAlt, FaTint, FaVial, FaUserMd } from 'react-icons/fa';

function HealthTestCard({ testTitle, onClick }) {
    return (
        <Col md={3} className="mb-4">
            <Card onClick={onClick}>
                <Card.Body className="text-center">
                    <div className="mb-3">
                        {testTitle === 'Heamoglobin Test' && <FaHeartbeat size={50} />}
                        {testTitle === 'Liver Profile Test' && <FaFlask size={50} />}
                        {testTitle === 'Diabetes and Lipid Profile' && <FaDiagnoses size={50} />}
                        {testTitle === 'Thyroid Profile Test' && <FaFileMedicalAlt size={50} />}
                        {testTitle === 'Iron Deficiency Test' && <FaTint size={50} />}
                        {testTitle === 'Vitamin Test' && <FaVial size={50} />}
                        {testTitle === 'Testosterone Test' && <FaUserMd size={50} />}
                        {testTitle === 'Kidney Function Test' && <FaHeartbeat size={50} />}
                    </div>
                    <h4>{testTitle}</h4>
                </Card.Body>
            </Card>
        </Col>
    );
}

function HealthTestForm({ testTitle, onClose }) {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [pincode, setPincode] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:9090/lab-tests/create-lab-test",{
            testType: testTitle,
            fullName: name,
            mobileNumber: mobile,
            pinCode: pincode,
            userId: localStorage.getItem("userId")
        }).then(() => {
          alert('Test Booked Successfully');
        });
      };

    return (
        <div className="overlay">
            <div className="popup">
                <h2>{testTitle}</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group controlId="formMobile">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="tel" placeholder="Enter your mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
                    </Form.Group>
                    <Form.Group controlId="formPincode">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control type="text" placeholder="Enter your pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
                    </Form.Group>
                    <Form.Group controlId="formAgreed">
                        <Form.Check type="checkbox" label="I agree to the terms and conditions" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} required />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!agreed}>Book Now</Button>
                    <Button variant="secondary" className="ml-3" onClick={onClose}>Close</Button>
                </Form>
            </div>
        </div>
    );
}

function HealthCareTest() {
    const [selectedTest, setSelectedTest] = useState('');

    const handleTestClick = (testTitle) => {
        setSelectedTest(testTitle);
    };

    const handleCloseForm = () => {
        setSelectedTest('');
    };

    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">Health Care Test</h1>
            <Row>
                <HealthTestCard testTitle="Heamoglobin Test" onClick={() => handleTestClick('Heamoglobin Test')} />
                <HealthTestCard testTitle="Liver Profile Test" onClick={() => handleTestClick('Liver Profile Test')} />
                <HealthTestCard testTitle="Diabetes and Lipid Profile" onClick={() => handleTestClick('Diabetes and Lipid Profile')} />
                <HealthTestCard testTitle="Thyroid Profile Test" onClick={() => handleTestClick('Thyroid Profile Test')} />
                <HealthTestCard testTitle="Iron Deficiency Test" onClick={() => handleTestClick('Iron Deficiency Test')} />
                <HealthTestCard testTitle="Vitamin Test" onClick={() => handleTestClick('Vitamin Test')} />
                <HealthTestCard testTitle="Testosterone Test" onClick={() => handleTestClick('Testosterone Test')} />
                <HealthTestCard testTitle="Kidney Function Test" onClick={() => handleTestClick('Kidney Function Test')} />
            </Row>
            {selectedTest && <HealthTestForm testTitle={selectedTest} onClose={handleCloseForm} />}
        </Container>
    );
}

export default HealthCareTest;
