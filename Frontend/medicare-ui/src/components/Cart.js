import { Container, Row, Col, Table, Button } from 'react-bootstrap';

function Cart() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          <h1>Cart</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="https://via.placeholder.com/100x100" alt="Product" />
                  <span className="ml-3">Product 1</span>
                </td>
                <td>$10.99</td>
                <td>
                  <Button variant="outline-secondary">-</Button>
                  <span className="mx-2">1</span>
                  <Button variant="outline-secondary">+</Button>
                </td>
                <td>$10.99</td>
              </tr>
              <tr>
                <td>
                  <img src="https://via.placeholder.com/100x100" alt="Product" />
                  <span className="ml-3">Product 2</span>
                </td>
                <td>$15.99</td>
                <td>
                  <Button variant="outline-secondary">-</Button>
                  <span className="mx-2">2</span>
                  <Button variant="outline-secondary">+</Button>
                </td>
                <td>$31.98</td>
              </tr>
              <tr>
                <td>
                  <img src="https://via.placeholder.com/100x100" alt="Product" />
                  <span className="ml-3">Product 3</span>
                </td>
                <td>$20.99</td>
                <td>
                  <Button variant="outline-secondary">-</Button>
                  <span className="mx-2">3</span>
                  <Button variant="outline-secondary">+</Button>
                </td>
                <td>$62.97</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col md={4}>
          <div className="d-flex flex-column align-items-center">
            <h4>All Total: $105.94</h4>
            <Button variant="primary" className="mt-3">Proceed to Pay</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;




// import { Container, Row, Col, Button } from 'react-bootstrap';

// function Cart() {
//   return (
//     <Container className="my-5">
//       <Row>
//         <Col>
//           <h1 className="mb-4">Your Cart</h1>
//           <div className="d-flex flex-column">
//             <div className="d-flex align-items-center justify-content-between mb-3">
//               <div className="d-flex align-items-center">
//                 <img
//                   src="https://via.placeholder.com/100x100"
//                   alt="Product"
//                   className="mr-3"
//                 />
//                 <div>
//                   <h4 className="mb-0">Product 1</h4>
//                   <p className="mb-0">$10.99</p>
//                 </div>
//               </div>
//               <div>
//                 <p className="mb-0">Quantity: 2</p>
//               </div>
//             </div>
//             <div className="d-flex align-items-center justify-content-between mb-3">
//               <div className="d-flex align-items-center">
//                 <img
//                   src="https://via.placeholder.com/100x100"
//                   alt="Product"
//                   className="mr-3"
//                 />
//                 <div>
//                   <h4 className="mb-0">Product 2</h4>
//                   <p className="mb-0">$15.99</p>
//                 </div>
//               </div>
//               <div>
//                 <p className="mb-0">Quantity: 1</p>
//               </div>
//             </div>
//             {/* Add more product items here... */}
//           </div>
//         </Col>
//         <Col xs={4}>
//           <div className="bg-light p-4 rounded">
//             <h4 className="mb-4">Total: $37.97</h4>
//             <Button variant="primary" size="lg" block>
//               Proceed to Pay
//             </Button>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Cart;





// function Cart() {
//     return(
//         <h1>Cart</h1>
//     );
// }
// export default Cart;