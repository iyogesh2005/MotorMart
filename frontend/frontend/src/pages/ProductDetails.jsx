import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import API from "../services/api";
import { CartContext } from "../context/CartContext";

import "../styles/ProductDetails.css";

const ProductDetails = () => {

  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);

  const getImage = (imagePath) => {
    if (!imagePath) return "";
    const imageName = imagePath.split("/").pop();
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };

  useEffect(() => {

    API.get(`/products/${id}`).then((res) => {

      const updatedProduct = {
        ...res.data,
        image: getImage(res.data.images?.[0]?.image)
      };

      setProduct(updatedProduct);

    });

  }, [id]);

  return (

    <div className="details-container">

      {/* PRODUCT CARD */}

      <div className="details-card">

        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-info">

          <h1>{product.name}</h1>

          <p className="desc">{product.description}</p>

          <h2 className="price">₹{product.price}</h2>

          <p className="meta"><b>⭐ Ratings:</b> {product.ratings}</p>
          <p className="meta"><b>📦 Category:</b> {product.category}</p>
          <p className="meta"><b>🏪 Seller:</b> {product.seller}</p>

          <div className="qty-box">

            <label>Quantity</label>

            <input
              type="number"
              min="1"
              max={product.stock}
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            />

          </div>

          <button
            className="add-cart-btn"
            onClick={() => addToCart(product, qty)}
          >
            Add To Cart
          </button>

        </div>

      </div>

      {/* EXTRA CONTENT */}

      <div className="extra-info">

        <section className="ride-safety">

          <h2>🏍 Ride Safety Tips</h2>

          <p>
            Safety should always be your top priority when riding a motorcycle.
            Wearing high-quality riding gear like helmets, gloves, and jackets
            can significantly reduce injuries during accidents.
          </p>

          <ul>
            <li>✔ Always wear a certified helmet</li>
            <li>✔ Use protective riding gloves</li>
            <li>✔ Wear riding jackets and knee guards</li>
            <li>✔ Maintain safe speed and distance</li>
            <li>✔ Follow traffic rules and signals</li>
          </ul>

        </section>

        <section className="delivery-info">

          <h2>🚚 Delivery & Warranty</h2>

          <p>
            MotorMart ensures fast and secure delivery across India. All
            products are quality tested before shipping.
          </p>

          <ul>
            <li>📦 Fast nationwide delivery</li>
            <li>🔒 Secure packaging</li>
            <li>↩ Easy return within 7 days</li>
            <li>🛠 Manufacturer warranty on selected products</li>
          </ul>

        </section>

      </div>

    </div>

  );

};

export default ProductDetails;