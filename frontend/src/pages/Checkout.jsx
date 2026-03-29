import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import API from "../services/api";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const [address, setAddress] = useState("");

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const placeOrder = async () => {
    const { data } = await API.post("/orders", {
      orderItems: cartItems,
      shippingAddress: { address },
      totalPrice: total,
    });

    alert("Order Created!");
    console.log(data);
  };

  return (
    <div className="container">
      <h1>Checkout</h1>

      <textarea
        placeholder="Shipping Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="input"
      />

      <h2>Total: ₹{total}</h2>

      <button onClick={placeOrder} className="btn">
        Place Order
      </button>
    </div>
  );
};

export default Checkout;