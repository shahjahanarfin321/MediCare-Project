import { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const userId = localStorage.getItem("userId");
  console.log(userId);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = () => {
    axios.get(`http://localhost:9090/appointment/get-all-appointment-by-userId?userId=${userId}`)
      .then(response => {
        setAppointments(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <Container className="my-5">
      <h1 className="mb-4">Appointment List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Appointment Category</th>
            <th>Mobile No.</th>
            <th>Appointment Time</th>
            <th>Appointment Date</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.appointmentCategory}</td>
              <td>{appointment.mobileNo}</td>
              <td style={{ color: 'green' }}>{appointment.appointmentDate}</td>
              <td style={{ color: 'green' }}>{appointment.appointmentTime}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AppointmentList;
