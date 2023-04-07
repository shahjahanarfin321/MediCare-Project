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


// import { useState } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// function AppointmentCard({ appointmentName, consultantCharge, timings }) {
//   const [showSubList, setShowSubList] = useState(false);

//   const handleSubListClick = () => {
//     setShowSubList(!showSubList);
//   };

//   return (
//     <Col md={3} className="mb-4">
//       <Card rounded>
//         <Card.Img variant="top" src="https://via.placeholder.com/200x200" />
//         <Card.Body>
//           <Card.Title>{appointmentName}</Card.Title>
//           <Card.Text className="mb-2 text-success">
//             {timings.join(', ')}
//           </Card.Text>
//           <Card.Text>${consultantCharge}</Card.Text>
//           <Button variant="primary" onClick={handleSubListClick}>
//             Book Now
//           </Button>
//         </Card.Body>
//         {showSubList && (
//           <ul className="list-group list-group-flush">
//             {[1, 2, 3, 4].map((index) => (
//               <li className="list-group-item" key={index}>
//                 <div className="d-flex justify-content-between">
//                   <div>Medical Treatment {index}</div>
//                   <div>10:00 AM</div>
//                 </div>
//               </li>
//             ))}
//             <li className="list-group-item">
//               <Button variant="primary" block>
//                 Confirm Booking
//               </Button>
//             </li>
//           </ul>
//         )}
//       </Card>
//     </Col>
//   );
// }

// function Appointment() {
//   return (
//     <Container className="my-5">
//       <h1>Appointments with Doctors</h1>
//       <Row>
//         {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
//           <AppointmentCard
//             key={index}
//             appointmentName={`Appointment ${index}`}
//             consultantCharge={50 + index * 10}
//             timings={['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM']}
//           />
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Appointment;

// import { useState } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// function AppointmentCard({ appointmentName, consultantCharge, timings }) {
//   const [showSubList, setShowSubList] = useState(false);

//   const handleSubListClick = () => {
//     setShowSubList(!showSubList);
//   };

//   return (
//     <Col md={3} className="mb-4">
//       <Card>
//         <Card.Img variant="top" src="https://via.placeholder.com/200x200" />
//         <Card.Body>
//           <Card.Title>{appointmentName}</Card.Title>
//           <Card.Text className="mb-2 text-success">
//             {timings.join(', ')}
//           </Card.Text>
//           <Card.Text>${consultantCharge}</Card.Text>
//           <Button variant="primary" onClick={handleSubListClick}>
//             Book Now
//           </Button>
//         </Card.Body>
//         {showSubList && (
//           <ul className="list-group list-group-flush">
//             {[1, 2, 3, 4].map((index) => (
//               <li className="list-group-item" key={index}>
//                 <div className="d-flex justify-content-between">
//                   <div>Medical Treatment {index}</div>
//                   <div>10:00 AM</div>
//                 </div>
//               </li>
//             ))}
//             <li className="list-group-item">
//               <Button variant="primary" block>
//                 Confirm Booking
//               </Button>
//             </li>
//           </ul>
//         )}
//       </Card>
//     </Col>
//   );
// }

// function Appointment() {
//   return (
//     <Container className="my-5">
//       <h1>Appointments with Doctors</h1>
//       <Row>
//         {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
//           <AppointmentCard
//             key={index}
//             appointmentName={`Appointment ${index}`}
//             consultantCharge={50 + index * 10}
//             timings={['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM']}
//           />
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Appointment;



// import { useState } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// function AppointmentCard({ appointmentName, appointmentTiming, appointmentCharge, treatmentName, treatmentTiming }) {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleExpand = () => {
//     setIsExpanded(true);
//   };

//   const handleCollapse = () => {
//     setIsExpanded(false);
//   };

//   return (
//     <Col md={3}>
//       <Card className="mb-4">
//         <Card.Img variant="top" src="https://via.placeholder.com/200x200" />
//         <Card.Body>
//           <Card.Title>{appointmentName}</Card.Title>
//           <Card.Text>
//             <span className="text-success">{appointmentTiming}</span>
//             <br />
//             Charge: ${appointmentCharge}
//           </Card.Text>
//           {!isExpanded ? (
//             <Button variant="primary" onClick={handleExpand}>
//               View Details
//             </Button>
//           ) : (
//             <div>
//               <Button variant="primary" onClick={handleCollapse}>
//                 Hide Details
//               </Button>
//               <div className="mt-2">
//                 <strong>Medical Treatment: </strong>
//                 <span>{treatmentName}</span>
//               </div>
//               <div>
//                 <strong>Treatment Timing: </strong>
//                 <span>{treatmentTiming}</span>
//               </div>
//             </div>
//           )}
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// }

// function Appointment() {
//   return (
//     <Container className="my-5">
//       <h1 className="mb-5">Appointments</h1>
//       <Row>
//         <AppointmentCard
//           appointmentName="Appointment 1"
//           appointmentTiming="10:00 AM - 11:00 AM"
//           appointmentCharge={100}
//           treatmentName="Treatment 1"
//           treatmentTiming="10:30 AM - 11:00 AM"
//         />
//         <AppointmentCard
//           appointmentName="Appointment 2"
//           appointmentTiming="11:00 AM - 12:00 PM"
//           appointmentCharge={150}
//           treatmentName="Treatment 2"
//           treatmentTiming="11:30 AM - 12:00 PM"
//         />
//         <AppointmentCard
//           appointmentName="Appointment 3"
//           appointmentTiming="02:00 PM - 03:00 PM"
//           appointmentCharge={200}
//           treatmentName="Treatment 3"
//           treatmentTiming="02:30 PM - 03:00 PM"
//         />
//         <AppointmentCard
//           appointmentName="Appointment 4"
//           appointmentTiming="03:00 PM - 04:00 PM"
//           appointmentCharge={250}
//           treatmentName="Treatment 4"
//           treatmentTiming="03:30 PM - 04:00 PM"
//         />
//       </Row>
//     </Container>
//   );
// }

// export default Appointment;



// import { useState } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// function AppointmentCard({ appointmentName, appointmentTime, appointmentFee, onCardClick, isExpanded }) {
//   return (
//     <Card onClick={onCardClick} className="mb-4">
//       <Card.Body>
//         <Card.Title>{appointmentName}</Card.Title>
//         <Card.Text>
//           <span style={{ color: 'green' }}>{appointmentTime}</span>
//           <br />
//           Fee: {appointmentFee}
//         </Card.Text>
//         {isExpanded && (
//           <>
//             <hr />
//             <Card.Text>
//               <strong>Medical Treatment:</strong> Tooth Extraction
//               <br />
//               <strong>Timing:</strong> 3:00 PM - 4:00 PM
//             </Card.Text>
//           </>
//         )}
//       </Card.Body>
//     </Card>
//   );
// }

// function Appointment() {
//   const [appointments, setAppointments] = useState([
//     {
//       id: 1,
//       name: 'Dentist Consultation',
//       time: '10:00 AM - 11:00 AM',
//       fee: '$100',
//     },
//     {
//       id: 2,
//       name: 'Cardiology Checkup',
//       time: '11:00 AM - 12:00 PM',
//       fee: '$120',
//     },
//     {
//       id: 3,
//       name: 'Dermatology Consultation',
//       time: '2:00 PM - 3:00 PM',
//       fee: '$80',
//     },
//     {
//       id: 4,
//       name: 'Orthopedic Consultation',
//       time: '4:00 PM - 5:00 PM',
//       fee: '$150',
//     },
//     {
//       id: 5,
//       name: 'Gynecology Checkup',
//       time: '5:00 PM - 6:00 PM',
//       fee: '$90',
//     },
//   ]);
//   const [expandedAppointmentId, setExpandedAppointmentId] = useState(null);

//   const handleCardClick = (id) => {
//     if (expandedAppointmentId === id) {
//       setExpandedAppointmentId(null);
//     } else {
//       setExpandedAppointmentId(id);
//     }
//   };

//   return (
//     <Container className="my-5">
//       <h1 className="mb-4">Appointments</h1>
//       <Row>
//         {appointments.map((appointment) => (
//           <Col key={appointment.id} md={3}>
//             <AppointmentCard
//               appointmentName={appointment.name}
//               appointmentTime={appointment.time}
//               appointmentFee={appointment.fee}
//               onCardClick={() => handleCardClick(appointment.id)}
//               isExpanded={expandedAppointmentId === appointment.id}
//             />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Appointment;
