import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const CreateHealthConcern = () => {
    const [title, setTitle] = useState("");
    const [imageLink, setImageLink] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newHealthConcern = { title, imageLink };

        try {
            const response = await axios.post("http://localhost:9090/healthconcern/create-concerns", newHealthConcern);
            alert("Concerns Created");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container my-5" style={{ padding: "20px" }}>
            <h2 className="text-left mb-4">Create Health Concern</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicImageLink">
                    <Form.Label>Image Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter image link" value={imageLink} onChange={(e) => setImageLink(e.target.value)} />
                </Form.Group>

                <Button className="mt-1" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default CreateHealthConcern;
