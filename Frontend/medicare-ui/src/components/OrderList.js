import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:9090/cart/get-my-orders?userId=${localStorage.getItem("userId")}`)
      .then(response => {
        setOrders(response.data);
        console.log(response);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center">
        <h1 className="pt3 mb-3">My Orders</h1>
      </div>
      <div className="container">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Product Name</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Price</th>
              <th className="text-center">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.orderId}>
                <td>{order.medicines.medicineName}</td>
                <td className="text-center">{order.quantity}</td>
                <td className="text-center">Rs. {order.medicines.medicinePrice}</td>
                <td className="text-center">Rs. {order.medicines.medicinePrice * order.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default OrderList;
