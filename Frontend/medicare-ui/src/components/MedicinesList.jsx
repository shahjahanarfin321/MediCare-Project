import React, { Component, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import MedicineService from '../service/MedicineService';

function MedicineCard({ medicineName, medicinePrice }) {
    return (
        <Col md={4}>
            <Card className="mb-4">
                <Card.Img variant="top" />
                <Card.Body>
                    <Card.Title>{medicineName}</Card.Title>
                    <Card.Text>${medicinePrice}</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

class MedicinesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            medicines: []
        }

    }


    componentDidMount() {
        MedicineService.getMedicinesList().then(
            (response) => {
                this.setState({medicines: response.data});
            }
        );
    }



    render() {


        return (
            <div>
                <Container className="my-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="mb-0">Medicines</h1>
                        <Button variant="primary">
                            {/* <FaSort /> */}
                            Sort
                        </Button>
                    </div>
                    <Row>
                        {this.state.medicines.map((medicine, index) => (
                            <MedicineCard key={index} {...medicine} />
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

MedicinesList.propTypes = {

};

export default MedicinesList;