// import { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function MedicineCard({ medicineName, medicinePrice, medicineStock, medicineId, onAddToCart, disabled }) {
//   const navigate = useNavigate();
//   const handleAddToCart = () => {
//     onAddToCart(medicineId);
//   };

//   const handleLoginClick = () => {
//     navigate("/login");
//   };

//   return (
//     <Col md={4}>
//       <Card className="mb-4">
//         <Card.Img variant="top" src="" />
//         <Card.Body>
//           <Card.Title>{medicineName}</Card.Title>
//           <Card.Text>
//             Rs. {medicinePrice}
//             <br />
//             Stock: {medicineStock}
//           </Card.Text>
//           {localStorage.getItem("userId") ?
//             <Button variant="primary" onClick={handleAddToCart}>
//               Add to Cart
//             </Button>
//             :
//             <Button variant="primary" onClick={handleLoginClick}>
//               Login
//             </Button>
//           }

//         </Card.Body>
//       </Card>
//     </Col>
//   );
// }

// function Medicine() {
//   const [medicines, setMedicines] = useState([]);
//   const [addedToCart, setAddedToCart] = useState([]);
//   const navigate = useNavigate();


//   useEffect(() => {
//     fetchMedicines();
//   }, []);

//   const fetchMedicines = () => {
//     axios.get('http://localhost:9090/medicines/all-medicines')
//       .then(response => {
//         setMedicines(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   const handleSortByName = () => {
//     const sortedMedicines = [...medicines].sort((a, b) =>
//       a.medicineName.localeCompare(b.medicineName)
//     );
//     setMedicines(sortedMedicines);
//   };

//   const handleAddToCart = (medicineId) => {
//     axios.post(`http://localhost:9090/cart/add-medicine-to-cart?medicineId=${medicineId}&userId=${localStorage.getItem("userId")}&quantity=1`)
//       .then(response => {
//         console.log(response.data);
//         setAddedToCart([...addedToCart, medicineId]);
//         alert('Item added to cart successfully!');
//       })
//       .catch(error => {
//         console.log(error);
//         alert('Error occurred while adding item to cart!');
//       });
//   };

//   const handleLoginClick = () => {
//     navigate("/login");
//   };

//   useEffect(() => {
//     // const interval = setInterval(() => {
//     //   fetchMedicines();
//     // }, 20000); // fetch medicines every 5 seconds


//     // return () => clearInterval(interval);
//     return () => fetchMedicines();
//   }, []);

//   return (
//     <Container className="my-5">
//       <div className="d-flex justify-content-between align-items-center">
//         <h1 className="mb-0">Medicines</h1>
//         <Button variant="primary" onClick={handleSortByName}>
//           Sort
//         </Button>
//       </div>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Medicine Name</th>
//             <th>Price</th>
//             <th>Stock</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {medicines.map((medicine) => (
//             <tr key={medicine.medicineId}>
//               <td>{medicine.medicineName}</td>
//               <td>Rs. {medicine.medicinePrice}</td>
//               <td>{medicine.medicineStock}</td>
//               <td>
//                 {localStorage.getItem("userId") ? (
//                   <Button
//                     variant="primary"
//                     onClick={() => handleAddToCart(medicine.medicineId)}
//                     disabled={addedToCart.includes(medicine.medicineId)}
//                   >
//                     {addedToCart.includes(medicine.medicineId) ? "Added to cart" : "Add to cart"}
//                   </Button>
//                 ) : (
//                   <Button variant="primary" onClick={handleLoginClick}>
//                     Login
//                   </Button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>

//   );
// }

// export default Medicine;

import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

function MedicineCard({ medicineName, medicinePrice, medicineStock, medicineId, imageLink ,onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart(medicineId);
  };

  return (
    <Col md={3} sm={6} xs={12}>
      <Card className="mb-4">
        <Card.Img variant="top" src={imageLink} style={{ height: '150px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{medicineName}</Card.Title>
          <Card.Text>
            ${medicinePrice}
            <br />
            Stock: {medicineStock}
          </Card.Text>
          <Button variant="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

function Medicine() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = () => {
    axios.get('http://localhost:9090/medicines/all-medicines')
      .then(response => {
        setMedicines(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleSortByName = () => {
    const sortedMedicines = [...medicines].sort((a, b) =>
      a.medicineName.localeCompare(b.medicineName)
    );
    setMedicines(sortedMedicines);
  };

  const handleAddToCart = (medicineId) => {
    axios.post(`http://localhost:9090/cart/add-medicine-to-cart?medicineId=${medicineId}&userId=${localStorage.getItem("userId")}&quantity=1`)
      .then(response => {
        console.log(response.data);
        alert('Item added to cart successfully!');
      })
      .catch(error => {
        console.log(error);
        alert('Error occurred while adding item to cart!');
      });
  };

  useEffect(() => {
    // const interval = setInterval(() => {
    //   fetchMedicines();
    // }, 2000); // fetch medicines every 5 seconds

    return () => fetchMedicines();
  }, []);

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="mb-0">Medicines</h1>
        <Button variant="primary" onClick={handleSortByName}>
          Sort
        </Button>
      </div>
      <Row>
        {medicines.map((medicine) => (
          <MedicineCard key={medicine.medicineId} {...medicine} onAddToCart={handleAddToCart} />
        ))}
      </Row>
    </Container>
  );
}

export default Medicine;




// import { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import axios from 'axios';

// function MedicineCard({ medicineName, medicinePrice, medicineStock }) {
//   return (
//     <Col md={4}>
//       <Card className="mb-4">
//         <Card.Img variant="top" src="https://via.placeholder.com/400x400" />
//         <Card.Body>
//           <Card.Title>{medicineName}</Card.Title>
//           <Card.Text>
//             ${medicinePrice}
//             <br />
//             Stock: {medicineStock}
//           </Card.Text>
//           <Button variant="primary">Add to Cart</Button>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// }

// function Medicine() {
//   const [medicines, setMedicines] = useState([]);

//   useEffect(() => {
//     fetchMedicines();
//   }, []);

//   const fetchMedicines = () => {
//     axios.get('http://localhost:9090/medicine/all-medicines')
//       .then(response => {
//         setMedicines(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   const handleSortByName = () => {
//     const sortedMedicines = [...medicines].sort((a, b) =>
//       a.medicineName.localeCompare(b.medicineName)
//     );
//     setMedicines(sortedMedicines);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       fetchMedicines();
//     }, 2000); // fetch medicines every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Container className="my-5">
//       <div className="d-flex justify-content-between align-items-center">
//         <h1 className="mb-0">Medicines</h1>
//         <Button variant="primary" onClick={handleSortByName}>
//           Sort
//         </Button>
//       </div>
//       <Row>
//         {medicines.map((medicine) => (
//           <MedicineCard key={medicine.medicineId} {...medicine} />
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Medicine;