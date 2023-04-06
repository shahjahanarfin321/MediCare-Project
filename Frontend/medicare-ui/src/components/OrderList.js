import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9090/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>User ID</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.orderId}>
            <td>{order.orderId}</td>
            <td>{order.userId}</td>
            <td>{order.productName}</td>
            <td>{order.quantity}</td>
            <td>{order.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default OrderList;
