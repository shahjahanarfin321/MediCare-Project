import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const CreateMedicine = () => {
  const [medicine, setMedicine] = useState({
    medicineName: "",
    medicinePrice: "",
    medicineStock: "",
    imageLink: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMedicine((prevMedicine) => ({
      ...prevMedicine,
      [name]: value,
    }));
  };

  const handleCreate = (event) => {
    event.preventDefault();
    axios.post("http://localhost:9090/medicines/save-medicine", medicine).then(() => {
      alert('Medicine Created Successfully');
      setMedicine({
        medicineName: "",
        medicinePrice: "",
        medicineStock: "",
        imageLink: "",
      });
    });
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
          <h1 className="text-left mb-3">Create Medicine</h1>
          <Form onSubmit={handleCreate}>
            <Form.Group className="mb-3" controlId="medicineName">
              <Form.Label>Medicine Name</Form.Label>
              <Form.Control
                type="text"
                name="medicineName"
                value={medicine.medicineName}
                onChange={handleInputChange}
                placeholder="Enter medicine name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="medicinePrice">
              <Form.Label>Medicine Price</Form.Label>
              <Form.Control
                type="number"
                name="medicinePrice"
                value={medicine.medicinePrice}
                onChange={handleInputChange}
                placeholder="Enter medicine price"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="medicineStock">
              <Form.Label>Medicine Stock</Form.Label>
              <Form.Control
                type="number"
                name="medicineStock"
                value={medicine.medicineStock}
                onChange={handleInputChange}
                placeholder="Enter medicine stock"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="medicineStock">
              <Form.Label>Medicine Image Link</Form.Label>
              <Form.Control
                type="text"
                name="imageLink"
                value={medicine.imageLink}
                onChange={handleInputChange}
                placeholder="Enter medicine image link"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateMedicine;
