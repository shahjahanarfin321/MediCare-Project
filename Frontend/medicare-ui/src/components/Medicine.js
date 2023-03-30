import { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { FaSort } from 'react-icons/fa';

function MedicineCard({ name, price, imageUrl }) {
  return (
    <Col md={4}>
      <Card className="mb-4">
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>${price}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

function Medicine() {
  const [medicines, setMedicines] = useState([
    {
      name: 'Medicine 1',
      price: 90.99,
      imageUrl: 'https://via.placeholder.com/400x400',
    },
    {
      name: 'Medicine 2',
      price: 15.99,
      imageUrl: 'https://via.placeholder.com/400x400',
    },
    {
      name: 'Medicine 3',
      price: 20.99,
      imageUrl: 'https://via.placeholder.com/400x400',
    },
    // Add more medicines here...
  ]);

  const handleSortByName = () => {
    const sortedMedicines = [...medicines].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setMedicines(sortedMedicines);
  };

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="mb-0">Medicines</h1>
        <Button variant="primary" onClick={handleSortByName}>
          {/* <FaSort /> */}
          Sort
        </Button>
      </div>
      <Row>
        {medicines.map((medicine, index) => (
          <MedicineCard key={index} {...medicine} />
        ))}
      </Row>
    </Container>
  );
}

export default Medicine;





// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// function MedicineCard({ name, price, imageUrl }) {
//   return (
//     <Col md={4}>
//       <Card className="mb-4">
//         <Card.Img variant="top" src={imageUrl} />
//         <Card.Body>
//           <Card.Title>{name}</Card.Title>
//           <Card.Text>${price}</Card.Text>
//           <Button variant="primary">Add to Cart</Button>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// }

// function Medicine() {
//   const medicines = [
//     {
//       name: 'Medicine 1',
//       price: 10.99,
//       imageUrl: 'https://via.placeholder.com/400x400',
//     },
//     {
//       name: 'Medicine 2',
//       price: 15.99,
//       imageUrl: 'https://via.placeholder.com/400x400',
//     },
//     {
//       name: 'Medicine 3',
//       price: 20.99,
//       imageUrl: 'https://via.placeholder.com/400x400',
//     },
//     // Add more medicines here...
//   ];

//   return (
//     <Container className="my-5">
//       <h1 className="mb-4">Medicines</h1>
//       <Row>
//         {medicines.map((medicine, index) => (
//           <MedicineCard key={index} {...medicine} />
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Medicine;



// function Medicine() {
//     return(
//         <h1>Medicine</h1>
//     );
// }
// export default Medicine;