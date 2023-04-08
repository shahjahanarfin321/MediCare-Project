import React, { useState, useEffect } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateMedicine = ({ match }) => {
    const medicineId = window.location.href.split("/").pop();

    const navigate = useNavigate();

    const [medicine, setMedicine] = useState({
        medicineName: "",
        medicinePrice: "",
        medicineStock: "",
        imageLink: "",
    });

    useEffect(() => {
        axios.get(`http://localhost:9090/medicines/?medicineId=${medicineId}`).then((response) => {
            setMedicine(response.data);
        });
    }, [medicineId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMedicine((prevMedicine) => ({
            ...prevMedicine,
            [name]: value,
        }));
    };

    const handleUpdate = () => {
        axios.put(`http://localhost:9090/medicines/update-medicine-details/${medicineId}`, medicine).then(() => {
            alert('Medicine Updated Successfully');
            navigate('/medicine');
        });
    };


    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
                    <h1 className="text-left mb-3">Update Medicine</h1>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Medicine Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="medicineName"
                                value={medicine.medicineName}
                                onChange={handleInputChange}
                                id="medicineName"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Medicine Price</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>Rs.</InputGroup.Text>
                                <Form.Control
                                    type="number"
                                    name="medicinePrice"
                                    value={medicine.medicinePrice}
                                    onChange={handleInputChange}
                                    id="medicinePrice"
                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Medicine Stock</Form.Label>
                            <Form.Control
                                type="number"
                                name="medicineStock"
                                value={medicine.medicineStock}
                                onChange={handleInputChange}
                                id="medicineStock"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Medicine Image Link</Form.Label>
                            <Form.Control
                                type="text"
                                name="imageLink"
                                value={medicine.imageLink}
                                onChange={handleInputChange}
                                id="imageLink"
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleUpdate}>
                            Update
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default UpdateMedicine;
