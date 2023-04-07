import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import axios from "axios";

const ManageProductPage = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9090/medicines/all-medicines').then((response) => {
            setMedicines(response.data);
        });
    }, []);

    const handleToggle = (id, active) => {
        const newActive = !active;
        // axios.put(`http://localhost:9090/medicines/${id}/active?active=${newActive}`).then(() => {
        //     setMedicines((prevMedicines) =>
        //         prevMedicines.map((medicine) => {
        //             if (medicine.medicineId === id) {
        //                 return {
        //                     ...medicine,
        //                     active: newActive
        //                 };
        //             } else {
        //                 return medicine;
        //             }
        //         })
        //     );
        // });
    };

    return (
        <div className="container py-5">
            <h1 className="mb-5">Manage Medicine</h1>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Link to="/createmedicine">
                    <Button variant="primary">Create New Medicine</Button>
                </Link>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {medicines.map((medicine) => (
                        <tr key={medicine.medicineId}>
                            <td>{medicine.medicineId}</td>
                            <td>{medicine.medicineName}</td>
                            <td>{medicine.medicinePrice}</td>
                            <td>{medicine.medicineStock}</td>
                            <td>
                                <Button
                                    variant={medicine.active ? "success" : "danger"}
                                    onClick={() => handleToggle(medicine.medicineId, medicine.active)}
                                >
                                    {medicine.active ? "Active" : "Inactive"}
                                </Button>
                            </td>
                            <td>
                                <Link to={`/updatemedicine/${medicine.medicineId}`}>
                                    <Button variant="primary" className="me-2">
                                        Edit
                                    </Button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProductPage;
