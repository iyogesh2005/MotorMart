import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

import { toast } from "react-toastify";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

import "../styles/Cart.css";

const Cart = () => {

  const { cartItems, removeFromCart, addToCart, clearCart } =
    useContext(CartContext);

  const navigate = useNavigate();

  // image loader
  const getImage = (imagePath) => {
    if (!imagePath) return "";
    const imageName = imagePath.split("/").pop();
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };

  // total price
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const placeOrder = async () => {

    if (cartItems.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    try {

      const orderData = {

        orderItems: cartItems.map(item => ({
          name: item.name,
          qty: item.qty,
          price: item.price,
          description: item.description,
          category: item.category,
          seller: item.seller,
          product: item._id
        })),

        shippingAddress: {
          address: "Demo Address",
          city: "Coimbatore",
          country: "India"
        },

        totalPrice: total
      };

      await API.post("/orders", orderData);

      toast.success("🎉 Your Order Successful!");

      clearCart();

      setTimeout(() => {
        navigate("/orders");
      }, 2000);

    } catch (error) {
      console.log("ORDER ERROR:", error.response?.data || error.message);
      toast.error("Order Failed");
    }
  };

  return (

    <div className="cart-container">

      <h1 className="cart-title">
        <FaShoppingCart /> Your Cart
      </h1>

      {cartItems.length === 0 ? (

        <h2 className="empty">Cart is Empty</h2>

      ) : (

        cartItems.map(item => (

          <div key={item._id} className="cart-item">

            {/* Product Image */}
            <img
              src={getImage(item.images?.[0]?.image)}
              alt={item.name}
              className="cart-image"
            />

            {/* Product Info */}
            <div className="cart-info">

              <h3>{item.name}</h3>

              <p className="price">₹{item.price}</p>

              <p><b>Description:</b> {item.description || "-"}</p>

              <p><b>Category:</b> {item.category || "-"}</p>

              <p><b>Seller:</b> {item.seller || "-"}</p>

              {/* Quantity */}
              <input
                type="number"
                min="1"
                value={item.qty}
                className="qty"
                onChange={(e) =>
                  addToCart(item, Number(e.target.value))
                }
              />

              {/* Remove */}
              <button
                className="remove"
                onClick={() => removeFromCart(item._id)}
              >
                <FaTrash />
              </button>

            </div>

          </div>

        ))

      )}

      {/* Bottom Section */}

      <div className="cart-bottom">

        <h2>Total: ₹{total}</h2>

        <button
          className="order-btn"
          onClick={placeOrder}
        >
          Place Order
        </button>

      </div>

    </div>
  );
};

export default Cart;