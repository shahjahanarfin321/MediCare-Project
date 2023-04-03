import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

function MedicineCard({ medicineName, medicinePrice, medicineStock, medicineId, onAddToCart, disabled }) {
  const handleAddToCart = () => {
    onAddToCart(medicineId);
  };

  return (
    <Col md={4}>
      <Card className="mb-4">
        <Card.Img variant="top" src="https://via.placeholder.com/400x400" />
        <Card.Body>
          <Card.Title>{medicineName}</Card.Title>
          <Card.Text>
            ${medicinePrice}
            <br />
            Stock: {medicineStock}
          </Card.Text>
          <Button variant="primary" onClick={handleAddToCart} disabled={disabled}>
            {disabled ? 'Added to Cart' : 'Add to Cart'}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

function Medicine() {
  const [medicines, setMedicines] = useState([]);
  const [addedToCart, setAddedToCart] = useState([]);

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = () => {
    axios.get('http://localhost:9090/medicine/all-medicines')
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
        setAddedToCart([...addedToCart, medicineId]);
        alert('Item added to cart successfully!');
      })
      .catch(error => {
        console.log(error);
        alert('Error occurred while adding item to cart!');
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchMedicines();
    }, 2000); // fetch medicines every 5 seconds

    return () => clearInterval(interval);
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
          <MedicineCard
            key={medicine.medicineId}
            {...medicine}
            onAddToCart={handleAddToCart}
            disabled={addedToCart.includes(medicine.medicineId)}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Medicine;


// import { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import axios from 'axios';

// function MedicineCard({ medicineName, medicinePrice, medicineStock, medicineId, onAddToCart }) {
//   const handleAddToCart = () => {
//     onAddToCart(medicineId);
//   };

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
//           <Button variant="primary" onClick={handleAddToCart}>
//             Add to Cart
//           </Button>
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

//   const handleAddToCart = (medicineId) => {
//     axios.post(`http://localhost:9090/cart/add-medicine-to-cart?medicineId=${medicineId}&userId=${localStorage.getItem("userId")}&quantity=1`)
//       .then(response => {
//         console.log(response.data);
//         alert('Item added to cart successfully!');
//       })
//       .catch(error => {
//         console.log(error);
//         alert('Error occurred while adding item to cart!');
//       });
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
//           <MedicineCard key={medicine.medicineId} {...medicine} onAddToCart={handleAddToCart} />
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Medicine;



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