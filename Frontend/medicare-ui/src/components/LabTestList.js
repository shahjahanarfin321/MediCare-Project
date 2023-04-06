import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

function LabTestList() {
  const [labTests, setLabTests] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:9090/lab-tests/get-lab-test/${localStorage.getItem("userId")}`)
      .then(response => {
        setLabTests(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="my-4 px-3">
      <h3 className="text-left">Lab Test Report</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Test Type</th>
            <th>Full Name</th>
            <th>Mobile Number</th>
            <th>Pin Code</th>
          </tr>
        </thead>
        <tbody>
          {labTests.map(labTest => (
            <tr key={labTest.testId}>
              <td>{labTest.testType}</td>
              <td>{labTest.fullName}</td>
              <td>{labTest.mobileNumber}</td>
              <td>{labTest.pinCode}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default LabTestList;
