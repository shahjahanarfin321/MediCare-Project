import axios from 'axios';
import { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

function CreateDoctorAppointment() {
    const [doctorName, setDoctorName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [imageLink, setImageLink] = useState('');

    const handleDoctorNameChange = (event) => {
        setDoctorName(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleImageLinkChange = (event) => {
        setImageLink(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Call the API endpoint to create a new appointment
        axios.post(`http://localhost:9090/doctorappointment/create-appointment`, {
            doctorName: doctorName,
            price: price,
            category: category,
            imageLink: imageLink,
        })
            .then(response => {
                alert(`Appointment created successfully!`);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="container my-5">
            <h1 className="mb-4">Create Doctor Appointment</h1>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="formDoctorName">
                    <Form.Label>Doctor Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter doctor name" value={doctorName} onChange={handleDoctorNameChange} required />
                </Form.Group>
                <Form.Group controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>Rs.</InputGroup.Text>
                        <Form.Control type="number" placeholder="Enter price" value={price} onChange={handlePriceChange} required />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="formCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" placeholder="Enter category" value={category} onChange={handleCategoryChange} required />
                </Form.Group>
                <Form.Group controlId="formImageLink">
                    <Form.Label>Image Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter image link" value={imageLink} onChange={handleImageLinkChange} required />
                </Form.Group>
                <Button className='mt-1' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default CreateDoctorAppointment;
