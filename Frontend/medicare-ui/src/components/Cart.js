import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

function Cart() {
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem("userId");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:9090/cart/my-orders?userId=${userId}`)
      .then(response => {
        setOrders(response.data);
        const total = response.data.reduce((acc, curr) => acc + curr.medicines.medicinePrice * curr.quantity, 0);
        setTotalPrice(total);
      })
      .catch(error => console.error(error));
  }, []);

  const handleQuantityChange = (order, delta) => {
    const updatedOrders = orders.map(o => {
      if (o.cartId === order.cartId) {
        return { ...o, quantity: o.quantity + delta };
      }
      return o;
    });
    setOrders(updatedOrders);
    const total = updatedOrders.reduce((acc, curr) => acc + curr.medicines.medicinePrice * curr.quantity, 0);
    setTotalPrice(total);
  };
  
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
              {orders.map((order) => (
                <tr key={order.cartId}>
                  <td>
                    <img src="https://via.placeholder.com/100x100" alt="Product" />
                    <span className="ml-3">{order.medicines.medicineName}</span>
                  </td>
                  <td>{order.medicines.medicinePrice}</td>
                  <td>
                    <Button 
                      variant="outline-secondary" 
                      onClick={() => handleQuantityChange(order, -1)}
                      disabled={order.quantity === 1}
                    >
                      -
                    </Button>
                    <span className="mx-2">{order.quantity}</span>
                    <Button 
                      variant="outline-secondary" 
                      onClick={() => handleQuantityChange(order, 1)}
                      disabled={order.quantity === order.medicines.medicineStock}
                    >
                      +
                    </Button>
                  </td>
                  <td>${order.medicines.medicinePrice * order.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={4}>
          <div className="d-flex flex-column align-items-center">
            <h4>All Total: ${totalPrice.toFixed(2)}</h4>
            <Button variant="primary" className="mt-3">Proceed to Pay</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
  
}

export default Cart;


// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Container, Row, Col, Table, Button } from 'react-bootstrap';

// function Cart() {
//   const [orders, setOrders] = useState([]);
//   const userId = localStorage.getItem("userId");
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     axios.get(`http://localhost:9090/cart/my-orders?userId=${userId}`)
//       .then(response => {
//         setOrders(response.data);
//         const total = response.data.reduce((acc, curr) => acc + curr.medicines.medicinePrice * curr.quantity, 0);
//         setTotalPrice(total);
//       })
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <Container className="my-5">
//       <Row>
//         <Col md={8}>
//           <h1>Cart</h1>
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>Product</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order.cartId}>
//                   <td>
//                     <img src="https://via.placeholder.com/100x100" alt="Product" />
//                     <span className="ml-3">{order.medicines.medicineName}</span>
//                   </td>
//                   <td>{order.medicines.medicinePrice}</td>
//                   <td>
//                     <Button variant="outline-secondary">-</Button>
//                     <span className="mx-2">{order.quantity}</span>
//                     <Button variant="outline-secondary">+</Button>
//                   </td>
//                   <td>${order.medicines.medicinePrice * order.quantity}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Col>
//         <Col md={4}>
//           <div className="d-flex flex-column align-items-center">
//             <h4>All Total: ${totalPrice.toFixed(2)}</h4>
//             <Button variant="primary" className="mt-3">Proceed to Pay</Button>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Cart;



// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Container, Row, Col, Table, Button } from 'react-bootstrap';

// function Cart() {
//   const [orders, setOrders] = useState([]);
//   const userId = localStorage.getItem("userId");

//   useEffect(() => {
//     axios.get(`http://localhost:9090/cart/my-orders?userId=${userId}`)
//       .then(response => {
//         setOrders(response.data)
//         console.log(orders)
//       })
//       .catch(error => console.error(error));

//   }, []);


//   return (
//     <Container className="my-5">
//       <Row>
//         <Col md={8}>
//           <h1>Cart</h1>
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>Product</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order.cartId}>
//                   <td>
//                     <img src="https://via.placeholder.com/100x100" alt="Product" />
//                     <span className="ml-3">{order.medicines.medicineName}</span>
//                   </td>
//                   <td>{order.medicines.medicinePrice}</td>
//                   <td>
//                     <Button variant="outline-secondary">-</Button>
//                     <span className="mx-2">{order.quantity}</span>
//                     <Button variant="outline-secondary">+</Button>
//                   </td>
//                   <td>${order.medicines.medicinePrice * order.quantity}</td>
//                 </tr>
//               ))}
//             </tbody>

//             {/* <tbody>
//               <tr>
//                 <td>
//                   <img src="https://via.placeholder.com/100x100" alt="Product" />
//                   <span className="ml-3">Product 1</span>
//                 </td>
//                 <td>$10.99</td>
//                 <td>
//                   <Button variant="outline-secondary">-</Button>
//                   <span className="mx-2">1</span>
//                   <Button variant="outline-secondary">+</Button>
//                 </td>
//                 <td>$10.99</td>
//               </tr>
//               <tr>
//                 <td>
//                   <img src="https://via.placeholder.com/100x100" alt="Product" />
//                   <span className="ml-3">Product 2</span>
//                 </td>
//                 <td>$15.99</td>
//                 <td>
//                   <Button variant="outline-secondary">-</Button>
//                   <span className="mx-2">2</span>
//                   <Button variant="outline-secondary">+</Button>
//                 </td>
//                 <td>$31.98</td>
//               </tr>
//               <tr>
//                 <td>
//                   <img src="https://via.placeholder.com/100x100" alt="Product" />
//                   <span className="ml-3">Product 3</span>
//                 </td>
//                 <td>$20.99</td>
//                 <td>
//                   <Button variant="outline-secondary">-</Button>
//                   <span className="mx-2">3</span>
//                   <Button variant="outline-secondary">+</Button>
//                 </td>
//                 <td>$62.97</td>
//               </tr>
//             </tbody> */}
//           </Table>
//         </Col>
//         <Col md={4}>
//           <div className="d-flex flex-column align-items-center">
//             <h4>All Total: $105.94</h4>
//             <Button variant="primary" className="mt-3">Proceed to Pay</Button>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Cart;

