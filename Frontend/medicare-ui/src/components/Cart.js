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

  const increaseQuantity = (order) => {
    axios.put(`http://localhost:9090/cart/increaseQuantity/${order.cartId}`)
      .then(response => {
        const updatedOrders = orders.map(o => {
          if (o.cartId === order.cartId) {
            return { ...o, quantity: o.quantity + 1 };
          }
          return o;
        });
        setOrders(updatedOrders);
        const total = updatedOrders.reduce((acc, curr) => acc + curr.medicines.medicinePrice * curr.quantity, 0);
        setTotalPrice(total);
      })
      .catch(error => console.error(error));
  };

  const decreaseQuantity = (order) => {
    axios.put(`http://localhost:9090/cart/decreaseQuantity/${order.cartId}`)
      .then(response => {
        const updatedOrders = orders.map(o => {
          if (o.cartId === order.cartId) {
            return { ...o, quantity: o.quantity - 1 };
          }
          return o;
        });
        setOrders(updatedOrders);
        const total = updatedOrders.reduce((acc, curr) => acc + curr.medicines.medicinePrice * curr.quantity, 0);
        setTotalPrice(total);
      })
      .catch(error => console.error(error));
  };

  const handleRemoveFromCart = (order) => {
    axios.delete(`http://localhost:9090/cart/delete-cart?cartId=${order.cartId}`)
      .then(response => {
        const updatedOrders = orders.filter(o => o.cartId !== order.cartId);
        setOrders(updatedOrders);
        const total = updatedOrders.reduce((acc, curr) => acc + curr.medicines.medicinePrice * curr.quantity, 0);
        setTotalPrice(total);
      })
      .catch(error => console.error(error));
  };

  const markCartAsOrdered = (cartId) => {
    axios.put(`http://localhost:9090/cart/${cartId}/markAsOrdered`)
      .then(response => {
        console.log(`Cart with id ${cartId} marked as ordered.`);
      })
      .catch(error => console.error(`Error marking cart with id ${cartId} as ordered: ${error}`));
  };
  
  const handleConfirmOrder = () => {
    for (const order of orders) {
      markCartAsOrdered(order.cartId);
    }
    setOrders([]);
  };


  return (
    <>
      {orders.length === 0 && <h3 className='m-4 p-7 justify-content-center'>No items in cart</h3>}
      {orders.length > 0 && (
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
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.cartId}>
                      <td>
                        {/* <img src={order.medicines.imageLink} alt="Product" /> */}
                        <span className="ml-3">{order.medicines.medicineName}</span>
                      </td>
                      <td>Rs.{order.medicines.medicinePrice}</td>
                      <td>
                        <Button
                          variant="outline-secondary"
                          onClick={() => decreaseQuantity(order)}
                          disabled={order.quantity === 1}
                        >
                          -
                        </Button>
                        <span className="mx-2">{order.quantity}</span>
                        <Button
                          variant="outline-secondary"
                          onClick={() => increaseQuantity(order)}
                          disabled={order.quantity === order.medicines.medicineStock}
                        >
                          +
                        </Button>
                      </td>
                      <td>Rs. {order.medicines.medicinePrice * order.quantity}</td>
                      <td>
                        <Button
                          variant='danger'
                          onClick={() => handleRemoveFromCart(order)}
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col md={4}>
              <div className="d-flex flex-column align-items-center">
                <h4>All Total: Rs. {totalPrice.toFixed(2)}</h4>
                <Button variant="primary" className="mt-3" onClick={handleConfirmOrder}>Confirm Your Order</Button>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );

}

export default Cart;