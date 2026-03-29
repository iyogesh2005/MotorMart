import { useEffect, useState } from "react";
import API from "../services/api";

const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const fetchOrders = async () => {

      try {

        const res = await API.get("/orders");

        setOrders(res.data);

      } catch (error) {
        console.log(error);
      }

    };

    fetchOrders();

  }, []);

  // image loader
  const getImage = (num) => {
    return new URL(`../assets/${num}.jpg`, import.meta.url).href;
  };

  let imgIndex = 1;

  return (

    <div style={{ padding: "40px" }}>

      <h1>My Orders</h1>

      {orders.length === 0 ? (

        <h2>No Orders Found</h2>

      ) : (

        orders.map(order => (

          <div
            key={order._id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginTop: "20px"
            }}
          >

            {order.orderItems.map((item, index) => {

              const imgSrc = getImage(imgIndex);
              imgIndex++;

              if (imgIndex > 100) imgIndex = 1;

              return (

                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    marginBottom: "20px"
                  }}
                >

                  {/* Product Image */}
                  <img
                    src={imgSrc}
                    alt={item.name}
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover"
                    }}
                  />

                  {/* Product Info */}
                  <div>

                    <h3>{item.name}</h3>

                    <p><b>Price:</b> ₹{item.price}</p>

                    {/* <p><b>Description:</b> {item.description || "-"}</p>

                    <p><b>Category:</b> {item.category || "-"}</p>

                    <p><b>Seller:</b> {item.seller || "-"}</p> */}

                    <p><b>Qty:</b> {item.qty}</p>

                  </div>

                </div>

              );

            })}

            <h3>Total: ₹{order.totalPrice}</h3>

          </div>

        ))

      )}

    </div>

  );

};

export default Orders;