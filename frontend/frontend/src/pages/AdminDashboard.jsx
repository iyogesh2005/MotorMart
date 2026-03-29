import { useEffect, useState } from "react";
import API from "../services/api";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/orders").then(res =>
      setOrders(res.data)
    );
  }, []);

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>

      {orders.map(order => (
        <div key={order._id} className="card">
          <p>User: {order.user?.name}</p>
          <p>Total: ₹{order.totalPrice}</p>
          <p>Status: {order.orderStatus}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;