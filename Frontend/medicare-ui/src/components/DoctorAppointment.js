import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Button, Form, InputGroup } from 'react-bootstrap';

function DoctorAppointment() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [mobileNumber, setMobileNumber] = useState('');
  const [isMobileNumberValid, setIsMobileNumberValid] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleSelectAppointment = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleMobileNumberChange = (event) => {
    const inputMobileNumber = event.target.value;
    setMobileNumber(inputMobileNumber);
    setIsMobileNumberValid(inputMobileNumber.length === 10);
  };

  const handleConfirmAppointment = () => {
    // Call the API endpoint to confirm the appointment
    axios.post(`http://localhost:9090/appointment/create-appointment`, {
      appointmentCategory: selectedAppointment.category,
      mobileNo: mobileNumber,
      userId: localStorage.getItem("userId") // Replace with the actual user ID
    })
      .then(response => {
        alert(`Appointment confirmed with ${selectedAppointment.doctorName}`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = () => {
    axios.get(`http://localhost:9090/doctorappointment/get-all-appointment`)
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="container my-5">
      <h1 className="mb-4">Appointment with Doctor</h1>
      <div className="row">
        {appointments.map((appointment) => (
          <div className="col-md-3" key={appointment.id}>
            <Card className="mb-3" onClick={() => handleSelectAppointment(appointment)}>
            <Card.Img variant="top" src={appointment.imageLink} style={{ height: '150px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{appointment.doctorName}</Card.Title>
                <Card.Text>{appointment.category}</Card.Text>
                <Card.Text>Rs. {appointment.price}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {selectedAppointment && (
        <div className="my-5">
          <h2>Chat with our doctors instantly - {selectedAppointment.category}</h2>
          <Form>
            <Form.Group controlId="formMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <InputGroup>
                <InputGroup.Text>+91</InputGroup.Text>

                <Form.Control
                  type="text"
                  placeholder="Enter 10-digit mobile number"
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                  isInvalid={!isMobileNumberValid}
                  maxLength={10}
                  style={{ width: 'calc(100% - 80px)', display: 'inline-block' }}
                />
              </InputGroup>
              <Form.Control.Feedback type="invalid">Please enter a valid 10-digit mobile number</Form.Control.Feedback>
            </Form.Group>
            <Button className='mt-1' variant="primary" onClick={handleConfirmAppointment}>Confirm Appointment
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
}
export default DoctorAppointment;

// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Card, Button, Form, InputGroup } from 'react-bootstrap';

// function DoctorAppointment() {
//     const [selectedAppointment, setSelectedAppointment] = useState(null);
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [isMobileNumberValid, setIsMobileNumberValid] = useState(false);
//     const [appointments, setAppointments] = useState([]);

//     const handleSelectAppointment = (appointment) => {
//         setSelectedAppointment(appointment);
//     };

//     const handleMobileNumberChange = (event) => {
//         const inputMobileNumber = event.target.value;
//         setMobileNumber(inputMobileNumber);
//         setIsMobileNumberValid(inputMobileNumber.length === 10);
//     };

//     const handleConfirmAppointment = () => {
//         // You can handle the confirmation of the appointment here
//         alert(`Appointment confirmed with ${selectedAppointment.doctorName}`);
//     };

//     useEffect(() => {
//         fetchAppointments();
//       }, []);
    
//       const fetchAppointments = () => {
//         axios.get(`http://localhost:9090/doctorappointment/get-all-appointment`)
//           .then(response => {
//             setAppointments(response.data);
//             console.log(response);
//           })
//           .catch(error => {
//             console.log(error);
//           });
//       }

//     return (
//         <div className="container my-5">
//             <h1 className="mb-4">Appointment with Doctor</h1>
//             <div className="row">
//                 {appointments.map((appointment) => (
//                     <div className="col-md-4" key={appointment.id}>
//                         <Card className="mb-4" onClick={() => handleSelectAppointment(appointment)}>
//                             <Card.Img variant="top" src={appointment.imageLink} />
//                             <Card.Body>
//                                 <Card.Title>{appointment.doctorName}</Card.Title>
//                                 <Card.Text>{appointment.category}</Card.Text>
//                                 <Card.Text>{appointment.price}</Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 ))}
//             </div>
//             {selectedAppointment && (
//                 <div className="my-5">
//                     <h2>Chat with our doctors instantly</h2>
//                     <h4>{selectedAppointment.category}</h4>
//                     <Form>
//                         <Form.Group controlId="formMobileNumber">
//                             <Form.Label>Mobile Number</Form.Label>
//                             <InputGroup>
//                                 <InputGroup.Text>+91</InputGroup.Text>
                            
//                             <Form.Control
//                                 type="tel"
//                                 placeholder="Enter 10-digit mobile number"
//                                 value={mobileNumber}
//                                 onChange={handleMobileNumberChange}
//                                 isInvalid={!isMobileNumberValid}
//                                 maxLength={10}
//                                 style={{ width: 'calc(100% - 80px)', display: 'inline-block' }}
//                             />
//                             </InputGroup>
//                             <Form.Control.Feedback type="invalid">Please enter a valid 10-digit mobile number</Form.Control.Feedback>
//                         </Form.Group>
//                         <Button className='mt-1' variant="primary" onClick={handleConfirmAppointment}>Confirm Appointment
//                         </Button>
//                     </Form>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default DoctorAppointment;


// import { useState } from 'react';
// import { Card, Button, Form, InputGroup } from 'react-bootstrap';

// function DoctorAppointment() {
//     const [selectedAppointment, setSelectedAppointment] = useState(null);
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [isMobileNumberValid, setIsMobileNumberValid] = useState(false);

//     const handleSelectAppointment = (appointment) => {
//         setSelectedAppointment(appointment);
//     };

//     const handleMobileNumberChange = (event) => {
//         const inputMobileNumber = event.target.value;
//         setMobileNumber(inputMobileNumber);
//         setIsMobileNumberValid(inputMobileNumber.length === 10);
//     };

//     const handleConfirmAppointment = () => {
//         // You can handle the confirmation of the appointment here
//         alert(`Appointment confirmed with ${selectedAppointment.doctorName}`);
//     };

//     const appointments = [
//         { id: 1, doctorName: 'Dr. John Doe', appointmentCategory: 'General Checkup', cost: 'Rs. 500' },
//         { id: 2, doctorName: 'Dr. Jane Smith', appointmentCategory: 'Dental Checkup', cost: 'Rs. 1000' },
//         { id: 3, doctorName: 'Dr. David Lee', appointmentCategory: 'Eye Checkup', cost: 'Rs. 750' },
//     ];

//     return (
//         <div className="container my-5">
//             <h1 className="mb-4">Appointment with Doctor</h1>
//             <div className="row">
//                 {appointments.map((appointment) => (
//                     <div className="col-md-4" key={appointment.id}>
//                         <Card className="mb-4" onClick={() => handleSelectAppointment(appointment)}>
//                             <Card.Img variant="top" src={appointment.doctorImage} />
//                             <Card.Body>
//                                 <Card.Title>{appointment.doctorName}</Card.Title>
//                                 <Card.Text>{appointment.appointmentCategory}</Card.Text>
//                                 <Card.Text>{appointment.cost}</Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 ))}
//             </div>
//             {selectedAppointment && (
//                 <div className="my-5">
//                     <h2>Chat with our doctors instantly</h2>
//                     <Form>
//                         <Form.Group controlId="formMobileNumber">
//                             <Form.Label>Mobile Number</Form.Label>
//                             <InputGroup>
//                                 <InputGroup.Text>+91</InputGroup.Text>
                            
//                             <Form.Control
//                                 type="tel"
//                                 placeholder="Enter 10-digit mobile number"
//                                 value={mobileNumber}
//                                 onChange={handleMobileNumberChange}
//                                 isInvalid={!isMobileNumberValid}
//                                 maxLength={10}
//                                 style={{ width: 'calc(100% - 80px)', display: 'inline-block' }}
//                             />
//                             </InputGroup>
//                             <Form.Control.Feedback type="invalid">Please enter a valid 10-digit mobile number</Form.Control.Feedback>
//                         </Form.Group>
//                         <Button className='mt-1' variant="primary" onClick={handleConfirmAppointment} disabled={!isMobileNumberValid}>
//                             Continue
//                         </Button>
//                     </Form>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default DoctorAppointment;
